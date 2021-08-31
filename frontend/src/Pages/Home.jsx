import React from 'react'
import { MainPics, AboutContent, Follow, RecentPostsBlock, RecentProductsBlock } from '../Components'

export default function Home() {
    return (
    <>
        <MainPics />
        <RecentPostsBlock />
        <RecentProductsBlock />
        <AboutContent />
        <Follow />
    </>
    )
}
