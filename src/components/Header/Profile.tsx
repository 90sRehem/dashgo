import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";

export function Profile() {
    return (
        <Flex align="center">
            <Box
                mr="4"
                textAlign="right"
            >
                <Text>Jonathan Rehem</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >
                    rehemdev@gmail.com
            </Text>
            </Box>

            <Avatar size="md" name="name" src="https://github.com/90srehem.png" />
        </Flex>
    )
}