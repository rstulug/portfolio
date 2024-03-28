import FarkliSozluk from "../Projects/FarkliSozluk";
import MyLittleJourney from "../Projects/MyLittleJourney";
import SaltedPopCorn from "../Projects/SaltedPopCorn";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex justify-center items-center md:min-h-screen h-auto mt-5 lg:mt-0 mx-auto w-[90%]"
    >
      <div>
        <h2 className="text-3xl text-center mb-5 underline">Projects</h2>
        <div className=" flex md:flex-row flex-wrap gap-4 flex-col justify-center">
          <SaltedPopCorn />
          <MyLittleJourney />
          <FarkliSozluk />
        </div>
      </div>
    </div>
  );
}
