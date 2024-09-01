import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function seedPosts() {
    console.log('Start seeding posts...');

    for (let i = 0; i < 30; i++) {
        const title = faker.lorem.sentence();
        const slug = faker.lorem.slug();
        const content = faker.lorem.paragraphs();

        // Select a random user for the author
        const randomUser = await prisma.user.findFirst({
            orderBy: {
                id: 'asc'
            },
            skip: Math.floor(Math.random() * 10)
        });

        await prisma.post.create({
            data: {
                title: title,
                slug: slug,
                content: content,
                author: {
                    connect: {
                        email: randomUser?.email
                    }
                }
            }
        });
    }

    console.log('Seeding posts ends...');
}
