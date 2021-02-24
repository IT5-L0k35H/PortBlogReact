import React from 'react'
import { PostMasonry, MasonryPost, PostGrid } from '../components/common'
import trending from '../assests/mocks/trending';
import featured from '../assests/mocks/featured';

const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3',
    }
}

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1: {
        height: '300px'
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px',
    }
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'Miguel Coder'
        post.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.'
    })
}

const recentPosts = [...trending, ...featured, ...featured]

mergeStyles(featured, featuredConfig)
mergeStyles(trending, trendingConfig)

const lastFeatured = featured.pop()

export default function Home() {
    return (

        <main className="home">

            <section className="container">
                <div className="row">
                    {/* <h1>Featured posts</h1> */}
                    <section className="featured-posts-container">
                        <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
                        <MasonryPost post={lastFeatured} tagsOnTop={true} />
                    </section>


                </div>
            </section>

            <section className="bg-white">
                <section className="container">
                    <div className="row">
                        <h1>Recent Posts</h1>
                        <PostGrid posts={recentPosts} />
                    </div>
                </section>
            </section>

            <section className="container">
                <div className="row">
                    <h1>Trending Posts</h1>
                    <PostMasonry posts={trending} columns={3} />
                </div>
            </section>

        </main>




    )
}