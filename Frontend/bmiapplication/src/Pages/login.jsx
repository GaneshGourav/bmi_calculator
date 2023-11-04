import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/Action";
import { LOGIN_ERROR, LOGIN_SUCCESS } from "../Redux/ActionType";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location=useLocation();
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const isAuth = useSelector((store)=>store.authenication.isAuth )
  const isLoading = useSelector((store)=>store.authenication.isLoading );
  const toast=useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    let logiDetails = {
      email,
      password,
    };
    console.log(logiDetails);
    dispatch(userLogin(logiDetails)).then((res)=>{
      dispatch({type:LOGIN_SUCCESS,payload:res.data})
      toast({
        title: 'Authorizsed',
        description:`${res.data.msg}`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      if(location.state===null){
        navigate('/',{replace:true})
      }else{
        navigate(location.state,{replace:true})
      }
    }).catch((err)=>{
      dispatch({type:LOGIN_ERROR})
    })
  };
  return (
    <>
      <Container padding={"30px"}>
        <Text fontFamily={"cursive"} fontWeight={"bold"} color={"teal"}>
          Login here
        </Text>{" "}
        <br />
        <br />
        <Container
          border={"1px solid pink"}
          padding={"30px"}
          borderRadius={"5px"}
        >
          <form onSubmit={handleLogin}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Registered Email"
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
            <Button width={"100%"} colorScheme="pink" type="submit">
              Login
            </Button>
          </form>{" "}
          <br />
          <br />
          <Text fontFamily={"cursive"}>
            if you visit very first Time,{" "}
            <span style={{ color: "teal" }} fontWeight="800">
              <Link to="/signup">SignUp here!</Link>
            </span>
          </Text>
        </Container>{" "}
        <br />
        <br />
      </Container>
    </>
  );
};
