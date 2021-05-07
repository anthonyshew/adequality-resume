import Head from '@components/Header'
import Navbar from '@components/Navbar'
import Body from '@components/Body'
import Footer from '@components/Footer'
import Resume from '@components/content/Resume'

const Page = () => {
    return (
        <>
            <Head />
            <Navbar />
            <Body title="Resume">
                <Resume />
            </Body>
            <Footer />
        </>
    )
}

export default Page