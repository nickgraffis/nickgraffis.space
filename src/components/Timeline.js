import TimelineEvent from "./subcomponents/TimelineEvent"
import ViewMore from "./ViewMore"
import ModalForm from "./ui/ModalForm"
import { useAuth } from '../App'
import { useState } from 'react'

function Timeline ({ events }) {
  const [showCreate, setShowCreate] = useState(false)
  events.sort((a, b) => (a.startTime < b.startTime) ? 1 : -1)
  const auth = useAuth()
  const newEvent = {
    icon: `<svg class="h-4 w-4 text-cullen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>`,
    color: 'aro'
  }
  
  return <>
    <h1 className="text-lg text-black dark:text-cullen font-medium mb-4 mt-6">Timeline</h1>
    <ul className="w-full">
      {events.map((data, index) => {
        if (index > 4) return;
        return <TimelineEvent data={data.fields} index={index} />
      })}
      {auth ? <TimelineEvent data={newEvent} index="5" classes="cursor-pointer hover:bg-opacity-70" onclick={() => setShowCreate(true)}/> : ''}
    </ul>
    <ViewMore />
    {showCreate ? <ModalForm
    fields={[
      {
        id: "description",
        title: 'What happened?',
        type: 'text',
        placeholder: "Wesley ran in the park 😊",
        updateFunc: () => {console.log('hi')}
      }
    ]}
    title="Create Timeline Event"
    buttons={[
      {
        func: () => {alert('hi')},
        title: "Build It!"
      },
      {
        func: () => {alert('hi')},
        title: 'Cancel'
      }
    ]}
    /> : ''}
  </>
}

export default Timeline;
