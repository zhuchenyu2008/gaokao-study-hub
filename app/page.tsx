import Link from "next/link";

const subjects = [
  { name: "语文", icon: "文", color: "coral", detail: "现代文阅读 · 古诗文" },
  { name: "数学", icon: "∑", color: "blue", detail: "函数 · 导数 · 立体几何" },
  { name: "英语", icon: "A", color: "violet", detail: "阅读 · 语法 · 写作" },
];
const courses = [
  { id: "math-functions", subject: "数学", tag: "正在学习", title: "函数与导数专题突破", teacher: "周言老师", lessons: "24 课时", progress: 68, tone: "course-blue" },
  { id: "chinese-reading", subject: "语文", tag: "推荐", title: "现代文阅读高分方法", teacher: "林夏老师", lessons: "18 课时", progress: 32, tone: "course-yellow" },
  { id: "english-reading", subject: "英语", tag: "基础巩固", title: "英语阅读理解精讲", teacher: "Alice 老师", lessons: "20 课时", progress: 12, tone: "course-mint" },
];
function Logo() { return <Link href="/" className="logo"><span className="logo-mark">✦</span><span>逐光课堂</span></Link>; }

export default function Home() {
  return <main>
    <header className="topbar"><Logo /><nav className="nav-links"><Link className="active" href="/">首页</Link><a href="#courses">课程</a><a href="#subjects">题库</a><a href="#plan">学习中心</a></nav><Link href="/profile" className="user-chip"><span className="avatar">朱</span><span><small>晚上好</small>朱辰宇</span></Link></header>
    <section className="hero paper-grid"><div className="paper scrap-one" /><div className="paper scrap-two" />
      <div className="hero-copy"><div className="eyebrow">▣ 2027 高考备考计划</div><h1>把每一次努力，<br />都变成看得见的进步</h1><p>系统课程、智能题库与学习计划，<br />陪你稳步走过高考备考的每一天。</p><div className="hero-actions"><Link className="btn primary" href="/course/math-functions">开始学习 <span>→</span></Link><a className="btn secondary" href="#courses">查看课程 <span>→</span></a></div><div className="trust-row"><span>✓ 全科系统课程</span><span>✓ 学情进度追踪</span><span>✓ 随堂讲义</span></div></div>
      <div className="hero-dashboard" id="plan"><div className="dash-card today-card"><div className="card-heading"><span className="icon-bubble">◷</span><strong>今日学习</strong><span className="date-pill">7月19日</span></div><div className="today-grid"><div><span className="mega-number">1<small>/2</small></span><p>今日剩余课程</p></div><div className="mini-chart"><i /><i /><i /><i /><i /><i /><i /></div></div><div className="streak">▣ 连续学习 <b>12</b> 天 <span>本周 5.2 小时</span></div></div>
        <div className="dash-card continue-card"><div className="card-heading"><strong>课程进度</strong><span className="muted">18 / 24 课时</span></div><div className="progress-content"><div className="progress-ring"><span>68<small>%</small></span></div><div className="progress-info"><h3>高考数学 · 函数专题</h3><div className="bar"><i style={{width:"68%"}} /></div><p>▶ 下一节：导数与单调性</p><Link className="mini-btn" href="/course/math-functions">继续学习　→</Link></div></div></div>
        <div className="subject-tabs"><span>▣ 语文</span><span className="selected">√x　数学</span><span>▣ 英语</span></div></div>
    </section>
    <section className="section" id="subjects"><div className="section-head"><div><span className="kicker">按学科夯实基础</span><h2>今天想学哪一科？</h2></div><a href="#courses">查看全部学科 →</a></div><div className="subject-grid">{subjects.map(s=><article className={`subject-card ${s.color}`} key={s.name}><span className="subject-icon">{s.icon}</span><div><h3>{s.name}</h3><p>{s.detail}</p></div><span className="arrow">↗</span></article>)}</div></section>
    <section className="section course-section" id="courses"><div className="section-head"><div><span className="kicker">为你的目标定制</span><h2>精选高考课程</h2></div><div className="filter-pills"><button className="on">全部</button><button>语文</button><button>数学</button><button>英语</button></div></div><div className="course-grid">{courses.map(c=><Link href={`/course/${c.id}`} className="course-card" key={c.id}><div className={`course-cover ${c.tone}`}><span className="course-subject">{c.subject}</span><span className="cover-formula">{c.subject==="数学"?"f′(x)":c.subject==="语文"?"读 · 思 · 答":"Read"}</span><span className="course-tag">{c.tag}</span></div><div className="course-body"><h3>{c.title}</h3><p>{c.teacher}　·　{c.lessons}</p><div className="course-progress"><div><i style={{width:`${c.progress}%`}} /></div><span>{c.progress}%</span></div></div></Link>)}</div></section>
    <footer><Logo /><p>专注每一步，抵达你想去的地方。</p><span>© 2026 逐光课堂</span></footer>
  </main>;
}
