import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => (
    <Box w="100%" minH="100vh" display="flex" flexDirection="column" justifyContent="space-between">
        <Header />
        <Outlet />
        <Box display={{ base: "none", md: "block", xl: "block" }}>
            <Footer />
        </Box>
    </Box>
);

export default Layout;
