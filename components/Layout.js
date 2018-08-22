import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header>
            <nav>
                <Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/about/contact'><a>Contact</a></Link>
                <Link href='/test'><a>Test</a></Link>
            </nav>
        </header>

        { children }

        <footer>
            {'I`m footer'}
        </footer>

        <style jsx>{`
            nav {
                width:100%;
                border-bottom:1px solid #ccc;
                line-height:40px;
            }
            nav a {
                margin:0 10px;
                color:#999;
            }
            nav a:hover {
                color:#000;
            }
            footer {
                position:fixed;
                bottom:0;
                width:100%;
                border-top:1px solid #ccc;
                line-height:40px;
            }
        `}</style>
    </div>
)