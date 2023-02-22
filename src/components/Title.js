import styled from 'styled-components'

const StyledTitle = styled.h1`
  margin: 0 auto 50px;
  color: #fff;
  font-family: 'Raleway', 'Noto Sans KR', sans-serif;
  font-size: 34px;
  font-weight: 500;
  text-align: center;
  line-height: 1;
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