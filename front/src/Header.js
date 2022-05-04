import React from "react";
import { Tabs, Tab, Toolbar, AppBar, Box, Typography } from "@mui/material";
import { Link, matchPath, useLocation } from "react-router-dom";
import { UserMenu, Logout, LoadingIndicator } from "react-admin";

const Header = () => {
  const location = useLocation();

  let currentPath = "/";
  if (!!matchPath("/characters/*", location.pathname)) {
    currentPath = "/characters";
  } else if (!!matchPath("/categories/*", location.pathname)) {
    currentPath = "/categories";
  } else if (!!matchPath("/deals/*", location.pathname)) {
    currentPath = "/deals";
  }

  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Box flex={1} display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Box
                component="img"
                sx={{ marginRight: "1em", height: 30 }}
                src={
                  "./images/survey-corps.png"
                }
                alt="survey corps"
              />
              <Typography component="span" variant="h5">
                SNK Api
              </Typography>
            </Box>
            <Box>
              <Tabs
                value={currentPath}
                aria-label="Navigation Tabs"
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab label={"Dashboard"} component={Link} to="/" value="/" />
                <Tab
                  label={"Personnages"}
                  component={Link}
                  to="/characters"
                  value="/characters"
                />
                <Tab
                  label={"Categories"}
                  component={Link}
                  to="/categories"
                  value="/categories"
                />
                {/* <Tab
                  label={"Deals"}
                  component={Link}
                  to="/deals"
                  value="/deals"
                /> */}
              </Tabs>
            </Box>
            <Box display="flex">
              <LoadingIndicator
                sx={{
                  "& .RaLoadingIndicator-loader": {
                    marginTop: 2,
                  },
                }}
              />
              <UserMenu>
                <Logout />
              </UserMenu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
