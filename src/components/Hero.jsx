import Image from 'next/image';

export default function Hero() {
    return (
        <section id='Hero' className="min-h-screen pt-10">

            <div className='relative w-80 h-80 mx-auto'>
                <Image
                    src="/FOTO CV.png"
                    alt="Avatar de Hector Hidalgo"
                    fill
                    className='rounded-full object-cover'
                />
            </div>
            <div className='text-center p-5 space-y-10 font-roboto text-white'>
                <h2 className='text-6xl font-medium'>Hector Hidalgo Diaz</h2>
                <h3 className='text-3xl font-normal mb-10'>Programador</h3>
                <p className='text-justify font-light leading-5 mx-10'>Soy recién egresado de la carrera de Ingeniería Informática, motivado por aplicar y fortalecer los conocimientos
                    adquiridos durante mi formación académica. Me encuentro en la búsqueda de una práctica profesional que me permita
                    aprender sobre el entorno laboral, desarrollar habilidades técnicas y aportar con compromiso y disposición al
                    equipo de trabajo.</p>
            </div>

        </section>
    )
}