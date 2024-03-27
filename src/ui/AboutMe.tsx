export default function AboutMe() {
  return (
    <div className="flex justify-center gap-4 flex-col md:flex-row ">
      <img
        src={"/profile_pic.jpg"}
        alt="Rasit_ulug_image"
        className="md:w-[15rem] md:h-[22rem] object-cover rounded-xl w-[9rem] h-[15rem] mx-auto md:mx-0"
      />
      <div className="border border-black  px-2 md:w-[60%] h-fit self-center rounded-lg relative shadow-md shadow-black w-[95%]">
        <h3 className="font-semibold md:text-xl absolute -top-4 left-2 z-10 bg-white px-3 text-base">
          About Me
        </h3>
        <p className="py-4 md:text-lg text-sm">
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
