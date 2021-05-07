import styled from 'styled-components'

const Container = styled.main`
    max-width: 768px;
    min-height: 100vh;
    margin: 0 auto;
    margin-top: 200px;
    padding:  0 20px;
    font-family: "Roboto";
    font-size: 14px;
    line-height: 21px;

    p {
        margin-bottom: 20px;
    }
`

const Title = styled.h1`
    margin-bottom: 20px;
    font-family: "Roboto Mono";
    font-size: 26px;
    font-weight: 700;
    text-align: center;
`

const Meta = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 50px;
`

const Identity = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Avatar = styled.div`
    width: 32px;
    height: 32px;
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-position: top center;
    border-radius: 100%;
`

const Name = styled.div`
    margin-left: 10px;
    color: #979A9A;
    font-family: "Roboto Mono";
    font-size: 14px;
    font-weight: 300;
`

const Date = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 67px;
    color: #979A9A;
    font-size: 14px;
    font-weight: 300;
`

const Body = ({ title, children }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Meta>
                <Identity>
                    <Avatar image="/avatar.png" />
                    <Name>anthony</Name>
                </Identity>
                <Date>May 6,2021</Date>
            </Meta>
            {children}
        </Container>
    )
}

export default Body