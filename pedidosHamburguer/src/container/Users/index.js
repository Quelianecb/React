import React,{useState, useEffect} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import Logo from '../../assets/logo.jpg';
import Seta from '../../assets/setaesq.png';
import Excluir from '../../assets/excluir.png';
import H1 from "../../components/Title"
import ContainerItens from "../../container/ContainerItens"
import { Container, Image, Button, User } from "./style";

function Users(){
    const [users ,setUsers] = useState([]);
    //const name = useRef();
    //const age = useRef();
    const navigate =useNavigate();

    // trazer todos os dados banco e mostrar na tela
    useEffect(()=> {

      async function fetchUser(){
      const {data : newUser} = await axios.get("http://localhost:3003/users")
        
        setUsers(newUser)
      }
      fetchUser()
    }, [])

 //deletando usuarios
    async function deleteUser(userId){
      await axios.delete(`http://localhost:3003/users/${userId}`)

      const newUser = users.filter(user => user.id === userId);
      
      setUsers(newUser)
    }

    function goBackPage(){
     navigate.push("/");
    }
   
      
  

  return(
    <Container>
      <Image alt="logo" src={Logo}/>
      <ContainerItens>
      <H1>Pedidos</H1>
     
      <ul>
        {users.map((user)=>
        <User key={user.id}>
          <p class="name">{user.name}</p>

          <p>{user.pedido}</p>
          <button onClick={()=>deleteUser(user.id)}>
            <img src={Excluir} alt="lata"/>
            </button>
          </User>
      )}
      </ul>
      <Button to="/" onClick={goBackPage}>
        <img src={Seta} alt="seta"/> Voltar
        </Button>
    </ContainerItens>
    </Container>
  )
}

export default Users;
