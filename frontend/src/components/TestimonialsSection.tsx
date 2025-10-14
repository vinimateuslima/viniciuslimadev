
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
      name: "Maria Silva",
      role: "Empresária",
      company: "Loja Virtual Maria",
      content: "Excelente trabalho! O Vinicius criou um site incrível para minha loja virtual. O design ficou moderno e profissional, e as vendas aumentaram significativamente.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "João Santos",
      role: "CEO",
      company: "TechStart",
      content: "Profissional muito competente e dedicado. Entregou o projeto no prazo e superou nossas expectativas. Recomendo para qualquer empresa que precise de um site profissional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Designer",
      company: "Studio Ana",
      content: "O Vinicius transformou minha ideia em realidade. O site ficou exatamente como eu imaginava, com um design único e funcionalidades que facilitam muito o trabalho.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
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
