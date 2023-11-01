import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Container
        maxW="9xl"
        color={"white"}
        background={"#563727"}
        height={"200px"}
      >
        <Flex justifyContent={"space-around"} paddingTop={"20px"}>
          <Heading>BMI</Heading>
          <Box>
            <Text>About</Text> <br />
            <Text>Services</Text> <br />
            <Text>BMI</Text>
          </Box>
          <Box>
            <Text>Contact</Text> <br />
            <Text>Term & condition</Text>
            <br />
            <Text>Policy</Text>
          </Box>
        </Flex>{" "}
        <br />
        <Flex fontFamily={"cursive"} justifyContent={"space-around"}>
          <Box>
            All right are reserverd by{" "}
            <span style={{ color: "teal" }}>BMI</span>{" "}
          </Box>
          <Box>
            Created and maintained by{" "}
            <span style={{ color: "teal" }}>Ganesh Kumar</span>{" "}
          </Box>
        </Flex>
      </Container>
    </>
  );
};
