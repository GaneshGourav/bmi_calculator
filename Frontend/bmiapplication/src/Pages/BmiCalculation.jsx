import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bmipost } from "../Redux/Action";
import { BMI_SUCCESS } from "../Redux/ActionType";
import {useNavigate} from "react-router-dom"

export const Bmicalculation = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmimes, setbmimes] = useState(null);
  
  const isLoading = useSelector((store) => store.authenication.isLoading);
  const dispatch = useDispatch();
  
 
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
    dispatch(bmipost(bmi)).then((res)=>{
      dispatch({type:BMI_SUCCESS,payload:res.data})
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
   
  };

  const handleBack=()=>{
    setbmimes(null)
  }
  


   
 


  const handleClearfield = (e) => {
  setHeight("");
  setWeight("")
  };
  return (
    <>
      <Container>
        <Text color={"teal"} fontFamily={"cursive"} fontWeight={"800"}>
          Calculate your Body Mass Index and stay healthy
        </Text>{" "}
        <br />
       <Flex  width={"100%"}>
       { bmimes? <Container border={"1px solid teal"} height={"360px"} display={"flex"} justifyContent={'center'} alignItems={'center'} color={'teal'} fontFamily={'cursive'} fontWeight={800} borderRadius={"5px"} flexDirection={'column'}>
       { bmimes} <br /><br />
       <Button onClick={handleBack} width={'60%'} colorScheme="teal">Go to Back</Button>
       </Container>:<Container  border={"1px solid blue"}>
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
             {isLoading?"calculating":"Calculate your BMI"}
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
        </Container>}
        
        </Flex>
       
      </Container>
      <br />
    </>
  );
};
