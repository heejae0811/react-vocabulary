import styled from 'styled-components'

const StyledTitle = styled.h1`
  margin: 60px auto;
  color: #333;
  font-family: 'Raleway', 'Noto Sans KR', sans-serif;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;

  @media screen and (max-width: 720px) {
    margin: 0 auto 30px;
    font-size: 28px;
  }
`

const Title = ({children}) => {
  return (
    <StyledTitle>{children}</StyledTitle>
  )
}

export default Title