export default function Experience() {
  return (
    <div
      id="experience"
      className="flex justify-center items-center md:w-[80%]  mx-auto md:min-h-screen h-auto mt-5 lg:mt-0 text-xl"
    >
      <div className="relative">
        <h2 className="text-3xl text-center mb-5 underline">Experience</h2>
        <div className=" bg-orange-500 h-[29rem] rounded-xl  w-3">
          <div className="absolute -left-[9px] bottom-0 flex flex-row gap-4 justify-center items-center w-max">
            <div className="w-8 h-8 rounded-full bg-[#151616] border-2 border-orange-500"></div>
            <div className="flex flex-col ">
              <h4>2015 - 2017</h4>
              <h4>Research Assistant</h4>
              <p>Istanbul Technical University</p>
            </div>
          </div>
          <div className="absolute -left-[9px] bottom-[12rem] flex flex-row gap-4 justify-center items-center w-max">
            <div className="w-8 h-8 rounded-full bg-[#151616] border-2 border-orange-500"></div>
            <div className="flex flex-col ">
              <h4>2017 - 2024</h4>
              <h4>Research Assistant</h4>
              <p>Middle East Tecnical University</p>
            </div>
          </div>
          <div className="absolute -left-[9px] bottom-[24rem] flex flex-row gap-4 justify-center items-center w-max">
            <div className="w-8 h-8 rounded-full bg-[#151616] border-2 border-orange-500"></div>
            <div className="flex flex-col ">
              <h4>2024 - ??</h4>
              <h4>Waiting for new adventure</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
