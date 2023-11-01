import { Container, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"

export const Login = ()=>{
    return <>
<Container>
    <Text fontFamily={'cursive'} fontWeight={'bold'} color={'teal'}>Login here</Text>
    <Container>
        <form action="">

<FormControl isRequired>
    <FormLabel>Email</FormLabel>
    <Input type="email" placeholder="Registered Email" />
    <Input type="password" placeholder="password" />
</FormControl>

        </form>
    </Container>
</Container>
    
    </>
}