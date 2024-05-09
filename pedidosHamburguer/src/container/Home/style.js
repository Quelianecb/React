import  styled from 'styled-components';
import Background from '../../assets/fundo (1).jpg'
import {Link}from 'react-router-dom'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;



`
export const H1 =styled.h1`
    color:white;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 8px;
`
export const Image= styled.img`
    width: 200px;
    height: 200px;
    margin-top:50px;
    border-radius: 100px;
    
`



export const InputLabel= styled.p`
    letter-spacing: 0.408px;
    font-size: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 22px;
    color:white;
`
export const Input= styled.input`

    border-radius: 14px;
    width: 342px;
    height: 58px;
    padding-left: 25px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 24px;`

export const Button= styled(Link)`
    color:black;
    width: 342px;
    height: 74px;
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
    margin-top: 80px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
    background-color: white;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
    img{
        width: 24px;
      }

    
    
`
