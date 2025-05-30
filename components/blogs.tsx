"use client";
 
import useSWR from "swr";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";
 
const fetcher = (url: string) => fetch(url).then((r) => r.json());
 
export default function Blogs() {
  const { data, error, isLoading } = useSWR("/api/medium", fetcher);
 
  if (error) return null;
  if (isLoading || !data) return null;
 
  return (
    <section id="blogs" className="scroll-mt-28 mb-28 sm:mb-40 max-w-[50rem] mx-auto">
      <SectionHeading>Blogs</SectionHeading>
 
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="mt-10 grid gap-6 sm:grid-cols-2"
      >
        {data.map((post: any, idx: number) => (
          <motion.li
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="group rounded-xl bg-white/70 ring-1 ring-gray-200 shadow
                       transition hover:shadow-lg dark:bg-gray-800/40 dark:ring-gray-700"
          >
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full">
              {/* cover image (if present) */}
              {post.cover && (
                <div className="relative h-40 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={post.cover}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
              )}
 
              <div className="p-5">
                <h3 className="text-lg font-semibold leading-tight">{post.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                  {post.snippet}
                </p>
                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                  }).format(new Date(post.date))}
                </p>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
 