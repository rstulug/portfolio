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
        <p className="mb-2 border border-sky-400 md:text-xl px-2 py-3 rounded-2xl bg-[#151616] text-base">
          Throughout my learning journey, I've undertaken numerous small
          projects. However, I believe it's more impactful to populate my GitHub
          repository with comprehensive projects that I've independently
          crafted, rather than smaller, repetitive ones. At present, you'll find
          only the substantial projects I've personally completed showcased
          below. For more visit my{" "}
          <a
            href="https://github.com/rstulug"
            target="_blank"
            className="text-sky-400 underline"
          >
            Github
          </a>
        </p>
        <div className=" flex md:flex-row flex-wrap gap-4 flex-col justify-center">
          <SaltedPopCorn />
          <MyLittleJourney />
          <FarkliSozluk />p
        </div>
      </div>
    </div>
  );
}
