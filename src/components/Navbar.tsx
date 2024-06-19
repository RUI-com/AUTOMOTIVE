import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
export const Navbar = () => {
  return (
    <header className="header">
    <nav className="nav container">
        <a href="#" >
           <img src='/logo/logo-c.svg' className="nav__logo" alt=''/>
        </a>

        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
                <li className="nav__item"><a href="" className="nav__link">Models</a></li>
                <li className="nav__item"><a href="" className="nav__link">Brand</a></li>
                <li className="nav__item"><a href="" className="nav__link">Store</a></li>
                <li className="nav__item"><a href="" className="nav__link">Experience</a></li>
            </ul>
        </div>

        <div className="nav__toggle" id="nav__toggle">
           <HiMenuAlt3 className="menu-outline"/>
        </div>
    </nav>
</header>
  )
}
