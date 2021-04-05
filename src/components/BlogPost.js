import Parser from 'html-react-parser'
import { Medium } from './svgs/Logos'
import Tooltip from './ui/Tooltip'
import { useState } from 'react'

function plainDate (string) {
   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
   const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
   const date = new Date(string.replace(' ', 'T'))
   const ellapsed = (Date.now() / 1000) - (date.getTime() / 1000)
   if (ellapsed < 604800) {
     if (ellapsed < 3600) {
       return Math.floor(ellapsed / 60) + ' minutes ago'
     } else if (ellapsed < 86400) {
       return Math.floor(ellapsed / 3600) + ' hours ago'
     } else if (ellapsed < 60) {
       return 'a few seconds ago'
     } else {
       return days[date.getDay()]
     }
   } else if (ellapsed < 3154000) {
     return months[date.getMonth()] + ' ' + date.getDate()
   } else {
     return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear().toString().substring(2)
   }
 }

 function readTime (post) {
   const string = post.split('')
   const length = string.length
   const words = length / 6.7
   const min = words / 200
   return Math.ceil(min) + ' min read'
 }

export default function BlogPost({ post }) {
  const [tooltip, setTooltip] = useState(false)

  return <>
  <h1 className="text-7xl font-black text-cullen py-4">{post.title}</h1>
  <div className="flex w-full justify-between py-4">
    <div className="flex items-center space-x-6">
      <div onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)} >
        <Medium size="6" color="cullen" className="dark:hover:text-dracula" />
      </div>
      <p className="text-sm font-semibold text-cullen">Medium</p>
      <p className="text-xs text-cullen">{plainDate(post.pubDate)} · {readTime(post.content)}</p>
    </div>
  </div>
  <div className="post"> {Parser(post.content)} </div>
  </>
}
