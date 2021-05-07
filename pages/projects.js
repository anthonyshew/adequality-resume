import Head from '@components/Header'
import Navbar from '@components/Navbar'
import Body from '@components/Body'
import Footer from '@components/Footer'
import Projects from '@components/content/Projects'

const Page = () => {
    return (
        <>
            <Head />
            <Navbar />
            <Body title="Projects">
                <Projects />
            </Body>
            <Footer />
        </>
    )
}

export default Page