import { useState } from "react";

type ProjectMedia = {
  type: "video" | "image";
  src: string;
  alt: string;
  poster?: string;
  caption?: string;
};

type Project = {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  impact?: string;
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
    eyebrow: "Molecular machine learning",
    title: "EGFR inhibitor activity modeling",
    description:
      "Built a reproducible Python/RDKit pipeline to generate descriptors and fingerprints, train random-forest models, and examine structure-activity relationships in small-molecule EGFR inhibitors.",
    tags: ["RDKit", "Scikit-learn", "Cheminformatics", "QSAR"],
    impact: "Relevant to molecular property prediction, model validation, and data-driven drug discovery workflows.",
    href: "https://github.com/skg43/EGFR_RF_Modeling",
    linkLabel: "View code",
  },
  {
    eyebrow: "Molecular simulation",
    title: "Osmotic shape transitions in vesicles",
    description:
      "Combined coarse-grained molecular dynamics, solution thermodynamics, and membrane mechanics to study how osmotic conditions influence vesicle shape, stability, and morphology.",
    tags: ["Molecular dynamics", "Statistical mechanics", "LAMMPS", "HPC"],
    impact: "Connects molecular interactions with formulation-relevant behavior in membrane and soft-matter systems.",
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
    eyebrow: "Simulation and data analysis",
    title: "Phase separation and wetting at interfaces",
    description:
      "Use simulation campaigns, parameter sweeps, and machine-learning analysis to study how composition and molecular interactions influence phase separation, wetting, and interfacial behavior.",
    tags: ["Phase separation", "Wetting", "Parameter sweeps", "Machine learning"],
    impact: "Builds toward predictive structure-property relationships for multicomponent soft materials.",
  },
  {
    eyebrow: "Biomolecular modeling",
    title: "Transport through the nuclear pore complex",
    description:
      "Developed coarse-grained molecular dynamics models and Python analysis workflows to study diffusion, selectivity, spatial organization, and transport pathways through the nuclear pore complex.",
    tags: ["Biophysics", "Coarse-grained MD", "Python", "Data analysis"],
    impact: "A transport-phenomena problem linking molecular organization, weak interactions, and permeability-like behavior.",
    href: "https://doi.org/10.64898/2026.02.23.707554",
    linkLabel: "Read preprint",
  },
  {
    eyebrow: "Quantum chemistry and experiment",
    title: "Molecular structure and intermolecular interactions",
    description:
      "Used DFT and spectroscopy-guided interpretation to investigate hydrogen bonding, conformational preferences, intermolecular interactions, and structure-property relationships.",
    tags: ["DFT", "Spectroscopy", "Quantum chemistry", "Structure-property"],
    impact: "Adds electronic-structure and experimental interpretation depth to my molecular modeling background.",
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
    text: "Statistical mechanics, membrane mechanics, osmotic effects, phase separation, wetting, interfacial behavior, and formulation-relevant stability questions.",
  },
  {
    label: "Scientific computing and ML",
    text: "Python analysis workflows, HPC simulation campaigns, parameter sweeps, feature engineering, predictive modeling, and model interpretation for scientific datasets.",
  },
];

const toolGroups = [
  ["GROMACS", "OpenMM", "NAMD", "LAMMPS"],
  ["VMD", "MDTraj", "MDAnalysis", "DFT"],
  ["Python", "NumPy", "SciPy", "pandas"],
  ["scikit-learn", "XGBoost", "RDKit", "C / Bash"],
  ["MPI", "Slurm", "HTCondor", "Linux"],
];

const roleTargets = [
  "Computational scientist",
  "Computational chemist",
  "Molecular modeling scientist",
  "AI/ML for science",
  "Scientific software / digital R&D",
];

const sections: { key: SectionKey; label: string; eyebrow: string; summary: string }[] = [
  {
    key: "work",
    label: "Research Work",
    eyebrow: "Selected work",
    summary: "Projects that show how I think about transport, molecular interactions, membranes, soft matter, and predictive modeling.",
  },
  {
    key: "capabilities",
    label: "Technical Fit",
    eyebrow: "Capabilities",
    summary: "The practical methods I use day to day: simulation, analysis, automation, HPC, and careful scientific interpretation.",
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
  const featuredProject = projects.find((project) => project.featured)!;
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
          <p className="kicker">Computational chemistry / Molecular simulation / AI for science</p>
          <h1>I study how molecules move, organize, and change behavior in complex systems.</h1>
          <p className="hero-summary">
            I am a computational scientist with a Ph.D. in computational chemistry
            and postdoctoral work in soft matter physics. I build molecular
            simulations, Python analysis workflows, and machine-learning models for
            transport, membranes, phase behavior, and structure-property questions.
          </p>
          <div className="role-tags" aria-label="Target roles">
            {roleTargets.map((role) => <span key={role}>{role}</span>)}
          </div>
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

      <section className="focus-bar" aria-label="Professional focus">
        <span>Physics-based modeling</span>
        <span>Transport and diffusion</span>
        <span>Membranes and soft matter</span>
        <span>AI/ML for science</span>
      </section>

      <section className="proof-strip" aria-label="Background highlights">
        <article>
          <strong>Ph.D. 2025</strong>
          <span>Computational Chemistry, University of Pittsburgh</span>
        </article>
        <article>
          <strong>Postdoc</strong>
          <span>Physics, Kansas State University</span>
        </article>
        <article>
          <strong>Core fit</strong>
          <span>MD, statistical mechanics, HPC, Python, ML</span>
        </article>
      </section>

      <section className="focus-bar secondary" aria-label="Technical focus">
        <span>Workflow automation</span>
        <span>High-performance computing</span>
        <span>Structure-property relationships</span>
        <span>Model validation</span>
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
          <aside className="board-intro">
            <p className="eyebrow">{activeMeta.eyebrow}</p>
            <h2>{activeMeta.label}</h2>
            <p>{activeMeta.summary}</p>
          </aside>

          <div
            aria-labelledby={`${activeSection}-tab`}
            className="board-panel"
            id={`${activeSection}-panel`}
            role="tabpanel"
          >
            {activeSection === "work" && (
              <div className="work-layout">
                <article className="featured-case">
                  {featuredProject.media && (
                    <figure className="case-media">
                      <img src={featuredProject.media.src} alt={featuredProject.media.alt} loading="lazy" />
                      {featuredProject.media.caption && <figcaption>{featuredProject.media.caption}</figcaption>}
                    </figure>
                  )}
                  <div>
                    <p className="eyebrow">{featuredProject.eyebrow}</p>
                    <h3>{featuredProject.title}</h3>
                    <p>{featuredProject.description}</p>
                    {featuredProject.impact && <p className="project-impact">{featuredProject.impact}</p>}
                    <div className="tag-list">{featuredProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="project-actions">
                      {featuredProject.href && <a href={featuredProject.href} target="_blank" rel="noreferrer">{featuredProject.linkLabel} ↗</a>}
                      {featuredProject.videoHref && <a href={featuredProject.videoHref} target="_blank" rel="noreferrer">{featuredProject.videoLabel} ▶</a>}
                    </div>
                  </div>
                </article>
                <div className="project-list">
                  {remainingProjects.map((project) => (
                    <article className="project-row" key={project.title}>
                      <span>{project.eyebrow}</span>
                      <div>
                        <h3>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.title}</a> : project.title}</h3>
                        <p>{project.description}</p>
                        {project.impact && <p className="project-impact">{project.impact}</p>}
                        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
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
                  <div className="tool-note"><strong>Industry direction</strong><p>Computational R&D roles where molecular modeling, transport, membranes, scientific computing, and AI/ML support discovery or development teams.</p></div>
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
        <p>Exploring industry roles in computational chemistry, molecular modeling, computational drug discovery, biomolecular R&D, and scientific computing.</p>
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
