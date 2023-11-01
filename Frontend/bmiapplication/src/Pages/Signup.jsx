import { Button, Container, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { useState } from "react";
import { Link } from "react-router-dom"


export const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    const handleSignup=(e)=>{
        e.preventDefault();
        let userDetails ={
            name,email,password
        }
console.log(userDetails)
    }
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
              <Input type="text" placeholder="Your name" onChange={(e)=>setName(e.target.value)} />
            </FormControl>{" "} <br />
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>{" "}
            <br />
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>

              <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
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
