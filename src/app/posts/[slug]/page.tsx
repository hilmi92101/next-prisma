// lib
import prisma from "@/lib/prisma-singleton";
import { PostPageProps } from "@/lib/types";

export default async function PostPage({ params }: PostPageProps) {

    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug
        }
    });

    return (
        <div className="bg-gray-100 flex items-center justify-center">
            <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
                <header className="text-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">{post?.title}</h1>
                </header>

                <main>
                    <div className="p-4">
                        {post?.content}
                    </div>
                </main>
            </div>
        </div>
    )
}
