import styled from 'styled-components'

const StyledSelect = styled.select`
  width: 100px;
  padding: 5px 0 5px 3px;
  background-color: #394867;
  border-radius: 5px;
  outline: none;
  color: #fff;
`

const StyledOption = styled.option`
  background-color: #394867;
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