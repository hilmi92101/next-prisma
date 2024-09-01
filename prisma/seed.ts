// main
import { Prisma, PrismaClient } from '@prisma/client'

// packages
import bcrypt from 'bcryptjs';
import { faker } from '@faker-js/faker';

// seeders
import { seedUsers } from './seeders/seedUsers';
import { seedPosts } from './seeders/seedPosts';

const prisma = new PrismaClient()

// Prisma.PostCreateInput is from node_modules\.prisma\client\index.d.ts
// const initialPosts: Prisma.PostCreateInput[] = [
//     {
//         title: 'The Lion-Wolf War: Clash of the Apex Predators',
//         slug: 'lion-wolf-war-clash-of-the-apex-predators',
//         content: 'The Lion-Wolf War represents an epic struggle between two of nature’s most formidable predators, each vying for dominance over their shared territory.',
//         author: {
//             connectOrCreate: {
//                 where: {
//                     email: 'john@gmail.com'
//                 },
//                 create: {
//                     email: 'john@gmail.com',
//                     hashedPassword: '$2b$10$EIXx/0LOyDLJkFzEgY6OqOowYH6mPclF0BYB2v5xrxfgOtXy2zLe6',
//                 }
//             }
//         }
//     },
// ];

async function main() {

    console.log('Start seeding ... ');

    await seedUsers();
    await seedPosts();

    console.log('Seeding ends... ');
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