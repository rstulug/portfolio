import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IconContext } from "react-icons";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex justify-center items-center md:w-[80%]  mx-auto md:min-h-screen h-auto mt-5 lg:mt-0 text-xl"
    >
      <div className="md:mt-20 w-[95%] px-2 ">
        <h2 className="text-3xl text-center mb-5 underline">Contact</h2>
        <div className="flex justify-around items-center flex-wrap gap-4 ">
          <a href="mailto:rstulug@gmail.com" target="_blanket">
            <div
              className="flex flex-col hover:scale-105 border border-sky-400 rounded-2xl py-2 shadow-lg shadow-sky-500 px-2"
              title="Send e-mail"
            >
              <IconContext.Provider value={{ size: "10rem" }}>
                <CgMail />
              </IconContext.Provider>
              <div className="text-xl text-center">Mail</div>
            </div>
          </a>
          <a href="https://github.com/rstulug" target="_blanket">
            <div
              className="flex flex-col hover:scale-105 border border-sky-400 rounded-2xl py-2 shadow-lg shadow-sky-500 px-2"
              title="Go to Github"
            >
              <IconContext.Provider value={{ size: "10rem" }}>
                <FaGithub />
              </IconContext.Provider>
              <div className="text-xl text-center">Github</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/rasitulug/" target="_blanket">
            <div
              className="flex flex-col hover:scale-105 border border-sky-400 rounded-2xl py-2 shadow-lg shadow-sky-500 px-2"
              title="Go to Linkedin"
            >
              <IconContext.Provider value={{ size: "10rem" }}>
                <FaLinkedin />
              </IconContext.Provider>
              <div className="text-xl text-center">Linkedin</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
