import { HStack, Image, Link, Text } from "@chakra-ui/react";

interface FooterContentLineProps {
    logoPath?: any;
    content: any;
}

const logoSize = 20;

const FooterContentLine = ({logoPath, content}: FooterContentLineProps) => (
    <HStack margin="2px 0">
        {logoPath && <Image w={`${logoSize}px`} h={`${logoSize}px`} src={logoPath} />}
        {content.link ? 
        <Link float="left" fontSize="16px" fontWeight="400" color="white" href={content.link} target="_blank">{content.name}</Link> : 
        <Text float="left" fontSize="16px" fontWeight="400" color="white">{content.name}</Text>}  
    </HStack>
);

export default FooterContentLine;