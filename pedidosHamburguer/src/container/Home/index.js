import React,{useState ,useRef} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import Logo from '../../assets/logo.jpg';
import Seta from '../../assets/setadir.png';
import H1 from "../../components/Title";
import ContainerItens from "../../container/ContainerItens"

import { Container, Image,Input, InputLabel, Button } from "./style";


function App(){
    const [users ,setUsers] = useState([]);
    const name = useRef();
    const pedido = useRef();
    const  navigate =useNavigate();

 

    async function addNewUser(){
        const {data : newUser} = await axios.post("http://localhost:3003/users",{
        name :name.current.value,
        pedido : pedido.current.value,
    });

    setUsers([...users, newUser]);
}
   
     navigate("/usuarios");
   
  return(
    <Container>
      <Image alt="logo" src={Logo}/>
      <ContainerItens>
      <H1>Faça seu pedido</H1>
      <InputLabel>Nome</InputLabel>
      <Input ref={name} placeholder="Nome"/>
      <InputLabel>Pedido</InputLabel>
      <Input ref={pedido} placeholder="Idade"/>
      <Button to="/usuarios" onClick={addNewUser} >
        <img src={Seta} alt="seta"/> Novo pedido
        </Button>
    
    </ContainerItens>
    </Container>
  )
}

export default App;

