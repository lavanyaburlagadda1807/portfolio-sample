import React from 'react';

function Projects() {
  return (
    <section id="projects" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" alt="Project 1" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-2xl font-bold mb-2">Project 1</h3>
          <p>A description of the first project.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Project 2" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-2xl font-bold mb-2">Project 2</h3>
          <p>A description of the second project.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Project 3" className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-2xl font-bold mb-2">Project 3</h3>
          <p>A description of the third project.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
