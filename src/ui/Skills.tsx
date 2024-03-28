import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaUbuntu,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import GridContainer from "./GridContainer";
import { IconContext } from "react-icons";

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex justify-center items-center md:w-[80%]  mx-auto md:min-h-screen h-auto mt-5 md:mt-0"
    >
      <div className="md:mt-20 w-[95%] px-2 ">
        <h2 className="text-3xl text-center">Skills</h2>
        <GridContainer>
          <div className="flex flex-col " title="HTML5">
            <IconContext.Provider value={{ size: "10rem" }}>
              <FaHtml5 />
            </IconContext.Provider>
            <div className="text-xl text-center">HTML5</div>
          </div>
          <div className="flex flex-col " title="CSS">
            <IconContext.Provider value={{ size: "10rem" }}>
              <FaCss3Alt />
            </IconContext.Provider>
            <div className="text-xl  text-center">CSS</div>
          </div>
          <div className="flex flex-col" title="JavaScript">
            <IconContext.Provider value={{ size: "10rem" }}>
              <IoLogoJavascript />
            </IconContext.Provider>
            <div className="text-xl text-center">JavaScript</div>
          </div>
          <div className="flex flex-col" title="TypeScript">
            <IconContext.Provider value={{ size: "10rem" }}>
              <TbBrandTypescript />
            </IconContext.Provider>
            <div className="text-xl  text-center">TypeScript</div>
          </div>
          <div className="flex flex-col" title="React">
            <IconContext.Provider value={{ size: "10rem" }}>
              <FaReact />
            </IconContext.Provider>
            <div className="text-xl  text-center">React</div>
          </div>
          <div className="flex flex-col" title="Tailwindcss">
            <IconContext.Provider value={{ size: "10rem" }}>
              <SiTailwindcss />
            </IconContext.Provider>
            <div className="text-xl  text-center">Tailwindcss</div>
          </div>
          <div className="flex flex-col" title="Python">
            <IconContext.Provider value={{ size: "10rem" }}>
              <FaPython />
            </IconContext.Provider>
            <div className="text-xl  text-center">Python</div>
          </div>
          <div className="flex flex-col" title="Ubuntu">
            <IconContext.Provider value={{ size: "10rem" }}>
              <FaUbuntu />
            </IconContext.Provider>
            <div className="text-xl  text-center">Ubuntu</div>
          </div>
        </GridContainer>
      </div>
    </div>
  );
}
