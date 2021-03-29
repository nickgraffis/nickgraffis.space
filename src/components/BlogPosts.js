import PostCard from './subcomponents/PostCard'

export default function BlogPosts ({ posts }) {
  return <>
    {posts.map((post, index) => {
      return <PostCard post={post} />
    })}
  </>
}
