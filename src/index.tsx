import React from "react";
import { Box, render, Text, useInput } from "ink";
import { exit } from "node:process";

const App = () => {
  const [text, setText] = React.useState<string>("");

  useInput((input, key) => {
    if (key.return) {
      console.log(input);
      exit();
    }
    if (key.backspace) {
      if (key.ctrl) {
        setText("");
        return;
      }
      setText(text.slice(0, -1));
      return;
    }
    setText(text + input);
  });

  return (
    <Box flexDirection="column">
      <Text>Input some text with IME and press [Enter] to exit:</Text>
      <Box borderStyle="single" borderColor="green" minHeight={3}>
        <Text>{text}</Text>
      </Box>
    </Box>
  );
};

render(<App />);
