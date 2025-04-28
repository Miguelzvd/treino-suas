import { Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import HeaderIcon from "./HeaderIcon";
import iconsPaths from "../assets/headerIconsPaths.json";
import navbarPaths from "../assets/headerNavbarPaths.json";

const boxWidth = "100vw";
const paddingH = "10vw";

const iconSize = 33;

const Header = () => (
    <VStack>
        <HStack w={boxWidth} h="100px" padding={`0 ${paddingH}`} bg="white">
            <Link href="#">
                <Image src="SUAS_Logo.png" />
            </Link>
        </HStack>
        <HStack h="69px" padding={`0 ${paddingH}`} justifyContent="space-between" bg="suas.green.main" w={boxWidth}>
            <HStack>
                {navbarPaths.map((item, index) => (
                    <Flex key={item.path} align="center">
                        {index !== 0 && <Text color="white" mx={2}>|</Text>}
                        <Link as={NavLink} href={item.path} mx={2} fontWeight="medium" color="white">
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
        </HStack>
    </VStack>
);

export default Header;
