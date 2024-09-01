import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Prisma.PostCreateInput is from node_modules\.prisma\client\index.d.ts
const initialPosts: Prisma.PostCreateInput[] = [
    {
        title: 'The Lion-Wolf War: Clash of the Apex Predators',
        slug: 'lion-wolf-war-clash-of-the-apex-predators',
        content: 'The Lion-Wolf War represents an epic struggle between two of nature’s most formidable predators, each vying for dominance over their shared territory. In this fierce conflict, the majestic lions, with their powerful roars and commanding presence, battle against the cunning wolves, known for their strategic pack tactics and relentless endurance. As these apex predators clash, the savannah and forest alike become battlegrounds where strength, strategy, and survival skills are tested to their limits. This war not only showcases the raw power of both species but also highlights the delicate balance of their ecosystems, where every battle fought echoes the broader struggle for supremacy in the wild.',
        author: {
            connectOrCreate: {
                where: {
                    email: 'john@gmail.com'
                },
                create: {
                    email: 'john@gmail.com',
                    hashedPassword: '$2b$10$EIXx/0LOyDLJkFzEgY6OqOowYH6mPclF0BYB2v5xrxfgOtXy2zLe6',
                }
            }
        }
    },
];

async function main() {

    console.log('Start seeding ... ');

    for (const post of initialPosts) {
        const newPost = await prisma.post.create({
            data: post,
        })
    }
    console.log('Created post with id: ${newPost.id}');
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })