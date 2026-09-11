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
    area: "Membranes",
    title: "Osmotic Shape Transitions In Lipid Vesicles",
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
    area: "Transport",
    title: "Transport Through The Nuclear Pore Complex",
    description:
      "My Ph.D. work used large-scale coarse-grained molecular dynamics and trajectory-analysis tools to study diffusion, selectivity, molecular organization, and transport pathways in the nuclear pore complex.",
    methods: "Large-scale MD silulations, Python, HPC",
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
    area: "Intermolecular interactions",
    title: "Thioamide hydrogen-bond acceptor study",
    description:
      "Studied thioamide interactions in proteins and nucleic acids using electronic-structure calculations and spectroscopy-guided interpretation.",
    methods: "DFT, spectroscopy, structure-property analysis",
    question: "How does thioamide substitution influence hydrogen bonding in biological molecules?",
    media: {
      type: "image",
      src: "./media/thioamide-hbond-acceptor.png",
      alt: "Molecular graphic showing thioamide hydrogen-bond acceptor interactions in a biomolecular environment",
      caption: "Hydrogen-bonding motifs used to examine thioamide as an acceptor in proteins and nucleic acids.",
    },
    featured: true,
    href: "https://doi.org/10.1021/acs.jpclett.7b01810",
    linkLabel: "Read publication",
  },
  {
    area: "Cheminformatics",
    title: "EGFR inhibitor activity modeling",
    description:
      "A skills-focused reproduction project: built a Python/RDKit pipeline to calculate molecular features, train random-forest models, and inspect descriptor signal.",
    methods: "RDKit, scikit-learn, QSAR",
    href: "https://github.com/skg43/EGFR_RF_Modeling",
    linkLabel: "View code",
  },
  {
    area: "Soft matter",
    title: "Phase separation and wetting at interfaces",
    description:
      "Use simulation campaigns and analysis workflows to connect composition, interaction strength, morphology, and interfacial behavior.",
    methods: "Parameter sweeps, wetting, ML analysis",
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
    label: "Molecular modeling",
    text: "Large-scale coarse-grained and atomistic simulations across biomolecular, membrane, and soft-matter systems, with emphasis on molecular interactions, diffusion, selectivity, and structure-property relationships.",
  },
  {
    label: "Cheminformatics and predictive modeling",
    text: "Python/RDKit workflows for molecular descriptors, fingerprints, QSAR-style modeling, feature engineering, model validation, and interpretation of chemical datasets.",
  },
  {
    label: "Scientific computing",
    text: "HPC simulation campaigns, parameter sweeps, trajectory analysis, automated Python workflows, and reproducible data analysis for complex molecular systems.",
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
    summary: "Featured studies from membranes, transport, and molecular interactions, followed by smaller additional work.",
  },
  {
    key: "capabilities",
    label: "Technical Fit",
    eyebrow: "Capabilities",
    summary: "Computational modeling for molecular R&D, with strengths in simulation, transport, chemical data analysis, and predictive workflows for biotech, drug discovery, formulation, and materials problems.",
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
        <div className="header-actions">
          <a className="header-cta" href="#contact">Let's talk</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="status"><span />Open to computational R&D opportunities</div>
          <p className="kicker">Computational chemistry / Molecular simulation / Data-driven R&D</p>
          <h1>I build molecular models and data workflows for complex chemical and biological systems.</h1>
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
                        <figure className={`case-media${project.title.includes("Thioamide") ? " compact-media" : ""}`}>
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
                  <p className="subsection-label">Additional work</p>
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
                <article><span>Integrated M.Sc.</span><div><h3>Physical Chemistry</h3><p>NISER Bhubaneswar</p><small>Quantum chemistry, spectroscopy, molecular structure, and summer research experience.</small></div></article>
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
