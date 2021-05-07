import styled from 'styled-components'

const Container = styled.div`
    margin-bottom: 50px;
`

const Header = styled.h2`
    margin-bottom: 20px;
    font-family: "Roboto Mono";
    font-weight: 600;
    font-size: 16px;
`

const SplitLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Projects = ({ ...props }) => {
    return (
        <>
            <Container>
                <Header>YakkerTrack - Web Application</Header>
                <p>Yakkertech is an optical ball flight tracking company with the goal of capturing data on collegiate baseball player performance.</p>
                <p>I built them an app that allows a team official to input game information tags onto metric data captured by the system. The application follows along with the game and the team official tags the pitches that come in to give them context when the pitches are reviewed later.</p>
                <p>Please note that you will need to open this app in Google Chrome on a desktop or laptop sized device. Client requirements distinctly mentioned to not bother with other browsers or device sizes.</p>
                <p>Also note that this demo is purely presentational. You may find that certain pieces of functionality do not work because the application is not connected to a Yakkertech system.</p>
                <p>If you want to see what the app does when pitches come into the system, you may click on the "Dev Test" buttons on the left to see what happens!</p>
                <SplitLinks>
                    <a target="_blank" href="https://yakkertech-dev.netlify.app/" rel="noopener noreferrer">Visit it here.</a>
                    <a target="_blank" href="https://github.com/yakkertech/yakkertrack-ui" rel="noopener noreferrer">Source Code</a>
                </SplitLinks>
            </Container>
            <Container>
                <Header>Trova - Application</Header>
                <p>Currently under construction, this application allows a user to go through stats of college players based on their filters and searches.</p>
                <p>As mentioned this is a currently under construction demo. You will need to open this app on a laptop or desktop to guarantee that it be usable. We are about to open up this app to an alpha stage shortly.</p>
                <p>You may sign in with these credentials to access the app:</p>
                <p>Email: tester@inthezone.dev</p>
                <p>Password: AlphaTest!1</p>
                <SplitLinks>
                    <a target="_blank" href="https://trova-app.netlify.app/" rel="noopener noreferrer">Visit it here.</a>
                    <a target="_blank" href="https://github.com/trova-app" rel="noopener noreferrer">Source Code</a>
                </SplitLinks>
            </Container>
            <Container>
                <Header>Adopt a Minor Leaguer - Website</Header>
                <p>I'm the CTO of a non-profit that provides aid to minor leaguers in financial need. So...95% of them. </p>
                <p>I built our website using Gatsby.js, SASS, and Stripe.js. I also created an organizational tooling system from Google Sheets and Trello to help our CEO be able to do his job easier.</p>
                <SplitLinks>
                    <a target="_blank" href="https://adoptaminorleaguer.com" rel="noopener noreferrer">Visit it here.</a>
                    <a target="_blank" href="https://github.com/anthonyshew/adoptaplayer" rel="noopener noreferrer">Source Code</a>
                </SplitLinks>
            </Container>
            <Container>
                <Header>In the Zone Development Agency - Website</Header>
                <p>I'm the co-owner of our agency.</p>
                <p>We build website, applications, and mobile apps specializing in the baseball industry.</p>
                <SplitLinks>
                    <a target="_blank" href="https://inthezone.dev/" rel="noopener noreferrer">Visit it here.</a>
                    <a target="_blank" href="https://github.com/anthonyshew/inthezone" rel="noopener noreferrer">Source Code</a>
                </SplitLinks>
            </Container>
        </>
    )
}

export default Projects