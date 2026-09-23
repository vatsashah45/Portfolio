"use client";

import useSWR from "swr";

type Post = { title: string; link: string; date: string };
const fetcher = async (url: string): Promise<Post[]> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Unable to load writing");
  const posts = await response.json();
  if (!Array.isArray(posts)) throw new Error("Invalid writing feed");
  return posts;
};

export default function Blogs() {
  const { data, error, isLoading } = useSWR<Post[]>("/api/medium", fetcher, { shouldRetryOnError: false });
  return (
    <section id="blogs" aria-labelledby="writing-heading">
      <h2 id="writing-heading">Writing</h2>
      {isLoading ? <p className="muted" role="status">Loading recent posts…</p> : null}
      {data && data.length > 0 ? (
        <ul>
          {data.map((post) => {
            const date = new Date(post.date);
            return (
              <li key={post.link}>
                <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>{" "}
                {!Number.isNaN(date.getTime()) ? (
                  <time className="post-date" dateTime={post.date}>
                    {date.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" })}
                  </time>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
      {error ? <p className="muted small">Recent posts are unavailable right now.</p> : null}
      <p>Read {data?.length ? "more of " : ""}my writing on <a href="https://medium.com/@vatsashah" target="_blank" rel="noopener noreferrer">Medium</a>.</p>
    </section>
  );
}
