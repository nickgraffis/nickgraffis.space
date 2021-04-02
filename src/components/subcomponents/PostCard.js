import Parser from 'html-react-parser'
import Reactions from './Reactions'

export default function Post ({ post }) {
  const formatter = new Intl.DateTimeFormat('en-us', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })

  const plainDate = (date) => {
    let dt = new Date(date)
    console.log(dt)
    return formatter.format(dt)
  }

  const readTime = (post) => {
    const string = post.split('')
    const length = string.length
    const words = length / 6.7
    const min = words / 200
    return Math.ceil(min) + ' min read'
  }

  return <>
    <div class="text-cullen w-full flex py-4">
      <div class="w-4/6  pr-4">
          <a href="/post/2">
            <p class="text-dracula text-xl font-semibold my-2">{post.title}</p>
            <p class="text-lg my-2">
              {Parser(post.description.split('</h4>')[0])}
            </p>
          </a>
        <div class="dateline flex py-1 pb-6 justify-between items-center">
          <p class="text-sm mr-2 flex flex-col">
            <span>{plainDate(post.pubDate.split(' ')[0])} · {readTime(post.content)} min read</span>
          </p>
        </div>
        <Reactions />
      </div>
      <div class="img w-2/6">
        <a href="/post/2">
          <img src={post.thumbnail} class="object-cover w-full h-full" />
        </a>
      </div>
    </div>
  </>
}
