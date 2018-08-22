import Layout from '../../components/Layout'

export default () => (
    <div>
        <Layout title="about page">
            <h1>This is the about page</h1>
            <h2>init number:<span className="red">1</span></h2>
        </Layout>
        <style jsx>{`
            .red {color:#f00;}
        `}</style>
    </div>
)
