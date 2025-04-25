import { Image, Link } from "@chakra-ui/react";

interface HeaderIconProps {
    iconSize: number;
    destinationPath: string;
    imagePath: string;
}

const HeaderIcon = ({ iconSize, destinationPath, imagePath }: HeaderIconProps) => (
    <Link href={destinationPath}>
        <Image width={`${iconSize}px`} height={`${iconSize}px`} src={imagePath} />
    </Link>
);

export default HeaderIcon;
