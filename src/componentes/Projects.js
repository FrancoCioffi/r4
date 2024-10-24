import React, { useState } from 'react';
import './styles/projects.css';

const projectsList = [
  {
    title: 'Primer Projecto Hecho en react',
    description: 'Primera pagina hecha en react.',
    link: 'https://react1-6b814.web.app', 
  },
  {
    title: 'Desarrollo de Hooks y Eventos',
    description: 'Ejercicios usando diferentes hooks y eventos',
    link: 'https://react2-ac25d.web.app',
  },
  {
    title: 'Manejo de Rutas',
    description: 'Lista de tareas usando manejo de rutas.',
    link: 'https://react3-ea5c0.web.app',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <h2 className='projectsH2'>Proyectos</h2>
      <div className="projectsGrid">
        {projectsList.map((project, index) => (
          <div key={index} className="projectsCard" onClick={() => setSelectedProject(project)}>
            <h3 className='projectsH3'>{project.title}</h3>
            <p className='projectsP'>{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="projectModal">
          <h3 className='projectsH3'>{selectedProject.title}</h3>
          <p className='projectsP'>{selectedProject.description}</p>
          <button onClick={() => window.open(selectedProject.link, '_blank')}>Ver Proyecto</button>
          <button onClick={() => setSelectedProject(null)}>Cerrar</button>
        </div>
      )}
    </section>
  );
};

export default Projects;
