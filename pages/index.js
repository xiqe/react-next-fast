import React, { Component } from 'react'

import Link from 'next/link'
import '../static/index.less'

export default class Index extends Component {

    render (){
        return (
            <div className="example">
                <h1>Hello Next.js</h1>
                <p><Link href="/about"><a>to about</a></Link></p>
                <p><Link href="/test"><a>to test</a></Link></p>
            </div>
        )
    }
}
