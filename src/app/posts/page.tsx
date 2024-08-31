// main
import Link from "next/link";

// lib
import prisma from "@/lib/prisma-singleton";


export default async function PostsPage() {

    const posts = await prisma.post.findMany({
        where: {
            published: true,
            // title: {
            //     contains: 'Zom'
            // }
        },
        orderBy: {
            createdAt: 'desc'
        },
        select: {
            id: true,
            title: true,
            slug: true,
        },
    });

    const postsCount = await prisma.post.count();

    return (
        <div className="bg-gray-100 flex items-center justify-center">
            <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
                <header className="text-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">List of Posts ({postsCount})</h1>
                </header>

                <main>
                    <div className="p-4">
                        <ul className="list-disc list-inside">
                            {posts.map((post, index) => (
                                <li>
                                    <Link href={`posts/${post.slug}`} className="cursor-pointer text-blue-500">{post.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    )
}
