import { useState, useEffect } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { useProjetos } from '../hooks/useProjetos';
import { Projeto } from '../services/api';

const PortfolioSection: React.FC = () => {
  const { projetos, loading } = useProjetos();
  const [filteredProjetos, setFilteredProjetos] = useState<Projeto[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjetos(projetos);
    } else {
      const filtered = projetos.filter(projeto => 
        projeto.categoria.toLowerCase().includes(activeFilter.toLowerCase())
      );
      setFilteredProjetos(filtered);
    }
  }, [projetos, activeFilter]);

  // Obter categorias únicas dos projetos existentes
  const getUniqueCategories = () => {
    const categories = [...new Set(projetos.map(projeto => projeto.categoria))];
    return categories;
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
    setSelectedImage('');
  };

  const getCategoriaColor = (categoria: string) => {
    const colors: Record<string, string> = {
      'Landing Page': '#28a745',
      'Site Institucional': '#007bff',
      'Blog': '#6f42c1',
      'E-commerce': '#fd7e14',
      'Portfólio': '#20c997',
      'Aplicativo Web': '#e83e8c',
      'Sistema Web': '#6c757d',
      'Loja Virtual': '#ffc107',
      'Site Corporativo': '#17a2b8',
      'Site Pessoal': '#6f34fe'
    };
    return colors[categoria] || '#6c757d';
  };

  const filterSelection = (c: string) => {
    setActiveFilter(c);
  };

  return (
    <section className="w-100 float-left portfolio-con padding-top" id="Portfolio">
      <div className="container">
        <div className="generic-title text-center">
          <h6 className="text-white">Meus Trabalhos</h6>
          <h2 className="mb-0 text-white">Veja o meu portfólio</h2>
        </div>
        <div id="myBtnContainer" className="text-center">
          <button 
            className={`${activeFilter === 'all' ? 'active active_button' : ''}`} 
            onClick={() => filterSelection('all')}
          >
            Todos
          </button>
          {getUniqueCategories().map((categoria) => (
            <button 
              key={categoria}
              className={`${activeFilter === categoria.toLowerCase() ? 'active active_button' : ''}`} 
              onClick={() => filterSelection(categoria.toLowerCase())}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            color: 'white'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>⏳</div>
            <h3>Carregando projetos...</h3>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && filteredProjetos.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '40px',
            padding: '0 20px',
            marginBottom: '60px' // Adiciona espaço para evitar sobreposição
          }}>
            {filteredProjetos.map((projeto) => (
              <div key={projeto._id} style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Imagem */}
                <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => openImageModal(projeto.imagem)}>
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  {/* Overlay para indicar que é clicável */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}>
                    <Eye size={32} color="white" />
                  </div>
                  
                  {/* Tag de Categoria */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: getCategoriaColor(projeto.categoria),
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                  }}>
                    {projeto.categoria}
                  </div>
                </div>

                {/* Conteúdo */}
                <div style={{ 
                  padding: '25px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#3f396d',
                    marginBottom: '10px',
                    lineHeight: '1.3'
                  }}>
                    {projeto.titulo}
                  </h3>
                  
                  <p style={{
                    color: '#7d7789',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontSize: '0.9rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 4, // Limita a 4 linhas
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    flex: 1
                  }}>
                    {projeto.descricao}
                  </p>

                  {/* Botão de Link - sempre na mesma altura */}
                  <div style={{ marginTop: 'auto' }}>
                    {projeto.link ? (
                      <a
                        href={projeto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: 'linear-gradient(135deg, #fda81e 0%, #ff8c00 100%)',
                          color: 'white',
                          textDecoration: 'none',
                          padding: '10px 20px',
                          borderRadius: '25px',
                          fontSize: '14px',
                          fontWeight: '600',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(253, 168, 30, 0.3)',
                          width: '100%',
                          justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(253, 168, 30, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(253, 168, 30, 0.3)';
                        }}
                      >
                        <ExternalLink size={16} />
                        Ver Projeto
                      </a>
                    ) : (
                      <button
                        disabled
                        style={{
                          background: '#6c757d',
                          color: 'white',
                          textDecoration: 'none',
                          padding: '10px 20px',
                          borderRadius: '25px',
                          fontSize: '14px',
                          fontWeight: '600',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          width: '100%',
                          justifyContent: 'center',
                          border: 'none',
                          cursor: 'not-allowed',
                          opacity: 0.7
                        }}
                      >
                        <ExternalLink size={16} />
                        Site Desativado
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProjetos.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            color: 'white'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>📁</div>
            <h3>Nenhum projeto encontrado</h3>
            <p>Não há projetos para a categoria selecionada</p>
          </div>
        )}
      </div>

      {/* Modal de Visualização de Imagem */}
      {imageModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }} onClick={closeImageModal}>
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh'
          }} onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Visualização completa"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '10px'
              }}
            />
            <button
              onClick={closeImageModal}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
