import React from "react";

import { GrLinkedin, GrInstagram, GrGithub } from "react-icons/gr";

export default function Footer(): React.ReactElement {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white font-mulish">
      <div className="flex justify-center">
        <a
          href="https://www.linkedin.com/in/hugogomtej/"
          target="_blank"
          rel="noreferrer"
          className="px-2 text-xl"
        >
          <GrLinkedin />
        </a>
        <a
          href="https://github.com/labietelabiete"
          target="_blank"
          rel="noreferrer"
          className="px-2 text-xl"
        >
          <GrGithub />
        </a>
        <a
          href="https://www.instagram.com/labietelabiete/"
          target="_blank"
          rel="noreferrer"
          className="px-2 text-xl"
        >
          <GrInstagram />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="https://labietelabiete.com"
          target="_blank"
          rel="noreferrer"
          className="px-2 text-lg"
        >
          <p className="mb-0 px-2">labietelabiete</p>
        </a>
        <p className="mb-0 px-0">|</p>

        <a
          href="https://blackiebooks.org/"
          target="_blank"
          rel="noreferrer"
          className="px-2 text-lg"
        >
          <p className="mb-0 px-2">blackie books</p>
        </a>

        <p className="mb-0 px-2"> ©2021</p>
        <a
          href="mailto:hello@labietelabiete.com"
          target="_blank"
          rel="noreferrer"
          className="mb-0 px-2 white-primary-color"
        >
          hello@labietelabiete.com
        </a>
      </div>
    </div>
  );
}
