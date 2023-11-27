// App.tsx
import React from 'react';
import AccordionWithDropdown from './AccordionWithDropdown';
import { ChakraProvider } from '@chakra-ui/react';


const App: React.FC = () => {
  return (
    <ChakraProvider>
      <AccordionWithDropdown />
    </ChakraProvider>
  );
};

export default App;
