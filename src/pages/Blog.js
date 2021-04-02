import { useEffect, useState } from 'react'
import Subscribe from '../components/Subscribe'
import BlogPosts from '../components/BlogPosts'
import Loading from '../components/Loader'
import axios from 'axios';

export default function Blog () {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(async () => {
    let posts = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nicholasgraffis')
    setPosts(posts.data.items)
    setLoading(false)
  }, []);

  return (
    <>
      {loading ? <Loading /> : <BlogPosts posts={posts} /> }
    </>
  )
}
