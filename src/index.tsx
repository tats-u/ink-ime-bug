import React from "react";
import { Box, render, Text } from "ink";
import { TextInput } from "@inkjs/ui";
import { exit } from "node:process";

const App = () => {

  return (
    <Box flexDirection="column">
      <Text>Input some text with IME and press [Enter] to exit:</Text>
      <Box borderStyle="single" borderColor="green" minHeight={3}>
        <TextInput onSubmit={() => exit()} />
      </Box>
    </Box>
  );
};

render(<App />);
