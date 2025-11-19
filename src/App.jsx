import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import { useEffect, useState } from 'react'

function App() {
    const [loading, setLoading] = useState(true)
    //setLoading(false) так нельзя

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            <Header />
            {!loading ? <Content loading={loading} /> : null}
        </>
    )
}

export default App
