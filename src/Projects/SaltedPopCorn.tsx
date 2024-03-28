import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

export default function SaltedPopCorn() {
  return (
    <div className="flex flex-row gap-4 border border-sky-400 py-2 px-4 shadow-md shadow-sky-500 rounded-lg">
      <img
        src="/saltedpopcorn.png"
        alt="salted popcorn"
        className="md:w-[16rem] md:h-[16rem] w-[8rem] h-[8rem] self-center"
      />
      <div className="flex flex-col md:text-md md:w-[16rem] bg-[#151616]  text-center justify-center gap-2 w-[8rem] text-base">
        <h4 className="md:text-xl text-center font-semibold underline text-xl">
          Salted Popcorn
        </h4>

        <p>
          A movie database website in which you can find all details about
          movies, tv shows and actors
        </p>

        <span className="w-full h-1 bg-white"></span>
        <a href="https://saltedpopcorn.netlify.app/" target="_blank">
          <button
            className="border-gray-200 border py-1 px-3 rounded-lg bg-black w-[60%] mx-auto hover:bg-red-600 hover:text-black hover:font-semibold sm:text-base"
            style={{ transition: "background-color 0.5s linear " }}
          >
            Show website
          </button>
        </a>
        <span className="w-full h-1 bg-white"></span>
        <p>See Codes</p>
        <a href="https://github.com/rstulug/salted-popcorn" target="_blank">
          <IconContext.Provider
            value={{
              size: "3rem",
              style: { justifyContent: "center", width: "100%" },
            }}
          >
            <FaGithub />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
}
