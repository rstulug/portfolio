import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

export default function FarkliSozluk() {
  return (
    <div className="flex flex-row gap-4 border border-sky-400 py-2 px-4 shadow-md shadow-sky-500 rounded-lg">
      <img
        src="/farklisozluk.png"
        alt="farkli_sozluk"
        className="md:w-[16rem] md:h-[16rem] w-[8rem] h-[8rem] self-center"
      />
      <div className="flex flex-col md:text-md md:w-[16rem] bg-[#151616]  text-center justify-center gap-2 w-[8rem] text-base">
        <h4 className="md:text-xl text-center font-semibold underline text-xl">
          Farklı Sozluk
        </h4>

        <p>A social platform</p>

        <span className="w-full h-1 bg-white"></span>
        <p>Check It Out</p>
        <a
          href="https://farklisozluk.netlify.app/"
          target="_blanket"
          className="underline text-blue-500 text-xs md:text-lg"
        >
          https://farklisozluk.netlify.app/
        </a>
        <span className="w-full h-1 bg-white"></span>
        <p>See Codes</p>
        <a href="https://github.com/rstulug/farklisozluk" target="_blank">
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
