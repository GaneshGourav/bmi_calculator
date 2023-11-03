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
import { Link } from "react-router-dom";
import { userLogin } from "../Redux/Action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector((store)=>store.authenication.isAuth )
  const isLoading = useSelector((store)=>store.authenication.isLoading )

  const handleLogin = (e) => {
    e.preventDefault();
    let logiDetails = {
      email,
      password,
    };
    console.log(logiDetails);
    dispatch(userLogin(logiDetails))
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
