import {forwardRef, useEffect, useRef} from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid #000;
  color: #fff;
  font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
  font-size: 14px;
  
  &::placeholder {
    color: #bbb;
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
        onBlur={props.onBlur || null}
      />
    </label>
  )
})

export default Input