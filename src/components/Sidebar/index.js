import { Box, Stack } from "@chakra-ui/layout";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { Navlink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
    return (
        <Box as="aside" w='64' mr='8'>
            <Stack spacing="12" align="flex-start">
                <NavSection title='Geral'>
                    <Navlink icon={RiDashboardLine} children="Dashboard" />
                    <Navlink icon={RiContactsLine} children='Usuários' />
                </NavSection>


                <NavSection title='Automação'>
                    <Navlink icon={RiInputMethodLine} children="Formulários" />
                    <Navlink icon={RiGitMergeLine} children="Automação" />
                </NavSection>

            </Stack>
        </Box>
    )
}