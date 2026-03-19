
// Subcomponente reutilizable para cada badge de habilidad
function SkillBadge({ label, icon, gradient }) {
    return (
        <span className={`bg-linear-to-r ${gradient} px-5 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform cursor-pointer flex items-center gap-2`}>
            <i className={icon}></i> {label}
        </span>
    )
}

// Datos de habilidades separados del JSX
const languages = [
    { label: 'JavaScript', icon: 'fab fa-js', gradient: 'from-yellow-500 to-yellow-600' },
    { label: 'Python', icon: 'fab fa-python', gradient: 'from-blue-500 to-blue-600' },
]

const frameworks = [
    { label: 'React', icon: 'fab fa-react', gradient: 'from-cyan-500 to-blue-500' },
    { label: 'Django', icon: 'fab fa-node-js', gradient: 'from-green-500 to-green-600' },
    { label: 'Git', icon: 'fab fa-git-alt', gradient: 'from-purple-500 to-purple-600' },
]




export default function Skills() {
    return (
        <section id="Skills" className='min-h-screen py-40 px-10'>
            <div className='rounded-2xl border border-gray-700 m-10 text-white p-5'>
                <h2 className='text-3xl font-bold text-left pl-5 mx-5'>Habilidades</h2>

                <h3 className='text-2xl pl-5 font-bold py-5 mx-5'>Lenguajes de programación</h3>
                <div className="flex flex-wrap gap-3 pl-10">
                    {languages.map((skill) => (
                        <SkillBadge key={skill.label} {...skill} />
                    ))}
                </div>

                <h3 className='text-2xl pl-10 font-bold py-5 mx-5'>Frameworks</h3>
                <div className="flex flex-wrap gap-3 pl-10">
                    {frameworks.map((skill) => (
                        <SkillBadge key={skill.label} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    )

}