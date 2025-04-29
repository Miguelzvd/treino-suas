import { Box, Flex, HStack, Image, VStack } from "@chakra-ui/react";
import FooterContentColumn from "./FooterContentColumn";
import FooterTitle from "./FooterTitle";
import communicationContent from "../assets/footerCommunicationContent.json";
import legislationContent from "../assets/footerLegislationContent.json";
import organizationsContent from "../assets/footerOrganizationsContent.json";
import { useWindowWidth } from "../hooks/viewport/useWindowWidth";

const Footer = () => (
    <HStack minH="440px" h="fit-content" padding="60px 5vw" justifyContent="space-between" alignItems="flex-start" bgGradient="to-r" gradientFrom="suas.green.gradient.darker" gradientTo="suas.green.gradient.lighter">
        <FooterContentColumn title="Comunicação" content={communicationContent} />
        <FooterContentColumn title="Legislação" content={legislationContent} />
        <Box display={{ base: "none", md: "none", lg: "block", xl: "block" }}>
            <VStack alignItems="flex-start">
                <FooterTitle content="Órgãos" />
                <Flex wrap="wrap">
                    {organizationsContent.map((item: any) => (
                        <Image w={`${item.width}px`} h={`${item.height}px`} margin="5px 25px" src={item.link} />
                    ))}
                </Flex>
            </VStack>
        </Box>
    </HStack>
);

export default Footer;
