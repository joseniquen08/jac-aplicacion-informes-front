import logo from "@src/assets/img/Logo_Jac.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Path = (props: any) => (
  <motion.path strokeWidth="3" strokeLinecap="round" {...props} />
);

const Navbar = ({ isOpen, toggle }: Props) => {
  return (
    <nav className="bg-gray-800">
      <div className="relative flex items-center justify-between h-16 px-6">
        <div className="flex items-center space-x-4">
          <div className="block md:hidden">
            <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
              <button onClick={toggle}>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 22 20"
                  stroke="currentColor"
                  aria-hidden="true"
                  fill="none"
                  className="text-white"
                >
                  <Path
                    variants={{
                      closed: { d: "M 2 3 L 20 3" },
                      open: { d: "M 4 17 L 18 3" },
                    }}
                  />
                  <Path
                    d="M 2 10 L 20 10"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.1 }}
                  />
                  <Path
                    variants={{
                      closed: { d: "M 2 17 L 20 17" },
                      open: { d: "M 4 3 L 18 17" },
                    }}
                  />
                </svg>
              </button>
            </motion.div>
          </div>
          <div>
            <Link href="/">
              <Image src={logo} alt="Logo" width={100} height={60} />
            </Link>
          </div>
        </div>
        <div className="flex">
          <ul className="flex space-x-5">
            <li>
              <Link
                href="/dashboard"
                className="px-1 py-2 text-white hover:text-gray-200"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="px-1 py-2 text-white hover:text-gray-200"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="px-1 py-2 text-white hover:text-gray-200"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="px-1 py-2 text-white hover:text-gray-200"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
