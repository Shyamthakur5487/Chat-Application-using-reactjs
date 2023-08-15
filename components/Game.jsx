import React from 'react'
import { useNavigate } from "react-router-dom";
import { GiGamepadCross } from "react-icons/gi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from '../utils/APIRoutes';

export default function Game() {
  const navigate = useNavigate();
  const change = async()=>{
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/app");
    }
  };
  return (
    <Button onClick = {change}>
     <GiGamepadCross/>
     </Button>
  )
}
const Button = styled.button`
  display: flex;
  padding: 0.5rem;
  position:fixed;
  left:84.5%;
  top:8.5%;
  border-radius: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg{
    font-size: 1.3rem;
    color:#ebe7ff;
  }
`;