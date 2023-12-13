import {forwardRef} from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: calc(100% - 20px);
  padding: 15px 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 16px;

  &::placeholder {
    color: #DBDFEA;
  }

  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`

const Input = forwardRef((props, ref) => {
    return (
        <label>
            <StyledInput
                type={props.type}
                id={props.id}
                value={props.value}
                className={props.variant}
                placeholder={props.placeholder}
                maxLength={props.maxlength}
                readOnly={props.readOnly}
                disabled={props.disabled}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
                onBlur={props.onBlur || null}
                autoFocus/>
        </label>
    )
})

export default Input