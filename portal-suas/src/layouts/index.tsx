import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => (
    <Box minH="100vh" display="flex" flexDirection="column" justifyContent="space-between" >
        <Header />
        <Outlet />
        <Footer />
    </Box>
);

export default Layout;