import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { SidebarNav } from "./SidebarNav";
import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";

export function Sidebar() {
    const { isOpen, onClose } = useSideBarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg='gray.800' p='4'>
                        <DrawerCloseButton mt='6' />
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }
    return (
        <Box as="aside" w='64' mr='8'>
            <SidebarNav />
        </Box>
    )
}