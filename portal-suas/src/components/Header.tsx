import { Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import HeaderDrawer from "./HeaderDrawer";
import HeaderIcon from "./HeaderIcon";
import iconsPaths from "../assets/headerIconsPaths.json";
import navbarPaths from "../assets/headerNavbarPaths.json";
import { useWindowWidth } from "../hooks/viewport/useWindowWidth";

const boxWidth = "100%";

const iconSize = 33;

const headerWidthLimit = 1300;

const paddingH = "10vw";

const Header = () => (
    <VStack>
        <HStack w={boxWidth} h="100px" padding={`0 ${paddingH}`} justifyContent="space-between" bg="white" borderBottom={useWindowWidth() <= headerWidthLimit ? `2px solid #d6d6d6` : `0`}>
            <Link href="#">
                <Image src="SUAS_Logo.png" />
            </Link>
            {useWindowWidth() <= headerWidthLimit && <HeaderDrawer iconSize={iconSize} />}
        </HStack>
        {useWindowWidth() > headerWidthLimit && <HStack w={boxWidth} h="69px" padding={`0 ${paddingH}`} justifyContent="space-between" bg="suas.green.main">
            <HStack>
                {navbarPaths.map((item, index) => (
                    <Flex key={item.path} align="center">
                        {index !== 0 && <Text fontWeight="600" color="white" mx={2}>|</Text>}
                        <Link as={NavLink} href={item.path} mx={2} fontWeight="600" color="white">
                            {item.label}
                        </Link>
                    </Flex>
                ))}
            </HStack>
            <HStack w={`${iconSize * 1.5 * iconsPaths.length}px`} justifyContent="space-between">
                {iconsPaths.map((item) => (
                    <HeaderIcon iconSize={iconSize} destinationPath={item.destinationPath} imagePath={item.imagePath} />
                ))}
            </HStack>
        </HStack>}
    </VStack>
);

export default Header;
