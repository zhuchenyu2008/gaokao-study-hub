"use client";
import Link from "next/link";
import {useState} from "react";
export default function LearnPage(){const[loading,setLoading]=useState(false);return <main className="learn-page">
  <header className="learn-nav"><Link href="/course/math-functions">← 返回课程</Link><div><b>导数与函数单调性</b><span>函数与导数专题突破 · 第 5 课</span></div><Link href="/profile" className="learn-user"><span>今日剩余课程 <b>1/2</b></span><i>朱</i></Link></header>
  <section className="learning-layout"><div className="video-column"><div className={`video-stage ${loading?"is-loading":""}`}>{!loading?<button className="big-play" onClick={()=>setLoading(true)}><span>▶</span><b>点击播放课程</b><small>38:24</small></button>:<div className="loader-wrap"><span className="spinner"/><b>课程正在加载中</b><small>正在为你准备高清课程，请稍候…</small></div>}<div className="video-top"><span>高清</span><span>第 5 课</span></div></div>
    <div className="video-info"><div><span className="kicker">函数与导数 · 第二章</span><h1>导数与函数单调性</h1><p>本节掌握利用导数判断函数单调性的方法，并能规范书写单调区间。</p></div><button>☆ 收藏课程</button></div>
    <div className="keypoints"><h2>本节要点</h2>{[["01","导数符号与单调性的关系","理解 f′(x) ＞ 0 与函数递增之间的对应关系"],["02","求函数单调区间的规范步骤","定义域、求导、解不等式、写结论，四步缺一不可"],["03","含参数问题的分类讨论","找准临界点，根据参数范围进行完整分类"]].map(x=><div key={x[0]}><span>{x[0]}</span><p><b>{x[1]}</b><small>{x[2]}</small></p></div>)}</div></div>
    <aside className="learn-sidebar"><div className="tabs"><button className="on">课程目录</button><button>随堂讲义</button></div><div className="side-progress"><div><span>课程进度</span><b>68%</b></div><div className="wide-bar"><i/></div></div><h3>第二章　导数及其应用</h3>{["导数的概念与几何意义","导数与函数单调性","极值与最值问题","导数中的恒成立问题","导数综合压轴题"].map((x,i)=><div className={`side-lesson ${i===1?"active":""}`} key={x}><span>{i<1?"✓":i===1?"▶":i+4}</span><div><b>{x}</b><small>{i===1?"正在学习":"视频课程"}</small></div></div>)}<div className="next-tip"><small>下一节</small><b>极值与最值问题</b><span>约 44 分钟</span></div></aside>
  </section>
</main>}
