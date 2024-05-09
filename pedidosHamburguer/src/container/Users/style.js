import styled from 'styled-components';
import Background from '../../assets/fundo (3).jpg'
import { Link } from 'react-router-dom';

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


export const Image = styled.img`
    width: 200px;
    height: 200px;
    margin-top:30px;
    border-radius: 100px;
`



export const Button = styled(Link)`
    color:black;
    width: 342px;
    height: 74px;
    font-size: 20px;
    margin-top:120px;
    font-weight: bold;
    line-height: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
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
export const User = styled.li`
display: flex;
justify-content: space-around;
font-size: 25px;
align-items: center;
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
cursor:pointer;
margin-top: 20px;
background-color: white;
 img{
        width: 24px;
      }
`