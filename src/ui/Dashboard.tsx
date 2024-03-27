export default function Dashboard() {
  return (
    <div className="flex flex-row justify-between items-center min-h-screen  mb-10">
      <div className="flex flex-col gap-5">
        <h1 className="flex justify-center md:text-5xl  pt-6 text-center text-2xl">
          Hi There <span className="wave">👋</span>
          <p>
            I`m
            <span className="font-semibold ml-1 ">Rasit Ulug</span>
          </p>
        </h1>
        <h3 className="flex justify-center font-semibold text-xl md:text-3xl">
          Front-End Developer
        </h3>
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
