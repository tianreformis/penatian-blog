export type Post = {
  id: string
  title: string
  slug: string
  content: string
  excerpt?: string
  featured_image?: string
  created_at: string
  author: { email: string }
}

export type Comment = {
  id: string
  content: string
  created_at: string
  user: { email: string }
}