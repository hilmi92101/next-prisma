import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function seedUsers() {
    console.log('Start seeding users...');

    for (let i = 0; i < 10; i++) {
        const email = faker.internet.email();
        const password = faker.internet.password();
        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.upsert({
            where: { email },
            update: { hashedPassword: hashedPassword },
            create: { email, hashedPassword: hashedPassword },
        });
    }

    console.log('Seeding users ends...');
}
