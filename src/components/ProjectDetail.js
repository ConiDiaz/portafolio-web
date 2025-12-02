import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projectData = {
  1: {
    id: 1,
    title: 'LAFKEN',
    subtitle: 'Creación de una cerveza chilena',
    description: 'Lafken surge inspirado en las leyendas de Chiloé y busca transportar a los consumidores a la magia de la isla. Cada detalle, desde la botella hasta sus cajas, conecta con su rica cultura. Más que una bebida, Lafken lleva un pedacito de Chiloé a cada mesa.',
    images: [
      '/Imagenes/lafken/LAFKEN%201.1.png',
      '/Imagenes/lafken/LAFKEN%203.png',
      '/Imagenes/lafken/LAFKEN%204.png'
    ]
  },
  2: {
    id: 2,
    title: 'SILOS',
    subtitle: 'Creación de tipografía',
    description: 'Silos es una familia tipográfica inspirada en los silos de construcción. Cada carácter funciona como un "ladrillo", con formas sólidas y modulares que evocan estructura, peso y estabilidad.',
    images: [
      '/Imagenes/silos/Silos%201.png',
      '/Imagenes/silos/Silos%202.png',
      '/Imagenes/silos/Silos%203.png'
    ]
  },
  3: {
    id: 3,
    title: 'MINDLY',
    subtitle: 'Aplicación de journaling',
    description: 'Mindly es una aplicación diseñada para ordenar tus ideas de forma simple y visual. Permite crear mapas mentales, organizar proyectos y conectar pensamientos de manera intuitiva. Su objetivo es ayudarte a pensar mejor, planificar más rápido y dar estructura a todo lo que tienes en la cabeza.',
    images: [
      '/Imagenes/mindly/Mindly%201.png',
      '/Imagenes/mindly/Mindly%202.png',
      '/Imagenes/mindly/Mindly%203.png'
    ]
  },
  4: {
    id: 4,
    title: 'CLAWS & CATS',
    subtitle: 'Juego digital de rol',
    description: 'Juego de rol digital con temática de fantasía. Desarrollo de personajes, narrativa y experiencia de usuario para plataforma digital.',
    images: []
  },
  5: {
    id: 5,
    title: 'THANATOS',
    subtitle: 'Fotolibro sobre abandono y memoria',
    description: 'Fotolibro nacido desde el cementerio, un espacio donde la vida y la muerte se encuentran sin disfraz. A través de sus imágenes, el recorrido revela la brevedad de la existencia y la certeza de que, sin importar el camino, todos terminamos en el mismo destino. Entre lápidas, nombres borrados y flores marchitas aparece también el olvido: esa segunda muerte que llega cuando ya nadie recuerda. Este trabajo invita a mirar de frente lo inevitable, para valorar la vida en la dimensión que realmente tiene: frágil, fugaz y profundamente humana.',
    images: [
      '/Imagenes/thanatos/Thanatos%201.png',
      '/Imagenes/thanatos/Thanatos%202.png',
      '/Imagenes/thanatos/Thanatos%203.png'
    ]
  },
  6: {
    id: 6,
    title: 'MANOS DEL PASADO',
    subtitle: 'Afiches feria Centro cultural Mapocho',
    description: 'Manos del Pasado es una serie de afiches para una feria de oficios tradicionales en Estación Mapocho. Inspirados en un texto sobre antiguas materialidades como arcilla, tejido y madera estos afiches homenajean las técnicas y manos que dieron forma a nuestro patrimonio.',
    images: [
      '/Imagenes/manosdelpasado/Manos%20del%20pasado%201.png',
      '/Imagenes/manosdelpasado/Manos%20del%20pasado%202.png',
      '/Imagenes/manosdelpasado/Manos%20del%20pasado%203.png'
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <section className="project-detail">
        <div className="inner">
          <h1>Proyecto no encontrado</h1>
          <Link to="/projects">Volver a proyectos</Link>
        </div>
      </section>
    );
  }

  const mainImage = project.images && project.images.length > 0 ? project.images[0] : null;
  const restImages = project.images ? project.images.slice(1) : [];

  return (
    <section className="project-detail">
      <div className="inner">
        <Link to="/projects" className="back-link">← VOLVER A PROYECTOS</Link>
        
        <div className="detail-header">
          <h1>{project.title}</h1>
          <p className="subtitle">{project.subtitle}</p>
        </div>

        <div className="detail-content">
          <p className="description">{project.description}</p>
          
          {mainImage && (
            <div className="detail-main-image">
              <img src={mainImage} alt={`${project.title} principal`} />
            </div>
          )}

          {restImages && restImages.length > 0 && (
            <div className="detail-images-grid">
              {restImages.map((img, idx) => (
                <div key={idx} className="detail-image-item">
                  <img src={img} alt={`${project.title} ${idx + 2}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
