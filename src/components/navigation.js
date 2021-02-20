import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'

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
    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav className={`site-navigation ${menuActive && 'active'}`} role="navigation">
            <span className="menu-title">Harshdeep Singh</span>
            <div
                className="menu-content-container"
            >
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))
                    }
                </ul>
                <div className="menu-avatar-container">
                    <Avatar size={38} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <span className="menu-avatar-name">Harshdeep Singh</span>
                </div>
            </div>
            <i
                className="icon ionicons ion-ios-menu"
                onClick={(ev) => setMenuActive(!menuActive)}
            />
        </nav>
    )
}