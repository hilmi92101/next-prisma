
export default function PostsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="py-16">
                {children}
            </div>
        </>
    );
}