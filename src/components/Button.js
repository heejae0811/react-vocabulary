import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100%;
  height: ${(props) => props.height || '50px'};
  background-color: ${props => props.bgColor};
  color: ${props => props.color || '#333'};
  border: none;
  border-radius: 5px;
  font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 500;
  transition: all .3s;
  cursor: pointer;
  
  &:hover {
    opacity: .8;
  }
  
  &:disabled {
    background-color: #bbb;
  }
  
  @media screen and (max-width: 720px) {
    height: ${(props) => props.height || '40px'};
    font-size: 12px;
  }
`

const Button = ({disabled, children, ...rest}) => {
  return (
    <StyledButton
      disabled={disabled}
      {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button