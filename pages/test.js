import React, { Component } from 'react'
import Link from 'next/link'

export default class Test extends Component {
    render (){
        return (
            <p><Link href= "/"><a>to Home</a></Link></p>
        )
    }
}
