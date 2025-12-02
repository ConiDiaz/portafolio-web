import React from 'react';
import { Link } from 'react-router-dom'; 

export default function FeaturedProject({ id, title, subtitle, img }) {
  return (
    <Link to={`/project/${id}`} className="featured-project-link">
      
      <article className="featured-project"> 
        
        <div 
          className="featured-thumb" 
          style={{ backgroundImage: `url(${img})` }} 
        />
        
        <div className="featured-meta">
          <h3>{title}</h3> 
          <p>{subtitle}</p>  
        </div>
        
      </article>
    </Link>
  );
}
