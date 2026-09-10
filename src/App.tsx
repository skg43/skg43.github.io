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
  href?: string;
  linkLabel?: string;
  media?: ProjectMedia;
  featured?: boolean;
  videoHref?: string;
  videoLabel?: string;
};

const projects: Project[] = [
  {
    eyebrow: "Scientific computing",
    title: "Automated simulation and analysis workflows",
    description:
      "Develop Python and shell-based workflows to prepare, run, monitor, and analyze molecular-simulation campaigns on HPC systems, including structured parameter sweeps and reproducible post-processing.",
    tags: ["Python", "HPC", "Workflow automation", "Linux"],
  },
  {
    eyebrow: "Molecular machine learning",
    title: "EGFR inhibitor activity modeling",
    description:
      "Built a reproducible RDKit and scikit-learn pipeline to calculate molecular descriptors, train random-forest models, and examine structure–activity relationships in small-molecule EGFR inhibitors.",
    tags: ["RDKit", "Scikit-learn", "Cheminformatics", "QSAR"],
    href: "https://github.com/skg43/EGFR_RF_Modeling",
    linkLabel: "View code",
  },
  {
    eyebrow: "Molecular simulation",
    title: "Osmotic shape transitions in vesicles",
    description:
      "Combined coarse-grained molecular dynamics and thermodynamic modeling to examine how osmotic conditions affect vesicle shape and stability—questions relevant to formulation, encapsulation, and delivery-system robustness.",
    tags: ["Molecular dynamics", "Statistical mechanics", "LAMMPS", "HPC"],
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
      "Using structured parameter sweeps and machine-learning analysis to identify how molecular interactions influence phase separation and wetting, with potential relevance to formulation, materials, and delivery systems.",
    tags: ["Phase separation", "Wetting", "Parameter sweeps", "Machine learning"],
  },
  {
    eyebrow: "Biomolecular modeling",
    title: "Transport through the nuclear pore complex",
    description:
      "Used coarse-grained simulations and custom trajectory analysis to study selective transport through a crowded protein environment, connecting molecular interactions with transport behavior.",
    tags: ["Biophysics", "Coarse-grained MD", "Python", "Data analysis"],
    href: "https://doi.org/10.64898/2026.02.23.707554",
    linkLabel: "Read preprint",
  },
  {
    eyebrow: "Quantum chemistry and experiment",
    title: "Molecular structure and intermolecular interactions",
    description:
      "Used DFT together with gas- and condensed-phase spectroscopy to investigate hydrogen bonding, conformational preferences, and structure–property relationships in molecular systems.",
    tags: ["DFT", "Spectroscopy", "Quantum chemistry", "Structure–property"],
    href: "https://doi.org/10.1021/acs.jpclett.7b01810",
    linkLabel: "Read publication",
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
    label: "Physics-based modeling",
    text: "Build molecular models to study interactions, transport, stability, phase behavior, and structure–property relationships across biomolecular and soft-material systems.",
  },
  {
    label: "Scalable computational workflows",
    text: "Automate parameter sweeps, HPC simulations, reproducible analysis, and data processing using Python, Linux, Git, and scientific-computing tools.",
  },
  {
    label: "Data-driven analysis",
    text: "Use feature engineering, machine learning, chemical descriptors, and model interpretation to identify trends and connect simulation data with practical scientific questions.",
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
          <a href="#work">Projects</a>
          <a href="#about">Capabilities</a>
          <a href="#experience">Experience</a>
          <a href="#publications">Publications</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="status"><span />Open to computational R&amp;D opportunities</div>
          <p className="kicker">Computational chemist · Molecular modeling · Scientific ML</p>
          <h1>Molecular simulation, scientific computing, and ML for <em>computational R&amp;D.</em></h1>
          <p className="hero-summary">
            I am a computational chemist with experience across molecular dynamics,
            DFT, spectroscopy-informed modeling, HPC workflows, and machine learning.
            I build physical models and analysis pipelines to study molecular
            interactions, structure–property relationships, transport, and phase
            behavior. My current research includes membranes and vesicles with
            potential applications in therapeutic delivery.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View selected projects <span>↘</span></a>
            <a className="button button-secondary" href="./Sanjeev_Gautam_Resume.pdf" target="_blank" rel="noreferrer">View résumé <span>↗</span></a>
          </div>
        </div>
        <div className="molecular-visual" aria-label="Stylized molecular simulation graphic">
          <div className="orbit orbit-one"><span /></div>
          <div className="orbit orbit-two"><span /></div>
          <div className="orbit orbit-three"><span /></div>
          <div className="core"><strong>MD</strong><small>+ DATA</small></div>
          <div className="visual-label label-one">MODELING</div>
          <div className="visual-label label-two">COMPUTING</div>
          <div className="visual-label label-three">DATA</div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Professional focus">
        <span>Physics-based modeling</span><i>•</i>
        <span>Data-driven analysis</span><i>•</i>
        <span>Workflow automation</span><i>•</i>
        <span>High-performance computing</span>
      </section>

      <section className="section work" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">Selected projects</p><h2>How I apply modeling and computation.</h2></div>
          <p>Examples of transferable work across molecular simulation, scientific computing, quantum chemistry, biomolecular modeling, and small-molecule machine learning.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            return <article className={`project-card${project.href ? " linked" : ""}${project.featured ? " featured" : ""}`} key={project.title}>
              {project.media && (
                <figure className="project-media">
                  {project.media.type === "video" ? (
                    <video controls muted loop playsInline preload="metadata" poster={project.media.poster} aria-label={project.media.alt}>
                      <source src={project.media.src} type="video/mp4" />
                      Your browser does not support embedded video.
                    </video>
                  ) : (
                    <img src={project.media.src} alt={project.media.alt} loading="lazy" />
                  )}
                  {project.media.caption && <figcaption>{project.media.caption}</figcaption>}
                </figure>
              )}
              <div className="project-top">
                <span>{project.eyebrow}</span>
                <span>{project.featured ? "Featured project" : project.href ? "Published work" : "Ongoing research"}</span>
              </div>
              <h3>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.title}</a> : project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {(project.href || project.videoHref) && (
                <div className="project-actions">
                  {project.href && <a href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} ↗</a>}
                  {project.videoHref && <a href={project.videoHref} target="_blank" rel="noreferrer">{project.videoLabel} ▶</a>}
                </div>
              )}
            </article>;
          })}
        </div>
      </section>

      <section className="section publications" id="publications">
        <div className="publication-heading">
          <p className="eyebrow">Selected publications</p>
          <h2>Research outputs and peer-reviewed work.</h2>
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
          <figure className="profile-card">
            <img src="./sanjeev-gautam-profile.png" alt="Sanjeev Gautam smiling in front of a scientific whiteboard" />
            <figcaption>Sanjeev Gautam, Ph.D. · Postdoctoral Fellow</figcaption>
          </figure>
          <p className="eyebrow">Capabilities</p>
          <h2>Tools for computational R&amp;D.</h2>
          <p>I combine molecular modeling, scalable scientific computing, and data analysis. I am most effective on teams where the problem determines the method and results need to be both interpretable and reproducible.</p>
        </div>
        <div className="capability-list">
          {capabilities.map((item, index) => <article key={item.label}><span>0{index + 1}</span><div><h3>{item.label}</h3><p>{item.text}</p></div></article>)}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="experience-copy">
          <p className="eyebrow">Experience</p>
          <h2>Experience across modeling, computation, and analysis.</h2>
          <div className="timeline">
            <article><span>2025—Now</span><div><h3>Postdoctoral Fellow</h3><p>Kansas State University · Physics</p><small>Molecular simulations, parameter sweeps, workflow automation, and machine-learning analysis for membranes, vesicles, and phase behavior.</small></div></article>
            <article><span>Ph.D.</span><div><h3>Computational Chemistry</h3><p>University of Pittsburgh · Chemistry</p><small>Molecular simulations of biomolecular transport through the nuclear pore complex.</small></div></article>
            <article><span>M.Sc.</span><div><h3>Integrated Chemistry</h3><p>NISER Bhubaneswar</p><small>Quantum chemistry, spectroscopy, molecular structure, and summer research experience.</small></div></article>
          </div>
        </div>
        <aside className="toolbox">
          <p className="eyebrow">Methods & tools</p>
          {toolGroups.map((group, index) => <div className="tool-row" key={index}>{group.map((tool) => <span key={tool}>{tool}</span>)}</div>)}
          <div className="tool-note"><strong>Industry direction</strong><p>Interested in computational R&amp;D roles where molecular modeling and data can support drug discovery, formulation and delivery, biomolecular research, or scientific software.</p></div>
        </aside>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s solve a difficult scientific problem.</h2>
        <p>I&apos;m exploring industry roles in computational chemistry, molecular modeling, computational drug discovery, biomolecular R&amp;D, and scientific computing.</p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:sanjeev6765@gmail.com">Email me <span>↗</span></a>
          <a className="text-link" href="https://www.linkedin.com/in/sanjeev-gautam-ph-d-98126a79" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="text-link" href="https://github.com/skg43" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="text-link" href="./Sanjeev_Gautam_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
        </div>
      </section>

      <footer><span>© 2026 Sanjeev Gautam</span><span><a href="mailto:sanjeev6765@gmail.com">sanjeev6765@gmail.com</a> · Molecular modeling · Scientific computing · Data analysis</span></footer>
    </main>
  );
}
