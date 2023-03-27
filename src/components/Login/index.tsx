import login from "@src/assets/img/login.png";
import Image from "next/image";
import { HiUserCircle } from "react-icons/hi";

export const LoginComponent = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: "calc(100vh - 4rem)",
        backgroundImage: `url(/bg.svg)`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col w-10/12 mx-auto overflow-hidden bg-white shadow-lg lg:flex-row lg:w-8/12 rounded-xl">
          <div className="flex items-center w-full px-12 py-12 lg:w-1/2">
            <div className="w-full">
              <h2 className="mb-4 text-4xl font-semibold">Bienvenido</h2>
              <p className="mb-8">
                Ingrese sus credenciales para iniciar sesión
              </p>
              <form action="#">
                <div className="flex flex-col space-y-8">
                  <HiUserCircle size={28} />
                  <input
                    type="text"
                    placeholder="Nombre"
                    name="user"
                    className="px-6 py-2 rounded-full shadow-xl"
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="px-6 py-2 rounded-full shadow-xl"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 text-sm font-medium text-center text-white bg-blue-400 rounded-full"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden w-full p-3 lg:w-1/2 lg:block">
            <div className="h-full overflow-hidden rounded-xl">
              <Image
                src={login}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
