import { useState } from "react";
import Posts from './Posts'
import { useTranslation } from 'react-i18next';
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Button } from "@material-tailwind/react";


const goStatistic = () => {

  const element = document.getElementById('r'); // Replace 'your-component-id' with the actual id of your component
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [example, setExample] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Your loggo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >

            {`${nav.id}` !== "example" ? <a href={`${nav.id}`}>{nav.title}</a> : <a onClick={() =>goStatistic()}>{nav.title}</a>}


          </li>


        ))}
        <li><Button size="sm" color="green" onClick={() => i18n.changeLanguage("ar")}>AR</Button><Button size="sm" onClick={() => i18n.changeLanguage("en")}>EN</Button></li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li><Button size="sm" color="green" onClick={() => i18n.changeLanguage("ar")}>AR</Button><Button size="sm" onClick={() => i18n.changeLanguage("en")}>EN</Button></li>

            {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >

            {`${nav.id}` !== "example" ? <a href={`${nav.id}`}>{nav.title}</a> : <a onClick={() =>goStatistic()}>{nav.title}</a>}


          </li>


        ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
