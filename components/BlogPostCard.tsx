import Link from 'next/link';
import cn from 'classnames';


export default function BlogPostCard({ title, slug }) {

  return (
    (<Link
      href={`/blog/${slug}`}
      className="transform hover:scale-[1.01] transition-all hover:text-blue-400">

      <div className="justify-between h-full bg-white dark:bg-gray-900">
        <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
          {title}
        </h4>
      </div>

    </Link>)
  );
}
