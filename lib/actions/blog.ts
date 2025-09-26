"use server";

import { cache } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  source: string;
  url: string;
  publishedAt: string;
}

// Simulated RSS feed data for music and music-tech news
const DEMO_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI Music Production: Trends to Watch in 2024',
    excerpt: 'Artificial intelligence is revolutionizing music creation with advanced algorithms that can compose, arrange, and produce professional-quality tracks.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format',
    source: 'Music Tech Magazine',
    url: '#',
    publishedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Grammy-Winning Producers Share Their Studio Secrets',
    excerpt: 'Industry legends reveal the techniques and tools behind chart-topping hits, from analog warmth to digital precision.',
    image: 'https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=1200&auto=format',
    source: 'Producer Weekly',
    url: '#',
    publishedAt: '2024-01-14T14:30:00Z'
  },
  {
    id: '3',
    title: 'The Rise of Bedroom Producers: How Home Studios Are Changing Music',
    excerpt: 'Modern technology has democratized music production, allowing artists to create professional-quality tracks from their bedrooms.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200&auto=format',
    source: 'Digital Music News',
    url: '#',
    publishedAt: '2024-01-13T09:15:00Z'
  },
  {
    id: '4',
    title: 'Spatial Audio: The Next Frontier in Music Experience',
    excerpt: 'Immersive audio technology is creating new possibilities for how we experience music, from streaming to live performances.',
    image: 'https://images.unsplash.com/photo-1571974599782-87624638275c?q=80&w=1200&auto=format',
    source: 'Audio Innovation',
    url: '#',
    publishedAt: '2024-01-12T16:45:00Z'
  },
  {
    id: '5',
    title: 'Collaborative Music Creation in the Cloud Era',
    excerpt: 'Cloud-based platforms are enabling musicians worldwide to collaborate in real-time, breaking down geographical barriers.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format',
    source: 'Cloud Music Today',
    url: '#',
    publishedAt: '2024-01-11T11:20:00Z'
  },
  {
    id: '6',
    title: 'Sustainable Music Production: Green Studios Lead the Way',
    excerpt: 'Recording studios are adopting eco-friendly practices and renewable energy to reduce the music industry\'s carbon footprint.',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format',
    source: 'Green Music Initiative',
    url: '#',
    publishedAt: '2024-01-10T13:00:00Z'
  }
];

// Cache for 30 minutes
export const fetchBlogPosts = cache(async (): Promise<BlogPost[]> => {
  // In a real implementation, this would fetch from RSS feeds
  // For now, return demo data with cache simulation
  await new Promise(resolve => setTimeout(resolve, 100)); // Simulate network delay
  
  return DEMO_POSTS.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
});

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  return posts.find(post => post.id === id) || null;
}