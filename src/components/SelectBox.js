import styled from 'styled-components'

const StyledSelect = styled.select`
  padding: 5px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: none;
  color: #fff;
`

const StyledOption = styled.option`
  background-color: #43437e;
`

const SelectBox = props => {
  const {value, onChange} = props

  return (
    <StyledSelect value={value} onChange={onChange}>
      {
        props.options.map((option, index) => (
          <StyledOption
            key={index}
            value={option}>
            {option}
          </StyledOption>
        ))
      }
    </StyledSelect>
  )
}

export default SelectBox