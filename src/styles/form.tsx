import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #002f46;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 10px 0;
    gap: 10px;

    input, button{
        outline: none;
        border: none;
        background-color: #002f46;
        color: #fff;
        padding: 0;
    }

    input[type=text]{
        width: 90%; 
        font-size: 19px;
    }
    input::placeholder{
        color: #fff;
    }
    button{
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 7px 0;
        cursor: pointer;
    }
    button:hover{
        transform: scale(1.05);
        transition: 0.3s;
    }

`