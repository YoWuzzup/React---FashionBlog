import React from 'react'
import { Header, AboutContent } from '../Components/'

export default function About({ location }) {
    return (
        <div>
            <Header title={'About Bella'} />
            <AboutContent path={location.pathname} />
        </div>
    )
}
