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
import { useDispatch, useSelector } from "react-redux";

export const BmiHistory = () => {
  const isLoading = useSelector((store) => store.authenication.isLoading);
  const dispatch = useDispatch();
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
