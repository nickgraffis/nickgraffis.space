import Parser from 'html-react-parser';
import ViewMore from "./ViewMore"

function Skills (props) {
  return <>
  <h1 className="text-lg text-black dark:text-cullen font-medium mb-4 mt-6">Skills</h1>
  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 w-full">
  {props.skills.map((data, index) => {
      return <div className={`col-span-1 flex mb-6`}>
        {Parser(data.icon)}
        <div className="flex flex-col ml-2 w-20 dark:text-cullen dark:hover:text-buffy">
          <p className="text-sm">{data.name}</p>
          <p className={`h-2 rounded-sm bg-gray-400 dark:bg-cullen dark:hover:bg-buffy my-1 w-${data.ability}/6`}></p>
        </div>
      </div>
    })}
    </div>
    <ViewMore />
  </>
}

export default Skills;
