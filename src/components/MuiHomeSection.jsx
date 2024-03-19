import { Box } from "@mui/material";
import React from "react";
import MuiHomeSectionQuote from "./MuiHomeSectionQuote";
import MuiHomeSectionBody from "./MuiHomeSectionBody";

function MuiHomeSection() {
  return (
    <Box>
      <MuiHomeSectionQuote />
      <MuiHomeSectionBody />
    </Box>
  );
}

export default MuiHomeSection;
