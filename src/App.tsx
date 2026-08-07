const projects = [
  {
    eyebrow: "Membrane biophysics",
    title: "Osmotic shape transitions in vesicles",
    description:
      "A self-consistent theory and coarse-grained molecular dynamics framework connecting finite-reservoir solution thermodynamics, osmotic pressure, and membrane shape.",
    tags: ["Molecular dynamics", "Statistical mechanics", "LAMMPS", "HPC"],
    href: "https://doi.org/10.64898/2026.04.03.716363",
    linkLabel: "Read preprint",
  },
  {
    eyebrow: "Biomolecular transport",
    title: "Transport through the nuclear pore complex",
    description:
      "Coarse-grained simulations of receptor-mediated transport through disordered FG-nucleoporins, revealing how molecular interactions organize transport pathways.",
    tags: ["Biophysics", "Coarse-grained MD", "Python", "Data analysis"],
    href: "https://doi.org/10.64898/2026.02.23.707554",
    linkLabel: "Read preprint",
  },
  {
    eyebrow: "Data-driven modeling",
    title: "Two-liquid phase separation at surfaces",
    description:
      "Automated simulation sweeps and interpretable machine-learning models for mapping phase behavior, wetting states, and morphology from molecular interaction parameters.",
    tags: ["Random forest", "Phase separation", "Automation", "Scientific ML"],
  },
  {
    eyebrow: "Molecular machine learning",
    title: "EGFR inhibitor activity modeling",
    description:
      "A reproducible molecular-descriptor and random-forest pipeline for learning structure–activity relationships in small-molecule EGFR inhibitors.",
    tags: ["RDKit", "Scikit-learn", "Cheminformatics", "QSAR"],
    href: "https://github.com/skg43/EGFR_RF_Modeling",
    linkLabel: "View code",
  },
];

const publications = [
  {
    year: "2026",
    title: "Osmotically Induced Shape Changes in Membrane Vesicles",
    authors: "R. G. Pereira, B. Mukherjee, S. Gautam, M. D’Agnese, S. Biswas, R. Meeker, and B. Chakrabarti",
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
    venue: "The Journal of Physical Chemistry Letters, 8, 4573–4579",
    href: "https://doi.org/10.1021/acs.jpclett.7b01810",
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
          <a href="#publications">Publications</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="status"><span />Open to industry opportunities</div>
          <p className="kicker">Computational chemist · Molecular modeler</p>
          <h1>Modeling membranes, vesicles, and <em>molecular transport.</em></h1>
          <p className="hero-summary">
            I am a computational chemist and postdoctoral researcher at Kansas
            State University. I use molecular simulations, statistical mechanics,
            and data analysis to study membrane behavior and biomolecular systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span>↘</span></a>
            <a className="button button-secondary" href="./Sanjeev_Gautam_Resume.pdf" target="_blank" rel="noreferrer">View résumé <span>↗</span></a>
          </div>
        </div>
        <div className="research-note">
          <p className="note-label">Current research</p>
          <h2>Membrane and vesicle mechanics</h2>
          <p>How osmotic stress and molecular interactions influence vesicle shape, phase behavior, and interfacial phenomena.</p>
          <ul>
            <li><span>01</span>Molecular simulation</li>
            <li><span>02</span>Statistical-mechanical models</li>
            <li><span>03</span>Automated analysis and classification</li>
          </ul>
          <small>Potential applications include therapeutic delivery.</small>
        </div>
      </section>

      <section className="signal-strip" aria-label="Professional focus">
        <span>Biomolecular simulation</span><i>•</i>
        <span>Membranes & vesicles</span><i>•</i>
        <span>Statistical mechanics</span><i>•</i>
        <span>HPC workflows</span>
      </section>

      <section className="section work" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>Questions I have worked on.</h2></div>
          <p>My work spans membrane mechanics, biomolecular transport, phase behavior, and a recent cheminformatics project.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const content = <>
              <div className="project-top"><span>{project.eyebrow}</span><span>{project.href ? `${project.linkLabel} ↗` : "Ongoing research"}</span></div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </>;
            return project.href ? <a className="project-card linked" href={project.href} target="_blank" rel="noreferrer" key={project.title}>{content}</a> : <article className="project-card" key={project.title}>{content}</article>;
          })}
        </div>
      </section>

      <section className="section publications" id="publications">
        <div className="publication-heading">
          <p className="eyebrow">Publications</p>
          <h2>Peer-reviewed work and preprints.</h2>
          <p>Click a title to open the publication.</p>
        </div>
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
      </section>

      <section className="section about" id="about">
        <div className="about-intro">
          <p className="eyebrow">What I bring</p>
          <h2>From physical models to reproducible analysis.</h2>
          <p>My work combines theory, simulation, and data analysis. I am most comfortable on projects where the scientific question determines the method.</p>
        </div>
        <div className="capability-list">
          {capabilities.map((item, index) => <article key={item.label}><span>0{index + 1}</span><div><h3>{item.label}</h3><p>{item.text}</p></div></article>)}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="experience-copy">
          <p className="eyebrow">Experience</p>
          <h2>Research experience and training.</h2>
          <div className="timeline">
            <article><span>2025—Now</span><div><h3>Postdoctoral Fellow</h3><p>Kansas State University · Physics</p><small>Membrane mechanics, phase behavior, automated simulation workflows, and scientific machine learning.</small></div></article>
            <article><span>Ph.D.</span><div><h3>Computational Chemistry</h3><p>University of Pittsburgh · Chemistry</p><small>Molecular simulations of biomolecular transport through the nuclear pore complex.</small></div></article>
            <article><span>M.Sc.</span><div><h3>Integrated Chemistry</h3><p>NISER Bhubaneswar</p><small>Quantum chemistry, spectroscopy, molecular structure, and summer research experience.</small></div></article>
          </div>
        </div>
        <aside className="toolbox">
          <p className="eyebrow">Methods & tools</p>
          {toolGroups.map((group, index) => <div className="tool-row" key={index}>{group.map((tool) => <span key={tool}>{tool}</span>)}</div>)}
          <div className="tool-note"><strong>Current direction</strong><p>Studying membrane and vesicle mechanics using molecular simulations, statistical mechanics, and data-driven analysis, with potential applications in therapeutic delivery.</p></div>
        </aside>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Interested in working together?</h2>
        <p>I&apos;m exploring roles in computational chemistry, molecular modeling, biophysics, and scientific computing.</p>
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
