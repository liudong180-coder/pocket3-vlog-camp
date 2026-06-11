const storeKey = "pocket3-camp-v2";

let state = loadState();
let currentLessonDay = state.currentDay || getNextDay();
let currentVideoMeta = null;
let currentVideoUrl = "";

const views = {
  home: document.querySelector("#homeView"),
  today: document.querySelector("#todayView"),
  adventure: document.querySelector("#adventureView"),
  calendar: document.querySelector("#calendarView"),
  lesson: document.querySelector("#lessonView"),
  basics: document.querySelector("#basicsView"),
  thinking: document.querySelector("#thinkingView"),
  faq: document.querySelector("#faqView"),
  videos: document.querySelector("#videosView"),
  generator: document.querySelector("#generatorView"),
  storyboard: document.querySelector("#storyboardView"),
  upload: document.querySelector("#uploadView"),
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
    videoReviews: [],
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
  if (name === "adventure") renderAdventure();
  if (name === "upload") renderVideoReviewArchive();
  if (name === "parentReview") renderReviewArchive();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

const ADVENTURE_CHAPTERS = [
  {
    week: 1,
    title: "第一章：找回清楚画面",
    badge: "画面控制章",
    role: "画面观察员",
    story: "训练营收到一份空白影片档案，第一周要把画面拍清楚、拍安全，让观众知道你在拍什么。"
  },
  {
    week: 2,
    title: "第二章：稳住镜头行动",
    badge: "稳定镜头章",
    role: "镜头行动员",
    story: "影片档案开始移动，第二周要控制走动、平移和人物位置，让镜头动得有理由。"
  },
  {
    week: 3,
    title: "第三章：拼出故事线索",
    badge: "故事导演章",
    role: "故事小导演",
    story: "画面已经够清楚，现在要把开头、中间、结尾连起来，让家长一看就能复述主题。"
  },
  {
    week: 4,
    title: "第四章：完成家庭成片",
    badge: "成片复盘章",
    role: "家庭成片官",
    story: "最后一周要筛选、剪短、加重点字幕和复盘，只保留安全、清楚、能表达主题的镜头。"
  }
];

function getAdventureSnapshot() {
  const completedCount = state.completed.length;
  const today = COURSES.find((course) => course.day === getNextDay()) || COURSES[COURSES.length - 1];
  const chapter = ADVENTURE_CHAPTERS.find((item) => item.week === today.week) || ADVENTURE_CHAPTERS[0];
  const role = completedCount >= 23
    ? "家庭成片官"
    : completedCount >= 15
      ? "故事小导演"
      : completedCount >= 7
        ? "镜头行动员"
        : completedCount >= 1
          ? "画面观察员"
          : "见习小导演";
  return { completedCount, today, chapter, role };
}

function renderHome() {
  const completedCount = state.completed.length;
  const today = COURSES.find((course) => course.day === getNextDay()) || COURSES[COURSES.length - 1];
  const week = WEEK_INFO[today.week];
  const adventure = getAdventureSnapshot();
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
  document.querySelector("#storyHookBadge").textContent = `第 ${adventure.today.day} 关`;
  document.querySelector("#storyHookTitle").textContent = adventure.chapter.title;
  document.querySelector("#storyHookText").textContent = `今天的剧情线索：用 ${adventure.today.title} 帮影片档案补上一条清楚、安全、能复盘的镜头。`;
}

function renderToday() {
  const today = COURSES.find((course) => course.day === getNextDay()) || COURSES[COURSES.length - 1];
  document.querySelector("#todayLessonCard").innerHTML = lessonMarkup(today, true);
}

function renderAdventure() {
  const { completedCount, today, chapter, role } = getAdventureSnapshot();
  document.querySelector("#adventureStageBadge").textContent = role;
  document.querySelector("#adventureStageTitle").textContent = chapter.title;
  document.querySelector("#adventureStageText").textContent = chapter.story;
  document.querySelector("#adventureStars").textContent = Array.from({ length: 30 }, (_, index) => (
    index < completedCount ? "■" : "□"
  )).join("");
  document.querySelector("#adventureProgressText").textContent = completedCount === COURSES.length
    ? "30 个剧情任务已经完成，可以开始重剪一版家庭成片。"
    : `已点亮 ${completedCount} / 30 个镜头格。下一关：Day ${today.day}。`;
  document.querySelector("#adventureTodayPrompt").textContent = `任务设定：你要拍一条“${today.title}”线索。先想清楚主体在哪里、画面比例是否合适、有没有隐私，再按今日课程完成拍摄。`;
  document.querySelector("#adventureTodayRules").innerHTML = [
    "只完成一个核心镜头目标，不为了好玩增加危险动作。",
    "拍完先给家长看，确认没有地点、学校、证件、车牌和未同意入镜人物。",
    "打卡后才点亮今天的镜头格；公开视频必须家长再次审核。"
  ].map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#adventureBadges").innerHTML = ADVENTURE_CHAPTERS.map((item) => {
    const weekCourses = COURSES.filter((course) => course.week === item.week);
    const done = weekCourses.filter((course) => state.completed.includes(course.day)).length;
    const status = done === weekCourses.length ? "unlocked" : done > 0 ? "active" : "locked";
    return `
      <div class="badge-tile ${status}">
        <strong>${item.badge}</strong>
        <span>${done}/${weekCourses.length}</span>
      </div>
    `;
  }).join("");
  document.querySelector("#adventureChapters").innerHTML = ADVENTURE_CHAPTERS.map((item) => {
    const weekCourses = COURSES.filter((course) => course.week === item.week);
    const done = weekCourses.filter((course) => state.completed.includes(course.day)).length;
    return `
      <article class="chapter-card ${item.week === today.week ? "current" : ""}">
        <span class="badge-chip">${item.role}</span>
        <h3>${item.title}</h3>
        <p>${item.story}</p>
        <div class="mini-progress"><span style="width: ${(done / weekCourses.length) * 100}%"></span></div>
      </article>
    `;
  }).join("");
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

function renderVideos() {
  document.querySelector("#videoList").innerHTML = TEACHING_VIDEOS.map((item, index) => `
    <article class="card video-card">
      <div class="video-index">${index + 1}</div>
      <span class="badge">${item.sourceType}</span>
      <h3>${item.title}</h3>
      <p class="video-level">${item.level}</p>
      <p><strong>观看任务：</strong>${item.watchTask}</p>
      <p><strong>看完练习：</strong>${item.practice}</p>
      <p><strong>安全提醒：</strong>${item.privacyNote}</p>
      <p class="source-line"><strong>资料来源：</strong>${item.sourceTitle}</p>
      <a class="video-link" href="${item.url}" target="_blank" rel="noreferrer">家长陪同打开官方视频</a>
    </article>
  `).join("");
}

function populateVideoDaySelect() {
  const select = document.querySelector("#videoReviewDay");
  if (!select) return;
  select.innerHTML = COURSES.map((course) => `
    <option value="${course.day}">Day ${course.day}：${course.title}</option>
  `).join("");
  select.value = String(getNextDay());
}

function handleVideoFileChange(event) {
  const file = event.target.files?.[0];
  const preview = document.querySelector("#localVideoPreview");
  if (currentVideoUrl) URL.revokeObjectURL(currentVideoUrl);
  currentVideoUrl = "";
  currentVideoMeta = null;
  if (!file) {
    preview.removeAttribute("src");
    preview.load();
    document.querySelector("#videoMeta").textContent = "还没有选择视频。";
    return;
  }
  currentVideoUrl = URL.createObjectURL(file);
  currentVideoMeta = {
    name: file.name,
    size: file.size,
    type: file.type || "未知格式",
    lastModified: new Date(file.lastModified).toLocaleString("zh-CN")
  };
  preview.src = currentVideoUrl;
  preview.load();
  document.querySelector("#videoMeta").innerHTML = videoMetaMarkup(currentVideoMeta, true);
  preview.onloadedmetadata = () => {
    currentVideoMeta = {
      ...currentVideoMeta,
      duration: preview.duration,
      width: preview.videoWidth,
      height: preview.videoHeight
    };
    document.querySelector("#videoMeta").innerHTML = videoMetaMarkup(currentVideoMeta, true);
  };
}

function videoMetaMarkup(meta, includeFileName = false) {
  if (!meta) return "还没有选择视频。";
  const resolution = meta.width && meta.height ? `${meta.width} × ${meta.height}` : "读取中";
  const duration = Number.isFinite(meta.duration) ? formatDuration(meta.duration) : "读取中";
  const longNote = Number.isFinite(meta.duration) && meta.duration > 75
    ? `<p class="risk-note">建议先评估 1 分钟以内片段，太长的视频可以先剪短再复盘。</p>`
    : "";
  return `
    <div class="meta-grid">
      ${includeFileName ? `<p><strong>当前文件：</strong>${escapeHtml(meta.name)}</p>` : ""}
      <p><strong>时长：</strong>${duration}</p>
      <p><strong>分辨率：</strong>${resolution}</p>
      <p><strong>大小：</strong>${formatFileSize(meta.size)}</p>
      <p><strong>格式：</strong>${escapeHtml(meta.type)}</p>
    </div>
    <p class="empty-note">文件名只在当前页面显示，不写入成长档案。</p>
    ${longNote}
  `;
}

function saveVideoReview(event) {
  event.preventDefault();
  if (!currentVideoMeta) {
    showToast("请先选择一个本机视频用于预览。");
    return;
  }
  const privacyChecks = Array.from(document.querySelectorAll(".video-privacy-check"));
  if (!privacyChecks.every((item) => item.checked)) {
    showToast("请先完成全部隐私检查。");
    return;
  }
  const title = document.querySelector("#videoReviewTitle").value.trim();
  if (!title) {
    showToast("请填写作品主题。");
    return;
  }
  const day = Number(document.querySelector("#videoReviewDay").value);
  const course = COURSES.find((item) => item.day === day);
  const ratings = {
    stability: document.querySelector("#videoStability").value,
    composition: document.querySelector("#videoComposition").value,
    audio: document.querySelector("#videoAudio").value,
    story: document.querySelector("#videoStory").value
  };
  const score = Object.values(ratings).reduce((sum, value) => sum + scoreForRating(value), 0);
  const review = {
    id: Date.now(),
    title,
    day,
    courseTitle: course?.title || "",
    score,
    ratings,
    suggestions: buildVideoSuggestions(ratings),
    improve: document.querySelector("#videoImprove").value.trim(),
    meta: {
      duration: currentVideoMeta.duration || null,
      width: currentVideoMeta.width || null,
      height: currentVideoMeta.height || null,
      size: currentVideoMeta.size || null,
      type: currentVideoMeta.type || "未知格式"
    },
    time: new Date().toLocaleString("zh-CN")
  };
  state.videoReviews.unshift(review);
  state.videoReviews = state.videoReviews.slice(0, 20);
  saveState();
  renderVideoReviewResult(review);
  renderVideoReviewArchive();
  showToast("评估已保存到本机浏览器。");
}

function scoreForRating(value) {
  if (value.startsWith("很好")) return 25;
  if (value.startsWith("可以")) return 18;
  return 10;
}

function buildVideoSuggestions(ratings) {
  const suggestions = [];
  if (ratings.stability.startsWith("需重拍")) suggestions.push("重拍时开头和结尾各停 2 秒，走动镜头先放慢脚步。");
  if (ratings.composition.startsWith("需重拍")) suggestions.push("把主体放到三分线附近，人物头顶留 5%-10% 空间。");
  if (ratings.audio.startsWith("需重拍")) suggestions.push("靠近说话者，先关掉电视、风扇等环境噪声再录。");
  if (ratings.story.startsWith("需重拍")) suggestions.push("先写一句话主题，再补一个结尾感受镜头。");
  if (!suggestions.length) suggestions.push("下一次只提高一个点：更清楚的开头、更稳的停顿，或更干净的背景。");
  return suggestions;
}

function renderVideoReviewResult(review) {
  document.querySelector("#videoReviewResult").innerHTML = `
    <article class="card score-card">
      <span class="badge">本地评估结果</span>
      <h3>${escapeHtml(review.title)}：${review.score}/100</h3>
      <p>这不是自动识别视频内容的 AI 评分，而是根据家长选择的稳定、构图、声音和故事四项生成的复盘建议。</p>
      <ul>${review.suggestions.map((item) => `<li>${item}</li>`).join("")}</ul>
      <p><strong>发布提醒：</strong>公开视频前必须再次由家长审核画面、声音、字幕和封面。</p>
    </article>
  `;
}

function renderVideoReviewArchive() {
  const archive = document.querySelector("#videoReviewArchive");
  if (!archive) return;
  archive.innerHTML = state.videoReviews.length
    ? state.videoReviews.map((item) => `
      <article class="card saved-item">
        <div class="card-title-row">
          <h3>${escapeHtml(item.title)}</h3>
          <span class="badge">${item.score}/100</span>
        </div>
        <p><strong>对应课程：</strong>Day ${item.day} ${escapeHtml(item.courseTitle)}</p>
        <p><strong>视频信息：</strong>${formatDuration(item.meta.duration)}，${item.meta.width && item.meta.height ? `${item.meta.width} × ${item.meta.height}` : "分辨率未记录"}，${formatFileSize(item.meta.size)}</p>
        <p><strong>改进建议：</strong>${escapeHtml(item.improve || item.suggestions.join(" "))}</p>
        <p class="empty-note">保存时间：${item.time}。未保存视频文件和原始文件名。</p>
      </article>
    `).join("")
    : "<p class=\"empty-note\">还没有保存视频评估。选择本机视频后，可以在这里生成成长档案。</p>";
}

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes)) return "未记录";
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value.toFixed(unit === 0 ? 0 : 1)} ${units[unit]}`;
}

function formatDuration(seconds) {
  if (!Number.isFinite(seconds)) return "未记录";
  const minutes = Math.floor(seconds / 60);
  const rest = Math.round(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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
      <p><strong>中文创作者/经验来源清单：</strong>${SOURCE_GROUPS.creator.map((id) => SOURCE_REGISTRY[id].title).join("；")}。</p>
      <p><strong>论坛/社区常见问题清单：</strong>${RESEARCH_SUMMARY.communityFaq.join("；")}。</p>
      <p><strong>适合孩子学习的30个训练主题：</strong>${RESEARCH_SUMMARY.themes.join("；")}。</p>
      <p>每一天课程都对应 Pocket3 操作点、拍摄任务和家长复盘问题；课程现在中文来源优先，外文创作者链接不再作为主要来源；社区信息只标注为“经验建议”，不会写成官方结论。</p>
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
  renderAdventure();
  renderCalendar();
  renderBasicsAndThinking();
  renderFaq();
  renderVideos();
  populateVideoDaySelect();
  renderSafety();
  renderSources();
  renderStoryboard();
  renderReviewArchive();
  renderVideoReviewArchive();
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
document.querySelector("#adventureStartButton").addEventListener("click", () => {
  renderLesson(getNextDay());
  showView("lesson");
});

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
document.querySelector("#videoFileInput").addEventListener("change", handleVideoFileChange);
document.querySelector("#videoReviewForm").addEventListener("submit", saveVideoReview);
document.querySelector("#saveReviewButton").addEventListener("click", saveReview);
document.querySelector("#resetProgressButton").addEventListener("click", resetProgress);

renderAll();
