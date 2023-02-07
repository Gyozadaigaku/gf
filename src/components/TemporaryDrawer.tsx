import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Menulcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";

const TemporaryDrawer = ({ variant, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container justifyContent="flex-start" alignItems="center">
      <Grid item>
        <Drawer
          anchor={variant}
          {...props}
          open={open}
          onClose={() => setOpen(false)}
        >
          <List>
            <ListItem button onClick={() => setOpen(false)}>
              <ListItemText>
                <Link href={""}>Home</Link>
              </ListItemText>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ListItemText>
                <Link href={""}>About Us</Link>
              </ListItemText>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ListItemText>
                <Link href={""}>Contact Us</Link>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Grid>

      <IconButton>
        <Menulcon onClick={() => setOpen(!open)} />
      </IconButton>
    </Grid>
  );
};

export default TemporaryDrawer;
