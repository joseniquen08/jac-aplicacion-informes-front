import Link from "next/link";

const Sidebar = ()=> {
  return (
    <>
    <div>
        <ul>
            <li><Link href="/" legacyBehavior><a >Home</a></Link></li>
            <li><Link href="/login" legacyBehavior><a>Login</a></Link></li>
        </ul>
    </div>
    </>
  )
}
export default Sidebar;