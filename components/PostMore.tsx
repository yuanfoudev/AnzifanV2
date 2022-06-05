import Moment from "react-moment";
import { FC } from "react";
import { Post } from "../lib/types";
import Link from "next/link";
import { Colors } from "../lib/colors";
import Image from "next/image";

const PostMore: FC<{ posts: Post[] }> = ({ posts }) => {
    return (
        <div className="py-10 md:py-20">
            <h1 className={`mb-4 text-2xl font-bold md:text-3xl lg:mb-8`} data-aos="fade-up">
                More Posts 🔭
            </h1>
            <ul className="flex flex-row flex-wrap items-stretch lg:-mr-16 mt-8 more-list">
                {posts.map((post, index) =>
                    <li  data-aos="fade-up" className={`lg:mr-16 mb-6 not-last:lg:mb-8 w-full lg:w-114 group lg:odd:after:w-[calc(100%_+_64px)]`} key={post.id} after={`not-last:content-0 flex-shrink-0 flex-grow-0 text-transparent select-none h-[1px] block bg-true-gray-200 mt-6 lg:mt-8`}>
                        <Link href="/post/[slug]" as={`/post/${post.slug}`} >

                            <a className="flex flex-row items-center">
                                <div className="w-26 h-26 md:(w-33 h-33) rounded-2xl overflow-hidden shrink-0">
                                    <div className={`relative duration-500 ease-in-out filter group-hover:brightness-90 transition w-full h-full rounded-2xl overflow-hidden transform rotate-0`}>
                                        <Image src={post.cover.light} layout="fill" objectFit="cover" alt={post.title}
                                            // onLoadingComplete={handleLoad}
                                            placeholder="blur"
                                            blurDataURL={post.cover.blurLight}
                                            className="transition-all duration-500 ease-in-out opacity-100 mobile-hover:group-hover:scale-105
                                                group-hover:rotate-0 group-hover:active:scale-105 group-hover:opacity-90 transform-gpu rounded-2xl overflow-hidden" />
                                    </div>
                                </div>
                                <div className="pl-4 md:pl-6 basis-0 flex-shrink-0 flex-grow">
                                    <Link href="/category/[{Category}]" as={`/category/${post.category.name}`} passHref>
                                        {/* <a> */}
                                        <p className={`inline-block mb-2 text-xs font-bold text-true-gray-600 leading-2 ${Colors[post.category.color].text.light} `} >{post.category.name}</p>
                                        {/* </a> */}
                                    </Link>
                                    <p className="font-semibold line-clamp-3 leading-5">{post.title}</p>
                                    <Moment className="block mt-2 text-sm font-semibold text-true-gray-600" date={post.date} fromNow
                                        // format="MMM DD, yy"
                                        format="yyyy 年 MM 月 DD 日"
                                        local />
                                </div>
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
            <div  data-aos="fade-up" className="text-center">
                <Link href={"/archive"}>
                    <a href="/archive">
                        <p className="text-center border-2 border-black inline-block py-2 px-5 rounded-full hover:(bg-black  text-white) transition ease-in-out duration-400 mt-6 lg:mt-10">View Archive</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default PostMore