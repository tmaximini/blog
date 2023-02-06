import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/index.mjs';

const feed = new RSS({
  title: 'Thomas Maximini - Articles',
  feed_url: 'https://maxi.io/rss.xml',
  site_url: 'https://maxi.io',
});

allBlogs
  .map((blog) => ({
    title: blog.title,
    description: blog.summary,
    url: `https://maxi.io/blog/${blog.slug}`,
    date: blog.publishedAt,
  }))
  .forEach((item) => {
    feed.item(item);
  });

writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
