/**
 * exam.js — 自适应考试引擎
 * 逻辑：根据历史弱项模块加权出题，动态调整难度
 */

const EXAM_CONFIG = {
  totalQuestions: 20,
  timeLimit: 30 * 60, // 30分钟（秒）
  passingScore: 60,
  difficultyWeights: { 1: 0.3, 2: 0.5, 3: 0.2 }, // 默认难度分布
};

let examState = {
  questions: [],
  current: 0,
  answers: {},      // { questionId: selectedIndex or [selectedIndexes] }
  startTime: null,
  timer: null,
  mode: 'full',     // 'full' | 'module' | 'weak'
  targetModuleId: null,
};

// ── 出题策略 ─────────────────────────────────────────────
function buildAdaptiveQuestionSet(mode, targetModuleId) {
  const p = loadProgress();
  const allQ = EXAM_QUESTIONS;
  let pool = [...allQ];

  // 确定出题模块权重
  let moduleWeights = {};
  getAllModules().forEach(m => { moduleWeights[m.id] = 1; });
  moduleWeights[0] = 2; // 综合题固定权重

  if (mode === 'module' && targetModuleId) {
    // 单模块专项练习：该模块所有题 + 少量综合题
    pool = allQ.filter(q => q.moduleId === targetModuleId || q.moduleId === 0);
  } else if (mode === 'weak') {
    // 弱项强化：弱项模块权重×3
    if (p.weakModules.length) {
      p.weakModules.forEach(mid => { moduleWeights[mid] = 3; });
      // 弱项模块题优先入池
      const weakQ = allQ.filter(q => p.weakModules.includes(q.moduleId));
      const otherQ = allQ.filter(q => !p.weakModules.includes(q.moduleId));
      pool = [...weakQ, ...weakQ, ...otherQ]; // 弱项题3x权重
    }
  } else {
    // 全量模式：按弱项调整权重
    if (p.weakModules.length) {
      const weakQ = allQ.filter(q => p.weakModules.includes(q.moduleId));
      pool = [...allQ, ...weakQ]; // 弱项题2x
    }
  }

  // 按难度配比采样
  const targets = {
    1: Math.round(EXAM_CONFIG.totalQuestions * EXAM_CONFIG.difficultyWeights[1]),
    2: Math.round(EXAM_CONFIG.totalQuestions * EXAM_CONFIG.difficultyWeights[2]),
    3: EXAM_CONFIG.totalQuestions - Math.round(EXAM_CONFIG.totalQuestions * EXAM_CONFIG.difficultyWeights[1]) - Math.round(EXAM_CONFIG.totalQuestions * EXAM_CONFIG.difficultyWeights[2]),
  };

  let selected = [];
  [1, 2, 3].forEach(diff => {
    const candidates = pool.filter(q => q.difficulty === diff);
    const shuffled = candidates.sort(() => Math.random() - 0.5);
    selected = selected.concat(shuffled.slice(0, targets[diff]));
  });

  // 如果某难度题目不足，用其他难度补充
  if (selected.length < EXAM_CONFIG.totalQuestions) {
    const needed = EXAM_CONFIG.totalQuestions - selected.length;
    const usedIds = new Set(selected.map(q => q.id));
    const extra = pool.filter(q => !usedIds.has(q.id)).sort(() => Math.random() - 0.5).slice(0, needed);
    selected = selected.concat(extra);
  }

  // 最终打乱顺序
  return selected.sort(() => Math.random() - 0.5).slice(0, EXAM_CONFIG.totalQuestions);
}

// ── 渲染题目 ──────────────────────────────────────────────
function renderQuestion(idx) {
  const q = examState.questions[idx];
  if (!q) return;

  const container = document.getElementById('question-area');
  if (!container) return;

  const userAns = examState.answers[q.id];
  const total = examState.questions.length;
  const moduleInfo = getAllModules().find(m => m.id === q.moduleId);
  const moduleName = moduleInfo ? moduleInfo.title : '综合';
  const diffStars = '★'.repeat(q.difficulty) + '☆'.repeat(3 - q.difficulty);

  const optionHtml = q.options.map((opt, i) => {
    let cls = 'option-btn';
    if (q.type === 'multi') {
      cls += Array.isArray(userAns) && userAns.includes(i) ? ' selected' : '';
    } else {
      cls += userAns === i ? ' selected' : '';
    }
    return `<button class="${cls}" data-idx="${i}" onclick="selectOption(${idx}, ${i})">${String.fromCharCode(65+i)}. ${opt}</button>`;
  }).join('');

  container.innerHTML = `
    <div class="q-meta">
      <span class="q-num">第 ${idx+1} / ${total} 题</span>
      <span class="q-module" style="background:${moduleInfo?.color||'#555'}">${moduleInfo?.icon||'📋'} ${moduleName}</span>
      <span class="q-diff">${diffStars}</span>
      <span class="q-type">${q.type === 'multi' ? '多选' : q.type === 'judge' ? '判断' : '单选'}</span>
    </div>
    <div class="question-text">${q.question}</div>
    ${q.type === 'multi' ? '<p class="multi-hint">（多选题，请选择所有正确答案）</p>' : ''}
    <div class="options-list">${optionHtml}</div>
    <div class="q-nav">
      <button class="btn-secondary" onclick="prevQuestion()" ${idx===0?'disabled':''}>← 上一题</button>
      <div class="q-dots">${examState.questions.map((_,i) => `<span class="dot ${examState.answers[examState.questions[i].id]!==undefined?'answered':''} ${i===idx?'current':''}"></span>`).join('')}</div>
      ${idx < total-1
        ? `<button class="btn-primary" onclick="nextQuestion()">下一题 →</button>`
        : `<button class="btn-accent" onclick="submitExam()">提交答卷</button>`}
    </div>`;
}

function selectOption(qIdx, optIdx) {
  const q = examState.questions[qIdx];
  if (!q) return;

  if (q.type === 'multi') {
    let curr = examState.answers[q.id] || [];
    if (!Array.isArray(curr)) curr = [];
    if (curr.includes(optIdx)) {
      curr = curr.filter(i => i !== optIdx);
    } else {
      curr = [...curr, optIdx].sort();
    }
    examState.answers[q.id] = curr.length ? curr : undefined;
  } else {
    examState.answers[q.id] = optIdx;
  }
  renderQuestion(qIdx);
}

function nextQuestion() {
  if (examState.current < examState.questions.length - 1) {
    examState.current++;
    renderQuestion(examState.current);
    window.scrollTo(0, 0);
  }
}

function prevQuestion() {
  if (examState.current > 0) {
    examState.current--;
    renderQuestion(examState.current);
    window.scrollTo(0, 0);
  }
}

// ── 计分 ──────────────────────────────────────────────────
function isCorrect(q, answer) {
  if (answer === undefined || answer === null) return false;
  if (q.type === 'multi') {
    const correct = Array.isArray(q.answer) ? [...q.answer].sort() : [q.answer];
    const given = Array.isArray(answer) ? [...answer].sort() : [answer];
    return JSON.stringify(correct) === JSON.stringify(given);
  }
  return answer === q.answer;
}

function calculateScore() {
  let correct = 0;
  const moduleBreakdown = {};
  getAllModules().forEach(m => { moduleBreakdown[m.id] = { correct: 0, total: 0 }; });
  moduleBreakdown[0] = { correct: 0, total: 0 };

  examState.questions.forEach(q => {
    const ans = examState.answers[q.id];
    const right = isCorrect(q, ans);
    if (right) correct++;
    const mid = q.moduleId;
    if (!moduleBreakdown[mid]) moduleBreakdown[mid] = { correct: 0, total: 0 };
    moduleBreakdown[mid].total++;
    if (right) moduleBreakdown[mid].correct++;
  });

  return { correct, total: examState.questions.length, moduleBreakdown };
}

// ── 提交 & 结果 ───────────────────────────────────────────
function submitExam() {
  const unanswered = examState.questions.filter(q => examState.answers[q.id] === undefined).length;
  if (unanswered > 0) {
    if (!confirm(`还有 ${unanswered} 题未作答，确定提交？`)) return;
  }

  clearInterval(examState.timer);
  const { correct, total, moduleBreakdown } = calculateScore();
  recordExamScore(correct, total, moduleBreakdown);
  renderResults(correct, total, moduleBreakdown);
}

function renderResults(correct, total, moduleBreakdown) {
  const pct = Math.round(correct / total * 100);
  const pass = pct >= EXAM_CONFIG.passingScore;
  const container = document.getElementById('exam-container');
  if (!container) return;

  const moduleRows = getAllModules().map(m => {
    const bd = moduleBreakdown[m.id] || { correct: 0, total: 0 };
    if (bd.total === 0) return '';
    const mpct = Math.round(bd.correct / bd.total * 100);
    const cls = mpct >= 80 ? 'good' : mpct >= 60 ? 'ok' : 'bad';
    return `<tr>
      <td>${m.icon} ${m.title}</td>
      <td>${bd.correct}/${bd.total}</td>
      <td><span class="pct-badge ${cls}">${mpct}%</span></td>
    </tr>`;
  }).filter(Boolean).join('');

  // Review wrong answers
  const wrongQ = examState.questions.filter(q => !isCorrect(q, examState.answers[q.id]));
  const reviewHtml = wrongQ.slice(0, 10).map(q => {
    const userAns = examState.answers[q.id];
    const correctAns = Array.isArray(q.answer)
      ? q.answer.map(i => String.fromCharCode(65+i)).join(', ')
      : String.fromCharCode(65 + q.answer);
    const userAnsStr = userAns === undefined ? '未作答'
      : Array.isArray(userAns) ? userAns.map(i => String.fromCharCode(65+i)).join(', ')
      : String.fromCharCode(65 + userAns);
    return `
    <div class="review-item">
      <p class="review-q">${q.question}</p>
      <p class="review-your">你的答案：<span class="bad">${userAnsStr}</span></p>
      <p class="review-correct">正确答案：<span class="good">${correctAns}</span></p>
      <p class="review-exp">${q.explanation}</p>
    </div>`;
  }).join('');

  container.innerHTML = `
    <div class="result-card">
      <div class="result-score ${pass ? 'pass' : 'fail'}">
        <div class="score-circle">
          <span class="score-big">${pct}%</span>
          <span class="score-label">${pass ? '通过 ✓' : '未通过'}</span>
        </div>
        <p>${correct} / ${total} 题正确</p>
      </div>

      <div class="result-breakdown">
        <h3>各模块得分</h3>
        <table class="data-table">
          <thead><tr><th>模块</th><th>得分</th><th>正确率</th></tr></thead>
          <tbody>${moduleRows}</tbody>
        </table>
      </div>

      ${wrongQ.length ? `
      <div class="result-review">
        <h3>错题解析（前10题）</h3>
        ${reviewHtml}
      </div>` : '<div class="result-perfect"><p>🎉 全部答对！</p></div>'}

      <div class="result-actions">
        <button class="btn-primary" onclick="startExam('full')">再次测试</button>
        <button class="btn-secondary" onclick="startExam('weak')">弱项强化</button>
        <a href="index.html" class="btn-outline">返回首页</a>
      </div>
    </div>`;
}

// ── 计时器 ────────────────────────────────────────────────
function startTimer() {
  let remaining = EXAM_CONFIG.timeLimit;
  const el = document.getElementById('timer');
  examState.timer = setInterval(() => {
    remaining--;
    if (el) {
      const m = Math.floor(remaining / 60).toString().padStart(2, '0');
      const s = (remaining % 60).toString().padStart(2, '0');
      el.textContent = `${m}:${s}`;
      if (remaining <= 300) el.classList.add('warn');
      if (remaining <= 60) el.classList.add('danger');
    }
    if (remaining <= 0) {
      clearInterval(examState.timer);
      submitExam();
    }
  }, 1000);
}

// ── 启动考试 ──────────────────────────────────────────────
function startExam(mode = 'full', targetModuleId = null) {
  clearInterval(examState.timer);
  examState = {
    questions: buildAdaptiveQuestionSet(mode, targetModuleId),
    current: 0,
    answers: {},
    startTime: Date.now(),
    timer: null,
    mode,
    targetModuleId,
  };

  const container = document.getElementById('exam-container');
  if (!container) return;

  // Show exam UI
  container.innerHTML = `
    <div class="exam-header">
      <div class="exam-info">
        <span>${mode === 'weak' ? '🎯 弱项强化' : mode === 'module' ? '📚 专项练习' : '📝 综合测试'}</span>
        <span>${EXAM_CONFIG.totalQuestions} 题 | ${EXAM_CONFIG.timeLimit/60} 分钟</span>
      </div>
      <div class="exam-timer" id="timer">30:00</div>
    </div>
    <div id="question-area"></div>`;

  startTimer();
  renderQuestion(0);
}

// ── 页面初始化 ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode') || 'full';
  const moduleId = params.get('module') ? parseInt(params.get('module')) : null;

  // 渲染模式选择页（如果没有立即开始）
  const selector = document.getElementById('exam-selector');
  if (selector) {
    const p = loadProgress();
    const hasWeak = p.weakModules.length > 0;
    selector.innerHTML = `
      <div class="exam-modes">
        <div class="mode-card" onclick="startExam('full')">
          <div class="mode-icon">📝</div>
          <h3>综合测试</h3>
          <p>20题覆盖全部模块，自适应调整弱项比例</p>
          <button class="btn-primary">开始测试</button>
        </div>
        ${hasWeak ? `
        <div class="mode-card highlight" onclick="startExam('weak')">
          <div class="mode-icon">🎯</div>
          <h3>弱项强化</h3>
          <p>针对你的弱项模块（${p.weakModules.map(id => {const m=getModule(id);return m?m.icon:'';}).join(' ')}）加强练习</p>
          <button class="btn-accent">弱项强化</button>
        </div>` : ''}
        <div class="mode-card">
          <div class="mode-icon">📚</div>
          <h3>专项练习</h3>
          <p>选择单一模块进行深度练习</p>
          <select id="module-select" onchange="">
            <option value="">选择模块…</option>
            ${getAllModules().map(m => `<option value="${m.id}">${m.icon} 模块${m.id}：${m.title}</option>`).join('')}
          </select>
          <button class="btn-secondary" onclick="const mid=parseInt(document.getElementById('module-select').value);if(mid)startExam('module',mid);">开始练习</button>
        </div>
      </div>
      ${p.examScores.length ? `
      <div class="history-scores">
        <h3>历史成绩</h3>
        ${p.examScores.slice(0,5).map(s=>`
          <div class="score-row">
            <span>${new Date(s.date).toLocaleDateString('zh-CN')}</span>
            <span class="score-val ${s.pct>=80?'good':s.pct>=60?'ok':'bad'}">${s.score}/${s.total} · ${s.pct}%</span>
          </div>`).join('')}
      </div>` : ''}`;
  }
});
