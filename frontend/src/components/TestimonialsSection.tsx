
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const TestimonialsSection: React.FC = () => {
  // Depoimentos temporários - facilmente editáveis
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marllyson Renan",
      role: "Cirurgião Dentista",
      company: "Marllyson",
      content: "Precisei do serviço de Vinicius e ele foi muito atencioso, tirou minhas duvidas e prestou um excelente serviço!",
      rating: 5,
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWuA3VGTU6tpXz6tP66laeUIST84UGY_6Fgbku7ZB2YzmiiZPpI=w36-h36-p-rp-mo-br100"
    },
    {
      id: 2,
      name: "Taciana Dantas",
      role: "CEO",
      company: "Doce Senhorita",
      content: "Sou proprietária da Doce Senhorita e escolhi o Vini para cuidar de toda parte visual do meu negócio. Desde os criativos, ao site, logo e todos os detalhes. E com muita segurança, eu digo, não existe profissional melhor! Ele sempre está disponível para dúvidas, sugestões e é extremamente pontual com as entregas! Profissional ímpar! Não largo nunca mais kkkk ♥️",
      rating: 5,
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVGtWmuK68_xHWNkZCa7E-Zk_BX2GOVQrjL8b-m1yR9565OTyA=w36-h36-p-rp-mo-br100"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
        style={{ fontSize: '14px' }}
      />
    ));
  };

  return (
    <section className="w-100 float-left testimonials-con padding-top padding-bottom position-relative" id="testimonials">
      <div className="container">
        <div className="generic-title text-center">
          <h6>Depoimentos</h6>
          <h2 className="mb-0">O que meus clientes dizem</h2>
        </div>

        <div className="row mt-5">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-card" style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}>
                {/* Rating */}
                <div className="text-center mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontStyle: 'italic',
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontSize: '0.95rem'
                  }}>
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author */}
                <div className="d-flex align-items-center">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: `url(${testimonial.avatar}) center/cover`,
                    marginRight: '15px',
                    border: '3px solid #fda81e'
                  }}></div>
                  <div>
                    <h6 style={{
                      margin: 0,
                      color: '#3f396d',
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}>
                      {testimonial.name}
                    </h6>
                    <p style={{
                      margin: 0,
                      color: '#7d7789',
                      fontSize: '0.85rem'
                    }}>
                      {testimonial.role} - {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
