import Link from 'next/link'
import React from 'react'

export const Footer = () => (<div className="flex flex-col sm:flex-row items-start mt-8">
    <Link href="/blog" title="Blog" className="mr-4">
        Blog
    </Link>
    <a
        target="_blank"
        title="Github"
        className="mr-4"
        href="https://github.com/tmaximini"
        rel="noreferrer"
    >
        Github
    </a>

    <a
        target="_blank"
        title="Instagram"
        className="mr-4"
        href="https://instagram.com/mxmn82"
        rel="noreferrer"
    >
        Instagram
    </a>
    <a
        target="_blank"
        title="Soundcloud"
        className="mr-4"
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