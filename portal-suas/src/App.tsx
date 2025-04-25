import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes';
import { system } from './theme';

const App = () => (
    <BrowserRouter>
        <ChakraProvider value={system}>
            <Routes />
        </ChakraProvider>
    </BrowserRouter>
);

export default App;
