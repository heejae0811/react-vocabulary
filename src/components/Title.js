import styled from 'styled-components'

const StyledTitle = styled.h1`
  margin: 0 auto 60px;
  color: #222;
  font-family: 'Raleway', 'Noto Sans KR', sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 1px;

  @media screen and (max-width: 720px) {
    margin: 0 auto 40px;
    font-size: 28px;
  }
`

const Title = ({children}) => {
  return (
    <StyledTitle>{children}</StyledTitle>
  )
}

export default Title