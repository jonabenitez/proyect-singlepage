
const whatsappContact = <a className="font-semibold duration-500 text-white text-2xl" href="https://api.whatsapp.com/send?phone=393295497391">
</a>

const instagramContact = <a className="font-semibold duration-500 text-white text-2xl" href="https://api.whatsapp.com/send?phone=393295497391"> </a>


const PreFooter = () => {


    return (<>
        <div className="flex justify-start items-center w-full bg-green-400 mt-12 h-28">

            <button className="pr-20 w-1/2 flex justify-end transition-transform duration-500 transform hover:-translate-y-2">
                <h1 className="font-semibold text-white uppercase text-2xl">si nosotros pudimos vos tambien podes!</h1>
            </button>

            <h3 className="font-semibold pl-20 text-2xl  ">Contactanos en nuestras redes</h3>

            <div id="contactos"> 
                <ul className="list-none flex">
                    <li className="text-4xl pl-10 cursor-pointer  duration-200 hover:text-white ">
                        <ion-icon className="" name="logo-whatsapp"></ion-icon>
                        {whatsappContact}
                    </li>


                    <li className="text-4xl pl-10 cursor-pointer  duration-100 hover:text-white ">
                        <ion-icon name="logo-instagram"></ion-icon>
                        {instagramContact}
                    </li>
                </ul>
            </div>
        </div>

    </>)
}

export default PreFooter