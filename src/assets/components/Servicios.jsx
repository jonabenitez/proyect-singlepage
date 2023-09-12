import puntos from "../img/linea-punteada-1.svg";
import archive from "../img/archive.jpeg";
import actasArg from "../img/actasArg.jpeg";
import actasItalianas from "../img/actaItaliana.jpeg";
import puntosInv from "../img/lineainv.jpg";
import revision from "../img/revision.jpg";
import asesoramiento from "../img/asesoramiento.png";

import { text } from "./baseText";
const Service = () => {
  return (
    <>
      {/* Sección 1: ¿QUIÉNES SOMOS? */}
      <div className="bg-gray-100 py-16">
        <h1
          id="nuestrosServ"
          className="mx-28 text-center mt-16 text-5xl mb-2 font-bold text-green-500 md:pt-4"
        >
          ¿QUIÉNES SOMOS?
        </h1>
        <p className="mt-6 text-2xl text-left font-semibold mx-28">
          {text[1].quienesSomos}
        </p>
      </div>

      {/* Sección 2: ¿QUÉ TE PODEMOS OFRECER? */}
      <h1
        id="nuestrosServ"
        className="mx-28 mt-16 text-5xl text-center mb-2 font-bold text-red-300 md:pt-4"
      >
        ¿QUÉ TE PODEMOS OFRECER?
      </h1>

      <div className="flex justify-center px-28 pt-14 pb-0">
        {/* Subsección 2.1: ASESORAMIENTO */}
        <div className="flex justify-center items-top w-1/2  ">
          <img
            src={asesoramiento}
            alt="Imagen"
            className="h-96 object-contain"
          />
        </div>
        <div className="w-1/2 p-4">
          <h1
            id="nuestrosServ"
            className=" text-5xl mb-2  font-bold text-green-500 md:pt-4"
          >
            ASESORAMIENTO
          </h1>
          <p className="text-3xl text-left text-gray-700-900">
            {text[2].asesoramiento}
          </p>
          {text[3].bottomContact}
        </div>
      </div>

      {/* Separador de puntos */}
      <div>
        <img src={puntos} alt="Imagen" className="w-1/2 ml-52 b-52 pl-20" />
      </div>

      <div className="flex justify-centee px-28">
        {/* Subsección 2.2: SOLICITUD DE ACTAS ITALIANAS */}
        <div className="w-1/2 ">
          <h1
            id="nuestrosServ"
            className=" text-6xl  font-bold text-green-500 mb-4 "
          >
            SOLICITUD DE ACTAS ITALIANAS{" "}
          </h1>
          <p className="text-3xl text-gray-700-900">{text[4].actasItalianas}</p>
          {text[3].bottomContact}
        </div>
        <div className="w-1/2 px-12 pt-0">
          <img src={actasItalianas} alt="Imagen-archive" className="pl-20" />
        </div>
      </div>

      {/* Separador de puntos invertido */}
      <div>
        <img
          src={puntosInv}
          alt="Imagen"
          className="w-1/2 ml-52 b-52 pt-8 pl-20"
        />
      </div>

      <div className="flex justify-center px-28 pt-14 pb-0">
        {/* Subsección 2.3: SOLICITUD DE ACTAS ARGENTINAS */}
        <div className="flex justify-center items-top w-1/2 ">
          <img src={actasArg} alt="Imagen" className="h-96 object-contain" />
        </div>
        <div className="w-1/2 p-">
          <h1
            id="nuestrosServ"
            className=" text-5xl font-bold text-green-500 pb-2  md:pt-4"
          >
            SOLICITUD DE ACTAS ARGENTINAS
          </h1>
          <p className="text-3xl text-left text-gray-700-900">
            {text[5].actasArg}
          </p>
          {text[3].bottomContact}
        </div>
      </div>

      {/* Separador de puntos */}
      <div>
        <img src={puntos} alt="Imagen" className="w-1/2 ml-52 b-52 pl-20" />
      </div>

      <div className="flex justify-center px-28 pt-14 pb-0">
        {/* Subsección 2.4: CERTF. NO NATURALIZACION */}
        <div className="w-1/2 p-4">
          <h1
            id="nuestrosServ"
            className=" text-5xl mb-2  font-bold text-green-500  md:pt-4"
          >
            CERTF. NO NATURALIZACION
          </h1>
          <p className="text-3xl text-left text-gray-700-900">
            {text[6].certNoNaturalizacion}
          </p>
          {text[3].bottomContact}
        </div>
        <div className="flex justify-center items-top w-1/2 ">
          <img src={archive} alt="Imagen" className="h-96 object-contain" />
        </div>
      </div>

      {/* Separador de puntos invertido */}
      <div>
        <img
          src={puntosInv}
          alt="Imagen"
          className="w-1/2 ml-52 b-52 pt-8 pl-20"
        />
      </div>

      <div className="flex justify-center px-28 pt-14 pb-0">
        {/* Subsección 2.5: REVISION DE CARPETA */}
        <div className="flex justify-center items-top w-1/2 ">
          <img src={revision} alt="Imagen" className="h-96 object-contain" />
        </div>

        <div className="w-1/2 p-4 pb-20">
          <h1
            id="nuestrosServ"
            className=" text-5xl mb-2  font-bold text-green-500  md:pt-4"
          >
            REVISION DE CARPETA
          </h1>
          <p className="text-3xl text-left text-gray-700-900">
            {text[7].revisionCarperta}
          </p>
          {text[3].bottomContact}
        </div>
      </div>
    </>
  );
};

export default Service;
