import { Button, Container, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"


export const Signup = () => {
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
          <form action="">
          <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Your name" />
            </FormControl>{" "} <br />
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter email" />
            </FormControl>{" "}
            <br />
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>

              <Input type="password" placeholder="password" />
            </FormControl>{" "}
            <br />
            <br />
            <Button width={"100%"} colorScheme="pink">
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
