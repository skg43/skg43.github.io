import { useState } from "react";

type ProjectMedia = {
  type: "video" | "image";
  src: string;
  alt: string;
  poster?: string;
  caption?: string;
};

type Project = {
  area: string;
  title: string;
  description: string;
  methods: string;
  question?: string;
  href?: string;
  linkLabel?: string;
  media?: ProjectMedia;
  featured?: boolean;
  videoHref?: string;
  videoLabel?: string;
};

type SectionKey = "work" | "capabilities" | "experience" | "publications";

const projects: Project[] = [
  {
    area: "Transport",
    title: "Transport through the nuclear pore complex",
    description:
      "My Ph.D. work used coarse-grained molecular dynamics and trajectory-analysis tools to study diffusion, selectivity, molecular organization, and transport pathways in the nuclear pore complex.",
    methods: "Coarse-grained MD, Python, HPC",
    question: "How do weak interactions and spatial organization regulate selective transport?",
    media: {
      type: "image",
      src: "./media/npc-transport-model.png",
      alt: "Coarse-grained nuclear pore complex transport model with crowded proteins and transport cargo",
      caption: "Coarse-grained model used to study transport through the nuclear pore complex.",
    },
    featured: true,
    href: "https://doi.org/10.64898/2026.02.23.707554",
    linkLabel: "Read preprint",
  },
  {
    area: "Cheminformatics",
    title: "EGFR inhibitor activity modeling",
    description:
      "Built a reproducible Python/RDKit pipeline to calculate molecular features, train random-forest models, and inspect which descriptors carried useful signal.",
    methods: "RDKit, scikit-learn, QSAR",
    href: "https://github.com/skg43/EGFR_RF_Modeling",
    linkLabel: "View code",
  },
  {
    area: "Membranes",
    title: "Osmotic shape transitions in vesicles",
    description:
      "Studied how osmotic conditions change vesicle morphology by combining coarse-grained molecular dynamics with thermodynamic and membrane-mechanics models.",
    methods: "Coarse-grained MD, LAMMPS, statistical mechanics",
    question: "How do osmotic conditions affect membrane-vesicle shape and stability?",
    media: {
      type: "image",
      src: "./media/osmotic-morphology-sequence.png",
      alt: "Sequence of simulated vesicle morphologies as the external osmolyte number increases",
      caption: "Simulated morphology sequence with increasing external osmolyte number.",
    },
    featured: true,
    href: "https://doi.org/10.64898/2026.04.03.716363",
    linkLabel: "Read preprint",
    videoHref: "./media/vesicle-shape-transitions.mp4",
    videoLabel: "Watch simulation",
  },
  {
    area: "Soft matter",
    title: "Phase separation and wetting at interfaces",
    description:
      "Use simulation campaigns and analysis workflows to connect composition, interaction strength, morphology, and interfacial behavior.",
    methods: "Parameter sweeps, wetting, ML analysis",
  },
  {
    area: "Molecular structure",
    title: "Molecular structure and intermolecular interactions",
    description:
      "Used DFT and spectroscopy-guided interpretation to study hydrogen bonding, conformational preferences, and structure-property relationships.",
    methods: "DFT, spectroscopy, electronic structure",
    href: "https://doi.org/10.1021/acs.jpclett.7b01810",
    linkLabel: "Read publication",
  },
];

const publications = [
  {
    year: "2026",
    title: "Osmotically Induced Shape Changes in Membrane Vesicles",
    authors: "R. G. Pereira, B. Mukherjee, S. Gautam, M. D'Agnese, S. Biswas, R. Meeker, and B. Chakrabarti",
    venue: "bioRxiv preprint",
    href: "https://doi.org/10.64898/2026.04.03.716363",
  },
  {
    year: "2026",
    title: "Computational Studies of Cargo Transport through the Nuclear Pore Complex",
    authors: "S. Gautam, R. Laghaei, A. Eskandari Nasrabad, and R. D. Coalson",
    venue: "bioRxiv preprint",
    href: "https://doi.org/10.64898/2026.02.23.707554",
  },
  {
    year: "2017",
    title: "Thioamide, a Hydrogen Bond Acceptor in Proteins and Nucleic Acids",
    authors: "V. Mundlapati, S. Gautam, D. Sahoo, A. Ghosh, and H. S. Biswal",
    venue: "The Journal of Physical Chemistry Letters, 8, 4573-4579",
    href: "https://doi.org/10.1021/acs.jpclett.7b01810",
  },
];

const capabilities = [
  {
    label: "Molecular simulation and transport",
    text: "Coarse-grained and atomistic MD for biomolecular transport, diffusion, membrane systems, molecular crowding, weak interactions, and spatial organization.",
  },
  {
    label: "Soft matter and membrane systems",
    text: "Membrane mechanics, osmotic effects, phase separation, wetting, and interfacial behavior in systems that connect naturally to formulations, delivery, and soft-material stability.",
  },
  {
    label: "Scientific computing and ML",
    text: "Python analysis workflows, HPC simulation campaigns, parameter sweeps, feature engineering, predictive modeling, and model interpretation for molecular and biological datasets.",
  },
];

const toolGroups = [
  ["GROMACS", "OpenMM", "NAMD", "LAMMPS"],
  ["VMD", "MDTraj", "MDAnalysis", "DFT"],
  ["Python", "NumPy", "SciPy", "pandas"],
  ["scikit-learn", "XGBoost", "RDKit", "C / Bash"],
  ["MPI", "Slurm", "HTCondor", "Linux"],
];

const sections: { key: SectionKey; label: string; eyebrow: string; summary: string }[] = [
  {
    key: "work",
    label: "Research Work",
    eyebrow: "Selected projects",
    summary: "Two featured studies lead the section: my Ph.D. transport work and current membrane research with relevance to delivery, formulations, and soft materials.",
  },
  {
    key: "capabilities",
    label: "Technical Fit",
    eyebrow: "Capabilities",
    summary: "Methods I can bring to computational biology, drug discovery, formulation, biomanufacturing-adjacent R&D, and materials teams.",
  },
  {
    key: "experience",
    label: "Experience",
    eyebrow: "Trajectory",
    summary: "How my training has moved through chemistry, biophysics, computation, and current postdoctoral research.",
  },
  {
    key: "publications",
    label: "Publications",
    eyebrow: "Research output",
    summary: "Selected papers and preprints for a closer look at the science behind the work.",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("work");
  const activeMeta = sections.find((section) => section.key === activeSection)!;
  const featuredProjects = projects.filter((project) => project.featured);
  const remainingProjects = projects.filter((project) => !project.featured);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sanjeev Gautam, home">
          SG<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          {sections.map((section) => (
            <button
              className={activeSection === section.key ? "nav-active" : ""}
              key={section.key}
              type="button"
              onClick={() => setActiveSection(section.key)}
            >
              {section.label}
            </button>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Let's talk</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="status"><span />Open to computational R&D opportunities</div>
          <p className="kicker">Computational chemistry / Molecular simulation / Bio-oriented R&D</p>
          <h1>I build molecular models for transport, membranes, and data-driven discovery.</h1>
          <p className="hero-summary">
            I am a computational scientist with a Ph.D. in computational chemistry
            and postdoctoral work on membrane and soft-matter systems. I use
            simulation, Python workflows, and machine learning to study problems
            relevant to drug discovery, formulation, therapeutic delivery, and
            materials where molecular organization controls performance.
          </p>
          <p className="hero-note">Ph.D. in Computational Chemistry, now a Postdoctoral Researcher in Physics at Kansas State University.</p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => setActiveSection("work")}>View portfolio <span>↘</span></button>
            <a className="button button-secondary" href="./Sanjeev_Gautam_Resume.pdf" target="_blank" rel="noreferrer">View resume <span>↗</span></a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Profile snapshot">
          <img src="./sanjeev-gautam-profile.png" alt="Sanjeev Gautam smiling in front of a scientific whiteboard" />
          <div className="snapshot-grid">
            <span><strong>MD</strong>Molecular simulation</span>
            <span><strong>ML</strong>Scientific analysis</span>
            <span><strong>HPC</strong>Workflow automation</span>
          </div>
        </aside>
      </section>

      <section className="portfolio-shell" aria-label="Portfolio sections">
        <div className="section-tabs" role="tablist" aria-label="Portfolio section tabs">
          {sections.map((section, index) => (
            <button
              aria-controls={`${section.key}-panel`}
              aria-selected={activeSection === section.key}
              className={activeSection === section.key ? "tab-active" : ""}
              id={`${section.key}-tab`}
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              role="tab"
              type="button"
            >
              <span>0{index + 1}</span>
              {section.label}
            </button>
          ))}
        </div>

        <div className="portfolio-board">
          <div className="board-intro">
            <p className="eyebrow">{activeMeta.eyebrow}</p>
            <h2>{activeSection === "work" ? "Featured research" : activeMeta.label}</h2>
            <p>{activeMeta.summary}</p>
          </div>

          <div
            aria-labelledby={`${activeSection}-tab`}
            className="board-panel"
            id={`${activeSection}-panel`}
            role="tabpanel"
          >
            {activeSection === "work" && (
              <div className="work-layout">
                <div className="featured-stack">
                  {featuredProjects.map((project) => (
                    <article className="featured-case" key={project.title}>
                      {project.media && (
                        <figure className="case-media">
                          <img src={project.media.src} alt={project.media.alt} loading="lazy" />
                          {project.media.caption && <figcaption>{project.media.caption}</figcaption>}
                        </figure>
                      )}
                      <div>
                        <p className="project-area">{project.area}</p>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <dl className="project-meta">
                          {project.question && <div><dt>Question</dt><dd>{project.question}</dd></div>}
                          <div><dt>Methods</dt><dd>{project.methods}</dd></div>
                        </dl>
                        <div className="project-actions">
                          {project.href && <a href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} ↗</a>}
                          {project.videoHref && <a href={project.videoHref} target="_blank" rel="noreferrer">{project.videoLabel} ▶</a>}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="project-list">
                  {remainingProjects.map((project) => (
                    <article className="project-row" key={project.title}>
                      <span>{project.area}</span>
                      <div>
                        <h3>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.title}</a> : project.title}</h3>
                        <p>{project.description}</p>
                        <small>{project.methods}</small>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "capabilities" && (
              <div className="capability-layout">
                <div className="capability-list">
                  {capabilities.map((item, index) => (
                    <article key={item.label}>
                      <span>0{index + 1}</span>
                      <div>
                        <h3>{item.label}</h3>
                        <p>{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <aside className="toolbox">
                  <p className="eyebrow">Methods & tools</p>
                  {toolGroups.map((group, index) => <div className="tool-row" key={index}>{group.map((tool) => <span key={tool}>{tool}</span>)}</div>)}
                  <div className="tool-note"><strong>Industry direction</strong><p>Computational R&D roles in biotech, biopharma, drug discovery, formulations, therapeutic delivery, scientific software, and materials-facing molecular modeling.</p></div>
                </aside>
              </div>
            )}

            {activeSection === "experience" && (
              <div className="timeline">
                <article><span>2025-Now</span><div><h3>Postdoctoral Fellow</h3><p>Kansas State University / Physics</p><small>Molecular simulations, parameter sweeps, workflow automation, and machine-learning analysis for membranes, vesicles, and phase behavior.</small></div></article>
                <article><span>Ph.D.</span><div><h3>Computational Chemistry</h3><p>University of Pittsburgh / Chemistry</p><small>Molecular simulations of biomolecular transport through the nuclear pore complex.</small></div></article>
                <article><span>M.Sc.</span><div><h3>Integrated Chemistry</h3><p>NISER Bhubaneswar</p><small>Quantum chemistry, spectroscopy, molecular structure, and summer research experience.</small></div></article>
              </div>
            )}

            {activeSection === "publications" && (
              <div className="publication-list">
                {publications.map((publication) => (
                  <article key={publication.title}>
                    <span className="publication-year">{publication.year}</span>
                    <div>
                      <h3><a href={publication.href} target="_blank" rel="noreferrer">{publication.title} <span aria-hidden="true">↗</span></a></h3>
                      <p>{publication.authors}</p>
                      <small>{publication.venue}</small>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Tell me what you're curious about.</h2>
        <p>Exploring computational roles in biotech, biopharma, drug discovery, formulation and delivery, biomolecular R&D, materials modeling, and scientific computing.</p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:sanjeev6765@gmail.com">Email me <span>↗</span></a>
          <a className="text-link" href="https://www.linkedin.com/in/sanjeev-gautam-ph-d-98126a79" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="text-link" href="https://github.com/skg43" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="text-link" href="./Sanjeev_Gautam_Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
        </div>
      </section>

      <footer><span>© 2026 Sanjeev Gautam</span><span><a href="mailto:sanjeev6765@gmail.com">sanjeev6765@gmail.com</a> / Molecular modeling / Scientific computing / Data analysis</span></footer>
    </main>
  );
}
