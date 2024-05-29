import {
  DiJavascript,
  DiSass,
  DiIllustrator,
  DiMongodb,
  DiDatabase,
  DiAngularSimple,
  DiDocker,
  DiReact,
} from "react-icons/di";
import useTitle from "../../hooks/useTitle";

const Tech = () => {
  useTitle('Tech-Manoz.Dev')
  return (
    <div>
      <h1 className="text-4xl text-center mt-7 mb-4 sm:text-2xl">My Tech Stack</h1>
      <div className="grid grid-cols-auto-fit justify-items-center ">
        <DiSass size={200} />
        <DiReact size={200} className="hover:animate-spin transition-all s text-blue-700" />
        <DiMongodb size={200} />
        <DiJavascript size={180} className="hover:text-amber-700 " />
        <DiDatabase size={200} />
        <DiAngularSimple size={200} />
        <DiDocker size={200} className="animate-bounce transition-all" />
        <DiIllustrator size={180} />
      </div>
    </div>
  );
};
export default Tech;
