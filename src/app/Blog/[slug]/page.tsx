"use client";

import { useParams } from "next/navigation";
import { BlogData } from "@/Data/Blogdata";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function BlogDetail() {
    const params = useParams();
    const slug = params?.slug;

    const blog = BlogData.find((item) => item.slug === slug);

    if (!blog) {
        return <div className="p-10 text-center">Blog not found</div>;
    }

    return (
        <div className="bg-white w-full">
            <Navbar />
            {/* HERO */}
            <div className="relative h-[400px] w-full max-w-screen-2xl mx-auto ">
                <Image
                    src={blog.images1}
                    alt={blog.title}
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50 flex items-end">
                    <div className="max-w-6xl mx-auto w-full px-6 pb-40 text-white">
                        <h1 className="text-2xl md:text-4xl font-bold">
                            {blog.title}
                        </h1>
                        <p className="text-sm mt-2 opacity-80">
                            {blog.author} • {blog.date}
                        </p>
                    </div>
                </div>
            </div>

            {/* MAIN */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LEFT CONTENT */}
                <div className="md:col-span-2 space-y-10">

                    {blog.description.map((item) => (
                        <div key={item.id} className="space-y-3">

                            {/* TITLE */}
                            <h2 className="text-[20px] md:text-[22px] font-semibold text-blue-900">
                                {item.name}
                            </h2>

                            {/* IMAGE (ALWAYS SPACE) */}
                            <div className="w-full h-[250px] bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                                {item.img ? (
                                    <div className="relative w-full h-60">
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                ) : (
                                    <span className="text-gray-400 text-sm">
                                        Image placeholder
                                    </span>
                                )}
                            </div>

                            {/* DESCRIPTION */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>

                        </div>
                    ))}

                    {/* SHARE */}
                    <div className="pt-6 border-t">
                        <p className="text-sm font-semibold mb-3">
                            Share this blog:
                        </p>

                        <div className="flex gap-3">
                            <button className="bg-blue-600 text-white px-4 py-1.5 text-sm rounded">
                                Facebook
                            </button>
                            <button className="bg-black text-white px-4 py-1.5 text-sm rounded">
                                Twitter
                            </button>
                            <button className="bg-blue-800 text-white px-4 py-1.5 text-sm rounded">
                                LinkedIn
                            </button>
                            <button className="bg-gray-300 px-4 py-1.5 text-sm rounded">
                                Copy Link
                            </button>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-6">

                    <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="font-bold text-blue-900 mb-4 text-[24px]">
                            Related Posts
                        </h3>

                        {BlogData
                            .filter((b) => b.slug !== blog.slug)
                            .slice(0, 4)
                            .map((item) => (

                                <Link
                                    href={`/Blog/${item.slug}`}
                                    key={item.id}
                                    className="block bg-white p-3 rounded-lg shadow-sm mb-4 hover:shadow-md transition"
                                >
                                    <div className="flex gap-4">

                                        {/* IMAGE */}
                                        <div className="w-28 h-20 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.images1}
                                                alt={item.title}
                                                width={120}
                                                height={100}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>

                                        {/* CONTENT */}
                                        <div className="space-y-1">
                                            <p className="text-sm font-semibold leading-tight">
                                                {item.title}
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                {item.date}
                                            </p>

                                            <p className="text-xs text-gray-600 line-clamp-2">
                                                {item.description?.[0]?.description || "No description available..."}
                                            </p>
                                        </div>

                                    </div>
                                </Link>

                            ))}

                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );
}