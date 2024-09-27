import { z, defineCollection } from 'astro:content'

const employerCollection = defineCollection({
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
        logo_size: z.object({ x: z.number(), y: z.number() }),
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
        description: z.string(),
        duration: z.string(),
        header_image: z.string(),
        published: z.boolean(),
    }),
})

const sectionCollection = defineCollection({
    type: 'content',
})

export const collections = {
    employers: employerCollection,
    clients: clientCollection,
    projects: projectCollection,
    sections: sectionCollection,
}
