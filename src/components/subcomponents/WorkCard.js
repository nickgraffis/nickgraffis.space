import ViewMore from '../ViewMore'
import StackList from './StackList'
import { GitHub } from '../svgs/Logos'
import Icons from '../svgs/heroicons/solid/index'

function WorkCard ({ title, description, stack, link, img }) {
  let index = 1

  return <>
      <div className={`w-full ${index === 0 ? 'mb-2' : 'my-2'} rounded-lg border border-cullen flex shadow-md cursor-pointer`}>
        <img className="h-24 w-24 object-cover my-3 ml-3 mr-5" src='https://i.ibb.co/QDCJKN1/babelbox.png' />
        <div className="flex-grow self-center">
          <h2 className="text-lg dark:text-cullen font-medium pt-2 pb-1">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-200">{description}</p>
          <StackList stack={stack}/>
        </div>
        <div className="p-4 flex flex-col justify-between">
          <Icons.GlobeIcon className="dark:hover:text-blade w-6 h-6 text-gray-600 cursor-pointer dark:text-cullen" />
          <GitHub size="6" color="cullen" className="dark:hover:text-dracula" />
          <svg className="w-6 h-6 text-gray-600 cursor-pointer dark:hover:text-vonCount dark:text-cullen" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </div>
      </div>
      <ViewMore />
    </>
}

export default WorkCard;
