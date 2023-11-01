import { Button, Container, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Login = ()=>{
    return <>
<Container padding={'30px'}>
    <Text fontFamily={'cursive'} fontWeight={'bold'} color={'teal'}>Login here</Text> <br /><br />
    <Container border={'1px solid pink'} padding={'30px'} borderRadius={'5px'} >
        <form action="">

<FormControl isRequired>
    <FormLabel>Email</FormLabel>
    <Input type="email" placeholder="Registered Email" />
   
</FormControl> <br />
<FormControl isRequired>
    <FormLabel>Password</FormLabel>
    
    <Input type="password" placeholder="password"   />
</FormControl> <br /><br />
<Button width={'100%'} colorScheme="pink">Login</Button>

        </form> <br /><br />
        <Text fontFamily={'cursive'}>if you visit first Time, <span style={{color:"teal"}} fontWeight="800"><Link to="/signup">SignUp here!</Link></span></Text>
    </Container> <br /><br />
</Container>
    
    </>
}