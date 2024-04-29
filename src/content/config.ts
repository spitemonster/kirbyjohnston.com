import { z, defineCollection } from 'astro:content'

const workCollection = defineCollection({
    type: 'content',
    schema: z.object({
        client_name: z.string(),
        platform: z.string(),
        url: z.string(),
        summary: z.string(),
        tags: z.array(z.string()).optional(),
    }),
})

const sectionCollection = defineCollection({
    type: 'content',
})

export const collections = {
    work: workCollection,
    sections: sectionCollection,
}
