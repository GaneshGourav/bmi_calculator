import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bmihistory } from "../Redux/Action";
import { BMI_HISTORY_SUCCESS } from "../Redux/ActionType";

export const BmiHistory = () => {
  // const isLoading = useSelector((store) => store.authenication.isLoading);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(bmihistory()).then((res)=>{
      dispatch({type:BMI_HISTORY_SUCCESS})
      console.log(res)
    })
  })
  return (
    <>
      <Container marginBottom={"25%"}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Body Mass Index measured history </TableCaption>
            <Thead>
              <Tr>
                <Th>Sl.No.</Th>
                <Th>BMI</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody></Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
