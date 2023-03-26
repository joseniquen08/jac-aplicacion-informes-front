import Image from 'next/image';
import Navbar from "@src/components/navbar";
import Sidebar from "@src/components/sidebar"

const Dashboard = ({ users }: any) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />

        <div className="flex flex-1 overflow-hidden ">
          <div className='flex flex-col lg:flex-row w-full'>
            <div className='w-full lg:w-2/12'>
              <Sidebar />
            </div>
            <div className="w-full lg:w-10/12 py-16 px-12">
              <div className="flex items-center justify-center">
                {/* Aqui empieza el buscador */}
                <div className="flex flex-grow">
                  <form className="flex w-full">
                    <input className="flex-1 bg-white border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none" type="text" placeholder="Buscar..." />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-r-md py-2 px-4 ml-2" type="submit">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </button>
                  </form>
                  {/* Aqui se contiene el boton crear proyecto */}
                </div>
                <div className="flex ml-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4" type="submit">Crear Proyecto</button>
                </div>
              </div>
              {/* Aqui empieza la tabla */}
              <table className="table-auto w-full mt-8 rounded-lg overflow-hidden">
                <thead className="bg-blue-200">
                  <tr>
                    <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">Código</th>
                    <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">Estado</th>
                    <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">Cliente</th>
                    <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">Asunto</th>
                    <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">Ejecutante</th>
                    <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">Fecha</th>
                    <th className="px-4 py-2 font-semibold hover:bg-gray-300 hover:text-gray-700">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">SS22-1234</td>
                    <td className="border px-4 py-2">Registrado</td>
                    <td className="border px-4 py-2">Agrícola Sol de Villacuri</td>
                    <td className="border px-4 py-2">Proyecto de prueba 2</td>
                    <td className="border px-4 py-2">Adolfo Jimenez</td>
                    <td className="border px-4 py-2">22/09/2022</td>
                    <td className="border px-4 py-2 flex justify-center">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-full py-1 px-3 mr-2">
                        Editar
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white rounded-full py-1 px-3 mr-2">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};
export default Dashboard;