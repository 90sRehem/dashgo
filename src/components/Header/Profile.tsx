import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
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
                </Box>)}

            <Avatar size="md" name="name" src="https://github.com/90srehem.png" />
        </Flex>
    )
}