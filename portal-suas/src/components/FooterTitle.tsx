import { Text } from "@chakra-ui/react";

interface FooterTitleProps {
    content: string;
}

const FooterTitle = ({content}: FooterTitleProps) => (
    <Text marginBottom="16px" fontSize="32px" fontWeight="700" color="white">{content}</Text>
);

export default FooterTitle;