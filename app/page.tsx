const scholarUrl =
  "https://scholar.google.com.hk/citations?user=f_3PzB8AAAAJ&hl=en";

const researchAreas = [
  {
    number: "01",
    title: "Embodied Intelligence & Robot Learning",
    description:
      "Sample-efficient reinforcement learning for real-robot manipulation, with an emphasis on human feedback, reliable value estimation, and world models.",
  },
  {
    number: "02",
    title: "Industrial Intelligence",
    description:
      "Open-world recognition, secure domain adaptation, continual learning, and fault diagnosis for complex manufacturing systems.",
  },
  {
    number: "03",
    title: "Generative & Multimodal AI",
    description:
      "Controllable diffusion models and vision-language systems that generate, understand, and reason about industrial visual data.",
  },
];

const news = [
  {
    date: "2026.07",
    text: "Released WorldSample, a closed-loop real-robot reinforcement learning framework with world modelling.",
  },
  {
    date: "2026.06",
    text: "Released Preference-Calibrated Human-in-the-Loop Reinforcement Learning for Robotic Manipulation.",
  },
  {
    date: "2026",
    text: "Our open-world dynamic wheel recognition framework was published in IEEE Transactions on Cybernetics.",
  },
  {
    date: "2026.01",
    text: "Started a visiting Ph.D. appointment at Nanyang Technological University.",
  },
  {
    date: "2025",
    text: "Selected for the Young Elite Scientists Sponsorship Program for Ph.D. Students by CAST.",
  },
  {
    date: "2025.05",
    text: "Our secure unsupervised domain adaptation framework was published in IEEE Robotics and Automation Letters.",
  },
];

const publications = [
  {
    venue: "IEEE T-CYB",
    year: "2026",
    title:
      "A Diffusion-Based Unified Framework for Open-World Dynamic Wheel Recognition System Construction and Maintenance With Incomplete Data",
    authors: (
      <>
        <strong>Zeyi Liu</strong>, Weihua Gui, Kai Huang, Donghua Wu, Chunhua
        Yang
      </>
    ),
  },
  {
    venue: "Advanced Engineering Informatics",
    year: "2026",
    title:
      "MCDML-Net: A Multi-Center Deep Metric Learning Network and Its Wheel Manufacturing Application",
    authors: (
      <>
        <strong>Zeyi Liu</strong>, Weihua Gui, Kai Huang, Donghua Wu, Chunhua
        Yang
      </>
    ),
  },
  {
    venue: "IEEE RA-L",
    year: "2025",
    title:
      "Contrastive Learning-Based Secure Unsupervised Domain Adaptation Framework and Its Application in Cross-Factory Intelligent Manufacturing",
    authors: (
      <>
        <strong>Zeyi Liu</strong>, Weihua Gui, Kai Huang, Donghua Wu, Yue Liao,
        Chunhua Yang
      </>
    ),
  },
  {
    venue: "IEEE T-ASE",
    year: "2022",
    title:
      "Fault Diagnosis of Complex Industrial Systems Based on Multi-Granularity Dictionary Learning and Its Application",
    authors: (
      <>
        <strong>Zeyi Liu</strong>, Donghua Wu, Kai Huang, Chunhua Yang, Weihua
        Gui
      </>
    ),
  },
  {
    venue: "arXiv / CoRL submission",
    year: "2026",
    title:
      "Preference-Calibrated Human-in-the-Loop Reinforcement Learning for Robotic Manipulation",
    authors: (
      <>
        <strong>Zeyi Liu</strong>, Guangda Liu, Yiting Qu, Yuxuan Xue, Boyuan
        Jia, Chunhua Yang, Weihua Gui, Kai Huang, Ziwei Wang
      </>
    ),
    paper: "https://arxiv.org/abs/2606.03949",
  },
  {
    venue: "arXiv / CoRL submission",
    year: "2026",
    title: "WorldSample: Closed-Loop Real-Robot RL with World Modelling",
    authors: (
      <>
        Yuxuan Xue, Long Xu, <strong>Zeyi Liu</strong>, Zhenyu Wu, Zijian Gu,
        Xiaoxiao Song, Boyuan Jia, Ziwei Wang
      </>
    ),
    paper: "https://arxiv.org/abs/2607.02431",
  },
  {
    venue: "IEEE TIM",
    year: "2024",
    title:
      "Open World Wheels Recognition for Incomplete Data: A Two-Stage Solution Combining Data Generation and Metric Learning",
    authors: (
      <>
        Kai Huang, Peng Wang, <strong>Zeyi Liu</strong>, Donghua Wu, Chunhua
        Yang, Weihua Gui
      </>
    ),
  },
  {
    venue: "IEEE Transactions on Reliability",
    year: "2025",
    title:
      "Attention-Based Mask Network Model for Multirate Sampling Data Fault Diagnosis",
    authors: (
      <>
        Kai Huang, <strong>Zeyi Liu</strong>, Shiyu Wu, Chunhua Yang, Weihua Gui
      </>
    ),
  },
];

const projects = [
  {
    label: "REAL-ROBOT RL",
    title: "Preference-Calibrated Human-in-the-Loop Learning",
    text: "A reinforcement learning framework that identifies suboptimal segments in successful intervention trajectories and calibrates critic targets and actor updates using intervention-derived preferences.",
    metric: "+24.5% success rate · −14.8% intervention rate · 1.3× faster",
  },
  {
    label: "INDUSTRIAL FOUNDATION MODELS",
    title: "Generative Decision-Making for Manufacturing",
    text: "A structure- and style-controllable diffusion system for wheel imagery, paired with vision-language reasoning for zero-shot anomaly localization under limited data.",
    metric: "+15.3% generation accuracy · 95.8% anomaly detection accuracy",
  },
  {
    label: "DEPLOYED INDUSTRIAL AI",
    title: "Full-Process Wheel Quality Inspection",
    text: "An open-set, multi-center wheel recognition system with cloud-edge deployment, service packaging, production data management, and real-time operational visualization.",
    metric: "+8% recognition accuracy · independently tested deployment",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#about" aria-label="Zeyi Liu home">
          ZL
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
        </nav>
      </header>

      <div className="page-shell">
        <aside className="profile-card" aria-label="Profile">
          <img
            className="profile-photo"
            src="/profile.jpg"
            alt="A golden retriever puppy in autumn leaves"
          />
          <p className="profile-kicker">Ph.D. Candidate</p>
          <h1>Zeyi Liu</h1>
          <p className="profile-name-cn">刘泽一</p>
          <p className="profile-role">
            Central South University
            <br />
            Visiting Ph.D. Researcher at NTU
          </p>
          <div className="profile-links">
            <a href="mailto:liuzeyi@csu.edu.cn">Email</a>
            <a href={scholarUrl} target="_blank" rel="noreferrer">
              Google Scholar
            </a>
            <a
              href="https://github.com/Liuzeyi25"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span aria-label="CV link coming soon">CV · coming soon</span>
          </div>
          <p className="profile-note">Currently in Singapore</p>
        </aside>

        <article className="content-column">
          <section className="hero" id="about">
            <p className="eyebrow">Industrial Intelligence · Robot Learning</p>
            <h2>
              Intelligent systems that learn, adapt, and act in the real world.
            </h2>
            <p className="hero-copy">
              I am a Ph.D. candidate in Control Science and Engineering at{" "}
              <a href="https://en.csu.edu.cn/" target="_blank" rel="noreferrer">
                Central South University
              </a>
              , advised by Academician Weihua Gui, and a visiting Ph.D.
              researcher at{" "}
              <a href="https://www.ntu.edu.sg/" target="_blank" rel="noreferrer">
                Nanyang Technological University
              </a>
              , advised by Prof. Ziwei Wang.
            </p>
            <p className="hero-copy">
              My research spans embodied intelligence, reinforcement learning,
              and industrial machine learning, with an emphasis on reliable AI
              for real-world robotic and manufacturing systems.
            </p>
            <div className="research-tags" aria-label="Research interests">
              <span>Embodied Intelligence</span>
              <span>Reinforcement Learning</span>
              <span>Industrial AI</span>
              <span>Open-World Recognition</span>
              <span>Generative & Multimodal AI</span>
            </div>
          </section>

          <section id="news">
            <SectionHeading label="Latest" title="News" />
            <div className="news-list">
              {news.map((item) => (
                <div key={`${item.date}-${item.text}`}>
                  <time>{item.date}</time>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="research">
            <SectionHeading label="Focus" title="Research" />
            <div className="research-grid">
              {researchAreas.map((area) => (
                <article className="research-card" key={area.number}>
                  <span>{area.number}</span>
                  <h4>{area.title}</h4>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="publications">
            <SectionHeading label="Selected work" title="Publications" />
            <p className="section-intro">
              Selected journal articles and preprints. Publication links are
              being completed; citation records remain available on{" "}
              <a href={scholarUrl} target="_blank" rel="noreferrer">
                Google Scholar
              </a>
              .
            </p>
            <div className="publication-list">
              {publications.map((publication, index) => (
                <article className="publication-card" key={publication.title}>
                  <span className="publication-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="venue">
                      {publication.venue} · {publication.year}
                    </span>
                    <h4>{publication.title}</h4>
                    <p>{publication.authors}</p>
                    <div className="paper-links">
                      {publication.paper ? (
                        <a
                          href={publication.paper}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Paper ↗
                        </a>
                      ) : (
                        <span>Paper link pending</span>
                      )}
                      <span>Code link pending</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects">
            <SectionHeading label="In practice" title="Research Highlights" />
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <p className="project-label">{project.label}</p>
                  <h4>{project.title}</h4>
                  <p>{project.text}</p>
                  <strong>{project.metric}</strong>
                </article>
              ))}
            </div>
          </section>

          <section id="experience">
            <SectionHeading label="Background" title="Experience & Education" />
            <div className="timeline">
              <TimelineItem
                date="2026.01 — 2027.01"
                title="Visiting Ph.D. Researcher"
                place="Nanyang Technological University · Singapore"
                detail="School of Electrical and Electronic Engineering · Advisor: Prof. Ziwei Wang"
              />
              <TimelineItem
                date="2022.09 — 2027.06"
                title="Ph.D. Candidate in Control Science and Engineering"
                place="Central South University · Changsha, China"
                detail="School of Automation · Advisor: Academician Weihua Gui"
              />
              <TimelineItem
                date="2018.09 — 2022.06"
                title="B.Eng. in Automation"
                place="Central South University · Changsha, China"
                detail="Ranked 3/256 (top 2%) · Two-time National Scholarship recipient"
              />
            </div>
          </section>

          <section id="awards">
            <SectionHeading label="Recognition" title="Selected Honors" />
            <div className="honors-grid">
              <article>
                <span>2025</span>
                <p>
                  Young Elite Scientists Sponsorship Program for Ph.D. Students,
                  China Association for Science and Technology
                </p>
              </article>
              <article>
                <span>2024</span>
                <p>
                  First Prize, Hunan Graduate Artificial Intelligence Innovation
                  Competition
                </p>
              </article>
              <article>
                <span>2024</span>
                <p>
                  First Prize for Outstanding Paper Presentation, Hunan Graduate
                  Innovation Forum
                </p>
              </article>
              <article>
                <span>2023</span>
                <p>
                  Second Prize, China Graduate Mathematical Contest in Modeling
                </p>
              </article>
            </div>
            <div className="output-summary">
              <div>
                <strong>4</strong>
                <span>granted invention patents</span>
              </div>
              <div>
                <strong>2</strong>
                <span>software copyrights</span>
              </div>
              <div>
                <strong>9</strong>
                <span>national and provincial honors</span>
              </div>
            </div>
          </section>

          <footer>
            <p>© 2026 Zeyi Liu</p>
            <p>Built for research, collaboration, and open exchange.</p>
          </footer>
        </article>
      </div>
    </main>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="section-heading">
      <p>{label}</p>
      <h3>{title}</h3>
    </div>
  );
}

function TimelineItem({
  date,
  title,
  place,
  detail,
}: {
  date: string;
  title: string;
  place: string;
  detail: string;
}) {
  return (
    <article>
      <time>{date}</time>
      <div>
        <h4>{title}</h4>
        <p className="timeline-place">{place}</p>
        <p>{detail}</p>
      </div>
    </article>
  );
}
