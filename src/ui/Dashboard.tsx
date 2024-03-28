export default function Dashboard() {
  return (
    <div
      className="flex flex-row justify-between items-center min-h-screen  mb-10 text-white z-10"
      id="dashboard"
    >
      <div className="flex flex-col md:gap-5 gap-2">
        <h1 className="flex justify-center md:text-5xl  pt-6 text-center text-2xl flex-col lg:flex-row">
          Hi <span className="wave">👋</span>
        </h1>
        <h2 className="text-2xl md:text-5xl text-center font-bold">
          I`m Rasit Ulug
        </h2>

        <h3 className="flex justify-center font-semibold text-xl md:text-3xl text-center">
          Front-End Developer
        </h3>
        <a
          href={"/Rasit_Ulug_Resume.pdf"}
          download={"Rasit_Ulug_Resume.pdf"}
          target="_blank"
          className="flex justify-center "
        >
          <button
            className="border-gray-200 border py-1 px-3 rounded-lg bg-black w-[60%] mx-auto hover:bg-teal-600 hover:text-black hover:font-semibold sm:text-base"
            style={{ transition: "background-color 0.5s linear " }}
          >
            Download CV
          </button>
        </a>
      </div>
      <div className="flex justify-center gap-4 flex-col md:flex-row ">
        <img
          src={"/bg-removed.png"}
          alt="Rasit_ulug_image"
          className="md:w-[35rem] md:h-[40rem] object-cover rounded-xl w-[9rem] h-[15rem] mx-auto md:mx-0 mb-4 md:mb-0"
        />
      </div>
    </div>
  );
}
