import { Link, useLoaderData } from '@remix-run/react'
import { db } from '../services/db.js'

export const loader = async () => {
  const posts = await db.post.findMany()
  return {
    posts
  }
}
export default function Index() {
  const { posts } = useLoaderData()
  return (
    <div>
      <h1>Remix!</h1>
      <nav>
        <ul>
          <li><Link to='/about'>Ir a About</Link>
          </li>
          <li>
            <Link to='/create '>Crear un Post</Link>
          </li>
        </ul>
      </nav>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={`/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}