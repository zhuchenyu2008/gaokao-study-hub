import Link from "next/link";

const recentCourses = [
  { subject:"数学", title:"函数与导数专题突破", lesson:"导数与函数单调性", progress:68, cls:"profile-blue" },
  { subject:"语文", title:"现代文阅读高分方法", lesson:"论述类文本阅读", progress:32, cls:"profile-orange" },
  { subject:"英语", title:"英语阅读理解精讲", lesson:"主旨大意题", progress:12, cls:"profile-green" },
];

export default function ProfilePage(){return <main className="profile-page">
  <header className="inner-nav profile-nav"><Link href="/" className="logo"><span className="logo-mark">✦</span><span>逐光课堂</span></Link><nav><Link href="/">首页</Link><Link href="/#courses">我的课程</Link><b>用户中心</b></nav><Link href="/" className="back-home">返回首页 →</Link></header>
  <section className="profile-shell">
    <div className="profile-banner">
      <div className="profile-avatar">朱<span>✓</span></div>
      <div className="profile-identity"><p>欢迎回来</p><h1>朱辰宇</h1><div><span>学生</span><small>逐光课堂学员</small></div></div>
      <div className="profile-streak"><small>连续学习</small><strong>12 <em>天</em></strong><span>保持得很棒，继续加油！</span></div>
    </div>
    <div className="account-stats">
      <article><div className="stat-icon wallet">¥</div><div><small>账户余额</small><strong>¥0.00</strong><p>当前账户可用余额</p></div><button>充值</button></article>
      <article><div className="stat-icon role">学</div><div><small>当前身份</small><strong>学生</strong><p>高考备考阶段</p></div></article>
      <article><div className="stat-icon bought">▤</div><div><small>已购课程</small><strong>20 <em>门</em></strong><p>3 门正在学习</p></div><Link href="/#courses">查看课程 →</Link></article>
    </div>
    <div className="profile-layout">
      <section className="profile-content"><div className="profile-title"><div><span className="kicker">继续学习</span><h2>最近学习的课程</h2></div><Link href="/#courses">全部课程 →</Link></div>
        <div className="recent-list">{recentCourses.map((c,i)=><Link href={i===0?"/course/math-functions":"/#courses"} className="recent-course" key={c.title}><div className={`recent-cover ${c.cls}`}><span>{c.subject}</span><b>{c.subject==="数学"?"f′(x)":c.subject==="语文"?"阅":"A"}</b></div><div className="recent-info"><span>{c.subject} · 专题课</span><h3>{c.title}</h3><p>上次学习：{c.lesson}</p><div><i style={{width:`${c.progress}%`}} /></div></div><strong>{c.progress}%</strong><span className="recent-arrow">→</span></Link>)}</div>
      </section>
      <aside className="profile-aside"><div className="plan-card"><div><small>今日学习计划</small><strong>1<em>/2</em></strong><span>剩余课程</span></div><div className="plan-ring">50%</div><Link href="/course/math-functions">继续学习 →</Link></div><div className="settings-card"><h3>账户服务</h3><a><span>♙</span>个人资料<em>›</em></a><a><span>▣</span>订单记录<em>›</em></a><a><span>☆</span>我的收藏<em>›</em></a><a><span>?</span>帮助与反馈<em>›</em></a></div></aside>
    </div>
  </section>
</main>}
