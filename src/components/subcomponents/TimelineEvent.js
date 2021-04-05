import React, { Suspense } from 'react'
import Icons from '../svgs/heroicons/solid/index'
const camelcase = require('camelcase')

const formatter = new Intl.DateTimeFormat('en-us', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

const plainDate = (date) => {
  let dt = new Date(date)
  return formatter.format(dt)
}

export default function TimelineEvent ({ data, index, classes, onclick }) {
  const IconName = 'BeakerIcon'
  const Icon = Icons[camelcase(data.icon)[0].toUpperCase() + camelcase(data.icon).substring(1) + 'Icon']

  return <li className={`relative`} onClick={onclick}>
    <div className={`absolute z w-0.5 bg-cullen rounded-sm h-5 mt-1 left-4 -ml-px ${index === 0 ? 'hidden' : ''}`}></div>
    <div className={`flex w-full items-center ${index !== 0 ? 'pt-7' : ''}`}>
      <div className={`bg-${data.color} ${classes} rounded-full h-8 w-8 flex items-center justify-center`}>
        <Icon className="h-4 w-4 text-cullen" />
      </div>
      <p className="flex-grow mx-4 text-sm text-gray-600 dark:text-cullen">{data.description}</p>
      <p className="text-sm text-gray-600 dark:text-cullen">
        {data.startTime ? plainDate(data.startTime) : ''}{data.endTime ? ' - ' + data.endTime : ''}
      </p>
    </div>
  </li>
}
