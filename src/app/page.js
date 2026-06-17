export default function Home() {
  return (
    <div className="container">
      {/* Elementos Decorativos */}
      <div className="circle-1"></div>
      <div className="circle-2"></div>

      {/* Navegación */}
      <nav className="glass">
        <div className="logo">Elisabeth<span>.</span>dev</div>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      {/* Sección Hero */}
      {/* Sección Hero modificada */}
      <section id="inicio" className="hero glass hero-con-foto">

        {/* Contenedor para el bloque de texto (Izquierda) */}
        <div className="hero-texto">
          <h2>Hola, soy</h2>
          <h1>Elisabeth Maestre Romero</h1>
          <h2>Desarrolladora Web junior</h2>
          <div className="location">📍 Elche, Alicante</div>
          
          <p style={{ marginBottom: '1.5rem', maxWidth: '600px', color: '#cbd5e1', lineHeight: '1.6' }}>
            Desarrolladora Web Junior apasionada por el código limpio y las buenas prácticas. Especializada en crear soluciones web modernas, desde la maquetación visual hasta la lógica del servidor. ¡Siempre lista para el próximo reto tecnológico!
          </p>

          {/* Stack Tecnológico Completo Integrado */}
          <div>
            <p style={{ 
              fontSize: '0.85rem', 
              color: 'var(--accent)', 
              marginBottom: '0.8rem', 
              textTransform: 'uppercase', 
              letterSpacing: '1px', 
              fontWeight: '600' 
            }}>
              Stack Principal:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', maxWidth: '600px' }}>
              {/* Frontend */}
              <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221, 11, 169, 0.3)', borderRadius: '8px', fontSize: '0.85rem', color: '#f8fafc' }}>
                ⚛️ React 
              </span>
              <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221, 11, 169, 0.3)', borderRadius: '8px', fontSize: '0.85rem', color: '#f8fafc' }}>
                ⚡ JavaScript 
              </span>
              <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221, 11, 169, 0.3)', borderRadius: '8px', fontSize: '0.85rem', color: '#f8fafc' }}>
                🌐 HTML5 & CSS3
              </span>

              {/* Backend */}
              <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221, 11, 169, 0.3)', borderRadius: '8px', fontSize: '0.85rem', color: '#f8fafc' }}>
                🐍 Python (Django)
              </span>
              <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221, 11, 169, 0.3)', borderRadius: '8px', fontSize: '0.85rem', color: '#f8fafc' }}>
                ☕ Java
              </span>
              <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221, 11, 169, 0.3)', borderRadius: '8px', fontSize: '0.85rem', color: '#f8fafc' }}>
                🐘 PHP
              </span>

              {/* Datos */}
              <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221, 11, 169, 0.3)', borderRadius: '8px', fontSize: '0.85rem', color: '#f8fafc' }}>
                🗄️ SQL & PL/SQL
              </span>

              {/* Herramientas */}
              <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221, 11, 169, 0.3)', borderRadius: '8px', fontSize: '0.85rem', color: '#f8fafc' }}>
                🐙 Git & GitHub
              </span>
              <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221, 11, 169, 0.3)', borderRadius: '8px', fontSize: '0.85rem', color: '#f8fafc' }}>
                🐳 Docker
              </span>
            </div>
          </div>
        </div>

        {/* Tu foto (Derecha) */}
        {/* Contenedor del Círculo (Aquí controlas el tamaño real) */}
        <div style={{
          width: '350px',       /* Tamaño de ancho del círculo */
          height: '350px',      /* Tamaño de alto del círculo */
          minWidth: '350px',    /* Prohíbe que se encoja */
          marginRight: '4rem',  /* Empuja el círculo hacia la izquierda */
          borderRadius: '50%',  /* Lo hace completamente redondo */
          overflow: 'hidden',   /* Corta cualquier pico de la foto que sobresalga */
          border: '4px solid #632177',
          boxShadow: '0 0 30px rgba(221, 11, 169, 0.2)',
          flexShrink: 0
        }}>

          {/* La Imagen dentro del círculo */}
          <img
            src="/mifoto.png"
            alt="Foto de perfil"
            style={{
              width: '100%',    /* Ocupa el 100% del círculo de 450px */
              height: '100%',   /* Ocupa el 100% del círculo de 450px */
              objectFit: 'cover' /* Cuadra la foto sin deformarla */
            }}
          />

        </div>

      </section>

      

      <h2 id="proyectos" className="projects-header">Proyecto Destacado</h2>

      {/* Contenedor centrado para un solo proyecto */}
      <section style={{ display: 'flex', justifyContent: 'center', padding: '0 1rem' }}>
        
        {/* Tarjeta 1 (Carely) - Ahora más ancha y centrada */}
        <div className="card glass" style={{ 
          width: '100%', 
          maxWidth: '750px', /* Limita el ancho para que la foto no se vea gigante en pantallas grandes */
          padding: '1.5rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem' 
        }}>
          <a href="https://carely-portfolio.onrender.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/carely.png" 
              alt="Previsualización de Carely" 
              style={{ 
                width: '100%', 
                height: '350px', /* Un poco más alta para que luzca mejor al ser más ancha */
                objectFit: 'cover', 
                borderRadius: '16px', 
                border: '2px solid rgba(221, 11, 169, 0.3)', /* Tu borde fucsia unificado */
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)', 
                cursor: 'pointer' 
              }} 
            />
          </a>
          <div className="card-content" style={{ padding: '0' }}>
            <h3 style={{ fontSize: '1.8rem' }}>Carely</h3>
            <p style={{ fontSize: '1.05rem' }}>
              Plataforma web tipo tablón de anuncios para el intercambio de servicios vecinales (cuidado de mascotas, plantas, etc.). Desarrollada con arquitectura MVC, incluye sistema de autenticación, publicación de anuncios interactivos y gestión de base de datos relacional.
            </p>
            <div className="tags" style={{ marginTop: '1rem' }}>
              <span className="tag">Python</span>
              <span className="tag">Django</span>
              <span className="tag">JavaScript</span>
              <span className="tag">CSS</span>
            </div>
          </div>
        </div>

        

      </section>
      <section id="contacto" style={{
        marginTop: '8rem',
        marginBottom: '4rem',
        position: 'relative',
        padding: '4rem',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.08) 100%)',
        backdropFilter: 'blur(20px)',
        borderRadius: '30px',
        border: '1px solid var(--glass-border)',
        borderLeft: '8px solid var(--accent)', 
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3rem',
        overflow: 'hidden'
      }}>
        
        {/* Luz decorativa de fondo dentro de la propia tarjeta */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'var(--accent)',
          filter: 'blur(100px)',
          opacity: '0.15',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}></div>

        {/* Columna Izquierda: Mensaje y guiño de código */}
        <div style={{ flex: '1 1 400px', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ 
              display: 'inline-block', 
              width: '12px', 
              height: '12px', 
              background: 'var(--accent)', 
              borderRadius: '50%', 
              boxShadow: '0 0 15px var(--accent)' 
            }}></span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-light)', margin: 0 }}>Iniciemos algo grande</h2>
          </div>
          
          <p style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Ya sea para una primera oportunidad profesional, una colaboración o simplemente para hablar de desarrollo web y código limpio. Mi bandeja de entrada está siempre lista.
          </p>
          
          <div style={{ 
            background: 'rgba(0,0,0,0.4)', 
            padding: '1.2rem', 
            borderRadius: '10px', 
            fontFamily: 'monospace', 
            fontSize: '0.95rem',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.5)'
          }}>
            <span style={{ color: '#a855f7' }}>const</span> <span style={{ color: '#f8fafc' }}>developer</span> <span style={{ color: '#a855f7' }}>=</span> {'{'}
            <br/>
            &nbsp;&nbsp;status: <span style={{ color: 'var(--accent)' }}>"Open to work"</span>,
            <br/>
            &nbsp;&nbsp;location: <span style={{ color: 'var(--accent)' }}>"Alicante, ES"</span>
            <br/>
            {'}'};
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Email y Redes Sociales */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: '1 1 300px', zIndex: 1 }}>
          
          {/* Tarjeta Integrada de Email (Texto + Botón) */}
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.3)', 
            padding: '1.5rem', 
            borderRadius: '15px', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Contacta directamente:</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.5rem' }}>✉️</span>
                <span style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '600', 
                  color: 'var(--accent)',
                  userSelect: 'all', 
                  cursor: 'copy',
                  wordBreak: 'break-all'
                }}>
                  elisabethmaestre9@gmail.com
                </span>
              </div>
            </div>
            
            {/* Botón de Enviar Mensaje */}
            <a href="mailto:elisabethmaestre9@gmail.com" className="btn" style={{ 
              textAlign: 'center', 
              padding: '0.8rem', 
              fontSize: '1.1rem', 
              borderRadius: '10px', 
              width: '100%', 
              boxSizing: 'border-box' 
            }}>
              Enviar mensaje
            </a>
          </div>
          
          {/* Botones de Redes Sociales */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a 
              href="https://www.linkedin.com/in/elisabethmr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ 
                flex: 1, 
                textAlign: 'center', 
                background: 'rgba(255, 255, 255, 0.05)', 
                color: 'var(--text-light)', 
                border: '1px solid var(--glass-border)', 
                borderRadius: '12px',
                padding: '0.8rem',
                fontSize: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              💼 LinkedIn
            </a>
            <a 
              href="https://github.com/ElisabethMR09" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ 
                flex: 1, 
                textAlign: 'center', 
                background: 'rgba(255, 255, 255, 0.05)', 
                color: 'var(--text-light)', 
                border: '1px solid var(--glass-border)', 
                borderRadius: '12px',
                padding: '0.8rem',
                fontSize: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              💻 GitHub
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}