import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${props => props.bgColor};
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
  font-size: 15px;
  transition: all .3s;
  cursor: pointer;
  
  &:hover {
    opacity: .8;
  }
  
  &:disabled {
    background-color: #bbb;
  }
`

const Button = ({disabled, children, ...rest}) => {
  return (
    <StyledButton disabled={disabled} {...rest}>{children}</StyledButton>
  )
}

export default Button