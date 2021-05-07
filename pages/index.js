import Head from '@components/Header'
import Navbar from '@components/Navbar'
import Body from '@components/Body'
import Footer from '@components/Footer'
import CoverLetter from '@components/content/CoverLetter'

const Index = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Body title="Cover Letter">
        <CoverLetter />
      </Body>
      <Footer />
    </>
  )
}

export default Index