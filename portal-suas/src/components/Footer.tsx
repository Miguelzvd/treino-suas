import { HStack, Image, VStack } from "@chakra-ui/react";
import FooterContentColumn from "./FooterContentColumn";
import FooterTitle from "./FooterTitle";
import communicationContent from "../assets/footerCommunicationContent.json";
import legislationContent from "../assets/footerLegislationContent.json";
import organizationsContent from "../assets/footerOrganizationsContent.json";

const Footer = () => (
    <HStack h="440px" padding="60px 5vw" justifyContent="space-between" alignItems="flex-start" bgGradient="to-r" gradientFrom="suas.green.gradient.darker" gradientTo="suas.green.gradient.lighter">
        <FooterContentColumn title="Comunicação" content={communicationContent} />
        <FooterContentColumn title="Legislação" content={legislationContent} />
        <VStack alignItems="flex-start">
            <FooterTitle content="Órgãos" />
            <HStack>
                {organizationsContent.map((item: any) => (
                    <Image w={`${item.width}px`} h={`${item.height}px`} margin="auto 25px" src={item.link} />
                ))}
            </HStack>
        </VStack>
    </HStack>
);

export default Footer;
