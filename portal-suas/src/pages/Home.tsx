import { Box, Text } from "@chakra-ui/react";

const boxWidth = "70vw";
const boxHeight = "25px";

const Home = () => (
    <Box margin="0 auto">
        <Text>Teste de cores:</Text>
        <Box w={boxWidth} h={boxHeight} bg="suas.green.main"></Box>
        <Box w={boxWidth} h={boxHeight} bg="suas.green.logotype"></Box>
        <Box w={boxWidth} h={boxHeight} bg="suas.orange"></Box>
        <Box w={boxWidth} h={boxHeight} bg="suas.yellow"></Box>
        <Box w={boxWidth} h={boxHeight} bgGradient="linear(to-l, suas.green.gradient.darker, suas.green.gradient.lighter)"></Box> {/* Tentei usar degradê aqui, mas não funcionou. */}
    </Box>
);

export default Home;
