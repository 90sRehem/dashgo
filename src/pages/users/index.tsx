import { Button } from "@chakra-ui/button"
import { Checkbox } from "@chakra-ui/checkbox"
import Icon from "@chakra-ui/icon"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"

export default function Userlist() {
    return (
        <Box>
            <Header />

            <Flex
                w="100%"
                my='6'
                maxWidth={1480}
                mx='auto
                ' px='6'
            >
                <Sidebar />

                <Box flex='1' borderRadius={8} bg="gray.800" p="8">
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size="lg" fontWeight='normal'>Usuários</Heading>

                        <Button
                            as="a"
                            size='sm'
                            fontSize='small'
                            colorScheme='pink'
                            leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                        >
                            Criar novo usuário
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' w='8'>
                                    <Checkbox color='pink' />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th width='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox color='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Jonathan Rehem</Text>
                                        <Text fonstSize='sm' color='gray.300'>rehemdev@gamil.com</Text>
                                    </Box>
                                </Td>
                                <Td> 07 de Maio de 2021</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size='sm'
                                        fontSize='small'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}