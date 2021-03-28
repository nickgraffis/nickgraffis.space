import TimelineEvent from "./subcomponents/TimelineEvent"
import ViewMore from "./ViewMore"

function Timeline (props) {
  props.events.sort((a, b) => (a.startTime < b.startTime) ? 1 : -1)

  return <>
    <h1 className="text-lg text-black dark:text-cullen font-medium mb-4 mt-6">Timeline</h1>
    <ul className="w-full">
      {props.events.map((data, index) => {
        if (index > 4) return;
        return <TimelineEvent data={data} index={index} />
      })}
    </ul>
    <ViewMore />
  </>
}

export default Timeline;
