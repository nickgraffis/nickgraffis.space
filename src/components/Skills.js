import Parser from 'html-react-parser';
import ViewMore from "./ViewMore"

function Skills (props) {
  return <>
  <h1 className="text-lg text-black dark:text-cullen font-medium mb-4 mt-6">Skills</h1>
  <div className="w-full flex flex-wrap justify-between">
  {props.skills.map((data, index) => {
      return <div className={`flex mb-6`}>
        {Parser(data.icon)}
      </div>
    })}
    </div>
    <ViewMore />
  </>
}

export default Skills;
