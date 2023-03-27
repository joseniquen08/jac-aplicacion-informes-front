import { Layout } from "@src/components/Dashboard/Layout";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const Dashboard = ({ users }: any) => {
  return (
    <>
      <Layout font={poppins}>
        <div className="w-full px-12 py-16">
          <div className="flex items-center justify-center">
            {/* Aqui empieza el buscador */}
            <div className="flex flex-grow">
              <form className="flex w-full">
                <input
                  className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-l-md focus:outline-none"
                  type="text"
                  placeholder="Buscar..."
                />
                <button
                  className="px-4 py-2 ml-2 text-white bg-blue-500 hover:bg-blue-700 rounded-r-md"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </form>
              {/* Aqui se contiene el boton crear proyecto */}
            </div>
            <div className="flex ml-4">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
                type="submit"
              >
                Crear Proyecto
              </button>
            </div>
          </div>
          {/* Aqui empieza la tabla */}
          <table className="w-full mt-8 overflow-hidden rounded-lg table-auto">
            <thead className="bg-blue-200">
              <tr>
                <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">
                  Código
                </th>
                <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">
                  Estado
                </th>
                <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">
                  Cliente
                </th>
                <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">
                  Asunto
                </th>
                <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">
                  Ejecutante
                </th>
                <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">
                  Fecha
                </th>
                <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">SS22-1234</td>
                <td className="px-4 py-2 border">Registrado</td>
                <td className="px-4 py-2 border">Agrícola Sol de Villacuri</td>
                <td className="px-4 py-2 border">Proyecto de prueba 2</td>
                <td className="px-4 py-2 border">Adolfo Jimenez</td>
                <td className="px-4 py-2 border">22/09/2022</td>
                <td className="flex justify-center px-4 py-2 border">
                  <button className="px-3 py-1 mr-2 text-white bg-blue-500 rounded-full hover:bg-blue-700">
                    Editar
                  </button>
                  <button className="px-3 py-1 mr-2 text-white bg-red-500 rounded-full hover:bg-red-700">
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};
export default Dashboard;
