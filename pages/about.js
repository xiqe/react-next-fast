import Hello from '../components/Hello'
import Test from './test'

export default () => (
    <div>
        <p className="red">This is the about page</p>
        <Hello />
        <Test />
        <style jsx>{`
            .red {color:#f00;}
        `}</style>
    </div>
)
