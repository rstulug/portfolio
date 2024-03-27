import AboutMe from "./ui/AboutMe";

function App() {
  return (
    <div className=" max-w-screen-xl font-['ui-sans-serif'] mx-auto min-h-screen">
      <div className="flex flex-col gap-5">
        <h1 className="flex justify-center text-5xl  pt-6">
          Hi There <span className="wave">👋</span> I`m{" "}
          <span className="font-semibold ml-1">Rasit Ulug</span>
        </h1>
        <p className="text-2xl flex justify-center">
          Welcome My Portfolio. Take a sit and enjoy
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
