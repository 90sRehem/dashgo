import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { Navlink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title='Geral'>
                <Navlink icon={RiDashboardLine} children="Dashboard" href='/dashboard' />
                <Navlink icon={RiContactsLine} children='Usuários' href='/users' />
            </NavSection>

            <NavSection title='Automação'>
                <Navlink icon={RiInputMethodLine} children="Formulários" href='/forms' />
                <Navlink icon={RiGitMergeLine} children="Automação" href='/automation' />
            </NavSection>
        </Stack>
    )
}