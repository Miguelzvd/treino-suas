import { Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import HeaderIcon from "./HeaderIcon";

const boxWidth = "100vw";
const paddingH = "10vw";

const iconSize = 33;

const navbarPaths = [
    { label: "COPAS", path: "#" },
    { label: "VIGSA/CAD ÚNICO", path: "#" },
    { label: "FEAS", path: "#" },
    { label: "PSB", path: "#" },
    { label: "PSE", path: "#" },
    { label: "GTEP", path: "#" },
    { label: "APOIO TÉCNICO", path: "#" },
    { label: "CEAS", path: "#" },
    { label: "CIB", path: "#" },
];

const iconsPaths = [
    { destinationPath: "#", imagePath: "search_icon.png" },
    { destinationPath: "#", imagePath: "contrast_icon.png" },
    { destinationPath: "#", imagePath: "profile_icon.png" },
];

const Header = () => (
    <VStack>
        <HStack bg="white" w={boxWidth} h="100px" padding={`0 ${paddingH}`}>
            <Link href="#">
                <Image src="SUAS_Logo.png" />
            </Link>
        </HStack>
        <HStack bg="suas.green.main" w={boxWidth} h="69px" padding={`0 ${paddingH}`} justifyContent="space-between">
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
