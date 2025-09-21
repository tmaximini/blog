import Link from 'next/link'
import React from 'react'

export const Footer = () => (<div className="flex flex-col sm:flex-row items-start mt-16 mb-8 space-y-2 sm:space-y-0 sm:space-x-6">
    <Link href="/blog" title="Blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
        Blog
    </Link>
    <a
        target="_blank"
        title="Github"
        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        href="https://github.com/tmaximini"
        rel="noreferrer"
    >
        Github
    </a>

    <a
        target="_blank"
        title="Instagram"
        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        href="https://instagram.com/mxmn82"
        rel="noreferrer"
    >
        Instagram
    </a>
    <a
        target="_blank"
        title="Soundcloud"
        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        href="https://soundcloud.com/maximini"
        rel="noreferrer"
    >
        Soundcloud
    </a>
    {/* <a
        target="_blank"
        title="Twitter"
        className="mr-4"
        href="https://twitter.com/tmaximini"
        rel="noreferrer"
    >
        Twitter
    </a> */}
</div>)