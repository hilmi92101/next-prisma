// main
import Link from "next/link";

// lib
import prisma from "@/lib/prisma-singleton";


export default async function PostsPage() {

    const posts = await prisma.post.findMany();

    return (
        <div className="bg-gray-100 flex items-center justify-center">
            <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
                <header className="text-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">Page Header</h1>
                </header>

                <main>
                    <div className="p-4">
                        <ul className="list-disc list-inside">
                            {posts.map((post, index) => (
                                <Link href={`posts/${post.id}`} className="cursor-pointer text-blue-500">{post.title}</Link>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    )
}
