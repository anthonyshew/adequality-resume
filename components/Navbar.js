import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 45px;
`

const StyledLink = styled.a`
  margin: 0 18px;
  padding: 4px 8px;
  font-size: 14px;
  border: 1px solid transparent;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border: 1px solid #3F51B5;
  }
`

const Navbar = ({ ...props }) => {
  return (
    <Container>
      <Link href="/"><StyledLink>Cover Letter</StyledLink></Link>
      <Link href="/resume"><StyledLink>Resume </StyledLink></Link>
      <Link href="/projects"><StyledLink>Projects</StyledLink></Link>
    </Container>
  )
}

export default Navbar