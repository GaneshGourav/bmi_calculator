import { Container } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export const BmiHistory = () => {
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
