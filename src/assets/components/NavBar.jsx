import logo from '../img/logo.png'


function NavBar() {
  const whatsapp = (
    <ul>
      {" "}
      <li className="text-3xl  text-green-500 lg:pl-4 hover:text-green-700 duration-300">
        <ion-icon name="logo-whatsapp"></ion-icon>
      </li>
    </ul>
  );
  
  const instagram = (
    <ul className="lg:ml-10">

      <li className="text-3xl  duration-300">
        <ion-icon name="logo-instagram"></ion-icon>{" "}
      </li>
    </ul>
  );

  let Links = [
    { name: "¿Quiénes somos?", link: "#quienesSomos" },
    { name: "Servicios", link: "#nuestrosServ" },
    { name: "Contactos", link: "#contactos" },
    {
      name: instagram,
      link: "https://www.instagram.com/animateaemigrar/?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      name: whatsapp,
      link: "https://api.whatsapp.com/send?phone=393295497391",
    },
  ];

  return (
    <div
      className="w-full top-0 left-0 static font-semibold " /**BARRA GENERAL*/
    >
      <div
        className=" md:flex items-center justify-between  py-3 md:px-10 px-7" /**BARRA CENTRAL 
            con el flex hago que todos los tag que estan dentro se pongan uno alado del otro, osea los ul que esten alado del titulo y del icon, todos en la misma linea
            el items hace que se muevan estos elementos de arriba para abajo y el justify de derecha a izquierda, con el items-center lo centramos y con el justify between le damos un espacio entre uno y otro, es decir entre el titulo y los ul*/
      >
        <div
          className="font-bold text-2xl cursor-pointer flex items-center text-gray-800" /**DIV QUE CONTIENE EL LOGO */
        >
          <span className="text-4xl text-slate-600 mr-1 pt-2">
           <img className='relative max-h-20 lg:px-4' src={logo} alt="logo"  />
          </span>
          <span className="pl-3 underline-offset-1 ">Animate a emigrar</span>
        </div>
        <ul className="md:flex md:items-end md:pb-0  relative  md:static  md:w-auto md:pl-0    list-none">
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-4 text-xl
                                text-gray-800 
                                md:my-0 my-4
                                hover:text-red-400
                                hover:underline
                                duration-400"
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
