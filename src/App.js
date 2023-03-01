import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Add from "./Components/Add";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
