import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

const employerCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/employers' }),
    schema: z.object({
        company_name: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        roles: z.array(z.string()).optional(),
        duration: z.string(),
        url: z.string(),
        summary: z.string(),
    }),
})

const clientCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/clients' }),
    schema: ({ image }) =>
        z.object({
            client_name: z.string(),
            description: z.string(),
            tags: z.array(z.string()).optional(),
            url: z.string(),
            logo: image(),
            logo_alt: z.string(),
            summary: z.string(),
        }),
})

const projectCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: z.object({
        project_name: z.string(),
        tags: z.array(z.string()),
        url: z.string(),
        github: z.string(),
        summary: z.string(),
        description: z.string(),
        duration: z.string(),
        header_image: z.string(),
        published: z.boolean(),
    }),
})

const sectionCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sections' }),
})

export const collections = {
    employers: employerCollection,
    clients: clientCollection,
    projects: projectCollection,
    sections: sectionCollection,
}
