import { useState } from 'react'
import Tooltip from '../ui/Tooltip'
import { ReactIcon, Vue } from '../svgs/Logos'

export default function StackList({ framework }) {
  const [tooltip, setTooltip] = useState('')

  return <>
    <ul className="w-full flex items-center space-x-4 py-2">
      <li onMouseEnter={() => setTooltip('react')} onMouseLeave={() => setTooltip('')}>
        <ReactIcon size="4" color={framework === 'react' ? 'vanHelsing' : 'aro'} />
        <Tooltip show={tooltip === 'react'} color="aro" textColor="cullen" title="React"/>
      </li>
      <li onMouseEnter={() => setTooltip('vue')} onMouseLeave={() => setTooltip('')}>
        <Vue size="4" color={framework === 'react' ? 'blade' : 'aro'} />
        <Tooltip show={tooltip === 'vue'} color="aro" textColor="cullen" title="Vue"/>
      </li>
      <li onMouseEnter={() => setTooltip('angular')} onMouseLeave={() => setTooltip('')}>
        <svg fill="currentColor" className={`h-4 w-4 ${framework === 'angular' ? 'text-marcelin' : 'text-aro'}`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z"/></svg>
        <Tooltip show={tooltip === 'angular'} color="aro" textColor="cullen" title="Angular"/>
      </li>
      <li onMouseEnter={() => setTooltip('svelte')} onMouseLeave={() => setTooltip('')}>
        <svg fill="currentColor" className={`h-4 w-4 ${framework === 'svelte' ? 'text-morbius' : 'text-aro'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"/></svg>
        <Tooltip show={tooltip === 'svelte'} color="aro" textColor="cullen" title="Svelte"/>
      </li>
    </ul>
  </>
}
