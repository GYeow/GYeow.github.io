import { z } from 'zod';
import { publications, projects, cvEntries, insertPublicationSchema, insertProjectSchema, insertCVEntrySchema } from './schema';

export const api = {
  publications: {
    list: {
      method: 'GET' as const,
      path: '/api/publications',
      responses: {
        200: z.array(z.custom<typeof publications.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/publications',
      input: insertPublicationSchema,
      responses: {
        201: z.custom<typeof publications.$inferSelect>(),
      },
    },
  },
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects',
      responses: {
        200: z.array(z.custom<typeof projects.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/projects',
      input: insertProjectSchema,
      responses: {
        201: z.custom<typeof projects.$inferSelect>(),
      },
    },
  },
  cv: {
    list: {
      method: 'GET' as const,
      path: '/api/cv',
      responses: {
        200: z.array(z.custom<typeof cvEntries.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/cv',
      input: insertCVEntrySchema,
      responses: {
        201: z.custom<typeof cvEntries.$inferSelect>(),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
