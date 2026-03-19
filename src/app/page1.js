// import { BsFillMoonStarsFill } from 'react-icons/bs'
// import { AiFillInstagram } from "react-icons/ai"
// import Image from 'next/image';


// export default function Home() {
//   return (
//     <div>
//       <main className='bg-linear-to-r from-gray-900 to-gray-800 text-white'>
//         <section className="min-h-screen">
//           <nav className='py-10 mb-12 flex justify-between'>
//             <h1 className='text-xl font-roboto'>Portafolio</h1>
//             <ul className='flex items-center'>
//               <li>
//                 <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
//               </li>
//               <li><a className='bg-linear-to-r from-blue-800 to-blue-600 text-white px-4 py-2 rounded-md ml-8 font-roboto' href="#">Resume</a></li>

//             </ul>
//           </nav>
//           <div className='relative w-80 h-80 mx-auto'>
//             <Image
//               src="/FotoCV.jpeg"
//               alt="Avatar de Hector Hidalgo"
//               fill
//               className='rounded-full object-cover'
//             />
//           </div>
//           <div className='text-center p-5 space-y-10 font-roboto text-white'>
//             <h2 className='text-6xl font-medium'>Hector Hidalgo Diaz</h2>
//             <h3 className='text-3xl font-normal mb-10'>Programador.</h3>
//             <p className='text-justify font-light leading-5 mx-10'>Soy recién egresado de la carrera de Ingeniería Informática, motivado por aplicar y fortalecer los conocimientos
//               adquiridos durante mi formación académica. Me encuentro en la búsqueda de una práctica profesional que me permita
//               aprender sobre el entorno laboral, desarrollar habilidades técnicas y aportar con compromiso y disposición al
//               equipo de trabajo.</p>
//           </div>
//         </section>
//         <section className='min-h-screen py-40 px-10'>
//           <div className=' rounded-2xl border border-gray-700 m-10 text-white font-roboto p-5'>
//             <h2 className='text-3xl font-bold text-left pl-5 mx-5'>Habilidades</h2>
//             <h3 className='text-2xl  pl-5 font-bold py-5 mx-5'>Lenguajes de programacion</h3>
//             <div class="flex flex-wrap gap-3 pl-10">
//               <span className="bg-linear-to-r from-yellow-500 to-yellow-600 px-5 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform cursor-pointer flex items-center gap-2">
//                 <i className="fab fa-js"></i> JavaScript
//               </span>
//               <span className="bg-linear-to-r from-blue-500 to-blue-600 px-5 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform cursor-pointer flex items-center gap-2">
//                 <i className="fab fa-python"></i> Python
//               </span>

//             </div>

//             <h3 className='text-2xl  pl-10 font-bold py-5 mx-5'>Frameworks</h3>
//             <div className="flex flex-wrap gap-3 pl-13">
//               <span className="bg-linear-to-r from-cyan-500 to-blue-500 px-5 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform cursor-pointer flex items-center gap-2">
//                 <i className="fab fa-react"></i> React
//               </span>
//               <span className="bg-linear-to-r from-green-500 to-green-600 px-5 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform cursor-pointer flex items-center gap-2">
//                 <i className="fab fa-node-js"></i> Django
//               </span>
//               <span className="bg-linear-to-r from-purple-500 to-purple-600 px-5 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform cursor-pointer flex items-center gap-2">
//                 <i className="fab fa-git-alt"></i> Git
//               </span>

//             </div>

//           </div>
//         </section>
//         {/* SECCION PROYECTOS */}
//         <section className=" bg-gray-800/30 rounded-2xl border border-gray-700 min-h-screen py-40 px-10 mx-20">
//           <div class="flex items-center justify-between mb-8">
//             <h2 class="text-3xl font-bold text-blue-400">Opción 1: Cards con Imagen Destacada</h2>
//             <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Más visual</span>
//           </div>

//           <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
           
//             <div class="project-card bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-900/50">
              
//               <div class="relative h-64 bg-linear-to-br from-blue-600 to-purple-600 overflow-hidden group">
//                 <div class="absolute inset-0 flex items-center justify-center">
//                   <i class="fas fa-shopping-cart text-9xl text-white/20"></i>
//                 </div>
//                 <div class="image-overlay absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/80 to-transparent opacity-70"></div>
//                 <div class="absolute bottom-4 left-4 right-4">
//                   <div class="flex gap-2 flex-wrap">
//                     <span class="bg-blue-500 px-3 py-1 rounded-full text-xs font-semibold">React</span>
//                     <span class="bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">Node.js</span>
//                     <span class="bg-orange-500 px-3 py-1 rounded-full text-xs font-semibold">MongoDB</span>
//                   </div>
//                 </div>
//               </div>

             
//               <div class="p-6">
//                 <h3 class="text-2xl font-bold mb-3 text-blue-300">E-Commerce Platform</h3>
//                 <p class="text-gray-400 mb-4 leading-relaxed">
//                   Plataforma de comercio electrónico con carrito de compras, pagos en línea y panel de administración completo.
//                 </p>
//                 <div class="flex gap-3">
//                   <a href="#" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
//                     <i class="fas fa-external-link-alt"></i> Ver Demo
//                   </a>
//                   <a href="#" class="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
//                     <i class="fab fa-github"></i> Código
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div class="project-card bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-900/50">
//               <div class="relative h-64 bg-linear-to-br from-purple-600 to-pink-600 overflow-hidden group">
//                 <div class="absolute inset-0 flex items-center justify-center">
//                   <i class="fas fa-tasks text-9xl text-white/20"></i>
//                 </div>
//                 <div class="image-overlay absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/80 to-transparent opacity-70"></div>
//                 <div class="absolute bottom-4 left-4 right-4">
//                   <div class="flex gap-2 flex-wrap">
//                     <span class="bg-yellow-500 px-3 py-1 rounded-full text-xs font-semibold">JavaScript</span>
//                     <span class="bg-blue-500 px-3 py-1 rounded-full text-xs font-semibold">React</span>
//                     <span class="bg-red-500 px-3 py-1 rounded-full text-xs font-semibold">Firebase</span>
//                   </div>
//                 </div>
//               </div>

//               <div class="p-6">
//                 <h3 class="text-2xl font-bold mb-3 text-purple-300">Task Manager App</h3>
//                 <p class="text-gray-400 mb-4 leading-relaxed">
//                   Aplicación de gestión de tareas con autenticación, categorías, fechas límite y notificaciones en tiempo real.
//                 </p>
//                 <div class="flex gap-3">
//                   <a href="#" class="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
//                     <i class="fas fa-external-link-alt"></i> Ver Demo
//                   </a>
//                   <a href="#" class="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
//                     <i class="fab fa-github"></i> Código
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className='text-5xl text-blue-700 py-10 flex justify-center'>
//           <AiFillInstagram />
//         </div>
//       </main>

//     </div>
//   );
// }
