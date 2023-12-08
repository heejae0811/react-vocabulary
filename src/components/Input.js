import {forwardRef, useEffect, useRef} from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: calc(100% - 20px);
  padding: 15px 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 16px;

  &::placeholder {
    color: #bbb;
  }

  @media screen and (max-width: 720px) {
    font-size: 12px;
  }
`

const Input = forwardRef((props, ref) => {
    const inputElRef = useRef(ref | null)

    useEffect(() => {
        const textInput = ReactDOM.findDOMNode(inputElRef.current)

        if (textInput !== null && props.autoFocus) {
            inputElRef.current.focus()
        }
    }, [])

    return (
        <label>
            <StyledInput
                ref={inputElRef}
                className={props.variant}
                type={props.type}
                id={props.id}
                value={props.value}
                placeholder={props.placeholder}
                maxLength={props.maxlength}
                readOnly={props.readOnly}
                disabled={props.disabled}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
                onBlur={props.onBlur || null}/>
        </label>
    )
})

export default Input