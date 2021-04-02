import Parser from 'html-react-parser';

const formatter = new Intl.DateTimeFormat('en-us', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

const plainDate = (date) => {
  let dt = new Date(date)
  return formatter.format(dt)
}

export default function TimelineEvent ({ data, index }) {
  console.log(index)
  return <li className="relative">
    <div className={`absolute z w-0.5 bg-cullen rounded-sm h-5 mt-1 left-4 -ml-px ${index === 0 ? 'hidden' : ''}`}></div>
    <div className={`flex w-full items-center ${index !== 0 ? 'pt-7' : ''}`}>
      <div className={`bg-${data.color} rounded-full h-8 w-8 flex items-center justify-center`}>
      {Parser(data.icon)}
      </div>
      <p className="flex-grow mx-4 text-sm text-gray-600 dark:text-cullen">{data.description}</p>
      <p className="text-sm text-gray-600 dark:text-cullen">{plainDate(data.startTime)}{data.endTime ? ' - ' + data.endTime : ''}</p>
    </div>
  </li>
}
