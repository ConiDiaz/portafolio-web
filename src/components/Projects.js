import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const all = [
  { id: 1, title: 'LAFKEN', subtitle: 'Creación de una cerveza chilena', img: '/Imagenes/lafken/LAFKEN%201.png', categories: ['GRÁFICO', 'IDENTIDAD'] },
  { id: 6, title: 'MANOS DEL PASADO', subtitle: 'Afiches feria Centro cultural Mapocho', img: '/Imagenes/manosdelpasado/Manos%20del%20pasado%201.png', categories: ['GRÁFICO'] },
  { id: 3, title: 'MINDLY', subtitle: 'Aplicación de journaling', img: '/Imagenes/mindly/Mindly%201.png', categories: ['GRÁFICO', 'DIGITAL'] },
  { id: 2, title: 'SILOS', subtitle: 'Creación de tipografía', img: '/Imagenes/silos/Silos%201.png', categories: ['GRÁFICO', 'DIGITAL'] },
  { id: 5, title: 'THANATOS', subtitle: 'Fotolibro sobre abandono y memoria', img: '/Imagenes/thanatos/Thanatos%201.png', categories: ['EDITORIAL'] }
];

export default function Projects() {
  const [filter, setFilter] = useState('TODOS');

  const filteredProjects = filter === 'TODOS' 
    ? all 
    : all.filter(project => project.categories.includes(filter));

  return (
    <section className="projects-page">
      <div className="inner">
        <h1 className="page-title">PROYECTOS</h1>
        <div className="filters">
          <span 
            onClick={() => setFilter('TODOS')} 
            style={{ cursor: 'pointer', fontWeight: filter === 'TODOS' ? '900' : '400' }}
          >
            TODOS
          </span>
          &nbsp;&nbsp;
          <span 
            onClick={() => setFilter('GRÁFICO')} 
            style={{ cursor: 'pointer', fontWeight: filter === 'GRÁFICO' ? '900' : '400' }}
          >
            GRÁFICO
          </span>
          &nbsp;&nbsp;
          <span 
            onClick={() => setFilter('EDITORIAL')} 
            style={{ cursor: 'pointer', fontWeight: filter === 'EDITORIAL' ? '900' : '400' }}
          >
            EDITORIAL
          </span>
          &nbsp;&nbsp;
          <span 
            onClick={() => setFilter('IDENTIDAD')} 
            style={{ cursor: 'pointer', fontWeight: filter === 'IDENTIDAD' ? '900' : '400' }}
          >
            IDENTIDAD
          </span>
          &nbsp;&nbsp;
          <span 
            onClick={() => setFilter('DIGITAL')} 
            style={{ cursor: 'pointer', fontWeight: filter === 'DIGITAL' ? '900' : '400' }}
          >
            DIGITAL
          </span>
          &nbsp;&nbsp;
          <span 
            onClick={() => setFilter('UX/UI')} 
            style={{ cursor: 'pointer', fontWeight: filter === 'UX/UI' ? '900' : '400' }}
          >
            UX/UI
          </span>
        </div>

        <div className="projects-list">
          <div className="projects-grid">
            {filteredProjects.map(p => (
              <ProjectCard key={p.id} id={p.id} title={p.title} subtitle={p.subtitle} img={p.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}