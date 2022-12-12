import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div onClick={() => window.open("https://twitter.com/kkcasual")}>
        <BsTwitter />
      </div>
      <div onClick={() => window.open("https://www.facebook.com/gustadab")}>
        <FaFacebookF />
      </div>
      <div
        onClick={() => window.open("https://www.instagram.com/guhenriquedb")}
      >
        <BsInstagram />
      </div>
      <div onClick={() => window.open("https://github.com/gustavohdab")}>
        <BsGithub />
      </div>
      <div
        onClick={() =>
          window.open("https://www.linkedin.com/in/gustavo-h-batista/")
        }
      >
        <BsLinkedin />
      </div>
    </div>
  );
};

export default SocialMedia;
