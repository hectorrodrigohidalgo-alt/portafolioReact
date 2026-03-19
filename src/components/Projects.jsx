// Subcomponente reutilizable para cada proyecto
function ProjectCard({ title, description, gradient, icon, tags, tagColors, accentColor, demoHref, codeHref }) {
  return (
    <div className={`bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-${accentColor}-500 hover:shadow-2xl hover:shadow-${accentColor}-900/50 transition-all`}>
      {/* Header visual */}
      <div className={`relative h-64 bg-linear-to-br ${gradient} overflow-hidden group`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <i className={`${icon} text-9xl text-white/20`}></i>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/80 to-transparent opacity-70"></div>
        {/* Tags sobre la imagen */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, i) => (
              <span key={tag} className={`${tagColors[i]} px-3 py-1 rounded-full text-xs font-semibold`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className={`text-2xl font-bold mb-3 text-${accentColor}-300`}>{title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
        <div className="flex gap-3">
          <a
            href={demoHref}
            className={`flex-1 bg-${accentColor}-600 hover:bg-${accentColor}-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors`}
          >
            <i className="fas fa-external-link-alt"></i> Ver Demo
          </a>
          <a
            href={codeHref}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <i className="fab fa-github"></i> Código
          </a>
        </div>
      </div>
    </div>
  )
}

// Datos de proyectos separados del JSX — agrega más proyectos aquí fácilmente
const projects = [
  {
    title: 'Buscador de Peliculas',
    description: 'Sitio web para buscar películas usando la API de TMDB, con filtros por género, año y popularidad, y detalles de cada película.',
    gradient: 'from-blue-600 to-purple-600',
    icon: 'fas fa-shopping-cart',
    tags: ['React', 'Vite', 'API REST', 'JavaScript'],
    tagColors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-yellow-500'],
    accentColor: 'blue',
    demoHref: '#',
    codeHref: '#',
  },
]

export default function Projects() {
  return (
    <section  id="Projects" className="bg-gray-800/30 rounded-2xl border border-gray-700 min-h-screen py-40 px-10 mx-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-blue-400">Proyectos</h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}