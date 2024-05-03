import { z, defineCollection } from 'astro:content'

const workCollection = defineCollection({
    type: 'content',
    schema: z.object({
        company_name: z.string(),
        tags: z.array(z.string()).optional(),
        roles: z.array(z.string()).optional(),
        duration: z.string(),
        url: z.string(),
        summary: z.string(),
    }),
})

const sectionCollection = defineCollection({
    type: 'content',
})

export const collections = {
    work: workCollection,
    sections: sectionCollection,
}
