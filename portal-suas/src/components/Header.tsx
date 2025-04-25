import { Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import HeaderIcon from "./HeaderIcon";

const boxWidth = "100vw";
const paddingH = "10vw";

const Header = () => (
    <VStack>
        <HStack bg="white" w={boxWidth} h="100px" padding={`0 ${paddingH}`}>
            <Image src="SUAS_Logo.png" />
        </HStack>
        <HStack bg="suas.green.main" w={boxWidth} h="69px" padding={`0 ${paddingH}`} justifyContent="space-between">
            <HStack>
                {[
                    { label: "COPAS", path: "#" },
                    { label: "VIGSA/CAD ÚNICO", path: "#" },
                    { label: "FEAS", path: "#" },
                    { label: "PSB", path: "#" },
                    { label: "PSE", path: "#" },
                    { label: "GTEP", path: "#" },
                    { label: "APOIO TÉCNICO", path: "#" },
                    { label: "CEAS", path: "#" },
                    { label: "CIB", path: "#" },
                ].map((item, index) => (
                    <Flex key={item.path} align="center">
                        {index !== 0 && <Text color="white" mx={2}>|</Text>}
                        <Link as={NavLink} href={item.path} mx={2} fontWeight="medium" color="white">
                            {item.label}
                        </Link>
                    </Flex>
                ))}
            </HStack>
            <HStack>
                <HeaderIcon destinationPath="#" imagePath="search_icon.png" />
                <HeaderIcon destinationPath="#" imagePath="dark_mode_icon.png" />
                <HeaderIcon destinationPath="#" imagePath="profile_icon.png" />
            </HStack>
        </HStack>
    </VStack>
);

export default Header;
