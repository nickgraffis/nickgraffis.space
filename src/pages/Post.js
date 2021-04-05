import { useEffect, useState } from 'react'
import Subscribe from '../components/Subscribe'
import BlogPost from '../components/BlogPost'
import Loading from '../components/Loader'
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function Post () {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  let { title } = useParams()

  useEffect(async () => {
    let posts = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nicholasgraffis')
    let filteredPost = posts.data.items.filter((post) => post.title === decodeURIComponent(title))
    setPost(filteredPost[0])
    setLoading(false)
  }, []);

  return (
    <>
      {loading ? <Loading /> : <BlogPost post={post} /> }
    </>
  )
}
