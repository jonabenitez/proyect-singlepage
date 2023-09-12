import { text } from "./baseText";

const whatsappContact = text[0].whatsappContact
const instagramContact = text[0].whatsappContact

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 gap-2 pl-36 py-6">

        <div>
          {/* Contenido de la primera sección */}
          
          <ul className="list-none flex justify  pr-10">
            <li className="text-4xl font-semibold cursor-pointer  text-green-500">
              <ion-icon name="logo-whatsapp"></ion-icon>
              {whatsappContact}
            </li>

            <li className="semibold text-2xl">Contactos</li>

            <li className="text-4xl pr-52 font-semibold cursor-pointer  text-blue-800">
              <ion-icon name="logo-instagram"></ion-icon>
              {instagramContact}
            </li>
          </ul>
        </div>


        <div className="text-2xl">
          {/* Contenido de la segunda sección */}
          <h3>Contactos</h3>
          <p></p>
        </div>
        <div>
          {/* Contenido de la tercera sección */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
