const projects = [
  {
    number: "01",
    eyebrow: "Membrane biophysics",
    title: "Osmotic shape transitions in vesicles",
    description:
      "A self-consistent theory and coarse-grained molecular dynamics framework connecting finite-reservoir solution thermodynamics, osmotic pressure, and membrane shape.",
    tags: ["Molecular dynamics", "Statistical mechanics", "LAMMPS", "HPC"],
  },
  {
    number: "02",
    eyebrow: "Biomolecular transport",
    title: "Transport through the nuclear pore complex",
    description:
      "Coarse-grained simulations of receptor-mediated transport through disordered FG-nucleoporins, revealing how molecular interactions organize transport pathways.",
    tags: ["Biophysics", "Coarse-grained MD", "Python", "Data analysis"],
  },
  {
    number: "03",
    eyebrow: "Data-driven modeling",
    title: "Two-liquid phase separation at surfaces",
    description:
      "Automated simulation sweeps and interpretable machine-learning models for mapping phase behavior, wetting states, and morphology from molecular interaction parameters.",
    tags: ["Random forest", "Phase separation", "Automation", "Scientific ML"],
  },
  {
    number: "04",
    eyebrow: "Molecular machine learning",
    title: "EGFR inhibitor activity modeling",
    description:
      "A reproducible molecular-descriptor and random-forest pipeline for learning structure–activity relationships in small-molecule EGFR inhibitors.",
    tags: ["RDKit", "Scikit-learn", "Cheminformatics", "QSAR"],
    href: "https://github.com/skg43/EGFR_RF_Modeling",
  },
];

const capabilities = [
  {
    label: "Molecular modeling",
    text: "Coarse-grained and atomistic MD, membrane systems, biomolecular interactions, DFT, and structure–property relationships.",
  },
  {
    label: "Scientific computing",
    text: "Python-based analysis, reproducible workflows, parameter sweeps, Linux, Git, and high-performance computing.",
  },
  {
    label: "Machine learning",
    text: "Feature engineering, random forests, model interpretation, chemical descriptors, and physics-informed data analysis.",
  },
];

const toolGroups = [
  ["LAMMPS", "GROMACS", "VMD", "MDTraj"],
  ["Python", "NumPy", "SciPy", "Pandas", "Matplotlib"],
  ["Scikit-learn", "RDKit", "DFT", "Linux / HPC"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sanjeev Gautam, home">
          SG<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="status"><span />Open to industry opportunities</div>
          <p className="kicker">Computational chemist · Molecular modeler</p>
          <h1>I turn molecular complexity into <em>clear, testable insight.</em></h1>
          <p className="hero-summary">
            I combine molecular simulations, statistical mechanics, scientific
            computing, and machine learning to understand complex biomolecular
            systems—and translate that understanding into practical decisions.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span>↘</span></a>
            <a className="button button-secondary" href="./Sanjeev_Gautam_Resume.pdf" target="_blank" rel="noreferrer">View résumé <span>↗</span></a>
          </div>
        </div>
        <div className="molecular-visual" aria-label="Abstract molecular simulation graphic">
          <div className="orbit orbit-one"><span /></div>
          <div className="orbit orbit-two"><span /></div>
          <div className="orbit orbit-three"><span /></div>
          <div className="core"><strong>MD</strong><small>+ ML</small></div>
          <div className="visual-label label-one">SIMULATION</div>
          <div className="visual-label label-two">MECHANISM</div>
          <div className="visual-label label-three">PREDICTION</div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Professional focus">
        <span>Biomolecular simulation</span><i>•</i>
        <span>Drug discovery</span><i>•</i>
        <span>Scientific machine learning</span><i>•</i>
        <span>HPC workflows</span>
      </section>

      <section className="section work" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>Science built to answer <em>real questions.</em></h2></div>
          <p>From membrane mechanics to molecular activity, I build computational models that connect microscopic interactions to observable behavior.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const content = <>
              <div className="project-top"><span>{project.number}</span><span>{project.href ? "View project ↗" : "Research project"}</span></div>
              <p className="project-eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </>;
            return project.href ? <a className="project-card linked" href={project.href} target="_blank" rel="noreferrer" key={project.number}>{content}</a> : <article className="project-card" key={project.number}>{content}</article>;
          })}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-intro">
          <p className="eyebrow">What I bring</p>
          <h2>Physics-grounded thinking, <em>industry-facing execution.</em></h2>
          <p>I work comfortably across theory, simulation, data, and communication—an unusually useful combination when the scientific question does not fit neatly inside one tool.</p>
        </div>
        <div className="capability-list">
          {capabilities.map((item, index) => <article key={item.label}><span>0{index + 1}</span><div><h3>{item.label}</h3><p>{item.text}</p></div></article>)}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="experience-copy">
          <p className="eyebrow">Experience</p>
          <h2>Deep scientific training. <em>Broad computational range.</em></h2>
          <div className="timeline">
            <article><span>2025—Now</span><div><h3>Postdoctoral Fellow</h3><p>Kansas State University · Physics</p><small>Membrane mechanics, phase behavior, automated simulation workflows, and scientific machine learning.</small></div></article>
            <article><span>Ph.D.</span><div><h3>Computational Chemistry</h3><p>University of Pittsburgh · Chemistry</p><small>Molecular simulations of biomolecular transport through the nuclear pore complex.</small></div></article>
            <article><span>M.Sc.</span><div><h3>Integrated Chemistry</h3><p>NISER Bhubaneswar</p><small>Quantum chemistry, spectroscopy, molecular structure, and summer research experience.</small></div></article>
          </div>
        </div>
        <aside className="toolbox">
          <p className="eyebrow">Methods & tools</p>
          {toolGroups.map((group, index) => <div className="tool-row" key={index}>{group.map((tool) => <span key={tool}>{tool}</span>)}</div>)}
          <div className="tool-note"><strong>Current direction</strong><p>Applying molecular simulation, cheminformatics, and ML to computational drug discovery and biomolecular modeling.</p></div>
        </aside>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Let&apos;s build something useful</p>
        <h2>Looking for a scientist who can move between <em>molecules, models, and data?</em></h2>
        <p>I&apos;m interested in computational chemistry, biomolecular modeling, CADD/SBDD, and adjacent scientific computing roles.</p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:sanjeev6765@gmail.com">Email me <span>↗</span></a>
          <a className="text-link" href="https://www.linkedin.com/in/sanjeev-gautam-ph-d-98126a79" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="text-link" href="https://github.com/skg43" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="text-link" href="./Sanjeev_Gautam_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
        </div>
      </section>

      <footer><span>© 2026 Sanjeev Gautam</span><span><a href="mailto:sanjeev6765@gmail.com">sanjeev6765@gmail.com</a> · Computational chemistry · Biophysics · Scientific ML</span></footer>
    </main>
  );
}
