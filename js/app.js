/**
 * app.js — 全局应用逻辑：导航、进度追踪、localStorage
 */

// ── 常量 ─────────────────────────────────────────────────
const STORAGE_KEY = 'ecomm_progress';
const VERSION = '1.0';

// ── 进度数据结构 ─────────────────────────────────────────
function defaultProgress() {
  return {
    version: VERSION,
    modulesRead: {},      // { moduleId: true }
    sectionsRead: {},     // { "moduleId-sectionIdx": true }
    examScores: [],       // [{ date, score, total, moduleBreakdown:{} }]
    weakModules: [],      // moduleIds where score < 60%
    strongModules: [],    // moduleIds where score >= 80%
    lastActivity: null
  };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const p = JSON.parse(raw);
    return p.version === VERSION ? p : defaultProgress();
  } catch { return defaultProgress(); }
}

function saveProgress(p) {
  p.lastActivity = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

function markSectionRead(moduleId, sectionIdx) {
  const p = loadProgress();
  p.sectionsRead[`${moduleId}-${sectionIdx}`] = true;
  // If all sections of module read, mark module complete
  const mod = getModule(moduleId);
  if (mod) {
    const allRead = mod.sections.every((_, i) => p.sectionsRead[`${moduleId}-${i}`]);
    if (allRead) p.modulesRead[moduleId] = true;
  }
  saveProgress(p);
  updateProgressUI();
}

function getModuleProgress(moduleId) {
  const p = loadProgress();
  const mod = getModule(moduleId);
  if (!mod) return 0;
  const total = mod.sections.length;
  const done = mod.sections.filter((_, i) => p.sectionsRead[`${moduleId}-${i}`]).length;
  return Math.round((done / total) * 100);
}

function getTotalProgress() {
  const p = loadProgress();
  const total = getAllModules().reduce((s, m) => s + m.sections.length, 0);
  const done = Object.keys(p.sectionsRead).length;
  return Math.round((done / total) * 100);
}

function recordExamScore(score, total, moduleBreakdown) {
  const p = loadProgress();
  const entry = { date: new Date().toISOString(), score, total, pct: Math.round(score/total*100), moduleBreakdown };
  p.examScores.unshift(entry);
  if (p.examScores.length > 20) p.examScores = p.examScores.slice(0, 20);

  // Update weak/strong modules
  p.weakModules = [];
  p.strongModules = [];
  Object.entries(moduleBreakdown).forEach(([mid, bd]) => {
    const pct = bd.total > 0 ? bd.correct / bd.total * 100 : 50;
    const id = parseInt(mid);
    if (pct < 60) p.weakModules.push(id);
    else if (pct >= 80) p.strongModules.push(id);
  });
  saveProgress(p);
}

// ── UI 工具 ──────────────────────────────────────────────
function updateProgressUI() {
  const pct = getTotalProgress();
  const els = document.querySelectorAll('.global-progress-bar');
  els.forEach(el => { el.style.width = pct + '%'; });
  const nums = document.querySelectorAll('.global-progress-num');
  nums.forEach(el => { el.textContent = pct + '%'; });
}

// 渲染模块卡片（用于首页）
function renderModuleCards(container) {
  if (!container) return;
  const progress = loadProgress();
  const modules = getAllModules();
  container.innerHTML = modules.map(m => {
    const pct = getModuleProgress(m.id);
    const done = progress.modulesRead[m.id];
    const isWeak = progress.weakModules.includes(m.id);
    return `
    <a href="course.html?module=${m.id}" class="module-card ${done ? 'done' : ''} ${isWeak ? 'weak' : ''}">
      <div class="mc-header" style="background:${m.color}">
        <span class="mc-icon">${m.icon}</span>
        <span class="mc-num">模块 ${m.id}</span>
        ${isWeak ? '<span class="badge-weak">需加强</span>' : ''}
        ${done ? '<span class="badge-done">✓</span>' : ''}
      </div>
      <div class="mc-body">
        <h3>${m.title}</h3>
        <p>${m.summary.slice(0, 60)}…</p>
        <div class="mc-meta">
          <span>⏱ ${m.estimatedMinutes}分钟</span>
          <span>${m.sections.length}节</span>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width:${pct}%;background:${m.color}"></div>
        </div>
        <span class="progress-label">${pct}%</span>
      </div>
    </a>`;
  }).join('');
}

// 渲染最近考试成绩（用于首页）
function renderRecentScores(container) {
  if (!container) return;
  const p = loadProgress();
  if (!p.examScores.length) {
    container.innerHTML = '<p class="text-muted">尚未参加考试</p>';
    return;
  }
  container.innerHTML = p.examScores.slice(0, 5).map(s => `
    <div class="score-row">
      <span class="score-date">${new Date(s.date).toLocaleDateString('zh-CN')}</span>
      <span class="score-val ${s.pct>=80?'good':s.pct>=60?'ok':'bad'}">${s.score}/${s.total} (${s.pct}%)</span>
    </div>`).join('');
}

// ── 初始化 ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateProgressUI();

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.includes(path.replace('.html', ''))) a.classList.add('active');
  });
});
