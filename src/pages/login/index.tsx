import { GetServerSideProps } from "next";
import Image from 'next/image';
import login from '@src/assets/img/login.png';
import Navbar from "@src/components/navbar";

const Login = ({ users }: any) => {
  return (
    <>
      <Navbar/>
      <div className={`min-h-screen py-20 bg-gradient-to-r from-gray-300 to-blue-400`}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-4xl mb-4 mt-6 font-semibold">Bienvenido</h2>
              <p className="mb-8 ">Ingrese sus credenciales para iniciar sesión</p>
              <form action="#">
                <div className="grid grid-rows-2 grid-flow-col gap-5">
                  <input type="text" placeholder="Nombre" name="user" className="border border-gray-400 py-1 px-2 rounded-lg" />
                  <input type="password" placeholder="Contraseña" name="password" className="border border-gray-400 py-1 px-2 rounded-lg" />
                </div>
                <div className="mt-5">
                  <button type="submit" className="w-full bg-blue-400	py-3 text-white text-center font-semibold rounded-lg">Iniciar Sesión</button>
                </div>
              </form>
            </div>

            <div className="w-full lg:w-1/2 image-container hidden lg:block">
              <Image src={login} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export async function getServerSideProps(context: GetServerSideProps) {
  const data = {
    data: [
      {
        name: "Juan",
        password: "123"
      },
      {
        name: "Juana",
        password: "123"
      }

    ],
  };

  const users = data.data;

  return {
    props: {
      users,
    },
  };
}

export default Login;
