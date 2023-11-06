import { Container } from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export const BmiHistory = ()=>{
    return <>
<Container>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Body Mass Index measured history </TableCaption>
    <Thead>
      <Tr>
        <Th>Sl.No.</Th>
        <Th>BMI</Th>
        <Th>Date</Th>
      </Tr>
    </Thead>
    <Tbody>
     
    </Tbody>
   
  </Table>
</TableContainer>
</Container>
    
    </>
}