import React, { ReactElement, FC } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import * as userApi from "../../api/modules/users"

const Registration: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
              '& .MuiTextField-root': { m: 1, width: '25ch' },
              '& button': { m: 1 }
      }}
    >
          <Typography variant="h3">Registration</Typography>
          <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Name"
              InputProps={{
                  readOnly: true,
              }}
          />
          <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Job"
              InputProps={{
                  readOnly: true,
              }}
          />
          <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="E-mail"
              InputProps={{
                  readOnly: true,
              }}
          />
          <Button variant="contained" size="small"
              onClick={async () => { alert(await userApi.createClient()) }}>Create Client</Button>

          <Button variant="contained" size="small"
              onClick={async () => { alert(await userApi.updateClient()) }}>Update Client</Button>
    </Box>
  );
};

export default Registration;