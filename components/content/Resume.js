import styled from 'styled-components'

const ContactInfo = styled.div`
    margin-bottom: 30px;
    text-align: center;

    p {
        margin: 0;
    }
`

const Header = styled.h2`
    margin-top: 30px;
    margin-bottom: 5px;
    border-bottom: 1px solid black;
    font-family: "Roboto Mono";
    font-size: 18px;
    font-weight: 700;
`

const BoldSplitLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    font-weight: 500;

    p {
        margin: 0;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`

const ItalicSplitLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    font-style: italic;

    p {
        margin: 0;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`

const List = styled.ul`
    padding-top: 15px;
    padding-left: 35px;
    list-style-type: circle;
`

const ListItem = styled.li`

`

const Resume = ({ ...props }) => {
    return (
        <>
            <ContactInfo>
                <p>1115 Chaparral Drive</p>
                <p>Bullhead City, AZ</p>
                <p>(949 632-3895 | anthony@inthezone.dev</p>
            </ContactInfo>

            <Header>Education</Header>
            <BoldSplitLine>
                <p>University of San Francisco</p>
                <p>San Francisco, CA</p>
            </BoldSplitLine>
            <ItalicSplitLine>
                <p>Bachelor of Science in Business Administration</p>
                <p>Fall 2014 - Fall 2016</p>
            </ItalicSplitLine>
            <List>
                <ListItem>GPA: 3.93</ListItem>
                <ListItem>Member and leader of intercollegiate baseball team</ListItem>
                <ListItem>Charles Harney Award winner for highest graduating GPA among student athletes</ListItem>
            </List>

            <Header>Professional Experience</Header>
            <BoldSplitLine>
                <p>St. Louis Cardinals</p>
                <p>Various Locations</p>
            </BoldSplitLine>
            <ItalicSplitLine>
                <p>Professional Baseball Player</p>
                <p>July 2016 - Feb 2021</p>
            </ItalicSplitLine>
            <List>
                <ListItem>Cultivated industry knowledge for a future in developing baseball technologies</ListItem>
                <ListItem>Contributed on-field through both athletic performance and comradery with teammates</ListItem>
                <ListItem>Interacted with local communities through various signing events, pre-game activities, and Boys & Girls’ Club activities</ListItem>
            </List>
            <BoldSplitLine style={{ marginTop: "30px" }}>
                <p>Freelance Software Engineering</p>
                <p>Remote</p>
            </BoldSplitLine>
            <ItalicSplitLine>
                <p>Javascript Engineer</p>
                <p>Mar 2017 - Present</p>
            </ItalicSplitLine>
            <List>
                <ListItem>Managed client relationships to successful project completion</ListItem>
                <ListItem>Organized workflow to handle up to ten projects at one time</ListItem>
                <ListItem>Increased sales from $4000/month to $10,500/month for e-commerce client in 6 month period</ListItem>
            </List>
            <BoldSplitLine style={{ marginTop: "30px" }}>
                <p>In the Zone Software Development</p>
                <p>Remote</p>
            </BoldSplitLine>
            <ItalicSplitLine>
                <p>Co-Owner</p>
                <p>Sept 2020 - Present</p>
            </ItalicSplitLine>
            <List>
                <ListItem>Architected cloud solutions for SaaS products</ListItem>
                <ListItem>Listened to and prescribed solutions for client pain points</ListItem>
                <ListItem>Developed key technical infrastructure to drive business goals</ListItem>
            </List>

            <Header>Programming Skills and Tools</Header>
            <List style={{ marginTop: "20px" }}>
                <ListItem>Please note that this list is not exhaustive. I am constantly learning something new.</ListItem>
                <ListItem>HTML / CSS / A11y</ListItem>
                <ListItem>Javascript / Node / React.js / React Native</ListItem>
                <ListItem>Gatsby.js / Next.js / Express.js</ListItem>
                <ListItem>GraphQL / REST API Usage & Architecture</ListItem>
                <ListItem>SQL, particularly PostgreSQL</ListItem>
                <ListItem>D3.js, Chart.js & other data visualization frameworks</ListItem>
                <ListItem>Figma, wireframing, and some image manipulation</ListItem>
            </List>
        </>
    )
}

export default Resume