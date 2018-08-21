import React, { Component } from 'react'

import Link from 'next/link'
import '../static/index.less'

class Index extends Component {

    render (){
        return (
            <div className="example">
                <p>Hello Next.js</p>
                <p><Link href="/about"><a>to about</a></Link></p>
                <p><Link href="/test"><a>to test</a></Link></p>
            </div>
        )
    }
}

export default Index