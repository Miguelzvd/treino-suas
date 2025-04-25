import { Box, Text } from "@chakra-ui/react";

const boxWidth = "70vw";
const boxHeight = "25px";

const Home = () => (
    <Box margin="0 auto">
        <Text>Teste de cores:</Text>
        <Box w={boxWidth} h={boxHeight} bg="suas.green.main"></Box>
        <Box w={boxWidth} h={boxHeight} bg="suas.orange"></Box>
        <Box w={boxWidth} h={boxHeight} bg="suas.yellow"></Box>
        <Text>{`Teste (gradiente):`}</Text>
        <Box w={boxWidth} h={boxHeight} bgGradient="to-r" gradientFrom="suas.green.gradient.darker" gradientTo="suas.green.gradient.lighter" />
        <Box w={boxWidth} h={boxHeight} bgGradient="to-r" gradientFrom="suas.orange" gradientTo="suas.yellow" />
    </Box>
);

export default Home;
