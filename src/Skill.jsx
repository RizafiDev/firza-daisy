import html from "./assets/tech-logo/html.png";
import css from "./assets/tech-logo/css.png";
import cpp from "./assets/tech-logo/cpp.png";
import php from "./assets/tech-logo/php.png";
import java from "./assets/tech-logo/java.png";
import js from "./assets/tech-logo/js.png";
import rj from "./assets/tech-logo/rj.png";
import tw from "./assets/tech-logo/tw.png";
import git from "./assets/tech-logo/gh.png";
import gh from "./assets/tech-logo/git.png";

function Skill() {
  return (
    <div className="container mx-auto min-h-screen w-full flex" id="skill">
      <div className="parent  justify-center flex flex-col my-auto h-full w-full gap-12">
        <div className="top text-[#212427] text-start justify-start items-start">
          <h5 className="font-semibold text-2xl">Tech Stack</h5>
          <p className="font-medium text-lg">
            Bahasa pemrograman & software yang dikuasi
          </p>
        </div>
        <div className="icons grid grid-cols-10 grid-rows-3 gap-0">
          <div className="1 bg-base-100 p-8 w-36 m-auto grayscale duration-200 transition-all ease-in-out hover:grayscale-0 rounded-xl shadow-xl">
            <img src={html} alt="" className="" />
          </div>
          <div className="1 bg-base-100 p-8 w-36 m-auto grayscale duration-200 transition-all ease-in-out hover:grayscale-0 rounded-xl shadow-xl">
            <img src={css} alt="" className="" />
          </div>
          <div className="1 bg-base-100 p-8 w-36 m-auto grayscale duration-200 transition-all ease-in-out hover:grayscale-0 rounded-xl shadow-xl">
            <img src={cpp} alt="" className="" />
          </div>
          <div className="1 bg-base-100 p-8 w-36 m-auto grayscale duration-200 transition-all ease-in-out hover:grayscale-0 rounded-xl shadow-xl">
            <img src={php} alt="" className="" />
          </div>
          <div className="1 bg-base-100 p-8 w-36 m-auto grayscale duration-200 transition-all ease-in-out hover:grayscale-0 rounded-xl shadow-xl">
            <img src={java} alt="" className="" />
          </div>
          <div className="1 bg-base-100 p-8 w-36 m-auto grayscale duration-200 transition-all ease-in-out hover:grayscale-0 rounded-xl shadow-xl">
            <img src={js} alt="" className="" />
          </div>
          <div className="1 bg-base-100 p-8 w-36 m-auto grayscale duration-200 transition-all ease-in-out hover:grayscale-0 rounded-xl shadow-xl">
            <img src={rj} alt="" className="" />
          </div>
          <div className="1 bg-base-100 p-8 w-36 m-auto grayscale duration-200 transition-all ease-in-out hover:grayscale-0 rounded-xl shadow-xl">
            <img src={tw} alt="" className="" />
          </div>
          <div className="1 bg-base-100 p-8 w-36 m-auto grayscale duration-200 transition-all ease-in-out hover:grayscale-0 rounded-xl shadow-xl">
            <img src={gh} alt="" className="" />
          </div>
          <div className="1 bg-base-100 p-8 w-36 m-auto grayscale duration-200 transition-all ease-in-out hover:grayscale-0 rounded-xl shadow-xl">
            <img src={git} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
