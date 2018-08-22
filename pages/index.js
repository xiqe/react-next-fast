import React, { Component } from 'react'

import Link from 'next/link'
import '../static/index.less'

export default class Index extends Component {
    constructor(){
        super();
        console.log('---------constructor--------');
    }

    componentWillMount(){
        console.log('---------componentWillMount--------')
    }

    componentDidMount(){
        console.log('---------componentDidMount--------')
    }

    componentWillUpdate(){
        console.log('---------componentWillUpdate--------')
    }

    componentDidUpdate(){
        console.log('---------componentDidUpdate--------')
    }

    render (){
        return (
            <div className="example">
                <h1>Hello Next.js</h1>
                <p>Menu</p>
                <ul className="menu">
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/about/contact"><a>Contact</a></Link></li>
                    <li><Link href="/test"><a>Test</a></Link></li>
                </ul>
            </div>
        )
    }
}