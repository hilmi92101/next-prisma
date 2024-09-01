"use server";

// main
import { revalidatePath, revalidateTag } from "next/cache";
//import { ProductProps } from '@/types/appTypes'

// lib
import prisma from "@/lib/prisma-singleton";

export const createPost = async (e: FormData) => {

    const title = e.get('title')?.toString() as string;
    const slug = title.toLowerCase().replace(/[:\s]+/g, '-') as string;
    const content = e.get('content')?.toString() as string;

    await prisma.post.create({
        data: {
            title: title,
            slug: slug,
            content: content,
        }
    })

    revalidatePath('/posts')
}

export const updatePost = async (e: FormData, postId: string) => {
    const title = e.get('title')?.toString() as string;
    const slug = title.toLowerCase().replace(/[:\s]+/g, '-') as string;
    const content = e.get('content')?.toString() as string;

    await prisma.post.update({
        where: { id: postId },
        data: {
            title: title,
            slug: slug,
            content: content,
        }
    })
}