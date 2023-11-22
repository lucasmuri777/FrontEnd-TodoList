import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 0px 1%;
    height: 100%;
    margin: 0 auto;

    h1{
        width: 100%;
        text-align: center;
        padding: 20px 0px;
    }
`

export const List = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;

    li{
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        gap: 20px;
        padding: 10px;
        border: 1px solid #002f46;
        border-radius: 5px;
        font-size: 18px;
        align-items: center;
        p{
            width: 85%;
            padding: 5px 0;
            font-size: 19px;
        }
        input[type=checkbox]{
            width: 5%;
            height: 25px;
        }

        .done{
            text-decoration: line-through;
           
        }

        .icons{
            display: flex;
            justify-content: center;
            flex-wrap: nowrap;
            gap: 10px;
            width: 10%;
        }
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: nowrap;
            flex-direction: column-reverse;
            cursor: pointer;
        }
        .edit{
            color: white;
            background-color: transparent;
            outline: none;
            border: 0;
            font-size: 19px;
            width: 85%;
            border: 1px solid #002f46;
            padding: 5px 10px;
            border-radius: 5px;
        }
    }
`

