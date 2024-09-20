import { z, defineCollection } from 'astro:content'

const workCollection = defineCollection({
    type: 'content',
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
    type: 'content',
    schema: z.object({
        client_name: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        url: z.string(),
        logo: z.string(),
        logo_alt: z.string(),
        summary: z.string(),
    }),
})

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        project_name: z.string(),
        tags: z.array(z.string()),
        url: z.string(),
        github: z.string(),
        summary: z.string(),
    }),
})

const sectionCollection = defineCollection({
    type: 'content',
})

export const collections = {
    work: workCollection,
    clients: clientCollection,
    projects: projectCollection,
    sections: sectionCollection,
}
