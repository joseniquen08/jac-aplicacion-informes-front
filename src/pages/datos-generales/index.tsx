import { Layout } from "@src/components/Dashboard/Layout";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const datos_generales = ({ index }: any) => {
  const [subestaciones, setSubestaciones] = useState<{ nombre: string }[]>([]);


  const handleAgregarSubestacion = () => {
    const nuevaSubestacion = {
      nombre: "",
    };
    setSubestaciones([...subestaciones, nuevaSubestacion]);
  };

  const handleEliminarSubestacion = (index: number) => {
    const nuevasSubestaciones = [...subestaciones];
    nuevasSubestaciones.splice(index, 1);
    setSubestaciones(nuevasSubestaciones);
  };

  const handleNombreSubestacionChange = (event: any, index: number) => {
    const nuevasSubestaciones = [...subestaciones];
    nuevasSubestaciones[index].nombre = event.target.value;
    setSubestaciones(nuevasSubestaciones);
  };

  const handleGuardarSubestaciones = () => {
    //validar con el back esta funcionalidad
  }

  return (
    <>
      <Layout font={poppins}>
        <div className="flex flex-col justify-center items-center">
          <form className="w-full max-w-md">
            <div className="flex justify-between items-center mt-8 mb-4">
              <h2 className="text-xl font-bold">DATOS GENERALES</h2>
              <button className="bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 rounded">
                Guardar
              </button>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-2/5">
                <label >Código de informe:</label>
              </div>
              <input type="text" className="rounded-full p-2 w-3/5 bg-gray-100 border border-gray-400" />
            </div>
            <div className="flex items-center mb-4">
              <div className="w-2/5">
                <label>Proyecto:</label>
              </div>
              <input type="text" className="rounded-full p-2 w-3/5 bg-gray-100 border border-gray-400" />
            </div>
            <div className="flex items-center mb-4">
              <div className="w-2/5">
                <label>Cliente:</label>
              </div>
              <input type="text" className="rounded-full p-2 w-3/5 bg-gray-100 border border-gray-400" />
            </div>
            <div className="flex items-center mb-4">
              <div className="w-2/5">
                <label >Actividad:</label>
              </div>
              <input type="text" className="rounded-full p-2 w-3/5 bg-gray-100 border border-gray-400" />
            </div>
            <div className="flex items-center mb-4">
              <div className="w-2/5">
                <label >OC Cliente:</label>
              </div>
              <input type="text" className="rounded-full p-2 w-3/5 bg-gray-100 border border-gray-400" />
            </div>
          </form>

          {/* SUBESTACIONES*/}
          <div className="flex justify-between items-center mb-4 mt-8 mb-4">
            <h2 className="text-xl font-bold mr-20 pr-20">SUBESTACIONES</h2>
            <div className="flex">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleAgregarSubestacion}
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24"
                  stroke-width= {3.5} 
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              // onClick={Implementar Guardar estacion con el fecth endpoint - pendiente}
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                     fill="none" viewBox="0 0 24 24" 
                     stroke-width={3.5} 
                     stroke="currentColor" 
                     className="w-6 h-6"
                  >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>

              </button>
            </div>
          </div>
          {/* aqui agregar subestaciones*/}
          {subestaciones.map((subestacion, index) => (
            <div className="flex items-center mb-2" key={index}>
              <p className="mr-2">{index + 1}. </p>
              <div className="flex items-center mr-2">
                <label className="block text-gray-700 font-bold mr-2">
                  Nombre:
                </label>
                <input
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Nombre de la subestación"
                  value={subestacion.nombre}
                  onChange={(event) =>
                    handleNombreSubestacionChange(event, index)
                  }
                />
              </div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded mr-2"
              >
                Editar
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                onClick={() => handleEliminarSubestacion(index)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default datos_generales;
