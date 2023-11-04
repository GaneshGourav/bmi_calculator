import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState,useEffect } from "react";

export const Bmicalculation = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmimes, setbmimes] = useState(null)
 
  const handleCalculateBmi = (e) => {
    e.preventDefault();
    const bmi = weight / (height * height);
    if (bmi <= 18.5) {
      setbmimes(`Your BMI is ${bmi},underWeight`);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setbmimes(`Your BMI is ${bmi},normal Weight`)
    } else if (bmi >= 25 && bmi <= 29.9) {
      setbmimes(`Your BMI is ${bmi},over weight`);
    } else if (bmi > 30) {
      setbmimes(`Your BMI is ${bmi},obesity`);
    }
  };


   
 


  const handleClearfield = (e) => {
    e.target.reset();
  };
  return (
    <>
      <Container>
        <Text color={"teal"} fontFamily={"cursive"} fontWeight={"800"}>
          Calculate your Body Mass Index and stay healthy
        </Text>{" "}
        <br />
        
        <Container>
          <form onSubmit={handleCalculateBmi}>
            <FormControl isRequired>
              <FormLabel>Height</FormLabel>
              <Input
                type="number"
                placeholder="height in feet"
                onChange={(e) => setHeight(e.target.value)}
              />
            </FormControl>{" "}
            <br />
            <FormControl isRequired>
              <FormLabel>Weight</FormLabel>
              <Input
                type="number"
                placeholder="weight in Kgs"
                onChange={(e) => setWeight(e.target.value)}
              />
            </FormControl>{" "}
            <br />
            <Button type="submit" width="100%" colorScheme="pink">
              Calculate your BMI
            </Button>{" "}
            <br />
            <br />
            <Button
              type="reset"
              width="100%"
              colorScheme="yellow"
              onClick={handleClearfield}
            >
              Clear
            </Button>
          </form>
        </Container>
       
       
      </Container>
      <br />
    </>
  );
};
