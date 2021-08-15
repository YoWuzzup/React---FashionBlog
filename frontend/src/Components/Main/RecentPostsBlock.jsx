import React from 'react'
import { RecentPosts } from '../'

export default function RecentPostsBlock() {
    return (
        <div>
            <RecentPosts fetchLength={3} />
        </div>
    )
}
