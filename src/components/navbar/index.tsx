import Link from "next/link";
import Image from 'next/image';
import logo from '@src/assets/img/Logo_Jac.svg';

const Navbar = () => {
  return (
    <><nav className="bg-gray-800">
      <div className="relative flex flex-row items-center justify-between px-3 py-3">
        <div>
          <Link href="/" legacyBehavior>
            <a>
              <Image src={logo} alt="Logo" width={100} height={60} />
            </a>
          </Link>
        </div>
        <div className="flex flex-row">
          <ul className="flex">
            <li><Link href="/" legacyBehavior><a className="text-white px-4 py-2 hover:text-gray-200">Inicio</a></Link></li>
            <li><Link href="/" legacyBehavior><a className="text-white px-4 py-2 hover:text-gray-200">Productos</a></Link></li>
            <li><Link href="/" legacyBehavior><a className="text-white px-4 py-2 hover:text-gray-200">Servicios</a></Link></li>
            <li><Link href="/login" legacyBehavior><a className="text-white px-4 py-2 hover:text-gray-200">Login</a></Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
export default Navbar;
