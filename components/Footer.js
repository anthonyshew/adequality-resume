import styled from 'styled-components'
import Facebook from '@components/svg/Facebook'
import Twitter from '@components/svg/Twitter'
import LinkedIn from '@components/svg/LinkedIn'

const Container = styled.footer`
    max-width: 767px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 0 20px;
`

const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
`

const Text = styled.p`
    color: #979A9A;
    font-size: 14px;
`

const HR = styled.hr`
    width: 90%;
    max-width: 768px;
    border-color: rgba(151, 154, 154, .1);
`


const Bottom = styled.div`
    padding: 50px 0;
`

const Attribution = styled.p`
    color: #979A9A;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
`

const Footer = ({ ...props }) => {
    return (
        <Container>
            <Top>
                <Text>Me on the Internet:</Text>
                <div>
                    <Facebook />
                    <a target="_blank" href="https://twitter.com/theunrealashew" rel="noopener noreferrer"><Twitter style={{ marginLeft: "25px", width: "24px" }} /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/anthony-shew-711411104/" rel="noopener noreferrer"><LinkedIn style={{ marginLeft: "25px", width: "24px" }} /></a>
                </div>
            </Top>
            <HR />
            <Bottom>
                <Attribution>Emulated WP-Indigo by VitaThemes</Attribution>
                <Attribution>Using React, styled-components, and Next.js</Attribution>
            </Bottom>
        </Container>
    )
}

export default Footer