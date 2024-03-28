export default function AboutMe() {
  return (
    <div
      className="w-[95%] px-2 md:w-[80%] justify-center mx-auto md:min-h-screen flex items-center flex-col h-auto"
      id="aboutMe"
    >
      <h2 className="text-3xl mb-2">About Me</h2>
      <div className="border border-gray-200   h-fit self-center rounded-lg  shadow-md shadow-white   bg-[#151616]">
        <p className="py-4 md:text-lg text-sm text-justify tracking-wide px-2">
          After spending 9 years as a researcher and earning my PhD in
          geo-sciences, I shifted gears to focus on front-end development, a
          field I've always been passionate about. Leveraging my problem-solving
          skills and knack for self-learning from my research background, I
          quickly picked up skills like JavaScript, TypeScript, HTML, CSS, and
          React in the realm of front-end development. I'm always eager to learn
          and thrive in collaborative team settings.
        </p>
      </div>
    </div>
  );
}
