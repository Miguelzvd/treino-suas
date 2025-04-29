import { useState } from "react";
import { Box, Button, CloseButton, Drawer, HStack, Image, Portal, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import iconsPaths from "../assets/headerIconsPaths.json";
import navbarPaths from "../assets/headerNavbarPaths.json";
import HeaderIcon from "./HeaderIcon";

interface HeaderDrawerProps {
    iconSize: number;
}

const HeaderDrawer = ({iconSize}: HeaderDrawerProps) => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Drawer.Trigger asChild>
                <Button padding="0" bg="transparent">
                    <Image src="sidebar_button_icon.png" />
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header padding="15px 10px">
                            <Drawer.Title>Links úteis</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body padding="0">
                            <HStack padding="15px 30px" justifyContent="space-between" bgGradient="to-r" gradientFrom="suas.orange" gradientTo="suas.yellow" borderTop="4px solid #ccc" borderBottom="4px solid #ccc">
                                {iconsPaths.map((item) => (
                                    <HeaderIcon iconSize={iconSize} destinationPath={item.destinationPath} imagePath={item.imagePath} />
                                ))}
                            </HStack>
                            {navbarPaths.map((item) => (
                                <Box w="100%" padding="10px" borderBottom="2px solid #ccc" fontWeight="500" onClick={() => {navigate(`/${item.path}`); setOpen(false);}} _hover={{ bg: "suas.green.main", color: "white", cursor: "pointer" }}>
                                    <Text>{item.label}</Text>
                                </Box>
                            ))} 
                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
};

export default HeaderDrawer;
