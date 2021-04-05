import { useState } from 'react'
import Tooltip from '../ui/Tooltip'
import {
  ReactIcon,
  Vue,
  Angular,
  Svelte,
  Mongo,
  Serverless,
  Express,
  AWS,
  Heroku,
  Tailwind
} from '../svgs/Logos'

export default function StackList({ stack }) {
  const [tooltip, setTooltip] = useState('')

  return <>
    <ul className="w-full flex items-center space-x-4 py-2">
      <li onMouseEnter={() => setTooltip('react')} onMouseLeave={() => setTooltip('')}>
        <ReactIcon size="4" color={stack.includes('react') ? 'vanHelsing' : 'aro'} />
        <Tooltip show={tooltip === 'react'} color="aro" textColor="cullen" title="React"/>
      </li>
      <li onMouseEnter={() => setTooltip('vue')} onMouseLeave={() => setTooltip('')}>
        <Vue size="4" color={stack.includes('vue') ? 'blade' : 'aro'} />
        <Tooltip show={tooltip === 'vue'} color="aro" textColor="cullen" title="Vue"/>
      </li>
      <li onMouseEnter={() => setTooltip('angular')} onMouseLeave={() => setTooltip('')}>
        <Angular size="4" color={stack.includes('angular') ? 'marcelin' : 'aro'} />
        <Tooltip show={tooltip === 'angular'} color="aro" textColor="cullen" title="Angular"/>
      </li>
      <li onMouseEnter={() => setTooltip('svelte')} onMouseLeave={() => setTooltip('')}>
        <Svelte size="4" color={stack.includes('svelte') ? 'morbius' : 'aro'} />
        <Tooltip show={tooltip === 'svelte'} color="aro" textColor="cullen" title="Svelte"/>
      </li>
      <li onMouseEnter={() => setTooltip('tailwind')} onMouseLeave={() => setTooltip('')}>
        <Tailwind size="4" color={stack.includes('tailwind') ? 'vanHelsing' : 'aro'} />
        <Tooltip show={tooltip === 'tailwind'} color="aro" textColor="cullen" title="TailwindCSS"/>
      </li>
      <li onMouseEnter={() => setTooltip('mongo')} onMouseLeave={() => setTooltip('')}>
        <Mongo size="4" color={stack.includes('mongo') ? 'blade' : 'aro'} />
        <Tooltip show={tooltip === 'mongo'} color="aro" textColor="cullen" title="MongoDB"/>
      </li>
      <li onMouseEnter={() => setTooltip('serverless')} onMouseLeave={() => setTooltip('')}>
        <Serverless size="4" color={stack.includes('serverless') ? 'morbius' : 'aro'} />
        <Tooltip show={tooltip === 'serverless'} color="aro" textColor="cullen" title="Serverless"/>
      </li>
      <li onMouseEnter={() => setTooltip('express')} onMouseLeave={() => setTooltip('')}>
        <Express size="4" color={stack.includes('express') ? 'cullen' : 'aro'} />
        <Tooltip show={tooltip === 'express'} color="aro" textColor="cullen" title="Express"/>
      </li>
      <li onMouseEnter={() => setTooltip('heroku')} onMouseLeave={() => setTooltip('')}>
        <Heroku size="4" color={stack.includes('heroku') ? 'dracula' : 'aro'} />
        <Tooltip show={tooltip === 'heroku'} color="aro" textColor="cullen" title="Heroku"/>
      </li>
      <li onMouseEnter={() => setTooltip('aws')} onMouseLeave={() => setTooltip('')}>
        <AWS size="4" color={stack.includes('aws') ? 'morbius' : 'aro'} />
        <Tooltip show={tooltip === 'aws'} color="aro" textColor="cullen" title="AWS"/>
      </li>
    </ul>
  </>
}
