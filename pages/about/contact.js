import Head from 'next/head'
import Layout from '../../components/Layout'
import Hello from '../../components/Hello'

export default () => (
    <div>
        <Head>
            <title>about us</title>
        </Head>
        <Layout title="test page">
            <h1>This is the contact page</h1>
            <Hello />
        </Layout>
    </div>
)
