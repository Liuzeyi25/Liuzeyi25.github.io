const scholarUrl =
  "https://scholar.google.com.hk/citations?user=f_3PzB8AAAAJ&hl=en";

const news = [
  ["2026.07", <>We release one work on <a href="https://arxiv.org/pdf/2607.02431" target="_blank" rel="noreferrer">World Model for Real-Robot RL</a></>],
  ["2026.06", <>We release one work on <a href="https://arxiv.org/pdf/2606.03949" target="_blank" rel="noreferrer">Preference-Calibrated Real-Robot RL</a></>],
  ["2026.01", <>Start one year visiting in <a href="https://pine-lab-ntu.github.io/" target="_blank" rel="noreferrer">PINE Lab</a> at EEE of Nanyang Technological University, directed by Prof. <a href="https://ziweiwangthu.github.io/" target="_blank" rel="noreferrer">Ziwei Wang</a>.</>],
  ["2026.01", <>One paper on <a href="https://ieeexplore.ieee.org/abstract/document/11346042/" target="_blank" rel="noreferrer">Diffusion model for Industrial AIGC</a> is accepted by IEEE T-CYB</>],
  ["2025.12", "入选2025年中国科协青年科技人才培育工程博士生专项计划 ."],
  ["2025.05", <>One paper on <a href="https://ieeexplore.ieee.org/abstract/document/10948317" target="_blank" rel="noreferrer">Source-free UDA</a> is accepted by IEEE RA-L</>],
] as const;

const publications: Array<{
  venue: string;
  year: string;
  title: string;
  authors: React.ReactNode;
  paper: string;
  code?: string;
  website?: string;
}> = [
  {
    venue: "IEEE Transactions on Cybernetics",
    year: "2026",
    title: "A Diffusion-based Unified Framework for Open-World Dynamic Wheel Recognition System Construction and Maintenance with Incomplete Data",
    authors: <><strong>Zeyi Liu</strong>, Weihua Gui, Keke Huang, Dehao Wu, Chunhua Yang</>,
    paper: "https://ieeexplore.ieee.org/document/11346042",
    code: "https://github.com/Liuzeyi25/TCYB-STS-DM",
  },
  {
    venue: "IEEE Robotics and Automation Letters",
    year: "2025",
    title: "Contrastive Learning-Based Secure Unsupervised Domain Adaptation Framework and Its Application in Cross-Factory Intelligent Manufacturing",
    authors: <><strong>Zeyi Liu</strong>, Weihua Gui, Keke Huang, Dehao Wu, Yue Liao, Chunhua Yang</>,
    paper: "https://ieeexplore.ieee.org/document/10948317",
  },
  {
    venue: "IEEE Transactions on Automation Science and Engineering",
    year: "2024",
    title: "Fault Diagnosis of Complex Industrial Systems Based on Multi-Granularity Dictionary Learning and Its Application",
    authors: <><strong>Zeyi Liu</strong>, Dehao Wu, Keke Huang, Chunhua Yang, Weihua Gui</>,
    paper: "https://ieeexplore.ieee.org/document/9963791",
  },
  {
    venue: "arXiv / CoRL submission",
    year: "2026",
    title: "Preference-Calibrated Human-in-the-Loop Reinforcement Learning for Robotic Manipulation",
    authors: <><strong>Zeyi Liu</strong>, Guangyao Liu, Yinuo Qu, Yuquan Xue, Bofang Jia, Chunhua Yang, Weihua Gui, Keke Huang, Ziwei Wang</>,
    paper: "https://arxiv.org/abs/2606.03949",
    code: "https://anonymous.4open.science/r/HILRL-A1X-BC05",
  },
  {
    venue: "arXiv / CoRL submission",
    year: "2026",
    title: "WorldSample: Closed-loop Real-robot RL with World Modelling",
    authors: <>Yuquan Xue, Le Xu, <strong>Zeyi Liu</strong>, Zhenyu Wu, Zhengyi Gu, Xinyang Song, Bofang Jia, Ziwei Wang</>,
    paper: "https://arxiv.org/abs/2607.02431",
    website: "https://xxreinsno.github.io/worldsample/",
  },
];

const education = [
  <><em>2026.01 - 2027.01</em>, Visiting Ph.D. Student, School of Electrical and Electronic Engineering, Nanyang Technological University, Singapore.</>,
  <><em>2022.09 - 2027.06</em>, Ph.D. Student in Control Science and Engineering, School of Automation, Central South University, Changsha.</>,
  <><em>2018.09 - 2022.06</em>, B.Eng. in Automation, School of Automation, Central South University, Changsha.</>,
];

const reviewer = [
  "IEEE Transactions on Industrial Informatics (TII)",
  "IEEE Transactions on Automation Science and Engineering (TASE)",
  "IET Cyber-Physical Systems",
  "Conference on Robot Learning (CoRL)",
];

const honors = [
  ["2024", "First Prize, Hunan Graduate Artificial Intelligence Innovation Competition"],
  ["2024", "First Prize for Outstanding Paper Presentation, Hunan Graduate Innovation Forum"],
  ["2024", "Third Prize, China Graduate Mathematical Contest in Modeling"],
  ["2023", "Second Prize, China Graduate Mathematical Contest in Modeling"],
  ["2020", "National Scholarship"],
  ["2019", "National Scholarship"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#about" aria-label="Zeyi Liu home">Zeyi Liu</a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#news">News</a>
          <a href="#publications">Publications</a>
          <a href="#education">Education</a>
          <a href="#reviewer">Reviewer</a>
          <a href="#honors">Honors</a>
        </nav>
      </header>

      <div className="page-shell">
        <aside className="profile-card" aria-label="Profile">
          <img className="profile-photo" src="/profile.jpg" alt="A golden retriever puppy in autumn leaves" />
          <h1>Zeyi Liu <span>刘泽一</span></h1>
          <p className="profile-title">Ph.D. Candidate</p>
          <p className="profile-affiliation">Central South University<br />Visiting Ph.D. Researcher at NTU</p>
          <ul className="profile-details">
            <li>Singapore</li>
            <li>Industrial Intelligence</li>
            <li>Embodied Intelligence</li>
          </ul>
          <div className="profile-links">
            <a href="mailto:liuzeyi@csu.edu.cn">Email</a>
            <a href={scholarUrl} target="_blank" rel="noreferrer">Google Scholar</a>
            <a href="https://github.com/Liuzeyi25" target="_blank" rel="noreferrer">GitHub</a>
            <span>CV · coming soon</span>
          </div>
        </aside>

        <article className="content-column">
          <section className="about-section" id="about">
            <h2 className="sr-only">About Me</h2>
            <div className="academic-positions">
              <p>
                <strong>Ph.D. Student</strong>,{" "}
                <a href="https://soa.csu.edu.cn/" target="_blank" rel="noreferrer">School of Automation</a><br />
                <a href="https://baike.baidu.com/item/%E5%B7%A5%E4%B8%9A%E6%99%BA%E8%83%BD%E4%B8%8E%E7%B3%BB%E7%BB%9F%E6%95%99%E8%82%B2%E9%83%A8%E9%87%8D%E7%82%B9%E5%AE%9E%E9%AA%8C%E5%AE%A4/62846869" target="_blank" rel="noreferrer">Key Laboratory of Industrial Intelligence and Systems, Ministry of Education</a><br />
                <a href="https://en.csu.edu.cn/" target="_blank" rel="noreferrer">Central South University</a>, Changsha 410083, China<br />
                <strong>Supervisors:</strong> <a href="https://faculty.csu.edu.cn/guiweihua/zh_CN/index.htm" target="_blank" rel="noreferrer">Weihua Gui</a>, Academician of the Chinese Academy of Engineering, and Professor <a href="https://faculty.csu.edu.cn/huangkeke/zh_CN/index/64160/list/index.htm" target="_blank" rel="noreferrer">Keke Huang</a>
              </p>
              <p>
                <strong>Visiting Ph.D. Student</strong>,{" "}
                <a href="https://www.ntu.edu.sg/eee" target="_blank" rel="noreferrer">School of Electrical and Electronic Engineering</a><br />
                <a href="https://www.ntu.edu.sg/" target="_blank" rel="noreferrer">Nanyang Technological University</a>, Singapore 639798<br />
                <strong>Supervisor:</strong> Assistant Professor <a href="https://ziweiwangthu.github.io/" target="_blank" rel="noreferrer">Ziwei Wang</a>
              </p>
            </div>
            <p>
              I am currently a Ph.D. student in <a href="https://soa.csu.edu.cn/" target="_blank" rel="noreferrer">School of Automation</a> at <a href="https://en.csu.edu.cn/" target="_blank" rel="noreferrer">Central South University</a> and a visiting Ph.D. student in <a href="https://www.ntu.edu.sg/eee" target="_blank" rel="noreferrer">School of Electrical and Electronic Engineering</a> at <a href="https://www.ntu.edu.sg/" target="_blank" rel="noreferrer">Nanyang Technological University</a>. I received my B.Eng. degree in Automation from Central South University in 2022. Since January 2026, I have been a visiting Ph.D. student at Nanyang Technological University, where I conduct research in the <a href="https://pine-lab-ntu.github.io/" target="_blank" rel="noreferrer">PINE Lab</a> under the supervision of Assistant Professor <a href="https://ziweiwangthu.github.io/" target="_blank" rel="noreferrer">Ziwei Wang</a>.
            </p>
            <p>
              My current research focuses on Industrial Intelligence and Embodied AI.
            </p>
            <p>
              🔥🔥 I am looking for collaborators interested in Embodied AI, particularly Real-World RL and World Models for RL. Feel free to <a href="mailto:liuzeyi@csu.edu.cn">contact me</a>.
            </p>
          </section>

          <section id="news">
            <SectionHeading index="01" title="News" />
            <ul className="news-list">
              {news.map(([date, text], index) => <li key={`${date}-${index}`}><time>{date}</time><span>{text}</span></li>)}
            </ul>
          </section>

          <section id="publications">
            <SectionHeading index="02" title="Selected Publications" action={<a href={scholarUrl} target="_blank" rel="noreferrer">Full list on Google Scholar ↗</a>} />
            <ol className="publication-list">
              {publications.map((publication) => (
                <li key={publication.title}>
                  <h4>{publication.paper ? <a href={publication.paper} target="_blank" rel="noreferrer">{publication.title}</a> : publication.title}</h4>
                  <p className="authors">{publication.authors}</p>
                  <p className="publication-meta">
                    <em>{publication.venue}</em>, {publication.year}.
                    <a href={publication.paper} target="_blank" rel="noreferrer">Paper</a>
                    {publication.code ? <><span aria-hidden="true"> · </span><a href={publication.code} target="_blank" rel="noreferrer">Code</a></> : publication.website ? <><span aria-hidden="true"> · </span><a href={publication.website} target="_blank" rel="noreferrer">Website</a></> : <><span aria-hidden="true"> · </span><span>Code link pending</span></>}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section id="education">
            <SectionHeading index="03" title="Education" />
            <ul className="education-list">
              {education.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </section>

          <section id="reviewer">
            <SectionHeading index="04" title="Reviewer" />
            <ul className="reviewer-list">
              {reviewer.map((venue) => <li key={venue}>{venue}</li>)}
            </ul>
          </section>

          <section id="honors">
            <SectionHeading index="05" title="Honors & Awards" />
            <ul className="honors-list">
              {honors.map(([year, honor], index) => <li key={`${year}-${index}`}><time>{year}</time><span>{honor}</span></li>)}
            </ul>
          </section>

          <section id="outputs">
            <SectionHeading index="06" title="Patents & Software" />
            <ul className="output-list">
              <li><strong>4 granted national invention patents</strong> in domain adaptation, industrial fault diagnosis, zero-shot defect detection, and continual industrial monitoring.</li>
              <li><strong>2 registered software copyrights</strong> for controllable industrial content generation and manufacturing-process monitoring platforms.</li>
            </ul>
          </section>

          <footer>
            <span>© 2026 Zeyi Liu</span>
            <span>Last updated August 2026</span>
          </footer>
        </article>
      </div>
    </main>
  );
}

function SectionHeading({ index, title, action }: { index: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="section-heading">
      <h3><span>{index}</span>{title}</h3>
      {action}
    </div>
  );
}
