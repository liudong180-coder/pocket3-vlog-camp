const SOURCE_REGISTRY = {
  djiProduct: {
    type: "官方资料",
    title: "DJI 大疆 Osmo Pocket 3 中文产品页",
    url: "https://www.dji.com/cn/osmo-pocket-3",
    note: "用于确认 1 英寸传感器、三轴机械云台、2 英寸旋转屏、ActiveTrack 6.0、快速对焦、D-Log M 等核心能力。"
  },
  djiDownloads: {
    type: "官方资料",
    title: "DJI 大疆 Osmo Pocket 3 相关下载",
    url: "https://www.dji.com/cn/osmo-pocket-3/downloads",
    note: "用于确认用户手册、固件和软件资料入口。"
  },
  djiManual: {
    type: "官方资料",
    title: "DJI Osmo Pocket 3 用户手册（简体中文 PDF）",
    url: "https://dl.djicdn.com/downloads/DJI_Osmo_Pocket_3/UM/20231025/DJI_Osmo_Pocket_3_User_Manual_v1.0_chs.pdf",
    note: "用于确认电源、按键、触控屏、云台模式、跟随、自拍、拍摄模式、存储与电池等基础操作。"
  },
  djiBeginner: {
    type: "官方资料",
    title: "DJI Osmo Pocket 3 新手快速攻略",
    url: "https://support.dji.com/help/content?customId=zh-cn03400009024&documentType=artical&lang=zh-CN&paperDocType=paper&re=CN&spaceId=34",
    note: "用于确认入门准备、首次使用、激活、基础教程入口。"
  },
  djiVideoTutorials: {
    type: "官方资料",
    title: "DJI Osmo Pocket 3 视频教程",
    url: "https://www.dji.com/cn/osmo-pocket-3/video",
    note: "用于确认 DJI 官方提供 Osmo Pocket 3 教学视频入口；孩子观看外部视频时建议家长陪同。"
  },
  djiAcademy: {
    type: "官方资料",
    title: "B站 DJI大疆创新｜Osmo Pocket 3 使用指南【MAX版】",
    url: "https://www.bilibili.com/video/BV1Fj411v7yW/",
    note: "DJI 大疆创新官方中文长视频，用于给家长和孩子快速了解整机能力。"
  },
  djiSupport: {
    type: "官方资料",
    title: "DJI 大疆 Osmo Pocket 3 技术支持",
    url: "https://www.dji.com/cn/support/product/osmo-pocket-3",
    note: "用于确认支持问题、配件、兼容性、使用限制等 FAQ 方向。"
  },
  djiLightCut: {
    type: "官方资料",
    title: "DJI 畅片 / LightCut 官方剪辑工具",
    url: "https://www.dji.com/cn/qcut",
    note: "用于确认可用剪辑辅助工具方向；本网站不要求孩子上传个人视频到服务器。"
  },
  creatorCapture: {
    type: "官方资料",
    title: "B站 DJI大疆服务｜Osmo Pocket 3 云台模式与运镜教学",
    url: "https://www.bilibili.com/video/BV1yu4y1E7X6/",
    note: "DJI 大疆服务官方中文视频，用于理解云台模式、运镜和实拍测试。"
  },
  creatorKraft: {
    type: "中文创作者经验",
    title: "B站 华仔拍照用手机｜Pocket 3 的 6 种 Vlog 创意运镜",
    url: "https://www.bilibili.com/video/BV1PC4y1R7SP/",
    note: "用于提炼后拉、环绕、低角度跟随等运镜练习思路；页面中只作为经验建议。"
  },
  creatorEditors: {
    type: "中文创作者经验",
    title: "B站 刘二而已｜DJI Pocket 3 设置指南（新手入坑必知）",
    url: "https://www.bilibili.com/video/BV1WN411j7N9/",
    note: "用于提炼参数设置的实践经验；参数建议不写成官方结论，必须让孩子实拍比较。"
  },
  creatorUlanzi: {
    type: "中文创作者经验",
    title: "B站 影视飓风｜Vlog拍摄技巧大揭秘：拍好你的第一个Vlog",
    url: "https://www.bilibili.com/video/BV1y441187TB/",
    note: "用于提炼 Vlog 主题、镜头顺序和故事表达方法；不复制视频文案。"
  },
  communityReddit: {
    type: "社区讨论",
    title: "大疆社区｜手持稳定器走路防抖经验讨论",
    url: "https://bbs.dji.com/archiver/?tid-207768.html=",
    note: "只用于提炼常见问题，不复制原文；页面中标注为经验建议。"
  },
  communityForum: {
    type: "社区讨论",
    title: "大疆社区 / DJI 论坛｜Osmo Pocket 3 讨论入口",
    url: "https://bbs.dji.com/",
    note: "只用于提炼常见问题，不复制帖子原文；页面中标注为经验建议。"
  },
  communityBilibili: {
    type: "社区讨论",
    title: "Bilibili - Osmo Pocket 3 新手教程与经验视频",
    url: "https://search.bilibili.com/all?keyword=Osmo%20Pocket%203%20%E6%96%B0%E6%89%8B%20%E6%95%99%E7%A8%8B",
    note: "只用于观察新手常问内容，不搬运视频文案。"
  }
};

const WEEK_INFO = {
  1: { title: "第1周", goal: "认识 Pocket3 与基础操作", badge: "设备小达人" },
  2: { title: "第2周", goal: "稳定画面与镜头语言", badge: "稳定摄影师" },
  3: { title: "第3周", goal: "Vlog故事结构", badge: "小小讲故事人" },
  4: { title: "第4周", goal: "剪辑思维与作品复盘", badge: "家庭导演" }
};

const SOURCE_GROUPS = {
  official: ["djiProduct", "djiDownloads", "djiManual", "djiBeginner", "djiVideoTutorials", "djiAcademy", "djiSupport", "djiLightCut"],
  creator: ["creatorCapture", "creatorKraft", "creatorEditors", "creatorUlanzi"],
  community: ["communityReddit", "communityForum", "communityBilibili"]
};

const TEACHING_VIDEOS = [
  {
    title: "中文官方视频教程入口",
    level: "建议第 1-7 天观看",
    sourceType: "官方确认",
    url: SOURCE_REGISTRY.djiVideoTutorials.url,
    sourceTitle: SOURCE_REGISTRY.djiVideoTutorials.title,
    watchTask: "家长陪同打开后，只看和当天任务相关的 3-5 分钟内容。",
    practice: "看完后立刻拍 1 条 10-20 秒练习，不追求一次成功。",
    privacyNote: "只在家庭设备中回看，不自行发布。"
  },
  {
    title: "DJI 大疆创新官方使用指南",
    level: "复习用，不作为第 1 天主任务",
    sourceType: "官方确认",
    url: SOURCE_REGISTRY.djiAcademy.url,
    sourceTitle: SOURCE_REGISTRY.djiAcademy.title,
    watchTask: "按需观看与机身能力、拍摄模式、跟随和声音相关的片段。",
    practice: "让孩子用自己的话说出：今天真正练的是画面，不是开关机。",
    privacyNote: "不拍设备序列号、家庭地址或窗外定位。"
  },
  {
    title: "云台模式与稳定画面",
    level: "建议第 6-12 天观看",
    sourceType: "官方确认 + 实拍测试",
    url: SOURCE_REGISTRY.creatorCapture.url,
    sourceTitle: SOURCE_REGISTRY.creatorCapture.title,
    watchTask: "查看云台模式、回中、跟随和运镜相关官方中文说明。",
    practice: "同一条路线各拍 8 秒，比较哪一种模式更稳、更适合今天场景。",
    privacyNote: "走动练习只在家长确认的安全区域完成。"
  },
  {
    title: "拍摄模式与帧率选择",
    level: "建议第 4、13、24 天观看",
    sourceType: "官方确认 + 创作者经验",
    url: SOURCE_REGISTRY.creatorEditors.url,
    sourceTitle: SOURCE_REGISTRY.creatorEditors.title,
    watchTask: "了解视频、慢动作、延时等模式的区别，不要求孩子全部使用。",
    practice: "普通动作先用 30fps；快速手部动作可在家长陪同下测试 60fps 是否更清楚。",
    privacyNote: "不要为了测试效果去危险地点或公开场所拍路人。"
  },
  {
    title: "人像跟随与人物构图",
    level: "建议第 2、10、20 天观看",
    sourceType: "官方确认 + 需要实拍测试",
    url: SOURCE_REGISTRY.djiAcademy.url,
    sourceTitle: SOURCE_REGISTRY.djiAcademy.title,
    watchTask: "了解 ActiveTrack 等人物辅助能力，再回到课程练人物比例。",
    practice: "半身人像头顶留 5%-10%，眼睛靠近上三分线，人物面向处留说话空间。",
    privacyNote: "拍任何人正脸前先征得同意，不同意就只拍手部或背影。"
  },
  {
    title: "收音与外接麦克风思路",
    level: "建议第 14、20、26 天观看",
    sourceType: "官方确认 + 创作者经验",
    url: SOURCE_REGISTRY.djiAcademy.url,
    sourceTitle: SOURCE_REGISTRY.djiAcademy.title,
    watchTask: "看与声音、配件或麦克风相关的官方说明。",
    practice: "同一句话在 0.5 米和 1.5 米各拍一次，回放比较清晰度。",
    privacyNote: "评估声音时也要听有没有真实姓名、地址、学校等隐私。"
  },
  {
    title: "剪辑辅助与 LightCut",
    level: "建议第 23-30 天观看",
    sourceType: "官方确认",
    url: SOURCE_REGISTRY.djiLightCut.url,
    sourceTitle: SOURCE_REGISTRY.djiLightCut.title,
    watchTask: "了解剪辑辅助工具能做什么，但不把家庭视频上传到本网站。",
    practice: "先选 5 个最清楚镜头，再决定保留、删除和加字幕。",
    privacyNote: "公开分享前必须由家长检查画面、字幕、声音和封面。"
  }
];

const FAQ_ITEMS = [
  {
    question: "孩子可以把视频上传到网站吗？",
    answer: "不可以。本网站只记录学习进度、分镜和复盘文字，不上传个人视频、家庭视频、学校信息或位置信息。",
    label: "安全规则",
    sources: ["djiSupport"]
  },
  {
    question: "走路拍还是会一上一下怎么办？",
    answer: "经验建议：先练慢走、膝盖微弯、双手握稳，路线必须安全。三轴云台能帮助稳定方向，但不能替孩子消除所有脚步起伏，需要实拍测试。",
    label: "经验建议",
    sources: ["creatorCapture", "communityReddit"]
  },
  {
    question: "应该用 4K、D-Log M 或复杂参数吗？",
    answer: "官方确认 Pocket3 支持多种视频规格和 D-Log M 等能力。儿童训练先用自动曝光和普通色彩即可；创作者参数只当高阶经验，必须由家长陪同实拍比较。",
    label: "参数区分",
    sources: ["djiProduct", "djiManual", "creatorEditors"]
  },
  {
    question: "ActiveTrack 是否总能跟住人？",
    answer: "官方确认 Pocket3 有 ActiveTrack 6.0。经验建议：人物被遮挡、动作太快、画面太乱时可能需要重选主体；孩子练习时要让家长站在安全位置观察。",
    label: "官方+经验",
    sources: ["djiProduct", "djiManual", "communityForum"]
  },
  {
    question: "声音不清楚怎么办？",
    answer: "先靠近说话者、减少风扇和电视声、回放检查音量。是否需要外接麦克风属于进阶选择，儿童课程先练环境安静和说话清楚。",
    label: "经验建议",
    sources: ["djiManual", "creatorKraft", "communityBilibili"]
  },
  {
    question: "能在路边、楼梯或厨房拍运动镜头吗？",
    answer: "不建议。儿童练习只选择家长确认的安全区域，不边走边盯屏幕，不在马路边、楼梯口、厨房火源旁练习。",
    label: "安全规则",
    sources: ["djiManual", "djiSupport"]
  }
];


WEEK_INFO[1] = { title: "第1周", goal: "参数选择与画面控制", badge: "画面控制手" };
WEEK_INFO[2] = { title: "第2周", goal: "构图、人像位置与镜头运动", badge: "构图摄影师" };
WEEK_INFO[3] = { title: "第3周", goal: "Vlog故事结构与现场调度", badge: "小小导演" };
WEEK_INFO[4] = { title: "第4周", goal: "剪辑判断、风格统一与复盘", badge: "成片剪辑师" };

const ADVANCED_COURSES = [
  {
    day: 1,
    week: 1,
    title: "室内书桌定场镜头",
    goal: "直接拍一个能说明地点的 12 秒定场镜头，练习曝光、白平衡和水平构图。",
    operation: "把 Pocket3 固定在手持稳定姿势或小三脚架上，先半按/点按主体位置确认画面清楚，再录制。",
    parameters: "官方确认：可使用视频模式、自动曝光、触控屏取景。创作者经验：室内先用 4K/30fps 或 1080p/30fps，白平衡先用自动；如果灯光偏黄，再由家长陪同试 4000K-5000K。不要第一天使用 D-Log M。",
    sceneChoice: "选择书桌、书架或学习角；画面里不能出现姓名贴、学校、证件、快递单、门牌和窗外明确地点。",
    composition: "桌面占画面下 1/3，书架或墙面占上 2/3；主体放在左或右三分线，不要正中塞满。",
    portrait: "今天不拍人。如果必须有人入镜，只出现手部动作，不露正脸。",
    why: "定场镜头告诉观众“在哪里”，也是后面所有 Vlog 的开头基础。",
    task: "拍 3 条 12 秒版本：正面、斜 45 度、稍低机位；回看后选最清楚的一条。",
    storyboard: ["空镜 2 秒", "书桌主体 6 秒", "慢慢停住 2 秒", "手拿起一本书 2 秒", "回看比较"],
    mistakes: ["桌面太乱", "主体贴边", "灯光一半亮一半暗", "窗外地点暴露"],
    parentQuestions: ["孩子是否能说出主体在哪里？", "画面有没有隐私？", "三条里哪条最稳定？"],
    settings: {
      official: "视频模式、触控取景、自动曝光和回放属于官方确认的基础能力。",
      creator: "4K/30fps、先自动白平衡、用三分线属于创作者经验。",
      test: "让孩子比较正面、45 度和低机位哪条更像 Vlog 开头。"
    },
    sources: src("djiManual", "djiProduct", "creatorKraft")
  },
  {
    day: 2,
    week: 1,
    title: "窗边人像半身",
    goal: "练习安全半身人像：脸部位置、眼睛高度、背景干净。",
    operation: "人物站在窗边侧前方，镜头与胸口到眼睛之间高度接近，录制前点按脸部确认清楚。",
    parameters: "官方确认：Pocket3 支持人像拍摄、触控取景和自动对焦。创作者经验：普通色彩、自动曝光、30fps；室内窗边先不用美颜滤镜和复杂调色。",
    sceneChoice: "选择窗边 1-2 米内的柔和光线；不要让窗外楼号、学校、车牌进入背景。",
    composition: "半身人物占画面高度约 55%-65%；眼睛放在上三分线附近；人物面向画面内侧，前方留出说话空间。",
    portrait: "头顶留 5%-10% 空间，胸口以下不要切得太紧；竖屏时脸不要超过画面宽度的 1/2。",
    why: "孩子会拍人像后，采访、介绍和故事开场都会更自然。",
    task: "拍家长 15 秒半身介绍，分别试人物居中和三分线位置。",
    storyboard: ["窗边背景检查", "人物站位", "居中版本", "三分线版本", "回看选择"],
    mistakes: ["头顶贴边", "窗外隐私", "人物背光脸太黑", "没征得同意"],
    parentQuestions: ["人物是否同意拍摄？", "三分线版本是否更舒服？", "背景是否安全？"],
    settings: {
      official: "触控取景、自动对焦和视频录制参考 DJI 官方手册。",
      creator: "眼睛上三分线、头顶留白和说话空间属于创作者经验。",
      test: "让孩子比较居中和三分线版本，说明哪条更自然。"
    },
    sources: src("djiManual", "djiProduct", "creatorUlanzi")
  },
  {
    day: 3,
    week: 1,
    title: "低机位物品介绍",
    goal: "用低机位让一个普通物品看起来更有存在感。",
    operation: "把 Pocket3 降到桌面上方 10-20 厘米，镜头略向上看主体，录制前确认主体边缘清楚。",
    parameters: "官方确认：可通过触控屏观察画面并录制视频。创作者经验：普通色彩、30fps、自动曝光；低机位容易看到杂乱背景，先不调复杂参数。",
    sceneChoice: "选择水杯、玩具模型、文具盒等不反光太强的物品；背景保留一两样相关物，不要堆满。",
    composition: "主体占画面高度 45%-60%；底部留一点桌面，顶部留背景空间；不要让主体顶到画面边。",
    portrait: "不拍人脸，可让手从画面侧面进入，手部只占画面 20%-30%。",
    why: "低机位能训练孩子理解镜头高度会改变观众感受。",
    task: "同一物品拍普通高度和低机位各 10 秒，比较哪个更有重点。",
    storyboard: ["普通高度", "低机位", "手部进入", "主体停住", "回看对比"],
    mistakes: ["镜头太低看不到主体", "背景杂乱", "手挡住主体", "靠太近失焦"],
    parentQuestions: ["孩子能说出低机位的变化吗？", "主体是否清楚？", "有没有拍到隐私背景？"],
    settings: {
      official: "取景、录制和回放参考 DJI 手册。",
      creator: "低机位突出主体属于创作者构图经验。",
      test: "让孩子对比普通高度和低机位的主体存在感。"
    },
    sources: src("djiManual", "creatorUlanzi")
  },
  {
    day: 4,
    week: 1,
    title: "俯拍桌面过程",
    goal: "练习拍一个从开始到完成的桌面动作，保持画面垂直和手部不遮挡。",
    operation: "把镜头放在桌面上方，尽量让桌边与画面边缘平行；开始前先试拍 5 秒检查手是否挡住重点。",
    parameters: "官方确认：Pocket3 可录制视频并回放检查。创作者经验：桌面过程建议 30fps；如果动作很快，可由家长陪同测试 60fps 是否更清楚。",
    sceneChoice: "选择整理文具、拼小积木、翻书签页等安全动作；桌面只保留本次要用的 3-5 件物品。",
    composition: "主体区域占画面中间 70%；四周留 10%-15% 安全边；桌边尽量水平或垂直。",
    portrait: "只拍手部，不拍脸；手从画面下方进入，不要从四面同时乱入。",
    why: "俯拍能让观众看清步骤，适合学习、手工、整理类 Vlog。",
    task: "拍 20 秒“整理 3 支笔”的过程，要求开始、整理、完成都看得见。",
    storyboard: ["桌面空镜", "手拿第一支笔", "按顺序摆放", "完成状态", "手离开画面"],
    mistakes: ["桌面歪斜", "手挡住动作", "物品太多", "开始和完成状态不明显"],
    parentQuestions: ["过程是否能看懂？", "手有没有挡住重点？", "画面是否横平竖直？"],
    settings: {
      official: "录制和回放能力参考 DJI 手册。",
      creator: "俯拍边缘留白、动作区居中属于创作者经验。",
      test: "孩子试 30fps 与 60fps，判断快动作是否更清楚。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 5,
    week: 1,
    title: "逆光剪影测试",
    goal: "理解背光会让脸变暗，学会用测试镜头判断是否需要换位置。",
    operation: "让人物背对窗户拍 5 秒，再让人物面对窗户拍 5 秒，回放比较脸部亮度。",
    parameters: "官方确认：Pocket3 支持自动曝光和触控取景。创作者经验：新手先不手动压高 ISO 或强行调曝光，先换人物方向和光线位置。",
    sceneChoice: "只在室内窗边测试；窗外不得出现可识别地点；避免强阳光直射镜头。",
    composition: "人物半身占画面 55%-65%；窗户只作为背景边缘，不占满整个画面。",
    portrait: "逆光测试时脸部可能变暗；家长帮助判断是否适合保留，不作为正式公开视频。",
    why: "孩子会发现“参数不是万能”，换位置常常比乱调参数更有效。",
    task: "拍背光、侧光、顺光三条 5 秒人像测试，只保存家庭练习。",
    storyboard: ["背光版本", "侧光版本", "顺光版本", "回看脸部", "选最清楚光线"],
    mistakes: ["直拍太阳", "窗外隐私", "脸太黑还继续拍正式片", "把测试当成成片"],
    parentQuestions: ["哪种光线脸最清楚？", "孩子是否先换位置再想参数？", "窗外是否安全？"],
    settings: {
      official: "自动曝光、取景和回放参考 DJI 手册。",
      creator: "先改变光位再调参数属于创作者经验。",
      test: "孩子必须拍三种光线并说明选择。"
    },
    sources: src("djiManual", "djiProduct", "creatorEditors")
  },
  {
    day: 6,
    week: 1,
    title: "手持走路稳定",
    goal: "拍一段安全慢走镜头，控制上下起伏和画面倾斜。",
    operation: "双手持机，手肘靠近身体，开始和结束各停 2 秒；路线由家长提前确认。",
    parameters: "官方确认：Pocket3 有三轴机械云台稳定能力。创作者经验：走路镜头用 4K/30fps 或 1080p/30fps 先练节奏；不要边走边改设置。",
    sceneChoice: "客厅、走廊或家长确认的空旷室内路线；地面无玩具、无台阶、无湿滑。",
    composition: "画面中心对准终点主体；地面不要超过画面下 1/3；保持墙线尽量垂直。",
    portrait: "今天不跟拍人脸；如果有人在终点，只拍背影或手部，避免家庭隐私。",
    why: "稳定走路镜头是 Vlog 常用镜头，但必须先保证安全。",
    task: "同一路线拍两版：正常走和慢走，比较哪版上下起伏更少。",
    storyboard: ["起点停 2 秒", "慢走 5 步", "主体保持中间", "终点停 2 秒", "回看晃动"],
    mistakes: ["盯屏幕不看路", "步子太大", "画面歪", "路线有障碍"],
    parentQuestions: ["路线是否安全？", "慢走版是否更稳？", "孩子是否能说出怎么减少起伏？"],
    settings: {
      official: "三轴机械云台能力来自 DJI 官方产品页。",
      creator: "慢走、手肘靠近身体和起止停顿属于创作者经验。",
      test: "孩子必须比较正常走和慢走两版。"
    },
    sources: src("djiProduct", "creatorCapture", "communityReddit")
  },
  {
    day: 7,
    week: 1,
    title: "自动跟随人物",
    goal: "用人物跟随拍一个安全移动镜头，并判断什么时候需要重拍。",
    operation: "在画面中选定人物主体，让人物慢速移动；拍摄者站定或小范围移动，不追跑。",
    parameters: "官方确认：Pocket3 支持 ActiveTrack 6.0。创作者经验：背景简单、人物速度慢、遮挡少时更适合练习。",
    sceneChoice: "客厅或室内空地；人物从画面左侧走到右侧，路线不经过门口、楼梯或窗边。",
    composition: "人物全身或半身都可以；头顶留 5%-10%；人物移动方向前方留出约 1/3 空间。",
    portrait: "半身跟随时脸部高度在上三分线；全身跟随时脚部不要切掉。",
    why: "跟随功能能帮孩子保持主体，但构图和安全仍要自己判断。",
    task: "让家长慢走 8 秒，拍一条半身跟随和一条全身跟随。",
    storyboard: ["选定主体", "人物开始移动", "保持前方空间", "人物停住", "回看是否丢失主体"],
    mistakes: ["人物走太快", "背景太乱", "遮挡后仍继续用", "拍摄者追跑"],
    parentQuestions: ["跟随有没有丢主体？", "人物前方是否留空间？", "孩子是否知道失败要重拍？"],
    settings: {
      official: "ActiveTrack 6.0 来自 DJI 官方产品资料。",
      creator: "慢速、简单背景和前方留白属于创作者经验。",
      test: "孩子比较半身与全身跟随哪条更稳定。"
    },
    sources: src("djiProduct", "djiManual", "communityForum")
  },
  {
    day: 8,
    week: 2,
    title: "人物三分线位置",
    goal: "让人物站在左/右三分线，练习采访和介绍的画面比例。",
    operation: "用触控屏观察人物位置，录制 10 秒介绍；回看时检查头顶、肩膀和背景。",
    parameters: "官方确认：Pocket3 可用于视频和触控取景。创作者经验：采访类画面用 30fps，普通色彩，自动曝光；先保证脸清楚。",
    sceneChoice: "选择纯色墙、书架一角或整洁窗边；背景不出现证件、奖状全名、学校名称。",
    composition: "人物眼睛在上三分线，身体在左或右三分线；看向画面内侧，留白在视线方向。",
    portrait: "半身占画面高度 55%-65%，头顶留 5%-10%，下方切到胸口或腰部，不切下巴。",
    why: "三分线让人物画面不呆板，也给字幕或物品说明留位置。",
    task: "拍家长站左三分线和右三分线各 10 秒，孩子说哪边更适合当前背景。",
    storyboard: ["左三分线", "视线留白", "右三分线", "背景检查", "回看选择"],
    mistakes: ["人物贴边", "留白留反方向", "头顶太多或太少", "背景抢主体"],
    parentQuestions: ["孩子能指出三分线位置吗？", "人物比例是否舒服？", "背景有没有隐私？"],
    settings: {
      official: "视频录制和触控取景参考 DJI 手册。",
      creator: "眼睛上三分线、视线方向留白属于创作者经验。",
      test: "孩子拍左右两版并说明哪版背景更平衡。"
    },
    sources: src("djiManual", "creatorUlanzi")
  },
  {
    day: 9,
    week: 2,
    title: "前景遮挡与层次",
    goal: "用安全前景制造画面层次，但不挡住主体。",
    operation: "把书页、植物叶片或文具放在镜头前侧边，主体在中后方，点按主体确认清楚。",
    parameters: "官方确认：Pocket3 支持自动对焦和触控取景。创作者经验：前景只占画面边缘 10%-20%，不要挡主脸。",
    sceneChoice: "书桌、书架、客厅角落；前景物要稳固，不用玻璃杯、尖锐物或易倒物。",
    composition: "前景在左或右边缘，主体在三分线；背景保持简洁，三层关系为前景、主体、背景。",
    portrait: "拍人时前景不能盖住眼睛和嘴；人物脸部占画面高度约 25%-35%。",
    why: "层次能让画面更有空间感，但主体永远要最清楚。",
    task: "拍同一个玩具：无前景版本和有前景版本各 8 秒。",
    storyboard: ["无前景", "放入前景", "点按主体", "主体停住", "回看层次"],
    mistakes: ["前景挡住主体", "主体不清楚", "背景太乱", "前景物危险"],
    parentQuestions: ["主体是否仍最清楚？", "前景是否安全？", "孩子能说出三层关系吗？"],
    settings: {
      official: "自动对焦和触控取景参考 DJI 官方资料。",
      creator: "前景边缘占比和层次构图属于创作者经验。",
      test: "孩子比较无前景和有前景版本。"
    },
    sources: src("djiProduct", "djiManual", "creatorKraft")
  },
  {
    day: 10,
    week: 2,
    title: "平移展示空间",
    goal: "用慢速平移展示一个空间，控制起点、终点和移动速度。",
    operation: "站定后用身体带动手臂慢慢转动，起点和终点各停 2 秒。",
    parameters: "官方确认：三轴云台可帮助稳定方向。创作者经验：平移镜头用 30fps，速度慢到能看清画面中文字；不要横扫。",
    sceneChoice: "书架、作品墙、桌面展区；移走姓名、学校、地址和照片。",
    composition: "画面上下边保持水平，主体依次经过中间区域；不要让顶部灯光过亮。",
    portrait: "如果人物在画面中，人物占画面高度不超过 40%，作为空间中的一部分，不做主采访。",
    why: "平移镜头适合介绍环境，但速度一快就变成看不清的扫视。",
    task: "拍一条 12 秒平移：起点停 2 秒，移动 8 秒，终点停 2 秒。",
    storyboard: ["起点", "第一个物品", "第二个物品", "终点", "回看速度"],
    mistakes: ["移动太快", "上下起伏", "没有终点", "拍到隐私照片"],
    parentQuestions: ["是否能看清每个物品？", "起点终点是否停住？", "有没有隐私物品？"],
    settings: {
      official: "云台稳定能力来自 DJI 官方产品页。",
      creator: "起止停顿和可读速度属于创作者经验。",
      test: "孩子拍快慢两版，让家长选更清楚的一版。"
    },
    sources: src("djiProduct", "creatorKraft")
  },
  {
    day: 11,
    week: 2,
    title: "推近强调细节",
    goal: "通过推近让观众注意到一个细节，而不是乱变焦。",
    operation: "从中景开始，身体慢慢靠近主体，靠近后停住 2 秒；倒退时先看路。",
    parameters: "官方确认：Pocket3 支持快速对焦和视频录制。创作者经验：先用脚步推近，少依赖数码变焦；30fps 练稳定。",
    sceneChoice: "手工作品、书页插图、模型局部；主体不反光，周围有足够移动空间。",
    composition: "开始时主体占画面 35%-45%，结束时细节占 60%-70%；细节不要顶边。",
    portrait: "拍人时不推到大特写；儿童练习人脸特写需家长同意，只用于家庭观看。",
    why: "推近是一种“请你看这里”的镜头语言。",
    task: "拍一个从作品全貌推近到细节的 10 秒镜头。",
    storyboard: ["中景全貌", "慢慢靠近", "细节变大", "停住 2 秒", "回看清晰度"],
    mistakes: ["靠太近失焦", "走路不看路", "终点不停", "细节没有意义"],
    parentQuestions: ["细节是否清楚？", "孩子是否安全移动？", "推近是否有表达目的？"],
    settings: {
      official: "快速对焦和视频录制参考 DJI 官方资料。",
      creator: "脚步推近、终点停顿属于创作者经验。",
      test: "孩子比较推近前后哪个更能说明主题。"
    },
    sources: src("djiProduct", "creatorUlanzi")
  },
  {
    day: 12,
    week: 2,
    title: "过肩视角",
    goal: "用过肩视角拍孩子看书或做手工，练习人物与主体关系。",
    operation: "站在人物肩后 45 度，镜头对准手和物品，不拍完整正脸。",
    parameters: "官方确认：可用视频模式和触控取景。创作者经验：室内普通色彩、自动曝光；先保证手部和物品清楚。",
    sceneChoice: "书桌边或手工桌；只拍书页局部、手和物品，不拍完整姓名、作业本个人信息。",
    composition: "肩膀或后脑勺占画面边缘 15%-25%，主体物品在中间或三分线；手部动作不能被肩膀挡住。",
    portrait: "不拍正脸；如果拍侧脸，脸部不超过画面 1/4，并由家长确认可保存。",
    why: "过肩视角让观众感觉“跟着孩子一起看”，适合学习类 Vlog。",
    task: "拍 15 秒过肩看书或拼图镜头，要求手部动作清楚。",
    storyboard: ["肩后位置", "书页或作品", "手部动作", "停留细节", "结束空镜"],
    mistakes: ["肩膀挡住主体", "拍到作业姓名", "镜头太高像监控", "手部动作太快"],
    parentQuestions: ["是否避开个人信息？", "观众能看懂孩子在做什么吗？", "过肩比例是否合适？"],
    settings: {
      official: "视频模式和取景参考 DJI 手册。",
      creator: "过肩比例和 45 度位置属于创作者经验。",
      test: "孩子试肩膀占 10%、25%、40%，比较哪版最好。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 13,
    week: 2,
    title: "动作衔接",
    goal: "拍两个能接上的动作镜头，为剪辑做准备。",
    operation: "同一个动作分两次拍：先中景开始动作，再近景继续动作；保持动作方向一致。",
    parameters: "官方确认：视频录制和回放检查参考手册。创作者经验：动作镜头可试 30fps 与 60fps，快动作由孩子实拍比较。",
    sceneChoice: "打开书、合上盒子、摆好模型等安全动作；不要用刀具、热水或易碎物。",
    composition: "中景交代动作，近景强调手部；动作从画面左到右就两条都保持左到右。",
    portrait: "人物只出现手和半身，脸不是重点；手部占近景画面 40%-60%。",
    why: "动作衔接能让剪辑更顺，孩子会理解拍摄要为后期服务。",
    task: "拍“打开一本书”：中景打开、近景翻页，各 6 秒。",
    storyboard: ["中景手碰书", "打开书", "切近景", "继续翻页", "停住书页"],
    mistakes: ["动作方向变了", "近景没有接上", "每条太短", "动作不安全"],
    parentQuestions: ["两条动作能接上吗？", "方向是否一致？", "是否需要补拍？"],
    settings: {
      official: "录制和回放能力参考 DJI 手册。",
      creator: "动作方向一致和中近景衔接属于创作者经验。",
      test: "孩子剪前先把两条顺序播放，判断是否连贯。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 14,
    week: 2,
    title: "声音距离测试",
    goal: "用实拍比较说话距离对声音清楚度的影响。",
    operation: "同一句话分别在 0.5 米、1 米、2 米处录制，回放比较音量和环境声。",
    parameters: "官方确认：Pocket3 可录制音频，音频相关说明参考手册。创作者经验：优先靠近声源并减少噪声，不先依赖后期修复。",
    sceneChoice: "安静室内，关闭电视和大风扇；不录家庭隐私谈话。",
    composition: "人物半身在画面中，嘴部不要被遮挡；背景简洁，不让声音来源离画面太远。",
    portrait: "半身占画面 55%-65%，嘴部和眼睛清楚；说话人看向镜头旁边或镜头均可。",
    why: "声音不好时，观众即使看清画面也可能听不懂故事。",
    task: "同一句“今天我介绍我的书桌”录三种距离，选最清楚的一条。",
    storyboard: ["0.5 米", "1 米", "2 米", "回放音量", "记录最佳距离"],
    mistakes: ["环境太吵", "离太远", "说话太小", "只看画面不听声音"],
    parentQuestions: ["哪个距离声音最好？", "背景声是否影响理解？", "孩子是否知道先听回放？"],
    settings: {
      official: "音频录制能力参考 DJI 手册。",
      creator: "靠近声源和先降噪声属于创作者经验。",
      test: "孩子必须比较三种距离。"
    },
    sources: src("djiManual", "creatorKraft", "communityBilibili")
  },
  {
    day: 15,
    week: 3,
    title: "一句话主题开场",
    goal: "用明确主题开场，并配一个能证明主题的画面。",
    operation: "先写一句主题，再录制开场；不要先拍一堆无关空镜。",
    parameters: "官方确认：录制和回放参考手册。创作者经验：开场用 30fps 普通色彩即可，把注意力放在主题和画面对应。",
    sceneChoice: "书桌、书架、兴趣作品、家庭小任务；主题必须适合家庭观看。",
    composition: "开场人物半身在三分线，主题物放在另一侧；如果不拍人，就让主题物占画面 50%左右。",
    portrait: "人物眼睛在上三分线，留白方向放主题物或字幕；不拍校服校徽和真实姓名。",
    why: "清楚主题能让后面的镜头都有选择标准。",
    task: "拍 10 秒开场：一句话主题 + 一个主题物画面。",
    storyboard: ["人物或主题物", "说主题", "切到物品", "停 2 秒", "回看是否对应"],
    mistakes: ["主题太大", "开场和画面不对应", "说太长", "背景泄露隐私"],
    parentQuestions: ["10 秒内能听懂主题吗？", "画面是否证明主题？", "是否适合家庭保存？"],
    settings: {
      official: "录制和回放参考 DJI 手册。",
      creator: "一句话主题开场属于创作者脚本经验。",
      test: "家长只看前 10 秒，复述孩子主题。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 16,
    week: 3,
    title: "三镜头讲清一件事",
    goal: "用全景、中景、近景三条镜头讲清一个小任务。",
    operation: "每个镜头都先停 1 秒再开始动作；三条镜头围绕同一主题。",
    parameters: "创作者经验：三镜头结构先用统一参数，建议同一分辨率、同一帧率、同一色彩风格，避免剪在一起忽明忽暗。",
    sceneChoice: "整理书包、准备阅读、摆好小作品；场景必须安静、安全、可控。",
    composition: "全景交代环境，中景交代动作，近景交代细节；每条只表达一个重点。",
    portrait: "若有人入镜，全景人物占 30%-40%，中景占 55%-65%，近景只拍手部或表情局部。",
    why: "三镜头结构是孩子最容易掌握的短 Vlog 骨架。",
    task: "拍“准备阅读”：全景桌面、中景拿书、近景翻到喜欢的一页。",
    storyboard: ["全景", "中景", "近景", "一句总结", "回看排序"],
    mistakes: ["三条镜头主题不一致", "近景太近", "每条都拍太久", "没有结束"],
    parentQuestions: ["三条合起来能讲清一件事吗？", "哪条最重要？", "有没有可以删掉的镜头？"],
    settings: {
      official: "录制基础参考 DJI 手册。",
      creator: "统一参数和全中近结构属于创作者经验。",
      test: "孩子打乱顺序后重新排序，检查故事是否清楚。"
    },
    sources: src("djiManual", "creatorKraft", "creatorUlanzi")
  },
  {
    day: 17,
    week: 3,
    title: "采访家人画面",
    goal: "拍一个画面舒服、声音清楚、尊重受访者的短采访。",
    operation: "采访前征得同意；镜头固定，人物半身，孩子在镜头外提问。",
    parameters: "官方确认：可录制视频和声音。创作者经验：采访用 30fps、普通色彩、自动曝光；先让人声清楚，再考虑背景。",
    sceneChoice: "安静室内，背景整洁；不要在卧室床边、门牌、家庭照片墙前采访。",
    composition: "受访者在左/右三分线，视线朝画面内侧；背景留白给字幕，但不放隐私物。",
    portrait: "半身高度 55%-65%，头顶留 5%-10%，眼睛上三分线；手势可以入画但不切手腕。",
    why: "采访训练孩子提问、倾听、构图和声音控制。",
    task: "问家长两个问题：今天最开心的事是什么？给我的拍摄一个建议是什么？",
    storyboard: ["征得同意", "问题1", "回答停顿", "问题2", "感谢"],
    mistakes: ["问题太长", "打断回答", "声音太远", "背景有隐私照片"],
    parentQuestions: ["孩子是否先征得同意？", "提问是否简短？", "人物比例是否舒服？"],
    settings: {
      official: "视频和音频录制参考 DJI 手册。",
      creator: "采访构图和镜头外提问属于创作者经验。",
      test: "回看时只听声音，看能否听懂问题和回答。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 18,
    week: 3,
    title: "情绪反应镜头",
    goal: "拍一个反应镜头，让故事不只有动作，还有感受。",
    operation: "在动作完成后停 2 秒，拍人物表情或手部反应，不要急着关机。",
    parameters: "创作者经验：反应镜头保持与前后镜头相同帧率和色彩，便于剪辑统一。",
    sceneChoice: "完成拼图、找到喜欢的书页、整理完成后；不拍哭闹、尴尬或未经同意的表情。",
    composition: "表情反应拍半身或近景，眼睛在上三分线；手部反应放画面中心偏下。",
    portrait: "脸部近景时脸占画面高度 40%-55%，不要切额头和下巴；必须家长同意。",
    why: "反应镜头能告诉观众“这件事对我有什么感觉”。",
    task: "拍一个动作完成后的 6 秒反应镜头：笑、点头、展示成果或手势。",
    storyboard: ["动作完成", "停顿", "反应", "成果近景", "一句感受"],
    mistakes: ["反应太夸张", "没征得同意", "镜头太近", "表情被切掉"],
    parentQuestions: ["反应是否自然？", "是否尊重被拍摄者？", "是否让故事更完整？"],
    settings: {
      official: "基础录制参考 DJI 手册。",
      creator: "反应镜头和风格统一属于创作者经验。",
      test: "删除反应镜头再看一遍，比较故事是否少了感受。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 19,
    week: 3,
    title: "环境声转场",
    goal: "用真实环境声连接两个镜头，练习声音叙事。",
    operation: "先录 5 秒环境声，再拍动作镜头；回放时听声音是否能提示场景。",
    parameters: "官方确认：Pocket3 可录制音频。创作者经验：环境声不要盖过人声，音量是否合适需要回放测试。",
    sceneChoice: "翻书声、笔落桌声、积木轻碰声；不录家庭谈话、电视内容或私人信息。",
    composition: "环境声镜头可以是近景，主体占 60%左右；声音来源要出现在画面里。",
    portrait: "今天不拍人脸；只拍手部制造声音，手部占画面 30%-50%。",
    why: "环境声能让 Vlog 更真实，也能帮助剪辑转场。",
    task: "拍 5 秒翻书声 + 8 秒阅读动作，把声音作为转场提示。",
    storyboard: ["翻书近景", "环境声", "切中景", "开始阅读", "停住"],
    mistakes: ["声音来源不在画面", "背景人声泄露隐私", "声音太小", "录到电视内容"],
    parentQuestions: ["声音是否来自画面内？", "有没有隐私声音？", "声音能帮助理解场景吗？"],
    settings: {
      official: "音频录制参考 DJI 手册。",
      creator: "环境声转场属于创作者经验。",
      test: "只听声音，让孩子猜画面发生了什么。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 20,
    week: 3,
    title: "5格分镜执行",
    goal: "把分镜变成可拍的镜头，不临场乱拍。",
    operation: "拍摄前写 5 格：开头、环境、动作、细节、反应；拍完逐格打勾。",
    parameters: "创作者经验：同一条短片尽量保持同一分辨率、帧率和色彩；参数统一比参数复杂更重要。",
    sceneChoice: "选择一个 1 分钟内能完成的小主题，比如“整理我的阅读角”。",
    composition: "每格只解决一个问题：在哪里、做什么、重点是什么、结果怎样、感受如何。",
    portrait: "人物镜头不超过 2 格；人像半身 55%-65%，不要连续全是脸。",
    why: "分镜能让孩子先做导演，再做摄影师。",
    task: "在网站分镜模板写 5 格，并按顺序拍完。",
    storyboard: ["开头主题", "环境", "动作", "细节", "反应结尾"],
    mistakes: ["分镜太多拍不完", "每格都重复", "拍摄顺序和故事顺序混乱", "忘记反应结尾"],
    parentQuestions: ["5 格是否都服务同一主题？", "哪格可以删？", "孩子是否按分镜完成？"],
    settings: {
      official: "录制基础参考 DJI 手册。",
      creator: "5 格分镜和参数统一属于创作者经验。",
      test: "拍完后不剪辑，先按顺序播放看是否能懂。"
    },
    sources: src("djiManual", "creatorKraft", "creatorUlanzi")
  },
  {
    day: 21,
    week: 3,
    title: "45秒故事挑战",
    goal: "完成一条 45 秒故事短片，包含人物、动作、细节、声音和结尾。",
    operation: "按分镜拍 6-8 个镜头，每个镜头 4-8 秒；拍完先筛掉不稳和隐私镜头。",
    parameters: "创作者经验：统一使用 30fps 和普通色彩，先做清楚故事；是否用 4K 由设备空间和家长决定。",
    sceneChoice: "家庭内安全主题：完成手工、整理书包、介绍一本书；不在公共场合拍陌生人。",
    composition: "至少有 1 个全景、2 个中景、2 个近景、1 个反应镜头；不要连续同一距离。",
    portrait: "人物镜头最多占总时长一半；半身比例 55%-65%，表情近景必须家长同意。",
    why: "这是把前 20 天技巧合成完整表达的第一次作品。",
    task: "拍 45 秒“我完成的一件小事”，不上传，只给家长看。",
    storyboard: ["主题开场", "环境", "动作1", "动作2", "细节", "环境声", "反应结尾"],
    mistakes: ["镜头距离都一样", "没有声音", "没有结尾", "隐私镜头未删除"],
    parentQuestions: ["故事是否完整？", "哪一条镜头最有信息？", "是否全部通过隐私检查？"],
    settings: {
      official: "录制、回放和文件检查参考 DJI 手册。",
      creator: "镜头比例和故事结构属于创作者经验。",
      test: "家长看完后复述故事，看是否和孩子主题一致。"
    },
    sources: src("djiManual", "creatorKraft", "djiSupport")
  },
  {
    day: 22,
    week: 4,
    title: "素材筛选标准",
    goal: "按稳定、清楚、有用、安全四个标准筛素材。",
    operation: "回放每条素材，给每条打标签：保留、可剪短、重拍、删除。",
    parameters: "官方确认：可回放检查素材。创作者经验：剪辑前先筛选，不要把所有素材都放进时间线。",
    sceneChoice: "只整理家庭练习素材；不处理含他人隐私或学校信息的视频。",
    composition: "保留主体清楚、构图明确的镜头；删除主体不明、画面歪斜、隐私暴露镜头。",
    portrait: "凡是人物没同意、表情尴尬、脸部过近或背景隐私明显的镜头不进入成片。",
    why: "会筛素材，孩子才会理解拍摄不是越多越好。",
    task: "从昨天作品里选 6 条保留镜头，并说明每条为什么保留。",
    storyboard: ["看第一遍", "标记稳定", "标记清楚", "标记有用", "安全检查"],
    mistakes: ["只保留自己喜欢但没用的镜头", "忽略声音问题", "保留隐私镜头", "误删重要素材"],
    parentQuestions: ["孩子能说出保留理由吗？", "是否删除隐私镜头？", "是否知道重要素材先备份？"],
    settings: {
      official: "回放和文件管理参考 DJI 手册。",
      creator: "四标准筛选属于创作者剪辑经验。",
      test: "孩子和家长分别选素材，比较选择差异。"
    },
    sources: src("djiManual", "creatorKraft", "djiSupport")
  },
  {
    day: 23,
    week: 4,
    title: "剪掉无效停顿",
    goal: "识别按按钮、犹豫、晃动、重复动作等无效片段。",
    operation: "每条素材开头和结尾各检查 2 秒，找到真正有信息的起止点。",
    parameters: "创作者经验：剪辑时先做粗剪，保持故事清楚；不要先加滤镜、音乐和特效。",
    sceneChoice: "选择一条 15-20 秒家庭素材；不要处理含隐私的素材。",
    composition: "保留主体进入画面、动作完成、反应出现的部分；删掉找角度和手挡镜头部分。",
    portrait: "人物说话镜头要保留完整句子，不从半句话中间切；表情尴尬处可删。",
    why: "剪掉无效停顿后，作品节奏会更适合 10-20 分钟训练。",
    task: "把一条 20 秒素材剪成 10-12 秒，写下删掉了什么。",
    storyboard: ["原始素材", "找开始点", "找结束点", "剪短", "回看"],
    mistakes: ["剪掉关键信息", "剪得太碎", "只看画面不听声音", "先加特效"],
    parentQuestions: ["剪短后是否更清楚？", "删掉的理由是否合理？", "有没有剪掉孩子完整表达？"],
    settings: {
      official: "剪辑工具入口参考 DJI LightCut 等官方资料。",
      creator: "先粗剪再美化属于创作者经验。",
      test: "比较原版和剪短版，看主题是否更清楚。"
    },
    sources: src("djiLightCut", "creatorKraft")
  },
  {
    day: 24,
    week: 4,
    title: "字幕安全与位置",
    goal: "字幕只写重点，不挡脸，不写隐私。",
    operation: "给 20 秒片段加 2-3 条字幕，家长检查文字内容。",
    parameters: "创作者经验：字幕用短句，位置避开脸、手部动作和主体细节；儿童练习不用花哨动画。",
    sceneChoice: "选择家庭内作品，不给公共场景或陌生人画面加字幕。",
    composition: "横屏字幕放下方安全区域，避免遮住手部动作；竖屏字幕不要贴最底部，留出播放控件空间。",
    portrait: "人像字幕不要盖住眼睛、嘴和手势；人脸画面字幕建议放胸口以下或旁边空白处。",
    why: "字幕是帮助理解，不是把画面变乱。",
    task: "给一条片子加标题字幕、步骤字幕、结尾字幕各一条。",
    storyboard: ["标题", "步骤重点", "画面留白", "结尾感受", "家长检查"],
    mistakes: ["字幕太长", "写真实姓名学校", "挡住主体", "颜色看不清"],
    parentQuestions: ["字幕是否有隐私？", "是否挡住主体？", "孩子能否删掉多余字幕？"],
    settings: {
      official: "剪辑辅助工具参考 DJI LightCut。",
      creator: "字幕短句、安全区域和少动画属于创作者经验。",
      test: "家长 3 秒内能否读完字幕。"
    },
    sources: src("djiLightCut", "creatorKraft", "djiSupport")
  },
  {
    day: 25,
    week: 4,
    title: "旁白和原声比例",
    goal: "让旁白补充信息，让原声保留现场感。",
    operation: "先听原声，再决定是否加旁白；旁白只说画面看不出来的内容。",
    parameters: "官方确认：Pocket3 可录制音频。创作者经验：人声永远优先，背景声只做辅助；具体音量需要孩子回放判断。",
    sceneChoice: "选择环境声干净的家庭素材；不使用来源不明音乐公开发布。",
    composition: "旁白对应的画面要有信息：细节、动作或结果；不要对空镜讲太多。",
    portrait: "有人说话时不要再叠太多旁白；保留人物完整句子和自然停顿。",
    why: "声音层次能让 Vlog 更完整，但声音太多会让人累。",
    task: "给一条 20 秒素材加 2 句旁白，并保留 1 个环境声。",
    storyboard: ["听原声", "写两句旁白", "录旁白", "听混合效果", "家长确认"],
    mistakes: ["旁白重复画面", "盖住人声", "背景音乐太大", "使用不明版权音乐"],
    parentQuestions: ["旁白是否有新信息？", "人声是否清楚？", "是否没有使用不明音乐公开发布？"],
    settings: {
      official: "音频录制参考 DJI 手册。",
      creator: "人声优先和旁白补充属于创作者经验。",
      test: "关掉画面只听声音，看是否能懂大意。"
    },
    sources: src("djiManual", "creatorKraft", "djiSupport")
  },
  {
    day: 26,
    week: 4,
    title: "封面人像裁切",
    goal: "选择一帧安全、清楚、不过度夸张的人像或物品封面。",
    operation: "从成片中截取主体清楚的一帧，检查背景和文字，再写标题。",
    parameters: "创作者经验：封面不需要复杂滤镜，优先清楚、真实、可识别；公开前必须家长审核。",
    sceneChoice: "封面可选作品细节、孩子背影、手部动作；慎用正脸大特写。",
    composition: "横屏封面主体放中间偏左/右，留标题空间；竖屏封面主体不要贴上下边。",
    portrait: "人脸封面脸部占画面 30%-45%，不要切额头下巴；儿童正脸封面只在家长同意范围内使用。",
    why: "封面是作品第一眼，也最容易暴露身份和地点。",
    task: "为作品选 2 张封面：一张人物，一张物品，家长决定哪张更安全。",
    storyboard: ["找清楚帧", "检查背景", "写短标题", "比较人物/物品封面", "家长决定"],
    mistakes: ["封面有门牌校徽", "标题夸张", "脸部裁切不舒服", "孩子自行发布"],
    parentQuestions: ["哪张封面更安全？", "标题是否真实？", "是否明确不能自行公开？"],
    settings: {
      official: "发布与支持信息参考 DJI 官方支持资料。",
      creator: "封面留标题空间和人像裁切比例属于创作者经验。",
      test: "家长只看封面，判断是否能看懂主题且无隐私。"
    },
    sources: src("djiSupport", "creatorKraft")
  },
  {
    day: 27,
    week: 4,
    title: "发布前隐私检查",
    goal: "用清单检查画面、声音、字幕、封面和评论风险。",
    operation: "网站不上传视频；孩子只在本机记录检查结果，是否分享由家长决定。",
    parameters: "官方资料用于设备和支持说明；隐私发布规则按家庭安全要求执行。社区经验只作为提醒：很多隐私藏在背景和声音里。",
    sceneChoice: "检查所有可能公开的候选作品；含学校、住址、他人正脸的默认不公开。",
    composition: "暂停每个镜头看四角：门牌、校徽、证件、车牌、快递单、窗外地标。",
    portrait: "所有正脸人物都要确认同意；未成年人正脸公开视频需要家长特别审核。",
    why: "安全比播放量重要，孩子不能自己决定公开发布。",
    task: "用 5 项清单检查一条作品：地点、人物、声音、字幕、封面。",
    storyboard: ["查地点", "查人物", "听声音", "查字幕", "查封面"],
    mistakes: ["只看画面不听声音", "忽略封面", "别人没同意也发布", "孩子自己上传"],
    parentQuestions: ["是否发现任何隐私？", "是否所有人物同意？", "最终分享范围是什么？"],
    settings: {
      official: "设备支持信息参考 DJI 官方支持页。",
      creator: "发布前清单属于创作者工作流经验。",
      test: "家长和孩子分别检查一次，看是否发现不同问题。"
    },
    sources: src("djiSupport", "communityForum", "communityReddit")
  },
  {
    day: 28,
    week: 4,
    title: "参数对比复拍",
    goal: "让孩子理解参数要服务画面，不是越高级越好。",
    operation: "同一场景拍两版，只改变一个变量，比如帧率、光线方向或横竖屏。",
    parameters: "官方确认：Pocket3 支持多种视频规格和色彩能力。创作者经验：儿童练习先比较 30fps 与 60fps、普通色彩与高阶色彩前的观感；D-Log M 等高阶设置需家长理解后再测试。",
    sceneChoice: "选择室内固定场景，主体和光线不变；不要在重要作品中临时试陌生参数。",
    composition: "两版构图必须相同：主体位置、距离、背景都尽量一致，才能比较参数影响。",
    portrait: "如果测试人像，两版人物比例都保持半身 55%-65%，避免构图变化干扰判断。",
    why: "只改变一个变量，孩子才能知道画面变化来自哪里。",
    task: "拍同一动作 30fps 和 60fps 两版，比较手部动作是否更清楚。",
    storyboard: ["固定场景", "版本A", "记录参数", "版本B", "回看比较"],
    mistakes: ["同时改很多设置", "两版构图不同", "忘记记录参数", "把测试片公开"],
    parentQuestions: ["孩子是否只改一个变量？", "能说出哪版更适合当前任务吗？", "是否知道高阶参数要家长陪同？"],
    settings: {
      official: "多种视频规格和 D-Log M 等能力来自 DJI 官方资料。",
      creator: "单变量对比和参数记录属于创作者经验。",
      test: "孩子必须记录两版差别，不能只说高级参数更好。"
    },
    sources: src("djiProduct", "djiManual", "creatorEditors")
  },
  {
    day: 29,
    week: 4,
    title: "最终1分钟分镜",
    goal: "为最终作品写 8-10 个镜头，每个镜头都有参数、构图和目的。",
    operation: "先写主题，再列镜头表：景别、人物比例、声音、是否需要补拍。",
    parameters: "创作者经验：最终片统一帧率、色彩和横竖屏方向；参数不要每天换。官方确认的高阶能力可以用，但必须服务故事。",
    sceneChoice: "家庭安全主题：我的阅读角、一次手工完成、我的周末小计划；不选公共场所陌生人主题。",
    composition: "全景 1-2 个，中景 3-4 个，近景 2-3 个，反应 1 个；避免连续同一景别。",
    portrait: "人物镜头控制在总时长一半以内；半身 55%-65%，正脸公开前必须家长审核。",
    why: "最终作品要证明孩子会计划，而不是只会按按钮。",
    task: "完成最终 1 分钟 Vlog 的镜头表，今天只计划和试拍 2 条。",
    storyboard: ["主题", "定场", "人物", "动作", "细节", "声音", "反应", "结尾"],
    mistakes: ["镜头太多拍不完", "参数不统一", "忘记声音", "安全检查放最后才想"],
    parentQuestions: ["主题是否安全？", "镜头数量是否适合 1 分钟？", "每个镜头是否有目的？"],
    settings: {
      official: "视频规格、色彩能力和设备操作参考 DJI 官方资料。",
      creator: "镜头表和风格统一属于创作者经验。",
      test: "家长看分镜，不看片，判断能否想象成片。"
    },
    sources: src("djiProduct", "djiManual", "creatorKraft", "djiSupport")
  },
  {
    day: 30,
    week: 4,
    title: "最终作品复盘",
    goal: "完成 1 分钟 Vlog，并从参数、构图、人像、声音、隐私五方面复盘。",
    operation: "按第 29 天分镜拍摄和剪辑，导出前完整回看两遍：一遍看故事，一遍查安全。",
    parameters: "参数复盘：帧率是否合适，曝光是否稳定，白平衡是否前后一致，是否用了不理解的高阶设置。",
    sceneChoice: "只使用家长确认的家庭安全素材；任何含学校、住址、陌生人、证件、车牌的镜头不进入最终版。",
    composition: "检查是否有全景、中景、近景和反应；主体是否总能被一眼看出来。",
    portrait: "检查人像比例是否舒服：头顶 5%-10%，半身 55%-65%，正脸是否获得家长同意。",
    why: "最终复盘让孩子知道下一次该改哪个具体问题，而不是泛泛地说“更好看”。",
    task: "完成 1 分钟家庭主题 Vlog，并填写家长复盘表。不能由孩子自行公开发布。",
    storyboard: ["看故事", "查参数", "查构图", "听声音", "查隐私", "写复盘", "家长决定保存/分享"],
    mistakes: ["只看特效", "不听声音", "参数前后不一致", "没有家长审核就分享"],
    parentQuestions: ["故事是否一眼能懂？", "最需要重拍的是哪个具体镜头？", "是否通过隐私和发布审核？"],
    settings: {
      official: "设备能力、软件入口和支持资料参考 DJI 官方页面。",
      creator: "五方面复盘属于创作者工作流经验。",
      test: "让家长不看分镜直接看成片，复述主题和一个最清楚的镜头。"
    },
    sources: src("djiProduct", "djiManual", "djiLightCut", "djiSupport", "creatorKraft")
  }
];


const SAFETY_ITEMS = [
  ["视频只做本地预览", "视频评估页的文件选择只在当前浏览器预览，不把视频传到服务器、GitHub 或公开平台；网站只保存家长填写的文字评价。"],
  ["家长审核后再发布", "朋友圈、短视频平台、班级群公开分享前，都必须由家长检查内容、字幕、声音和背景。"],
  ["不暴露地点", "不要拍门牌、学校班级、快递单、车牌、证件、窗外定位标志。"],
  ["尊重他人肖像", "拍到同学、邻居、路人或家人正脸前要先征得同意。不同意就不拍正脸。"],
  ["安全地点拍摄", "不在马路边、楼梯口、厨房火源旁、阳台外沿或拥挤场所边走边拍。"],
  ["保护设备", "使用腕带，收纳前关机，不让镜头碰撞，不在雨水或沙尘环境中练习。"]
];

const RESEARCH_SUMMARY = {
  officialList: SOURCE_GROUPS.official,
  communityFaq: FAQ_ITEMS.map((item) => item.question),
  themes: [
    "开机与安全检查", "首次使用与存储卡", "旋转屏和横竖构图", "云台回中与自拍", "触控屏菜单", "拍一个稳定镜头", "云台模式", "ActiveTrack 跟随",
    "人物构图", "走路拍摄", "平移镜头", "推近拉远", "近景与对焦", "声音清楚", "光线观察", "三种景别", "一句话主题", "吸引人的开头",
    "过程顺序", "采访家人", "5格分镜", "一周故事挑战", "素材整理", "剪掉多余片段", "字幕只写重点", "旁白和环境声", "封面标题",
    "隐私发布检查", "最终作品计划", "1分钟主题Vlog复盘"
  ]
};

function src(...ids) {
  return ids;
}

const COURSES = [
  {
    day: 1,
    week: 1,
    title: "开机与安全检查",
    goal: "认识 Pocket3，学会开机、关机和拍摄前安全检查。",
    operation: "官方确认：按用户手册进行开关机；拍摄前检查腕带、镜头方向、电量和周围环境。",
    why: "先会安全拿设备，后面的所有拍摄练习才可靠。",
    task: "拍 3 个 5 秒镜头：设备放好、开机画面、关机收纳。",
    storyboard: ["设备安静放在桌上", "开机后屏幕亮起", "手腕绳和安全环境", "关机", "放回收纳位置"],
    mistakes: ["没戴腕带就走动", "镜头碰桌面", "拍到快递单或门牌"],
    parentQuestions: ["孩子是否能说出开机前要检查什么？", "有没有拍到隐私信息？", "收纳前是否关机？"],
    settings: {
      official: "开关机、基础拍摄和设备安全以 DJI 用户手册为准。",
      creator: "创作者常建议每次拍摄前做固定检查流程。",
      test: "让孩子自己说出今天少了哪一步检查。"
    },
    sources: src("djiManual", "djiBeginner")
  },
  {
    day: 2,
    week: 1,
    title: "首次使用与存储卡",
    goal: "理解激活、存储卡和剩余空间的重要性。",
    operation: "官方确认：首次使用按 DJI 入门指南完成准备；拍摄前确认存储介质和电量。",
    why: "没有空间或电量，故事拍到一半就会中断。",
    task: "在家长陪同下检查电量和可用空间，拍一段 10 秒测试视频后回看。",
    storyboard: ["检查电量", "检查剩余可拍时间", "拍测试镜头", "回看", "删除无用测试素材"],
    mistakes: ["不回看就继续拍", "看到提示也忽略", "误删重要视频"],
    parentQuestions: ["孩子能解释为什么要先拍测试片吗？", "是否知道不能乱删素材？", "是否由家长保管重要文件？"],
    settings: {
      official: "首次使用、激活、存储和电池说明参考 DJI 官方入门指南和手册。",
      creator: "创作者经验是拍正片前先拍测试片。",
      test: "孩子测试一次 10 秒视频是否能正常保存和播放。"
    },
    sources: src("djiBeginner", "djiDownloads", "djiManual")
  },
  {
    day: 3,
    week: 1,
    title: "旋转屏和横竖构图",
    goal: "学会横屏、竖屏切换，并知道不同画面比例适合不同用途。",
    operation: "官方确认：Pocket3 配备可旋转触摸屏，可用于横向和竖向拍摄。",
    why: "横屏适合电视、电脑和家庭相册；竖屏适合手机观看，但公开发布必须家长审核。",
    task: "同一个水杯分别拍横屏和竖屏各 8 秒，说出哪个更适合家庭电视看。",
    storyboard: ["横屏全景", "横屏近景", "竖屏全景", "竖屏近景", "回看比较"],
    mistakes: ["旋转屏太用力", "竖屏时把主体切掉", "只想着发布平台不考虑隐私"],
    parentQuestions: ["孩子能说出横屏和竖屏差别吗？", "主体有没有完整出现？", "是否知道发布前需要家长审核？"],
    settings: {
      official: "旋转屏和横竖拍摄能力来自 DJI 官方资料。",
      creator: "创作者经验是先按观看场景选择横竖屏。",
      test: "让孩子比较同一主体两种方向的观看感受。"
    },
    sources: src("djiProduct", "djiManual", "creatorKraft")
  },
  {
    day: 4,
    week: 1,
    title: "云台回中与自拍",
    goal: "学会让镜头回到正前方，并在家长同意时练习自拍构图。",
    operation: "官方确认：用户手册说明了云台控制、回中和自拍相关操作。",
    why: "云台方向乱了，先回中可以让孩子重新找回画面。",
    task: "拍 10 秒自我介绍：我今天要练习什么。只在家庭内观看。",
    storyboard: ["云台回中", "切到自拍方向", "脸在画面中间", "说一句目标", "切回普通拍摄"],
    mistakes: ["脸太靠边", "背景有家庭隐私", "边走边自拍"],
    parentQuestions: ["自拍前是否整理了安全背景？", "孩子声音是否清楚？", "是否只保存为家庭练习？"],
    settings: {
      official: "云台回中、自拍方向以 DJI 手册为准。",
      creator: "创作者经验是自拍时留出头顶空间和背景空间。",
      test: "孩子回看脸部位置是否自然。"
    },
    sources: src("djiManual", "djiProduct", "creatorUlanzi")
  },
  {
    day: 5,
    week: 1,
    title: "触控屏菜单",
    goal: "认识触控屏常用入口，不乱改复杂参数。",
    operation: "官方确认：用户手册说明了触控屏、拍摄模式和常用设置入口。",
    why: "知道在哪里看模式和提示，可以减少误操作。",
    task: "不拍正片，只和家长一起找出拍照、视频、回放三个入口。",
    storyboard: ["主界面", "视频入口", "拍照入口", "回放入口", "回到主界面"],
    mistakes: ["随意改参数后忘记恢复", "误删素材", "边走边看屏幕"],
    parentQuestions: ["孩子是否只找入口、不乱改？", "是否知道误删素材要立刻告诉家长？", "是否能回到主界面？"],
    settings: {
      official: "触控屏和模式说明来自 DJI 手册。",
      creator: "创作者经验是新手先少改参数，多练稳定和构图。",
      test: "孩子独立指出三个入口即可。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 6,
    week: 1,
    title: "拍一个稳定镜头",
    goal: "双手持机，拍出一个 10 秒不晃的画面。",
    operation: "官方确认：Pocket3 采用三轴机械云台稳定画面；孩子仍需要正确握持。",
    why: "云台帮助稳定方向，但手和脚的动作也会影响画面。",
    task: "拍一个 10 秒静物镜头，主体只选一个。",
    storyboard: ["站稳", "主体放中间", "开始前停 2 秒", "录制 10 秒", "结束后停 2 秒"],
    mistakes: ["刚按录制就移动", "主体跑出画面", "一边说话一边乱晃"],
    parentQuestions: ["孩子开始前是否站稳？", "画面是否可看清主体？", "是否愿意重拍一次更稳的版本？"],
    settings: {
      official: "三轴云台能力来自 DJI 官方产品页。",
      creator: "创作者经验是双手持机、手肘靠近身体。",
      test: "回看 10 秒，看主体是否始终清楚。"
    },
    sources: src("djiProduct", "djiManual", "creatorUlanzi")
  },
  {
    day: 7,
    week: 1,
    title: "第一周基础挑战",
    goal: "复习开关机、触控屏、横竖屏、云台回中和稳定镜头。",
    operation: "官方确认的基础操作都来自 DJI 手册；本挑战只做家庭练习。",
    why: "把零散操作连成一次完整拍摄流程。",
    task: "拍 30 秒“我喜欢的一个小物件”，至少 4 个镜头。",
    storyboard: ["开头说主题", "横屏全景", "竖屏细节", "稳定近景", "一句感受结尾"],
    mistakes: ["没有主题", "忘记回看", "把家庭地址或姓名拍进去"],
    parentQuestions: ["孩子能独立完成安全检查吗？", "是否有 4 个镜头？", "家长给出的一个改进点是什么？"],
    settings: {
      official: "开关机、触控和云台基础操作参考 DJI 手册。",
      creator: "创作者经验是每条短片都要有开头和结尾。",
      test: "孩子对比第一次和重拍版本。"
    },
    sources: src("djiManual", "djiProduct", "creatorKraft")
  },
  {
    day: 8,
    week: 2,
    title: "云台模式初体验",
    goal: "知道不同云台模式会影响镜头跟随方式。",
    operation: "官方确认：手册说明云台模式和跟随方式；儿童练习只观察差别。",
    why: "模式不同，镜头运动的感觉会不同，先观察再选择。",
    task: "同一个书架用两种云台模式各拍 8 秒，回看差别。",
    storyboard: ["模式A起点", "慢慢转身", "模式A终点", "模式B重复", "回看比较"],
    mistakes: ["一边走一边试模式", "没记住哪个镜头用哪个模式", "把模式差别当成设备故障"],
    parentQuestions: ["孩子能描述两段画面差别吗？", "是否在安全位置试拍？", "是否没有乱改其他设置？"],
    settings: {
      official: "云台模式以 DJI 用户手册为准。",
      creator: "创作者经验是先用简单模式练熟，再尝试复杂运动。",
      test: "同一场景实拍比较，不要求背参数名。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 9,
    week: 2,
    title: "ActiveTrack 跟随",
    goal: "了解主体跟随，知道它不是万能的。",
    operation: "官方确认：Pocket3 支持 ActiveTrack 6.0；实际跟随效果受主体、遮挡和环境影响。",
    why: "跟随功能可以帮助拍人物，但孩子仍要保持安全距离和清楚构图。",
    task: "让家长在安全区域慢慢移动，练习跟随 10 秒。",
    storyboard: ["选中主体", "家长慢慢移动", "保持距离", "主体回到画面中间", "回看跟随效果"],
    mistakes: ["在路边追拍", "主体被遮挡还继续拍", "以为功能能保证所有情况都成功"],
    parentQuestions: ["孩子是否保持安全距离？", "主体有没有跑出画面？", "孩子能说出什么时候需要重拍吗？"],
    settings: {
      official: "ActiveTrack 6.0 来自 DJI 官方产品页和手册。",
      creator: "创作者经验是主体动作慢一点、背景简单一点更适合新手。",
      test: "让孩子在安全室内测试跟随是否稳定。"
    },
    sources: src("djiProduct", "djiManual", "communityForum")
  },
  {
    day: 10,
    week: 2,
    title: "人物构图",
    goal: "练习让人物不顶头、不切手、不贴边。",
    operation: "官方确认：Pocket3 可用于人物拍摄和跟踪；构图方法属于摄影基础训练。",
    why: "人物位置舒服，观众才容易看懂说话者。",
    task: "拍家长 3 个 6 秒镜头：半身、手部动作、表情反应。",
    storyboard: ["半身介绍", "手部动作", "侧面反应", "回到半身", "一句感谢"],
    mistakes: ["头顶贴边", "背景太乱", "没征得同意就拍人"],
    parentQuestions: ["受拍者是否同意？", "人物位置是否舒服？", "背景是否安全整洁？"],
    settings: {
      official: "人物拍摄与跟踪能力来自 DJI 官方资料。",
      creator: "创作者经验是给人物头顶留一点空间。",
      test: "孩子回看并指出哪一段人物最自然。"
    },
    sources: src("djiProduct", "creatorUlanzi")
  },
  {
    day: 11,
    week: 2,
    title: "走路拍摄",
    goal: "练习安全慢走，减少画面上下起伏。",
    operation: "官方确认：三轴云台提供稳定能力；走路产生的脚步起伏需要拍摄者控制。",
    why: "稳定不是只靠设备，脚步和速度也很重要。",
    task: "在客厅安全路线慢走 5 步，拍一个 8 秒镜头。",
    storyboard: ["确认路线", "开始前停住", "慢走 5 步", "到终点停住", "回看晃动"],
    mistakes: ["边看屏幕边走", "走太快", "路线有障碍物"],
    parentQuestions: ["路线是否安全？", "孩子是否看路而不是盯屏幕？", "画面是否比第一次更稳？"],
    settings: {
      official: "稳定能力来自 DJI 官方产品页。",
      creator: "走路减少起伏属于创作者经验建议。",
      test: "必须让孩子在家长陪同下实拍比较。"
    },
    sources: src("djiProduct", "creatorCapture", "communityReddit")
  },
  {
    day: 12,
    week: 2,
    title: "平移镜头",
    goal: "学会从左到右慢慢移动镜头。",
    operation: "官方确认：云台可帮助平滑方向变化；平移速度由拍摄者控制。",
    why: "平移可以展示环境，但太快会让人看不清。",
    task: "拍一个 12 秒书架平移镜头，起点和终点各停 2 秒。",
    storyboard: ["起点停 2 秒", "慢慢平移", "保持水平", "终点停 2 秒", "回看速度"],
    mistakes: ["像扫视一样太快", "起点终点没有停", "画面倾斜"],
    parentQuestions: ["速度是否能看清物品？", "起点终点是否停住？", "孩子是否能说出最清楚的一段？"],
    settings: {
      official: "云台稳定能力来自 DJI 官方资料。",
      creator: "起点终点停顿属于创作者常用拍摄经验。",
      test: "孩子分别拍快慢两版并比较。"
    },
    sources: src("djiProduct", "creatorKraft")
  },
  {
    day: 13,
    week: 2,
    title: "推近和拉远",
    goal: "用脚步改变距离，拍远景、近景和细节。",
    operation: "官方确认：Pocket3 支持视频拍摄和快速对焦能力；移动安全由拍摄者负责。",
    why: "距离变化能让一个普通物品变得有层次。",
    task: "拍一个手工作品：远处介绍、慢慢靠近、细节停住。",
    storyboard: ["远景", "慢慢推近", "细节", "拉远", "结尾一句话"],
    mistakes: ["靠太近导致看不清", "倒退时不看路", "移动中撞到桌子"],
    parentQuestions: ["移动路线是否安全？", "细节是否清楚？", "孩子是否知道靠近前要先看路？"],
    settings: {
      official: "快速对焦和拍摄能力参考 DJI 官方资料。",
      creator: "推近拉远是创作者常用镜头语言。",
      test: "孩子比较远景和近景哪个更能表现主题。"
    },
    sources: src("djiProduct", "creatorUlanzi")
  },
  {
    day: 14,
    week: 2,
    title: "声音清楚",
    goal: "练习让说话声和环境声更清楚。",
    operation: "官方确认：用户手册说明音频、麦克风和录制相关设置；儿童先练安静环境和清楚说话。",
    why: "Vlog 不只是画面，声音也会影响别人是否听懂。",
    task: "拍 15 秒翻书或介绍文具的镜头，回放检查声音。",
    storyboard: ["安静环境", "主体近一点", "说一句介绍", "录 5 秒环境声", "回放检查"],
    mistakes: ["电视声太大", "离说话者太远", "背景音乐盖过人声"],
    parentQuestions: ["声音是否能听清？", "是否减少了无关噪声？", "孩子能说出怎么改进吗？"],
    settings: {
      official: "音频录制基础参考 DJI 手册。",
      creator: "靠近声源、先回放检查属于创作者经验。",
      test: "同一句话远近各拍一次比较音量。"
    },
    sources: src("djiManual", "creatorKraft", "communityBilibili")
  },
  {
    day: 15,
    week: 2,
    title: "光线观察",
    goal: "认识顺光、侧光和背光，避免强光直射镜头。",
    operation: "官方确认：Pocket3 具备较强影像能力；光线选择属于摄影基础，需要实拍观察。",
    why: "好光线能让主体更清楚，不一定需要复杂参数。",
    task: "同一个玩具拍顺光、侧光、背光三段各 5 秒。",
    storyboard: ["顺光", "侧光", "背光", "回看亮暗", "选最好一段"],
    mistakes: ["直接对强光", "主体太黑", "为了光线站到危险位置"],
    parentQuestions: ["哪种光线最清楚？", "有没有避开强光直射？", "孩子是否能解释选择原因？"],
    settings: {
      official: "影像能力来自 DJI 官方产品资料。",
      creator: "用自然光和侧光属于创作者经验。",
      test: "孩子必须用同一主体实拍比较。"
    },
    sources: src("djiProduct", "creatorEditors")
  },
  {
    day: 16,
    week: 3,
    title: "三种景别",
    goal: "用全景、中景、近景讲清一个物品。",
    operation: "Pocket3 负责记录画面；景别是 Vlog 表达训练，不是设备参数。",
    why: "全景告诉在哪里，中景告诉是什么，近景告诉细节。",
    task: "拍 30 秒“我的学习角”，至少包含三种景别。",
    storyboard: ["全景学习角", "中景桌面", "近景文具", "使用动作", "一句感受"],
    mistakes: ["所有镜头距离一样", "近景太近看不清", "背景有隐私"],
    parentQuestions: ["三种景别是否明显？", "孩子能说出每个镜头用途吗？", "是否移开隐私物品？"],
    settings: {
      official: "拍摄基础参考 DJI 手册。",
      creator: "三种景别属于创作者常用叙事方法。",
      test: "让孩子把镜头顺序换一下，比较哪种更清楚。"
    },
    sources: src("djiManual", "creatorKraft", "creatorUlanzi")
  },
  {
    day: 17,
    week: 3,
    title: "一句话主题",
    goal: "拍之前先写一句话主题。",
    operation: "设备操作保持简单；重点是把要表达的内容说清楚。",
    why: "主题清楚，拍摄时就不会东拍一下西拍一下。",
    task: "用一句话确定主题，再拍 3 个相关镜头。",
    storyboard: ["说主题", "展示环境", "展示主体", "展示动作", "结尾感受"],
    mistakes: ["主题太大", "镜头和主题无关", "只拍好看不讲清楚"],
    parentQuestions: ["主题是否一句话能说清？", "每个镜头是否围绕主题？", "孩子能删掉无关镜头吗？"],
    settings: {
      official: "拍摄操作参考 DJI 手册。",
      creator: "先写主题属于创作者脚本经验。",
      test: "孩子给家长看，家长能否说出主题。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 18,
    week: 3,
    title: "吸引人的开头",
    goal: "用细节、问题或动作做开头。",
    operation: "Pocket3 只负责拍摄；开头设计属于 Vlog 叙事训练。",
    why: "开头越清楚，观众越容易知道接下来要看什么。",
    task: "为同一主题拍 3 个不同开头，家长帮忙选一个。",
    storyboard: ["细节开头", "问题开头", "动作开头", "回看选择", "记录原因"],
    mistakes: ["开头太长", "卖关子但后面没答案", "开头拍到隐私"],
    parentQuestions: ["哪个开头最清楚？", "孩子能说明原因吗？", "是否避免夸张或误导？"],
    settings: {
      official: "视频拍摄基础来自 DJI 手册。",
      creator: "开头设计属于创作者经验。",
      test: "孩子让家长看前 5 秒猜主题。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 19,
    week: 3,
    title: "过程顺序",
    goal: "用开始、进行、完成讲清一个小过程。",
    operation: "拍摄时使用稳定镜头和简单切换，不需要复杂参数。",
    why: "过程顺序清楚，Vlog 才像一个小故事。",
    task: "拍整理书包或完成手工的三步骤过程。",
    storyboard: ["开始状态", "第一步", "第二步", "完成状态", "一句总结"],
    mistakes: ["漏掉关键步骤", "每一步太长", "只拍结果不拍过程"],
    parentQuestions: ["家长能看懂步骤吗？", "有没有漏拍关键动作？", "哪一步可以剪短？"],
    settings: {
      official: "基础录制操作参考 DJI 手册。",
      creator: "三步骤结构属于创作者叙事经验。",
      test: "打乱镜头顺序让孩子重新排好。"
    },
    sources: src("djiManual", "creatorUlanzi")
  },
  {
    day: 20,
    week: 3,
    title: "采访家人",
    goal: "练习提问、倾听和尊重被拍摄者。",
    operation: "官方录制操作保持简单；拍人前必须征得同意。",
    why: "采访能训练孩子听别人说话，也能练声音清楚。",
    task: "采访家长 2 个问题，只在家庭内观看。",
    storyboard: ["征得同意", "问题1", "倾听回答", "问题2", "感谢对方"],
    mistakes: ["没征得同意就录", "抢话", "问题太长"],
    parentQuestions: ["孩子是否先征得同意？", "问题是否简短？", "声音是否清楚？"],
    settings: {
      official: "录制和音频基础参考 DJI 手册。",
      creator: "采访要短问题、近距离收音属于创作者经验。",
      test: "回看孩子是否打断受访者。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 21,
    week: 3,
    title: "5格分镜",
    goal: "用开头、环境、细节、动作、结尾计划一条短片。",
    operation: "先写分镜，再按镜头拍摄，减少漏拍。",
    why: "分镜让孩子先思考故事，不只是看到什么拍什么。",
    task: "填写网站分镜模板，拍 5 个镜头。",
    storyboard: ["开头", "环境", "细节", "动作", "结尾"],
    mistakes: ["边拍边想导致漏镜头", "镜头顺序混乱", "结尾没有感受"],
    parentQuestions: ["5 格是否都拍了？", "顺序是否能讲故事？", "孩子能指出最重要的一格吗？"],
    settings: {
      official: "设备拍摄操作参考 DJI 手册。",
      creator: "5 格分镜属于创作者脚本经验。",
      test: "孩子拍完后按分镜逐项打勾。"
    },
    sources: src("djiManual", "creatorKraft", "creatorUlanzi")
  },
  {
    day: 22,
    week: 3,
    title: "一周故事挑战",
    goal: "完成一条 45 秒有开头、中间、结尾的小故事。",
    operation: "设备使用保持安全和稳定，重点检查故事完整性。",
    why: "把操作、构图、声音和分镜合在一起，形成真正的表达。",
    task: "拍“我完成的一件小事”，家庭内观看。",
    storyboard: ["我想做什么", "准备", "过程", "完成", "我的感受"],
    mistakes: ["只有过程没有主题", "声音听不清", "没有结尾"],
    parentQuestions: ["故事是否完整？", "孩子最满意哪个镜头？", "下一次只改进哪一件事？"],
    settings: {
      official: "录制基础参考 DJI 手册。",
      creator: "完整故事结构属于创作者经验。",
      test: "家长复述作品主题，看是否一致。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 23,
    week: 4,
    title: "素材整理",
    goal: "理解剪辑前先整理素材。",
    operation: "官方资料提供文件、存储和软件入口；儿童只做家庭素材整理，不上传。",
    why: "先选清楚素材，剪辑才不会混乱。",
    task: "从最近素材中选 5 个镜头，按开头、中间、结尾排好。",
    storyboard: ["选开头", "选环境", "选过程", "选细节", "选结尾"],
    mistakes: ["把所有素材都塞进去", "误删重要片段", "把隐私镜头留下"],
    parentQuestions: ["是否先备份重要素材？", "是否删除隐私镜头？", "顺序是否容易看懂？"],
    settings: {
      official: "下载中心和手册提供文件与软件资料入口。",
      creator: "先粗选再剪辑属于创作者经验。",
      test: "孩子解释为什么保留这 5 个镜头。"
    },
    sources: src("djiDownloads", "djiManual", "creatorKraft")
  },
  {
    day: 24,
    week: 4,
    title: "剪掉多余片段",
    goal: "学会去掉开始前等待、手抖和无关内容。",
    operation: "剪辑工具可由家长选择；本课只训练判断哪些片段该保留。",
    why: "剪掉多余部分，作品会更清楚、更短。",
    task: "选一段 15 秒素材，剪成 8-10 秒的清楚版本。",
    storyboard: ["原素材开头", "真正开始处", "保留主体动作", "剪掉结尾晃动", "回看"],
    mistakes: ["剪掉重要动作", "节奏太急", "只为了好看保留无关镜头"],
    parentQuestions: ["剪短后是否更清楚？", "有没有误删关键信息？", "孩子能说出剪掉原因吗？"],
    settings: {
      official: "剪辑工具入口参考 DJI LightCut 和官方资料。",
      creator: "先删无关片段属于创作者经验。",
      test: "比较原版和剪短版。"
    },
    sources: src("djiLightCut", "creatorKraft")
  },
  {
    day: 25,
    week: 4,
    title: "字幕只写重点",
    goal: "字幕短、清楚、不遮挡主体、不写隐私。",
    operation: "字幕属于剪辑表达，不是 Pocket3 必须操作。",
    why: "字幕帮助理解，但写太多会挡住画面。",
    task: "给一条 20 秒家庭练习片加 2-3 条短字幕。",
    storyboard: ["标题字幕", "重点词", "动作说明", "不写隐私", "家长检查"],
    mistakes: ["写真实姓名学校", "字幕挡住脸", "字幕太长读不完"],
    parentQuestions: ["字幕是否有隐私？", "是否挡住主体？", "是否只写重点？"],
    settings: {
      official: "剪辑辅助工具参考 DJI LightCut。",
      creator: "短字幕和不遮挡主体属于创作者经验。",
      test: "家长 3 秒内能否读完字幕。"
    },
    sources: src("djiLightCut", "creatorKraft")
  },
  {
    day: 26,
    week: 4,
    title: "旁白和环境声",
    goal: "学会旁白不重复画面，环境声不盖过人声。",
    operation: "官方确认设备可录制声音；后期旁白属于剪辑表达。",
    why: "好的声音能补充画面，不是把画面再念一遍。",
    task: "为一个 20 秒片段补 2 句旁白，并保留一个环境声。",
    storyboard: ["看画面", "写旁白", "录旁白", "听环境声", "家长回放"],
    mistakes: ["旁白太长", "背景音乐太大", "解释画面已经看得见的内容"],
    parentQuestions: ["旁白是否补充了新信息？", "人声是否清楚？", "环境声是否合适？"],
    settings: {
      official: "音频录制基础参考 DJI 手册。",
      creator: "旁白简短、环境声辅助属于创作者经验。",
      test: "关掉画面只听声音，能否听懂主题。"
    },
    sources: src("djiManual", "creatorKraft")
  },
  {
    day: 27,
    week: 4,
    title: "封面标题",
    goal: "选择清楚、安全、真实的封面和标题。",
    operation: "封面和标题属于发布前整理；公开前必须家长审核。",
    why: "封面标题会影响别人第一眼理解，也可能泄露隐私。",
    task: "为家庭作品选一张封面，写一个不超过 12 字的标题。",
    storyboard: ["选清楚画面", "避开隐私背景", "写真实标题", "家长检查", "只保存到家庭相册"],
    mistakes: ["标题夸张误导", "封面有门牌校服", "孩子自行公开发布"],
    parentQuestions: ["标题是否真实？", "封面是否安全？", "是否明确不能自行发布？"],
    settings: {
      official: "发布与隐私安全参考 DJI 支持和一般安全规则。",
      creator: "短标题、清楚封面属于创作者经验。",
      test: "家长看封面能否猜出主题。"
    },
    sources: src("djiSupport", "creatorKraft")
  },
  {
    day: 28,
    week: 4,
    title: "隐私发布检查",
    goal: "学会公开前的安全检查清单。",
    operation: "本网站不上传视频；是否分享由家长决定。",
    why: "有些信息只在背景里出现一秒，也可能泄露隐私。",
    task: "用安全清单检查一条旧作品：地点、人物、声音、字幕、评论范围。",
    storyboard: ["查地点", "查人物同意", "查字幕", "查声音", "家长决定是否分享"],
    mistakes: ["只检查画面不听声音", "忽略窗外和快递单", "孩子自己决定公开"],
    parentQuestions: ["是否检查了画面和声音？", "是否出现未同意的人？", "是否由家长决定分享范围？"],
    settings: {
      official: "使用限制和支持信息参考 DJI 官方资料。",
      creator: "发布前清单属于创作者工作流经验。",
      test: "家长和孩子各检查一遍，看是否发现同一问题。"
    },
    sources: src("djiSupport", "creatorKraft", "communityForum")
  },
  {
    day: 29,
    week: 4,
    title: "最终作品计划",
    goal: "为 1 分钟主题 Vlog 写 5-7 个镜头计划。",
    operation: "设备操作选择孩子最熟悉的基础模式，不追求复杂参数。",
    why: "最终作品不是炫设置，而是清楚讲出一个小主题。",
    task: "写最终作品分镜，不急着拍完。",
    storyboard: ["主题一句话", "开头", "环境", "过程", "细节", "结尾感受", "安全检查"],
    mistakes: ["主题太大", "镜头太多", "为了效果去危险地点"],
    parentQuestions: ["主题是否安全适合家庭观看？", "镜头计划是否能在 1 分钟内完成？", "拍摄地点是否已确认？"],
    settings: {
      official: "基础拍摄操作参考 DJI 手册。",
      creator: "5-7 个镜头计划属于创作者经验。",
      test: "家长读分镜，看是否能理解成片。"
    },
    sources: src("djiManual", "creatorKraft", "creatorUlanzi")
  },
  {
    day: 30,
    week: 4,
    title: "1分钟主题Vlog复盘",
    goal: "完成 1 分钟主题 Vlog，并和家长一起复盘。",
    operation: "拍摄、整理、剪辑和发布检查都按前 29 天流程完成。",
    why: "复盘让孩子知道自己哪里进步了，也知道下一次只改一件事。",
    task: "完成 1 分钟家庭主题 Vlog，填写家长复盘表。公开发布前必须家长审核。",
    storyboard: ["主题开头", "环境说明", "过程", "细节", "感受结尾", "剪辑", "家长复盘"],
    mistakes: ["只追求特效", "不检查隐私", "没有让家长看最终版"],
    parentQuestions: ["作品是否有开头、中间、结尾？", "是否没有隐私和未经同意的人？", "孩子下一次最想改进什么？"],
    settings: {
      official: "设备操作和软件入口参考 DJI 官方资料。",
      creator: "完整成片和复盘属于创作者工作流经验。",
      test: "让家长先不看分镜，只看成片复述主题。"
    },
    sources: src("djiManual", "djiLightCut", "creatorKraft", "djiSupport")
  }
];

COURSES.splice(0, COURSES.length, ...ADVANCED_COURSES);
RESEARCH_SUMMARY.themes = ADVANCED_COURSES.map((course) => course.title);
