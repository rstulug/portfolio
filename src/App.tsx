import AboutMe from "./ui/AboutMe";
import Dashboard from "./ui/Dashboard";

function App() {
  return (
    <div className="m-0 bg-gradient-to-br from-[#D8B5FF] to-[#1EAE98]">
      <div className=" max-w-screen-xl font-['ui-sans-serif'] mx-auto  text-stone-800">
        <Dashboard />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
