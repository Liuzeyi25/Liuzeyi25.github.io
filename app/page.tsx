const scholarUrl =
  "https://scholar.google.com.hk/citations?user=f_3PzB8AAAAJ&hl=en";

const news = [
  ["2026.07", "Released WorldSample, a closed-loop real-robot reinforcement learning framework with world modelling."],
  ["2026.06", "Released Preference-Calibrated Human-in-the-Loop Reinforcement Learning for Robotic Manipulation."],
  ["2026", "Our open-world dynamic wheel recognition framework was published in IEEE Transactions on Cybernetics."],
  ["2026.01", "Started a visiting Ph.D. appointment at Nanyang Technological University."],
  ["2025", "Selected for the Young Elite Scientists Sponsorship Program for Ph.D. Students by CAST."],
  ["2025.05", "Our secure unsupervised domain adaptation framework was published in IEEE Robotics and Automation Letters."],
];

const researchAreas = [
  ["Embodied Intelligence & Robot Learning", "Sample-efficient reinforcement learning for real-robot manipulation, human feedback, reliable value estimation, and world models."],
  ["Industrial Intelligence", "Open-world recognition, secure domain adaptation, continual learning, and fault diagnosis for complex manufacturing systems."],
  ["Generative & Multimodal AI", "Controllable diffusion models and vision-language systems for generating, understanding, and reasoning about industrial visual data."],
];

const publications = [
  {
    venue: "IEEE Transactions on Cybernetics",
    year: "2026",
    title: "A Diffusion-Based Unified Framework for Open-World Dynamic Wheel Recognition System Construction and Maintenance With Incomplete Data",
    authors: <><strong>Zeyi Liu</strong>, Weihua Gui, Kai Huang, Donghua Wu, Chunhua Yang</>,
  },
  {
    venue: "Advanced Engineering Informatics",
    year: "2026",
    title: "MCDML-Net: A Multi-Center Deep Metric Learning Network and Its Wheel Manufacturing Application",
    authors: <><strong>Zeyi Liu</strong>, Weihua Gui, Kai Huang, Donghua Wu, Chunhua Yang</>,
  },
  {
    venue: "IEEE Robotics and Automation Letters",
    year: "2025",
    title: "Contrastive Learning-Based Secure Unsupervised Domain Adaptation Framework and Its Application in Cross-Factory Intelligent Manufacturing",
    authors: <><strong>Zeyi Liu</strong>, Weihua Gui, Kai Huang, Donghua Wu, Yue Liao, Chunhua Yang</>,
  },
  {
    venue: "IEEE Transactions on Automation Science and Engineering",
    year: "2022",
    title: "Fault Diagnosis of Complex Industrial Systems Based on Multi-Granularity Dictionary Learning and Its Application",
    authors: <><strong>Zeyi Liu</strong>, Donghua Wu, Kai Huang, Chunhua Yang, Weihua Gui</>,
  },
  {
    venue: "arXiv / CoRL submission",
    year: "2026",
    title: "Preference-Calibrated Human-in-the-Loop Reinforcement Learning for Robotic Manipulation",
    authors: <><strong>Zeyi Liu</strong>, Guangda Liu, Yiting Qu, Yuxuan Xue, Boyuan Jia, Chunhua Yang, Weihua Gui, Kai Huang, Ziwei Wang</>,
    paper: "https://arxiv.org/abs/2606.03949",
  },
  {
    venue: "arXiv / CoRL submission",
    year: "2026",
    title: "WorldSample: Closed-Loop Real-Robot RL with World Modelling",
    authors: <>Yuxuan Xue, Long Xu, <strong>Zeyi Liu</strong>, Zhenyu Wu, Zijian Gu, Xiaoxiao Song, Boyuan Jia, Ziwei Wang</>,
    paper: "https://arxiv.org/abs/2607.02431",
  },
  {
    venue: "IEEE Transactions on Instrumentation and Measurement",
    year: "2024",
    title: "Open World Wheels Recognition for Incomplete Data: A Two-Stage Solution Combining Data Generation and Metric Learning",
    authors: <>Kai Huang, Peng Wang, <strong>Zeyi Liu</strong>, Donghua Wu, Chunhua Yang, Weihua Gui</>,
  },
  {
    venue: "IEEE Transactions on Reliability",
    year: "2025",
    title: "Attention-Based Mask Network Model for Multirate Sampling Data Fault Diagnosis",
    authors: <>Kai Huang, <strong>Zeyi Liu</strong>, Shiyu Wu, Chunhua Yang, Weihua Gui</>,
  },
];

const projects = [
  {
    date: "2026.02—06",
    title: "Preference-Calibrated Human-in-the-Loop Real-Robot RL",
    description: "Identifies suboptimal segments in successful intervention trajectories and calibrates critic targets and actor updates using intervention-derived preferences.",
    result: "+24.5% success · −14.8% interventions · 1.3× faster",
  },
  {
    date: "2024.12—Now",
    title: "Generative Decision-Making Industrial Foundation Model",
    description: "Structure- and style-controllable wheel diffusion, plus vision-language reasoning for zero-shot anomaly localization under limited data.",
    result: "+15.3% generation accuracy · 95.8% anomaly detection",
  },
  {
    date: "2023.01—2024.06",
    title: "Full-Process Wheel Quality Inspection System",
    description: "Open-set multi-center recognition with cloud-edge deployment, service packaging, production data management, and real-time visualization.",
    result: "+8% recognition accuracy · independently tested deployment",
  },
];

const education = [
  ["2026.01—2027.01", "Visiting Ph.D. Researcher", "Nanyang Technological University, Singapore · Advisor: Prof. Ziwei Wang"],
  ["2022.09—2027.06", "Ph.D. Candidate in Control Science and Engineering", "Central South University · Advisor: Academician Weihua Gui"],
  ["2018.09—2022.06", "B.Eng. in Automation", "Central South University · Rank 3/256 (top 2%) · Two-time National Scholarship recipient"],
];

const honors = [
  ["2025", "Young Elite Scientists Sponsorship Program for Ph.D. Students, China Association for Science and Technology"],
  ["2024", "First Prize, Hunan Graduate Artificial Intelligence Innovation Competition"],
  ["2024", "First Prize for Outstanding Paper Presentation, Hunan Graduate Innovation Forum"],
  ["2023", "Second Prize, China Graduate Mathematical Contest in Modeling"],
  ["2022", "Outstanding Graduate, Central South University"],
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
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
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
          <div className="sidebar-summary">
            <span><strong>4</strong> granted patents</span>
            <span><strong>2</strong> software copyrights</span>
            <span><strong>9</strong> major honors</span>
          </div>
        </aside>

        <article className="content-column">
          <section className="about-section" id="about">
            <h2 className="sr-only">About Me</h2>
            <p className="position-line">
              Ph.D. Candidate, School of Automation, Central South University · Visiting Ph.D. Researcher, School of Electrical and Electronic Engineering, Nanyang Technological University
            </p>
            <p>
              I am a Ph.D. candidate in Control Science and Engineering at <a href="https://en.csu.edu.cn/" target="_blank" rel="noreferrer">Central South University</a>, advised by Academician Weihua Gui, and a visiting Ph.D. researcher at <a href="https://www.ntu.edu.sg/" target="_blank" rel="noreferrer">Nanyang Technological University</a>, advised by Prof. Ziwei Wang.
            </p>
            <p>
              My research focuses on reliable learning systems for real-world robotics and manufacturing. I work on sample-efficient robot learning, open-world industrial perception, domain adaptation, and generative and multimodal AI.
            </p>
            <p className="interest-line"><strong>Research interests:</strong> Embodied Intelligence · Reinforcement Learning · Industrial AI · Open-World Recognition · Generative & Multimodal AI</p>
          </section>

          <section id="news">
            <SectionHeading index="01" title="News" />
            <ul className="news-list">
              {news.map(([date, text]) => <li key={`${date}-${text}`}><time>{date}</time><span>{text}</span></li>)}
            </ul>
          </section>

          <section id="research">
            <SectionHeading index="02" title="Research" />
            <ol className="research-list">
              {researchAreas.map(([title, description]) => (
                <li key={title}><strong>{title}</strong><span>{description}</span></li>
              ))}
            </ol>
          </section>

          <section id="publications">
            <SectionHeading index="03" title="Selected Publications" action={<a href={scholarUrl} target="_blank" rel="noreferrer">Full list on Google Scholar ↗</a>} />
            <ol className="publication-list">
              {publications.map((publication) => (
                <li key={publication.title}>
                  <h4>{publication.paper ? <a href={publication.paper} target="_blank" rel="noreferrer">{publication.title}</a> : publication.title}</h4>
                  <p className="authors">{publication.authors}</p>
                  <p className="publication-meta"><em>{publication.venue}</em>, {publication.year}. {publication.paper ? <a href={publication.paper} target="_blank" rel="noreferrer">Paper</a> : <span>Paper link pending</span>} · <span>Code link pending</span></p>
                </li>
              ))}
            </ol>
          </section>

          <section id="projects">
            <SectionHeading index="04" title="Selected Projects" />
            <div className="project-list">
              {projects.map((project) => (
                <article key={project.title}>
                  <time>{project.date}</time>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <strong>{project.result}</strong>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="education">
            <SectionHeading index="05" title="Education" />
            <div className="timeline">
              {education.map(([date, title, detail]) => (
                <article key={title}><time>{date}</time><div><h4>{title}</h4><p>{detail}</p></div></article>
              ))}
            </div>
          </section>

          <section id="honors">
            <SectionHeading index="06" title="Honors & Awards" />
            <ul className="honors-list">
              {honors.map(([year, honor]) => <li key={honor}><time>{year}</time><span>{honor}</span></li>)}
            </ul>
          </section>

          <section id="outputs">
            <SectionHeading index="07" title="Patents & Software" />
            <ul className="output-list">
              <li><strong>4 granted invention patents</strong> in domain adaptation, industrial fault diagnosis, zero-shot defect detection, and continual industrial monitoring.</li>
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
