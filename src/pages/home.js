import React from 'react'
import trending from '../assests/mocks/trending'
import { PostMasonry } from '../components/common'

const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3',
    }
}



export default function Home() {
    return (
        <section className='container home'>
            <div className='row'>
                <h2>Trending Posts</h2>
                <PostMasonry posts={trending} columns={3} />


            </div>
        </section>
    )
}