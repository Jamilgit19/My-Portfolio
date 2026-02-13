import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/Jamilgit19',
    },
    publisher: {
      '@type': 'Person',
      name: 'MD Jamil',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jamil-portfolio.vercel.app',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "Jamil's Portfolio",
    description: "Full Stack Web Developer portfolio. Showcasing projects, skills, and experience in modern web development.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'MD Jamil',
      url: 'https://github.com/Jamilgit19',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'MD Jamil',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jamil-portfolio.vercel.app',
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jamil-portfolio.vercel.app'}/developer-portrait.png`,
    sameAs: [
      'https://github.com/Jamilgit19',
      'https://www.linkedin.com/in/md-jamil-8266a6289/',
    ],
    jobTitle: 'Full Stack Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
