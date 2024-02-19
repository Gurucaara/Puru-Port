import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
    {
      id: 6,
      link: "blog",
      url: "https://puru-blogs.vercel.app/",
    },
  ];

  const links2 = [
    ...links,
    {
      id: 7,
      link: "resume",
      url: "https://drive.google.com/file/d/1T3y7uopNsH9wph8hoBZvdu3ORFnhje1d/view?usp=sharing",
      download: true,
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Puru</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, url }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link === "blog" ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            ) : (
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links2.map(({ id, link, url, download }) => {
            const isExternalLink = link === "blog" || link === "resume";
            const linkElement = isExternalLink ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                download={
                  link === "resume" && download ? "resume.pdf" : undefined
                }
                onClick={() => setNav(false)}
              >
                {link}
              </a>
            ) : (
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
              >
                {link}
              </Link>
            );

            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                {linkElement}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
