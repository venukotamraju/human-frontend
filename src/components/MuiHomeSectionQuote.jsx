import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

function MuiHomeSectionQuote() {
  return (
    <Box borderBottom={"solid"} borderColor={"primary.main"} p={3}>
      <Card>
        <CardHeader titleTypographyProps={{textAlign:"center",letterSpacing:1}}  title="Author's Quote" />
        <CardContent>
          <Typography fontWeight={600} letterSpacing={1} textAlign={"center"} fontSize={"large"}>
            <Typography component={"span"} color={"secondary.main"}  fontSize={"x-large"}>Y</Typography>ou are not remembered by how your life was spent rather by what you
            leave behind - your legacy and so you will still live on even after
            you die, you will still live on...
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MuiHomeSectionQuote;
