import { createContext, ReactNode, useContext, useEffect } from "react";
import { useRouter } from 'next/dist/client/router'
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SideBarDraweContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath]);

    return (
        <SideBarDraweContext.Provider value={disclosure}>
            {children}
        </SideBarDraweContext.Provider>
    )
}

export const useSideBarDrawer = () => useContext(SideBarDraweContext)