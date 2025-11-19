import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/types'

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`} className="block group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        {post.featured_image ? (
          <Image
            src={post.featured_image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="bg-gray-200 border-2 border-dashed rounded-t-lg w-full h-56" />
        )}

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
            {post.title}
          </h2>

          {post.excerpt ? (
            <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
          ) : (
            <p className="text-gray-600 line-clamp-3 mb-4">
              {post.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
            </p>
          )}

          <div className="flex items-center text-sm text-gray-500">
            <time dateTime={post.created_at}>
              {new Date(post.created_at).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
        </div>
      </article>
    </Link>
  )
}