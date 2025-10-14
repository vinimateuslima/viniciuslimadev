import React, { useState, useRef } from 'react';

interface ImageUploadProps {
  value: string;
  onChange: (base64: string) => void;
  label: string;
  required?: boolean;
  error?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  label,
  required = false,
  error
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(value || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    // Validar tipo de arquivo
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('Tipo de arquivo inválido. Use JPEG, PNG, GIF ou WebP.');
      return;
    }

    // Validar tamanho (50MB)
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      alert('Arquivo muito grande. Tamanho máximo: 50MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      setPreview(base64);
      onChange(base64);
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setPreview(null);
    onChange('');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ 
        display: 'block', 
        marginBottom: '8px', 
        fontWeight: '600',
        color: '#333'
      }}>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      
      <div
        style={{
          border: `2px dashed ${dragActive ? '#fda81e' : error ? '#dc3545' : '#e1e5e9'}`,
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'border-color 0.3s ease',
          backgroundColor: dragActive ? '#f8f9fa' : 'white'
        }}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        
        {preview ? (
          <div>
            <img
              src={preview}
              alt="Preview"
              style={{
                maxWidth: '200px',
                maxHeight: '150px',
                borderRadius: '8px',
                marginBottom: '10px'
              }}
            />
            <div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage();
                }}
                style={{
                  background: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                Remover
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onButtonClick();
                }}
                style={{
                  background: '#28a745',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Alterar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '48px', color: '#6c757d', marginBottom: '10px' }}>
              📁
            </div>
            <p style={{ color: '#6c757d', margin: '0' }}>
              Clique aqui ou arraste uma imagem
            </p>
            <p style={{ color: '#6c757d', fontSize: '14px', margin: '5px 0 0 0' }}>
              JPEG, PNG, GIF, WebP (máx. 50MB)
            </p>
          </div>
        )}
      </div>
      
      {error && (
        <span style={{ 
          color: '#dc3545', 
          fontSize: '14px', 
          marginTop: '5px',
          display: 'block'
        }}>
          {error}
        </span>
      )}
    </div>
  );
};

export default ImageUpload;
