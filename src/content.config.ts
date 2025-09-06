import { defineCollection, z } from 'astro:content';

// 定义 people 集合的 schema
const peopleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    email: z.string().email(),
    photo: z.string(),
    researchInterest: z.string().optional(),
    googleScholar: z.string().optional(),
    personalWebsite: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

// 更新 publications 集合的 schema
const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.object({
      name: z.string(),
      isPI: z.boolean().optional(),
    })),
    journal: z.string(),
    year: z.number(),
    volume: z.string().optional(),
    pages: z.string().optional(),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    code: z.string().optional(),
    projectPage: z.string().optional(),
    abstract: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    type: z.enum(['journal', 'conference', 'book', 'preprint']).default('journal'),
    googleScholar: z.object({
      url: z.string(),
      citations: z.number(),
      lastUpdated: z.string(),
    }).optional(),
  }),
});

// 更新 news 集合
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    excerpt: z.string(),
    category: z.enum(['research', 'publication', 'award', 'event', 'collaboration']).default('research'),
    image: z.string().optional(),
    author: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// 新增 research 集合（可选，用于动态管理研究项目）
const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    keywords: z.array(z.string()),
    status: z.enum(['active', 'completed', 'planned']).default('active'),
    startDate: z.date(),
    endDate: z.date().optional(),
  }),
});

// 新增 openings 集合
const openingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    position: z.enum(['phd', 'postdoc', 'research-assistant', 'visiting']),
    location: z.string(),
    type: z.enum(['full-time', 'part-time', 'contract']).default('full-time'),
    status: z.enum(['active', 'closed']).default('active'),
    deadline: z.date(),
    description: z.string(),
    requirements: z.array(z.string()).optional(),
    benefits: z.array(z.string()).optional(),
    contactEmail: z.string().email(),
    applicationInstructions: z.string().optional(),
    moreInfoUrl: z.string().optional(),
  }),
});

// 导出集合配置
export const collections = {
  people: peopleCollection,
  publications: publicationsCollection,
  news: newsCollection,
  research: researchCollection,
  openings: openingsCollection,
};