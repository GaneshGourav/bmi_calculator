import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../Redux/Action";
import { SIGNUP_ERROR,  SIGNUP_SUCCESS } from "../Redux/ActionType";
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";


export const Signup = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const toast = useToast()
  // const isAuth = useSelector((store)=>store.authenication.isAuth);
  // const isLoading = useSelector((store)=>store.authenication.isLoading);
  const handleSignup = (e) => {
    e.preventDefault();
    let userDetails = {
      username,
      email,
      password,
    };
    console.log(userDetails);
dispatch(userSignup(userDetails)).then((res)=>{
  dispatch({type:SIGNUP_SUCCESS,payload:res.data})
  console.log(res.data.err)
  if(res.data.err){
    toast({
      title: 'Invalid password format',
      description:`${res.data.err}`,
      status: 'error',
      duration: 4000,
      isClosable: true,
    })
  }else if(res.data.msg){
    toast({
      title: 'Account created ',
      description:`${res.data.msg}`,
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
  }
  
})
.catch((err)=>{
  dispatch({type:SIGNUP_ERROR})
  console.log(err.response.data.msg)
  toast({
    title: 'Already registered ',
    description:`${err.response.data.msg}`,
    status: 'success',
    duration: 4000,
    isClosable: true,
  })
  navigate("/login")
})

  };
  return (
    <>
      <Container padding={"30px"}>
        <Text fontFamily={"cursive"} fontWeight={"bold"} color={"teal"}>
          Signup here !
        </Text>{" "}
        <br />
        <br />
        <Container
          border={"1px solid pink"}
          padding={"30px"}
          borderRadius={"5px"}
        >
          <form onSubmit={handleSignup}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>{" "}
            <br />
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>{" "}
            <br />
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>

              <Input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>{" "}
            <br />
            <br />
            <Button type="submit" width={"100%"} colorScheme="pink">
              SignUp
            </Button>
          </form>{" "}
          <br />
          <br />
        </Container>{" "}
        <br />
        <br />
      </Container>
    </>
  );
};
