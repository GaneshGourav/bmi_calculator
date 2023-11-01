import { Button, Container, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"

export const Bmicalculation = ()=>{
    return <>
    <Container>
<Text color={"teal"} fontFamily={'cursive'} fontWeight={"800"}>Calculate your Body Mass Index and stay healthy</Text>
<Container>
    <form action="">
        <FormControl isRequired>
            <FormLabel >Height</FormLabel>
            <Input type="number" placeholder="height in feet"  />
        </FormControl> <br />
        <FormControl isRequired>
            <FormLabel >Weight</FormLabel>
            <Input type="number" placeholder="weight in Kgs"  />
        </FormControl> <br />
        <Button width="100%" colorScheme="pink">Calculate your BMI</Button> <br /><br />
        <Button width="100%" colorScheme="yellow">Clear</Button>
    </form>
</Container>

</Container><br />
    
    </>
}