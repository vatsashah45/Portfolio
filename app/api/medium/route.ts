import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const MEDIUM_USER = 'vatsashah';
const FEED_URL = `https://medium.com/feed/@${MEDIUM_USER}`;
const parser = new Parser();

export const revalidate = 3600;

export async function GET() {
  try {
    const feed = await parser.parseURL(FEED_URL);

    const posts = feed.items.slice(0, 6).map((item) => ({
      title: item.title,
      link:  item.link,
      date:  new Date(item.pubDate ?? '').toISOString(),
      snippet: item.contentSnippet,
      cover:  item.enclosure?.url ?? null,
    }));

    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.error('Medium fetch failed', err);
    return NextResponse.json({ error: 'Unable to load feed' }, { status: 500 });
  }
}
