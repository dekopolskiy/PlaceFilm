import styled from 'styled-components'
export let Wrapped = styled.div`
    height: 50%;
    width: 30%;
    margin: 10% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`
export let Input = styled.input`
    width: 100%;
    height: 40px;
    background-color: #232526;
    color: white;
    font-size: 100%;
    :focus {
        outline: none;
    }
    :valid{
        
    }
`

export let Form = styled.form`
    display:flex;
    width:70%;
    flex-direction:column;
`