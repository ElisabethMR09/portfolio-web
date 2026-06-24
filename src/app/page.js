export default function Home() {
  return (
    <>
      {/* Fondo Auroras Animadas */}
      <div className="aurora-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>


      {/* Contenedor Principal */}
      <main className="glass-container">
        
        {/* Sección Header / Perfil */}
        <header className="glass-section text-center">
          <img src="/mifoto.png" alt="Elisabeth Maestre Romero" className="profile-pic" />
          
          <h1 className="title">Hola, soy <span className="text-gradient">Elisabeth Maestre</span></h1>
          <h2 className="subtitle">Desarrolladora Web junior</h2>
          <div className="location-badge">📍 Elche, Alicante</div>
          
          <p className="bio">
            Desarrolladora Web Junior apasionada por el código limpio y las buenas prácticas. 
            Especializada en crear soluciones web modernas, desde la maquetación visual hasta la lógica del servidor. 
            ¡Siempre lista para el próximo reto tecnológico!
          </p>

          {/* Stack Tecnológico Principal */}
          <div className="tech-stack-container">
            <span className="tech-tag">⚛️ React</span>
            <span className="tech-tag">⚡ JavaScript</span>
            <span className="tech-tag">🌐 HTML5 & CSS3</span>
            <span className="tech-tag">🐍 Python (Django)</span>
            <span className="tech-tag">☕ Java</span>
            <span className="tech-tag">🐘 PHP</span>
            <span className="tech-tag">🗄️ SQL & PL/SQL</span>
            <span className="tech-tag">🐙 Git</span>
            <span className="tech-tag">🐳 Docker</span>
          </div>
          
          <a href="/cv_elisabet_maestre.pdf" download="cv_elisabet_maestre.pdf" className="btn-glass mt-4">
            📄 Descargar CV
          </a>
        </header>

        {/* Sección Experiencia */}
        <section className="glass-section" id="experiencia">
          <h3 className="section-title">Experiencia</h3>
          <div className="item-list">
            
            {/* Tarjeta 1: Convotis */}
            <div className="item">
              <div className="item-row">
                <div className="item-logo-wrapper">
                  <img src="/convotis.jpg" alt="Logo Convotis" className="item-logo" />
                </div>
                <div className="item-info">
                  <div className="item-header">
                    <h4>Prácticas en Business Intelligence</h4>
                    <span className="date">Marzo 2026 - Junio 2026</span>
                  </div>
                  <p className="company">Convotis Iberia</p>
                  <p className="description">
                    Desarrollo e implementación de procesos de extracción, transformación y carga (ETL) utilizando <strong>Pentaho</strong> para la integración de datos. Creación de cuadros de mando y gráficos interactivos con <strong>Power BI</strong> orientados a facilitar la toma de decisiones empresariales. Aplicación de modelos y técnicas de <strong>Machine Learning</strong> para el análisis de datos.
                  </p>
                  <div className="item-tags">
                    <span className="mini-tag">📊 Power BI</span>
                    <span className="mini-tag">⚙️ Pentaho (ETL)</span>
                    <span className="mini-tag">🤖 Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Rocamora */}
            <div className="item">
              <div className="item-row">
                <div className="item-logo-wrapper">
                  <img src="/rocamora.jpg" alt="Logo Rocamora" className="item-logo" />
                </div>
                <div className="item-info">
                  <div className="item-header">
                    <h4>Prácticas en Administración y Finanzas</h4>
                    <span className="date">Marzo 2023 - Junio 2023</span>
                  </div>
                  <p className="company">Rocamora diseño y arquitectura</p>
                  <p className="description">
                    Apoyo integral en el departamento administrativo y financiero, abarcando el registro contable diario, la gestión documental de la empresa y la atención al cliente. Formación práctica enfocada en comprender la estructura operativa y la gestión de datos de una organización.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Sección Estudios */}
        <section className="glass-section" id="estudios">
          <h3 className="section-title">Estudios</h3>
          <div className="item-list">
            
            <div className="item">
              <div className="item-row">
                <div className="item-logo-wrapper">
                  <img src="/severo.png" alt="Logo IES Severo Ochoa" className="item-logo" />
                </div>
                <div className="item-info">
                  <p className="company" style={{ fontSize: '1.1rem', fontWeight: '600' }}>IES Severo Ochoa (Elche)</p>
                  
                  <div className="education-subitem">
                    <div className="item-header">
                      <h4>Grado Superior en Desarrollo de Aplicaciones Web (DAW)</h4>
                      <span className="date">2024 - 2026</span>
                    </div>
                    <p className="description">
                      Desarrollo web Full Stack: desde la arquitectura del servidor y bases de datos hasta interfaces interactivas y responsivas. Con foco en la escalabilidad, seguridad y despliegue.
                    </p>
                  </div>

                  <div className="education-subitem" style={{ marginTop: '15px' }}>
                    <div className="item-header">
                      <h4>Grado Superior en Administración y Finanzas</h4>
                      <span className="date">2021 - 2023</span>
                    </div>
                    <p className="description">
                      Base sólida en lógica de negocio, contabilidad y gestión empresarial, aportando una visión analítica ideal para el desarrollo de software corporativo y soluciones de datos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Sección Proyecto Destacado */}
        <section className="glass-section" id="proyectos">
          <h3 className="section-title">Proyecto Destacado</h3>
          <div className="projects-grid">
            
            <div className="project-card">
              <a href="https://carely-portfolio.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="project-image" style={{ backgroundImage: "url('/carely.png')" }}></div>
              </a>
              <div className="project-content">
                <h4>Carely</h4>
                <p>
                  Plataforma web tipo tablón de anuncios para el intercambio de servicios vecinales (cuidado de mascotas, plantas, etc.). Desarrollada con arquitectura MVC, incluye sistema de autenticación, publicación de anuncios interactivos y gestión de base de datos relacional.
                </p>
                <div className="project-tags">
                  <span className="mini-tag">Python</span>
                  <span className="mini-tag">Django</span>
                  <span className="mini-tag">JavaScript</span>
                  <span className="mini-tag">CSS</span>
                </div>
                <a href="https://carely-portfolio.onrender.com/" target="_blank" rel="noopener noreferrer" className="link-subtle mt-2" style={{ display: 'inline-block' }}>
                  Visitar sitio web →
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Sección Contacto Estructurada */}
        <section className="glass-section" id="contacto">
          <div className="contact-grid">
            
            {/* Columna Izquierda: Texto y Código */}
            <div className="contact-text-col">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <span style={{ width: '12px', height: '12px', background: 'var(--accent-2)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-2)' }}></span>
                <h3 className="section-title" style={{ borderBottom: 'none', paddingBottom: 0, margin: 0 }}>
                  Iniciemos algo grande
                </h3>
              </div>
              
              <p className="description" style={{ marginBottom: '25px', maxWidth: '100%' }}>
                Ya sea para una primera oportunidad profesional, una colaboración o simplemente para hablar de desarrollo web y código limpio. Mi bandeja de entrada está siempre lista.
              </p>
              
              {/* Guiño de código decorativo */}
              <div className="code-box-elegant" style={{ margin: '0', width: '100%', maxWidth: '100%' }}>
                <span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#f8fafc' }}>developer</span> = {'{'}
                <br />
                &nbsp;&nbsp;status: <span style={{ color: '#06b6d4' }}>"Open to work"</span>,
                <br />
                &nbsp;&nbsp;location: <span style={{ color: '#06b6d4' }}>"Alicante, ES"</span>
                <br />
                {'}'};
              </div>
            </div>

            {/* Columna Derecha: Acciones y Enlaces */}
            <div className="contact-action-col">
              
              {/* Tarjeta de Acciones de Email */}
              <div className="action-card">
                <span className="action-title">Contacta directamente</span>
                
                <a href="mailto:elisabethmaestre9@gmail.com" className="btn-glass btn-primary">
                  ✉️ Enviar Mensaje
                </a>

                {/* Correo seleccionable manualmente */}
                <span style={{ display: 'block', width: '100%', textAlign: 'center', fontSize: '0.95rem', color: 'var(--text-main)', userSelect: 'all', wordBreak: 'break-all' }}>
                  elisabethmaestre9@gmail.com
                </span>
              </div>

              {/* Botones de Redes Sociales con Iconos SVG */}
              <div className="social-links-grid">
                <a href="https://www.linkedin.com/in/elisabethmr/" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                
                <a href="https://github.com/ElisabethMR09" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}