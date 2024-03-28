export default function Navbar() {
  return (
    <div className="flex justify-between w-full fixed top-0 left-0 z-10 bg-gradient-to-t from-gray-900 to-gray-600 py-3 items-center">
      <div className="w-full">
        <ul className="flex flex-row justify-center sm:gap-4  sm:text-xl gap-2 text-base">
          <li className="hover:text-sky-300 hover:scale-105">
            <a href="#dashboard">Home</a>
          </li>
          <li className="hover:text-sky-300 hover:scale-105">
            <a href="#aboutMe">About Me</a>
          </li>
          <li className="hover:text-sky-300 hover:scale-105">
            <a href="">Skills</a>
          </li>
          <li className="hover:text-sky-300 hover:scale-105">
            <a href="">Experience</a>
          </li>
          <li className="hover:text-sky-300 hover:scale-105">
            <a href="">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
