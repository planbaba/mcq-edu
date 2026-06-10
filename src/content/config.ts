import { defineCollection, z } from 'astro:content';

const subjects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    icon: z.string(),
    color: z.string(),
    description: z.string(),
  }),
});

const chapters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    subject: z.string(),
    level: z.number(),
    xp: z.number(),
    cover: z.string(),
    objectives: z.array(z.string()).default([]),
    intro: z.string().default(''),
  }),
});

const quizzes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    chapter: z.string(),
    time_limit: z.number(),
    difficulty: z.enum(['easy', 'medium', 'hard']),
    xp_reward: z.number(),
    questions: z.array(z.object({
      question: z.string(),
      image: z.string().optional(),
      choices: z.array(z.union([z.string(), z.number()])).length(4),
      answer: z.union([z.string(), z.number()]),
      explanation: z.string(),
      fun_fact: z.string().optional(),
    })),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    chapter: z.string(),
    related_video: z.string(),
    related_quiz: z.string(),
    summary: z.string().default(''),
  }),
});

const videos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    youtube: z.string().url(),
    chapter: z.string(),
    duration: z.string(),
    objectives: z.array(z.string()).default([]),
  }),
});

export const collections = { subjects, chapters, quizzes, notes, videos };
