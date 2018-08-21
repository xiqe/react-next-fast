import React, { Component } from 'react'

import Link from 'next/link'
import '../static/index.less'

class Index extends React.Component {

    render (){
        return (
            <div className="example">
                <p>Hello Next.js</p>
                <Link href="/about"><a>to about</a></Link>
            </div>
        )
    }
}

export default Index