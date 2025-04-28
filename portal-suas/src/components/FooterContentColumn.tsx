import { VStack } from "@chakra-ui/react";
import FooterContentLine from "./FooterContentLine";
import FooterTitle from "./FooterTitle";

interface FooterContentColumnProps {
    title: string;
    content: any;
}

const FooterContentColumn = ({ title, content }: FooterContentColumnProps) => (
    <VStack maxW="350px" alignItems="flex-start">
        <FooterTitle content={title} />
        {content.map((item: any) => (
            <FooterContentLine logoPath={item.logoPath} content={item.content} />
        ))}
    </VStack>
);

export default FooterContentColumn;