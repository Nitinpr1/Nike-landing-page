import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import Switcher from "./Switcher";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray dark:text-coral-red smooth"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>{/* <Switcher /> */}</li>
        </ul>
        <div className="">
          {/* ?<img src={hamburger} alt="Hamburger" width={25} height={25} /> */}
          <Switcher />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
