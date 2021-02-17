import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About Me',
        path: '/about-me'
    },
    {
        title: 'Blogs',
        path: '/blogs'
    },
    {
        title: 'Portfolio',
        path: '/portfolio'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]

export default function Navigation() {
    return (
        <nav className="site-navigation">
            <span>Harshdeep Singh</span>
            <ul>
                {navLinks.map((link, index) => (

                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}