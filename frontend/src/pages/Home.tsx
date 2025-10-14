import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <div>
      {/* Header and Banner Section */}
      <div className="header-and-banner-con w-100 float-left position-relative">
        <div className="header-and-banner-inner-con">
          <header className="main-header">
            <div className="container pl-0 pr-0">
              <div className="header-con">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <a className="navbar-brand p-0" href="https://vinilimadev.com">
                    <img
                      src="/src/assets/image/logo-img.png"
                      alt="logo-img"
                      className="img-fluid"
                    />
                  </a>
                  <button
                    className="navbar-toggler p-0 collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active pl-0">
                        <a className="nav-link p-0 is-active" href="index.html">
                          Home<span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#service-con">Serviços</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#pricing">Preços</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#testimonials">Depoimentos</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#Portfolio">Portfólio</a>
                      </li>
                    </ul>
                    <div className="d-inline-block contact">
                      <a href="#Contact">Contato</a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </header>
          
          <a href="https://wa.me/+5581999740336" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
            <i className="fab fa-whatsapp"></i>
          </a>
          <br />

          <section className="banner-main-con" id="home">
            <div className="container pl-0 pr-0">
              <div className="footer-social-icon banner-social-icon mb-0">
                <ul className="mb-0 list-unstyled">
                  <li className="">
                    <a href="https://wa.me/+5581999740336" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp d-flex align-items-center justify-content-center"></i>
                    </a>
                  </li>
                  <li className="mt-3 mb-3">
                    <a
                      href="https://www.instagram.com/viniciuslimadev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram d-flex align-items-center justify-content-center ml-0 mr-0"></i>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://www.linkedin.com/in/vinicius-lima-924807181/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in d-flex align-items-center justify-content-center"></i>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="banner-con text-lg-left text-center">
                <div className="row">
                  <div className="col-lg-7 col-sm-12 d-flex justify-content-center flex-column">
                    <div className="banner-left-con wow slideInLeft">
                      <div className="banner-heading">
                        <h2>Olá, eu sou</h2>
                        <ul className="dynamic-txts">
                          <li><h1>Vinicius Lima</h1></li>
                          <li><h1>Vinicius Lima</h1></li>
                          <li><h1>Vinicius Lima</h1></li>
                          <li><h1>Vinicius Lima</h1></li>
                        </ul>
                        <p>
                          Especialista em criação de sites, estou aqui para
                          construir uma presença online que reflita a essência do
                          seu negócio e impulsione seu sucesso na web.
                        </p>
                      </div>
                      <div className="banner-btn generic-btn d-inline-block">
                        <a href="#Contact">Vamos conversar?</a>
                      </div>
                      <a href="#Portfolio" className="See-btn">Meus trabalhos</a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-12">
                    <div className="banner-right-con position-relative wow slideInRight" id="banner-right-con">
                      <figure className="mb-0">
                        <img
                          src="/src/assets/image/banner-right-img.png"
                          alt="banner-right-img"
                          id="banner-right-img"
                        />
                      </figure>
                      <div className="cursor"></div>
                      <div className="cursor2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Services Section */}
      <section className="w-100 float-left service-con padding-top padding-bottom position-relative" id="service-con">
        <div className="container">
          <div className="service-inner-con position-relative">
            <div className="generic-title text-center">
              <h6>Meus Serviços</h6>
              <h2 className="mb-0">
                Conheça os meus<br />
                principais serviços
              </h2>
            </div>
            <div className="service-box wow fadeInUp">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="service-box-item">
                    <figure className="mb-0">
                      <img
                        src="/src/assets/image/service-icon3.png"
                        alt="service-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="service-box-item-content">
                      <h4>Site institucional</h4>
                      <p>
                        Um portal online que apresenta informações sobre uma
                        empresa, sua história, serviços e formas de contato,
                        ajudando a estabelecer credibilidade e presença digital.
                      </p>
                      <a href="#" data-toggle="modal" data-target="#web-development">
                        Leia Mais
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service-box-item">
                    <figure className="mb-0">
                      <img
                        src="/src/assets/image/service-icon1.png"
                        alt="service-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="service-box-item-content">
                      <h4>Blog</h4>
                      <p>
                        Uma plataforma para compartilhar regularmente conteúdo
                        relevante e atualizado sobre diversos tópicos, promovendo
                        engajamento com o público-alvo e demonstrando expertise.
                      </p>
                      <a href="#" data-toggle="modal" data-target="#Ui-Design">
                        Leia Mais
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-0">
                <div className="col-lg-6 col-md-6">
                  <div className="service-box-item mb-0 em-breve">
                    <figure className="mb-0">
                      <img
                        src="/src/assets/image/service-icon4.png"
                        alt="service-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="service-box-item-content">
                      <h4>E-Commerce</h4>
                      <p>
                        Uma loja virtual que facilita a compra e venda de produtos
                        ou serviços pela internet, proporcionando aos usuários uma
                        experiência de compra conveniente e segura, com navegação
                        intuitiva e opções de pagamento.
                      </p>
                      <a href="#" data-toggle="modal" data-target="#app-development">
                        Leia Mais
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service-box-item">
                    <figure className="mb-0">
                      <img
                        src="/src/assets/image/service-icon2.png"
                        alt="service-icon"
                        className="img-fluid"
                      />
                    </figure>
                    <div className="service-box-item-content">
                      <h4>Página de Eventos, Captação de Leads</h4>
                      <p>
                        Uma página de eventos é uma plataforma online dedicada a
                        promover e gerenciar eventos, como conferências,
                        workshops, shows, entre outros.
                        <a href="#" data-toggle="modal" data-target="#web-design">
                          Leia Mais
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Movido para ficar após serviços */}
      <PortfolioSection />

      {/* Pricing Section */}
      <section id="pricing" className="bg-white w-100 float-left padding-top padding-bottom position-relative">
        <div className="container">
          <div className="generic-title">
            <h2 className="text-center" style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#3f396d',
              marginBottom: '20px'
            }}>
              PREÇOS
            </h2>
            <h6 className="text-center" style={{
              fontSize: '1.1rem',
              color: '#7d7789',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Os preços abaixo se referem à criação de site. <br />
              A hospedagem e o domínio ficam a cargo do cliente
            </h6>
          </div>
          
          <div style={{ marginTop: '60px' }}>
            <div className="row justify-content-center">
              {/* Landing Page Básica */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '25px',
                  padding: '0',
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
                }}>

                  {/* Header */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '40px 30px 30px',
                    textAlign: 'center',
                  }}>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      marginBottom: '10px',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}>
                      🚀 LANDING PAGE BÁSICA
                    </h3>
                    <div style={{ marginBottom: '20px' }}>
                      <span style={{
                        color: 'white',
                        fontSize: '3rem',
                        fontWeight: '800',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                      }}>
                        R$ 500
                      </span>
                      <span style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '1rem',
                        marginLeft: '5px'
                      }}>
                        ,00
                      </span>
                    </div>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.9rem',
                      margin: 0
                    }}>
                      Perfeita para começar sua presença online
                    </p>
                  </div>

                  {/* Content */}
                  <div style={{
                    background: 'white',
                    padding: '40px 30px',
                    borderRadius: '0 0 25px 25px'
                  }}>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 30px 0'
                    }}>
                      {[
                        '✅ 1 Página completa',
                        '✅ Chamada para ação (CTA)',
                        '✅ Banner personalizado',
                        '✅ Botão WhatsApp integrado',
                        '✅ Seção de depoimentos',
                        '✅ Mapa de localização',
                        '✅ Design 100% responsivo',
                        '❌ Formulário de contato'
                      ].map((item, index) => (
                        <li key={index} style={{
                          padding: '8px 0',
                          fontSize: '0.95rem',
                          color: '#555',
                          borderBottom: index < 7 ? '1px solid #f0f0f0' : 'none'
                        }}>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Aviso */}
                    <div style={{
                      background: '#f8f9fa',
                      padding: '15px',
                      borderRadius: '10px',
                      marginBottom: '30px',
                      border: '1px solid #e9ecef'
                    }}>
                      <p style={{
                        fontSize: '0.85rem',
                        color: '#6c757d',
                        margin: 0,
                        lineHeight: '1.4'
                      }}>
                        💡 <strong>Dica:</strong> Nesta opção é possível pagar apenas o <strong>domínio</strong> inicialmente. 
                        Caso o site tenha muitos acessos, será necessário contratar uma <strong>hospedagem</strong> paga.
                      </p>
                    </div>

                    {/* Button */}
                    <a
                      href="https://api.whatsapp.com/send?phone=558199740336&text=Ol%C3%A1%2C%20fiquei%20interessado%20em%20uma%20Landing%20Page%20B%C3%A1sica%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre!"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        textDecoration: 'none',
                        padding: '15px 30px',
                        borderRadius: '50px',
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                      }}
                    >
                      💬 Solicitar Agora
                    </a>
                  </div>
                </div>
              </div>

              {/* Landing Page Avançada */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  borderRadius: '25px',
                  padding: '0',
                  boxShadow: '0 20px 40px rgba(240, 147, 251, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: 'scale(1.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(240, 147, 251, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) translateY(0)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(240, 147, 251, 0.3)';
                }}>
                  {/* Badge Mais Escolhido */}
                  <div className="badge-mais-escolhido">
                    MAIS ESCOLHIDO
                  </div>

                  {/* Header */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '40px 30px 30px',
                    textAlign: 'center',
                  }}>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      marginBottom: '10px',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}>
                      ⚡ LANDING PAGE AVANÇADA
                    </h3>
                    <div style={{ marginBottom: '20px' }}>
                      <span style={{
                        color: 'white',
                        fontSize: '3rem',
                        fontWeight: '800',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                      }}>
                        R$ 800
                      </span>
                      <span style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '1rem',
                        marginLeft: '5px'
                      }}>
                        ,00
                      </span>
                    </div>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.9rem',
                      margin: 0
                    }}>
                      Solução completa para seu negócio
                    </p>
                  </div>

                  {/* Content */}
                  <div style={{
                    background: 'white',
                    padding: '40px 30px',
                    borderRadius: '0 0 25px 25px'
                  }}>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 30px 0'
                    }}>
                      {[
                        '✅ 1 Página completa',
                        '✅ Chamada para ação (CTA)',
                        '✅ Banner personalizado',
                        '✅ Botão WhatsApp integrado',
                        '✅ Seção de depoimentos',
                        '✅ Mapa de localização',
                        '✅ Design 100% responsivo',
                        '✅ Email profissional',
                        '✅ Feed do Instagram',
                        '✅ Google Analytics',
                        '✅ Sistema de agendamentos'
                      ].map((item, index) => (
                        <li key={index} style={{
                          padding: '8px 0',
                          fontSize: '0.95rem',
                          color: '#555',
                          borderBottom: index < 10 ? '1px solid #f0f0f0' : 'none'
                        }}>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <a
                      href="https://api.whatsapp.com/send?phone=558199740336&text=Ol%C3%A1%2C%20fiquei%20interessado%20em%20uma%20Landing%20Page%20Avan%C3%A7ada%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre!"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                        color: 'white',
                        textDecoration: 'none',
                        padding: '15px 30px',
                        borderRadius: '50px',
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(240, 147, 251, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(240, 147, 251, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(240, 147, 251, 0.3)';
                      }}
                    >
                      🚀 Solicitar Agora
                    </a>
                  </div>
                </div>
              </div>

              {/* Site Institucional */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  borderRadius: '25px',
                  padding: '0',
                  boxShadow: '0 20px 40px rgba(79, 172, 254, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(79, 172, 254, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(79, 172, 254, 0.3)';
                }}>

                  {/* Header */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '40px 30px 30px',
                    textAlign: 'center',
                  }}>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      marginBottom: '10px',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}>
                      🏢 SITE INSTITUCIONAL
                    </h3>
                    <div style={{ marginBottom: '20px' }}>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '0.9rem',
                        margin: '0 0 5px 0'
                      }}>
                        a partir de
                      </p>
                      <span style={{
                        color: 'white',
                        fontSize: '3rem',
                        fontWeight: '800',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                      }}>
                        R$ 1.500
                      </span>
                    </div>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.9rem',
                      margin: 0
                    }}>
                      Solução completa para empresas
                    </p>
                  </div>

                  {/* Content */}
                  <div style={{
                    background: 'white',
                    padding: '40px 30px',
                    borderRadius: '0 0 25px 25px'
                  }}>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 30px 0'
                    }}>
                      {[
                        '✅ 5 Páginas completas',
                        '✅ Chamada para ação (CTA)',
                        '✅ Banner personalizado',
                        '✅ Botão WhatsApp integrado',
                        '✅ Seção de depoimentos',
                        '✅ Mapa de localização',
                        '✅ Design 100% responsivo',
                        '✅ Email profissional',
                        '✅ Feed do Instagram',
                        '✅ Google Analytics',
                        '✅ Sistema de agendamentos'
                      ].map((item, index) => (
                        <li key={index} style={{
                          padding: '8px 0',
                          fontSize: '0.95rem',
                          color: '#555',
                          borderBottom: index < 10 ? '1px solid #f0f0f0' : 'none'
                        }}>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <a
                      href="https://api.whatsapp.com/send?phone=558199740336&text=Ol%C3%A1%2C%20fiquei%20interessado%20em%20uma%20Site%20Institucional%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre!"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                        color: 'white',
                        textDecoration: 'none',
                        padding: '15px 30px',
                        borderRadius: '50px',
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(79, 172, 254, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(79, 172, 254, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 172, 254, 0.3)';
                      }}
                    >
                      💼 Solicitar Orçamento
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Substitui a seção de habilidades */}
      <TestimonialsSection />

      {/* Contact Section - Apenas redes sociais */}
      <section className="w-100 float-left form-main-con padding-top padding-bottom" id="Contact">
        <div className="container">
          <div className="form-main-inner-con position-relative">
            <div className="generic-title text-center">
              <h6>Entre em contato</h6>
              <h2 className="mb-0">Vamos conversar?</h2>
            </div>
            
            {/* Redes Sociais Centralizadas */}
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="contact-social-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '30px',
                  marginTop: '50px'
                }}>
                  {/* Instagram */}
                  <div className="contact-social-item" style={{
                    background: 'linear-gradient(135deg, #E4405F 0%, #C13584 100%)',
                    borderRadius: '20px',
                    padding: '40px 30px',
                    textAlign: 'center',
                    color: 'white',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(196, 53, 132, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(196, 53, 132, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(196, 53, 132, 0.3)';
                  }}
                  onClick={() => window.open('https://www.instagram.com/viniciuslimadev/', '_blank')}>
                    <i className="fab fa-instagram" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
                    <h4 style={{ marginBottom: '10px', fontWeight: '600' }}>Instagram</h4>
                    <p style={{ margin: 0, opacity: 0.9 }}>@viniciuslimadev</p>
                  </div>

                  {/* Email */}
                  <div className="contact-social-item" style={{
                    background: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
                    borderRadius: '20px',
                    padding: '40px 30px',
                    textAlign: 'center',
                    color: 'white',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(66, 133, 244, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(66, 133, 244, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(66, 133, 244, 0.3)';
                  }}
                  onClick={() => window.open('mailto:viniciusmateus.dev@gmail.com', '_blank')}>
                    <i className="fas fa-envelope" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
                    <h4 style={{ marginBottom: '10px', fontWeight: '600' }}>Email</h4>
                    <p style={{ margin: 0, opacity: 0.9 }}>viniciusmateus.dev@gmail.com</p>
                  </div>

                  {/* WhatsApp */}
                  <div className="contact-social-item" style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    borderRadius: '20px',
                    padding: '40px 30px',
                    textAlign: 'center',
                    color: 'white',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(37, 211, 102, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 211, 102, 0.3)';
                  }}
                  onClick={() => window.open('https://wa.me/+5581999740336', '_blank')}>
                    <i className="fab fa-whatsapp" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
                    <h4 style={{ marginBottom: '10px', fontWeight: '600' }}>WhatsApp</h4>
                    <p style={{ margin: 0, opacity: 0.9 }}>(81) 9 9974-0336</p>
                  </div>

                  {/* LinkedIn */}
                  <div className="contact-social-item" style={{
                    background: 'linear-gradient(135deg, #0077B5 0%, #005885 100%)',
                    borderRadius: '20px',
                    padding: '40px 30px',
                    textAlign: 'center',
                    color: 'white',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0, 119, 181, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 119, 181, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 119, 181, 0.3)';
                  }}
                  onClick={() => window.open('https://www.linkedin.com/in/vinicius-lima-924807181/', '_blank')}>
                    <i className="fab fa-linkedin-in" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
                    <h4 style={{ marginBottom: '10px', fontWeight: '600' }}>LinkedIn</h4>
                    <p style={{ margin: 0, opacity: 0.9 }}>Vinicius Lima</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="w-100 float-left weight-footer-con position-relative">
        <div className="container">
          <div className="weight-footer-content text-center">
            <figure className="">
              <img
                src="/src/assets/image/footer-logo.png"
                alt="footer-logo"
                className="img-fluid"
              />
            </figure>
            <div className="footer-navbar">
              <ul className="list-unstyled">
                <li className="d-inline-block border-left-0 pl-0">
                  <a href="#home">Home</a>
                </li>
                <li className="d-inline-block"><a href="#testimonials">Depoimentos</a></li>
                <li className="d-inline-block">
                  <a href="#service-con">Serviços</a>
                </li>
                <li className="d-inline-block">
                  <a href="#pricing">Preços</a>
                </li>
                <li className="d-inline-block"><a href="#Portfolio">Portfólio</a></li>
                <li className="d-inline-block">
                  <a href="#testimonials">Depoimentos</a>
                </li>
                <li className="d-inline-block pr-0">
                  <a href="#Contact">Contato</a>
                </li>
              </ul>
            </div>
            <div className="footer-social-icon">
              <ul className="mb-0">
                <li className="d-inline-block">
                  <a href="https://wa.me/+5581999740336" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp d-flex align-items-center justify-content-center"></i>
                  </a>
                </li>
                <li className="d-inline-block">
                  <a
                    href="https://www.instagram.com/viniciuslimadev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram d-flex align-items-center justify-content-center"></i>
                  </a>
                </li>
                <li className="d-inline-block">
                  <a
                    href="https://www.linkedin.com/in/vinicius-lima-924807181/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in d-flex align-items-center justify-content-center"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy-right-content text-center">
            <p className="mb-0">
              Copyright 2023 Vinicius Lima | Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;
