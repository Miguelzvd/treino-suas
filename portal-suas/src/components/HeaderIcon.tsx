import { Image, Link } from "@chakra-ui/react";

interface HeaderIconProps {
    destinationPath: string;
    imagePath: string;
}

const HeaderIcon = ({ destinationPath, imagePath }: HeaderIconProps) => (
    <Link href={destinationPath}>
        <Image width="33px" height="33px" marginLeft="15px" src={imagePath} />
    </Link>
);

export default HeaderIcon;
