const storeKey = "pocket3-camp-v2";

let state = loadState();
let currentLessonDay = state.currentDay || getNextDay();

const views = {
  home: document.querySelector("#homeView"),
  today: document.querySelector("#todayView"),
  calendar: document.querySelector("#calendarView"),
  lesson: document.querySelector("#lessonView"),
  basics: document.querySelector("#basicsView"),
  thinking: document.querySelector("#thinkingView"),
  faq: document.querySelector("#faqView"),
  generator: document.querySelector("#generatorView"),
  storyboard: document.querySelector("#storyboardView"),
  parentReview: document.querySelector("#parentReviewView"),
  safety: document.querySelector("#safetyView"),
  sources: document.querySelector("#sourcesView")
};

function loadState() {
  const fallback = {
    completed: [],
    evaluations: {},
    checkins: [],
    storyboard: {},
    reviews: [],
    generatedTasks: [],
    currentDay: 1
  };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(storeKey) || "{}") };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(storeKey, JSON.stringify(state));
}

function getNextDay() {
  const next = COURSES.find((course) => !state.completed.includes(course.day));
  return next ? next.day : 30;
}

function showView(name) {
  Object.values(views).forEach((view) => view.classList.remove("active"));
  views[name].classList.add("active");
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === name);
  });
  document.querySelector("#tabs").classList.remove("open");
  if (name === "today") renderToday();
  if (name === "parentReview") renderReviewArchive();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderHome() {
  const completedCount = state.completed.length;
  const today = COURSES.find((course) => course.day === getNextDay()) || COURSES[COURSES.length - 1];
  const week = WEEK_INFO[today.week];
  document.querySelector("#todayBadge").textContent = `Day ${today.day}`;
  document.querySelector("#todayTitle").textContent = today.title;
  document.querySelector("#todayGoal").textContent = today.goal;
  document.querySelector("#completedCount").textContent = completedCount;
  document.querySelector("#progressFill").style.width = `${(completedCount / COURSES.length) * 100}%`;
  document.querySelector("#progressText").textContent = completedCount === COURSES.length
    ? "30 天训练已完成，可以继续复盘和重拍。"
    : `下一步：第 ${today.day} 天。`;
  document.querySelector("#weekGoal").textContent = `${week.title}：${week.goal}`;
  document.querySelector("#weekBadges").innerHTML = Object.values(WEEK_INFO)
    .map((item) => `<span class="badge-chip">${item.badge}</span>`)
    .join("");
}

function renderToday() {
  const today = COURSES.find((course) => course.day === getNextDay()) || COURSES[COURSES.length - 1];
  document.querySelector("#todayLessonCard").innerHTML = lessonMarkup(today, true);
}

function renderCalendar() {
  document.querySelector("#calendarGrid").innerHTML = COURSES.map((course) => {
    const done = state.completed.includes(course.day);
    return `
      <button class="day-card ${done ? "done" : ""}" type="button" data-day="${course.day}">
        <span class="day-number">Day ${course.day}<strong>${done ? "已打卡" : WEEK_INFO[course.week].title}</strong></span>
        <h3>${course.title}</h3>
        <p>${course.goal}</p>
      </button>
    `;
  }).join("");
}

function lessonMarkup(course, compact = false) {
  const evaluation = state.evaluations[course.day] || {};
  const done = state.completed.includes(course.day);
  const checks = course.parentQuestions.map((question) => `
    <label class="check-row"><input type="checkbox" class="lesson-check" />${question}</label>
  `).join("");
  return `
    <article class="lesson-shell">
      <div class="lesson-meta">
        <span class="badge">Day ${course.day}</span>
        <span class="badge-chip">${WEEK_INFO[course.week].goal}</span>
        <span class="badge-chip">${done ? "已打卡" : "10-20 分钟"}</span>
      </div>
      <h2>${course.title}</h2>
      <p class="lead">${course.goal}</p>
      <div class="lesson-grid">
        <div class="lesson-block">
          ${infoBlock("今日目标", course.goal)}
          ${infoBlock("Pocket3操作步骤", course.operation)}
          ${course.parameters ? infoBlock("参数调整", course.parameters) : ""}
          ${course.sceneChoice ? infoBlock("场景选择", course.sceneChoice) : ""}
          ${course.composition ? infoBlock("构图要求", course.composition) : ""}
          ${course.portrait ? infoBlock("人像位置比例", course.portrait) : ""}
          ${infoBlock("为什么这样拍", course.why)}
          ${infoBlock("今日拍摄任务", course.task)}
          ${listBlock("示例分镜", course.storyboard)}
          ${listBlock("常见错误", course.mistakes)}
          ${sourceBlock(course.sources)}
        </div>
        <div class="lesson-block accent">
          <h3>参数与建议怎么区分</h3>
          <p><strong>官方确认：</strong>${course.settings.official}</p>
          <p><strong>创作者经验：</strong>${course.settings.creator}</p>
          <p><strong>孩子实拍测试：</strong>${course.settings.test}</p>
          <h3>家长复盘问题</h3>
          ${checks}
          <h3>家长评价</h3>
          <div class="rating-grid">
            ${ratingField("完成度", "completion", evaluation.completion)}
            ${ratingField("画面稳定", "stability", evaluation.stability)}
            ${ratingField("声音清楚", "audio", evaluation.audio)}
            ${ratingField("故事完整", "story", evaluation.story)}
          </div>
          <label>改进建议
            <textarea class="parent-suggestion" rows="4" placeholder="例如：下次开头停稳 2 秒再说话。">${evaluation.suggestion || ""}</textarea>
          </label>
          <label class="check-row"><input class="privacy-confirm" type="checkbox" />我已和家长确认：没有公开发布，没有上传视频，没有暴露地点、学校、证件、车牌等隐私。</label>
          <button class="primary-button checkin-button" data-checkin="${course.day}" type="button">${done ? "更新打卡" : "完成今日打卡"}</button>
          ${compact ? `<button class="ghost-button lesson-open-button" data-open-lesson="${course.day}" type="button">查看完整课程页</button>` : ""}
        </div>
      </div>
    </article>
  `;
}

function renderLesson(day) {
  const course = COURSES.find((item) => item.day === Number(day));
  currentLessonDay = course.day;
  state.currentDay = course.day;
  saveState();
  document.querySelector("#lessonShell").outerHTML = `<article id="lessonShell" class="lesson-shell-wrap">${lessonMarkup(course)}</article>`;
}

function infoBlock(title, text) {
  return `<h3>${title}</h3><p>${text}</p>`;
}

function listBlock(title, items) {
  return `<h3>${title}</h3><ol>${items.map((item) => `<li>${item}</li>`).join("")}</ol>`;
}

function sourceBlock(sourceIds) {
  return `
    <h3>资料来源</h3>
    <ul class="source-mini">
      ${sourceIds.map((id) => {
        const source = SOURCE_REGISTRY[id];
        return `<li><span>${source.type}</span><a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a></li>`;
      }).join("")}
    </ul>
  `;
}

function ratingField(label, name, value = "继续练习") {
  return `
    <label>${label}
      <select class="rating-input" data-name="${name}">
        ${["很棒", "完成", "继续练习"].map((option) => `<option ${option === value ? "selected" : ""}>${option}</option>`).join("")}
      </select>
    </label>
  `;
}

function saveLessonEvaluation(day, button) {
  const root = button.closest(".lesson-shell");
  const privacyConfirm = root.querySelector(".privacy-confirm");
  if (!privacyConfirm || !privacyConfirm.checked) {
    showToast("请先完成安全与隐私确认。");
    return;
  }
  const evaluation = {};
  root.querySelectorAll(".rating-input").forEach((input) => {
    evaluation[input.dataset.name] = input.value;
  });
  evaluation.suggestion = root.querySelector(".parent-suggestion")?.value.trim() || "";
  evaluation.updatedAt = new Date().toLocaleString("zh-CN");
  state.evaluations[day] = evaluation;
  if (!state.completed.includes(day)) state.completed.push(day);
  state.completed.sort((a, b) => a - b);
  const course = COURSES.find((item) => item.day === Number(day));
  state.checkins = state.checkins.filter((item) => item.day !== Number(day));
  state.checkins.unshift({ day: Number(day), title: course.title, time: evaluation.updatedAt });
  state.currentDay = getNextDay();
  saveState();
  renderAll();
  if (views.lesson.classList.contains("active")) renderLesson(day);
  if (views.today.classList.contains("active")) renderToday();
  showToast("已保存打卡和家长评价。");
}

function renderBasicsAndThinking() {
  document.querySelector("#basicsList").innerHTML = COURSES.filter((course) => course.week <= 2).map(topicCard).join("");
  document.querySelector("#thinkingList").innerHTML = COURSES.filter((course) => course.week >= 3).map(topicCard).join("");
}

function topicCard(course) {
  return `
    <article class="card topic-card">
      <span class="badge">Day ${course.day}</span>
      <h3>${course.title}</h3>
      <p><strong>操作点：</strong>${course.operation}</p>
      <p><strong>拍摄任务：</strong>${course.task}</p>
      <button class="secondary-button" data-open-lesson="${course.day}" type="button">学习这一天</button>
    </article>
  `;
}

function renderFaq() {
  document.querySelector("#faqList").innerHTML = FAQ_ITEMS.map((item) => `
    <article class="card faq-card">
      <span class="badge">${item.label}</span>
      <h3>${item.question}</h3>
      <p>${item.answer}</p>
      ${sourceBlock(item.sources)}
    </article>
  `).join("");
}

function renderSafety() {
  document.querySelector("#safetyList").innerHTML = SAFETY_ITEMS.map(([title, body], index) => `
    <article class="card safety-card">
      <span>${index + 1}</span>
      <h3>${title}</h3>
      <p>${body}</p>
    </article>
  `).join("");
}

function renderSources() {
  document.querySelector("#researchSummary").innerHTML = `
    <article class="card">
      <h3>资料整理结果</h3>
      <p><strong>官方资料清单：</strong>${SOURCE_GROUPS.official.map((id) => SOURCE_REGISTRY[id].title).join("；")}。</p>
      <p><strong>论坛/社区常见问题清单：</strong>${RESEARCH_SUMMARY.communityFaq.join("；")}。</p>
      <p><strong>适合孩子学习的30个训练主题：</strong>${RESEARCH_SUMMARY.themes.join("；")}。</p>
      <p>每一天课程都对应 Pocket3 操作点、拍摄任务和家长复盘问题；社区信息只标注为“经验建议”，不会写成官方结论。</p>
    </article>
  `;
  document.querySelector("#sourcesList").innerHTML = Object.entries(SOURCE_REGISTRY).map(([id, source]) => `
    <article class="card source-card">
      <span class="badge">${source.type}</span>
      <h3>${source.title}</h3>
      <p>${source.note}</p>
      <a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a>
    </article>
  `).join("");
}

function renderStoryboard() {
  const rows = ["开头", "环境", "细节", "动作", "结尾"];
  const saved = state.storyboard.rows || [];
  document.querySelector("#storyTitle").value = state.storyboard.title || "";
  document.querySelector("#storyboardTable").innerHTML = rows.map((name, index) => {
    const row = saved[index] || {};
    return `
      <div class="story-row">
        <strong>${index + 1}. ${name}</strong>
        <label>画面<input data-story="${index}" data-field="shot" value="${row.shot || ""}" placeholder="拍什么？" /></label>
        <label>声音<input data-story="${index}" data-field="audio" value="${row.audio || ""}" placeholder="说什么或听什么？" /></label>
        <label>时长<input data-story="${index}" data-field="time" value="${row.time || ""}" placeholder="例如 8 秒" /></label>
      </div>
    `;
  }).join("");
}

function saveStoryboard() {
  const rows = Array.from({ length: 5 }, (_, index) => {
    const row = {};
    document.querySelectorAll(`[data-story="${index}"]`).forEach((input) => {
      row[input.dataset.field] = input.value.trim();
    });
    return row;
  });
  state.storyboard = {
    title: document.querySelector("#storyTitle").value.trim(),
    rows,
    updatedAt: new Date().toLocaleString("zh-CN")
  };
  saveState();
  showToast("分镜已保存在本机浏览器。");
}

function generateTask(event) {
  event.preventDefault();
  const place = document.querySelector("#placeSelect").value;
  const skill = document.querySelector("#skillSelect").value;
  const subjects = ["一本书", "一个小作品", "一件学习用品", "一次家庭小帮忙", "一个整洁角落", "一个安全的小动作"];
  const shots = ["全景开头 + 近景细节 + 感受结尾", "正面 + 侧面 + 手部动作", "稳定 10 秒 + 慢慢推近 + 一句旁白", "环境声 5 秒 + 主体镜头 + 家长一句反馈"];
  const task = {
    place,
    skill,
    subject: pick(subjects),
    shot: pick(shots),
    time: new Date().toLocaleString("zh-CN")
  };
  state.generatedTasks.unshift(task);
  state.generatedTasks = state.generatedTasks.slice(0, 8);
  saveState();
  document.querySelector("#taskResult").innerHTML = `
    <h3>${place}里的${skill}任务</h3>
    <p><strong>主题：</strong>拍 ${task.subject}。</p>
    <p><strong>镜头：</strong>${task.shot}。</p>
    <p><strong>安全：</strong>只在家长确认的安全区域拍摄；不拍门牌、学校、证件、车牌和陌生人正脸；不上传视频。</p>
  `;
  showToast("任务卡已生成。");
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function saveReview() {
  const review = {
    topic: document.querySelector("#reviewTopic").value.trim(),
    favorite: document.querySelector("#reviewFavorite").value.trim(),
    strength: document.querySelector("#reviewStrength").value.trim(),
    improve: document.querySelector("#reviewImprove").value.trim(),
    publish: document.querySelector("#reviewPublish").value,
    time: new Date().toLocaleString("zh-CN")
  };
  if (!review.topic) {
    showToast("请先填写作品主题。");
    return;
  }
  state.reviews.unshift(review);
  state.reviews = state.reviews.slice(0, 12);
  saveState();
  document.querySelector("#reviewForm").reset();
  renderReviewArchive();
  showToast("复盘已保存。");
}

function renderReviewArchive() {
  document.querySelector("#reviewArchive").innerHTML = state.reviews.length
    ? state.reviews.map((item) => `
      <article class="card saved-item">
        <h3>${item.topic}</h3>
        <p><strong>满意镜头：</strong>${item.favorite || "未填写"}</p>
        <p><strong>家长看到的优点：</strong>${item.strength || "未填写"}</p>
        <p><strong>下次改进：</strong>${item.improve || "未填写"}</p>
        <p><strong>发布判断：</strong>${item.publish}</p>
      </article>
    `).join("")
    : "<p class=\"empty-note\">还没有保存复盘。</p>";
}

function resetProgress() {
  const ok = window.confirm("确定清空本机浏览器里的学习进度、评价、分镜和复盘吗？");
  if (!ok) return;
  localStorage.removeItem(storeKey);
  state = loadState();
  currentLessonDay = 1;
  renderAll();
  showView("home");
  showToast("本机记录已清空。");
}

function renderAll() {
  renderHome();
  renderToday();
  renderCalendar();
  renderBasicsAndThinking();
  renderFaq();
  renderSafety();
  renderSources();
  renderStoryboard();
  renderReviewArchive();
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => showView(tab.dataset.view));
});

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.jump));
});

document.querySelector("#menuButton").addEventListener("click", () => {
  document.querySelector("#tabs").classList.toggle("open");
});

document.querySelector("#continueButton").addEventListener("click", () => {
  renderLesson(getNextDay());
  showView("lesson");
});

document.querySelector("#openTodayButton").addEventListener("click", () => showView("today"));

document.querySelector("#calendarGrid").addEventListener("click", (event) => {
  const card = event.target.closest("[data-day]");
  if (!card) return;
  renderLesson(card.dataset.day);
  showView("lesson");
});

document.body.addEventListener("click", (event) => {
  const lessonButton = event.target.closest("[data-open-lesson]");
  if (lessonButton) {
    renderLesson(lessonButton.dataset.openLesson);
    showView("lesson");
  }
  const checkinButton = event.target.closest("[data-checkin]");
  if (checkinButton) {
    saveLessonEvaluation(Number(checkinButton.dataset.checkin), checkinButton);
  }
});

document.querySelector("#backToCalendarButton").addEventListener("click", () => showView("calendar"));
document.querySelector("#generatorForm").addEventListener("submit", generateTask);
document.querySelector("#saveStoryboardButton").addEventListener("click", saveStoryboard);
document.querySelector("#saveReviewButton").addEventListener("click", saveReview);
document.querySelector("#resetProgressButton").addEventListener("click", resetProgress);

renderAll();
