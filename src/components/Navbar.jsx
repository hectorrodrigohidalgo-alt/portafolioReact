import { BsFillMoonStarsFill } from 'react-icons/bs'

export default function NavBar() {
    return (
        <nav className='py-8 pt-10 mx-2 flex justify-between bg-linear-to-r from-gray-900 to-gray-800 '>
            <h1 className='text-xl font-roboto p-5 rounded-3xl  bg-gray-900 '>Portafolio</h1>
            
            <ul className='flex items-center rounded-3xl bg-gray-900 p-4'>
                <li>
                    {/* <a className='' href="#">
                        <BsFillMoonStarsFill className=' rounded-2xl ml-8 font-roboto cursor-pointer text-2xl' />
                    </a>                     */}
                    
                </li>
                <li>
                    <a className='bg-linear-to-r from-blue-800 to-blue-600 text-white px-4 py-2 rounded-2xl ml-8 font-roboto' href="#Hero" >
                        Quien Soy
                    </a>
                    <a className='bg-linear-to-r from-blue-800 to-blue-600 text-white px-4 py-2 rounded-2xl ml-8 font-roboto' href="#Skills">
                        Habilidades
                    </a>
                    <a className='bg-linear-to-r from-blue-800 to-blue-600 text-white px-4 py-2 rounded-2xl ml-8 font-roboto' href="#Projects">
                        Proyectos
                    </a>
                    <a className='bg-linear-to-r from-blue-800 to-blue-600 text-white px-4 py-2 rounded-2xl ml-8 font-roboto' href="#Socialmedia">
                        Contacto
                    </a>                                                               
                </li>

            </ul>
            
        </nav>
        

    )
}