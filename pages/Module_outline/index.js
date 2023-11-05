import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Link from "next/link";

import React from "react";
import { useContext } from "react";
import Image from "next/image";

import MainMenu from "../../components/MainMenu";
import { StateContex } from "../Context/StateProvider";

const Module_outlines = () => {
  const { open, setOpen } = useContext(StateContex);

  return (
    <Box
      height="100%"
      // minWidth={"420px"}
      overflow="hidden"
      position="relative"
      sx={{ backgroundColor: "#121F28", pb: { sm: 10, xs: 25 } }}
    >
      <Box sx={{ backgroundColor: "#121F28" }} height="35vh">
        <Grid container columns={12} zIndex={1}>
          <Grid
            item
            lg={7}
            md={6}
            sm={5}
            xs={5}
            textAlign="left"
            p={5}
            pl={2}
            pt={{ lg: 3, md: 3, sm: 0, xs: 3 }}
          >
            <Link href="/HomePage">
              <Image
                src="https://i.ibb.co/SBgmb10/Study-Village-Logo.png"
                alt=""
                width={200}
                height={200}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Grid>
          <Grid item lg={2} md={2} xs={3} pt={{ sm: 6, xs: 4 }}>
            <Typography
              // variant={{ lg: "h1", md: "h1", sm: "h4", xs: "h4" }}
              fontSize={{ sm: "23px", xs: "15px" }}
              color="white"
              fontStyle="italic"
              fontWeight="bolder"
            >
              Brian Lara <br />
            </Typography>
            <Typography
              variant="p"
              color="#C5D512"
              fontStyle="italic"
              fontWeight="bolder"
              fontSize={{
                lg: "20px",
                md: "15px",
                sm: "15px",
                xs: "12px",
              }}
            >
              La Trobe University <br /> #6789
            </Typography>
          </Grid>
          <Grid
            item
            lg={1}
            md={2}
            sm={2}
            xs={2}
            pt={3}
            mt={1}
            textAlign="center"
          >
            <Box width="100%" textAlign="center">
              <Image
                src="https://i.ibb.co/bQF1RLb/Brian-Lara-Avatar-I-1.png"
                alt=""
                width={150}
                height={150}
              />
            </Box>
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            sm={2}
            xs={2}
            textAlign="center"
            sx={{
              p: { xs: 0, sm: 0, md: 1, lg: 1 },
              pt: { lg: 4, md: 4, sm: 2, xs: 1 },
            }}
          >
            <IconButton onClick={() => setOpen(true)} disableRipple>
              <MenuRoundedIcon
                sx={{
                  color: "#C5D512",
                  height: "100px",
                  width: { xs: "55px", sm: "70px", md: "100px" },
                }}
              />
            </IconButton>
            <MainMenu open={open} setOpen={setOpen} />
          </Grid>
        </Grid>
      </Box>
      <Box width="100%" sx={{ backgroundColor: "#121F28" }} m={0} pb={9}>
        <h2
          style={{
            color: "white",
            margin: 0,
            textAlign: "left",
            marginLeft: 30,
            borderBottom: "1px solid #C5D512",
            paddingBottom: 20,
            marginRight: 30,
          }}
        >
          <i>Your Module Outlines</i>
        </h2>
        <Grid container columns={12}>
          <Grid
            item
            lg={7}
            md={7}
            sm={12}
            xs={12}
            mt={7}
            ml={{ md: 5, xs: 2 }}
            pr={{ md: 0, xs: 2 }}
            textAlign="center"
          >
            <Grid container columns={12} columnSpacing={2}>
              <Grid item lg={1} md={2} sm={2} xs={2}>
                <Image
                  src="https://i.ibb.co/BTG2nT5/Settlingtab.png"
                  width={80}
                  height={120}
                  alt=""
                />
              </Grid>
              <Grid item lg={1} md={2} sm={2} xs={2}>
                <Image
                  src="https://i.ibb.co/GnSrb2Y/cstab.png"
                  width={80}
                  height={120}
                  alt=""
                />
              </Grid>
              <Grid item lg={1} md={2} sm={2} xs={2}>
                <Image
                  src="https://i.ibb.co/D4PZJt4/tptab.png"
                  width={80}
                  height={120}
                  alt=""
                />
              </Grid>
              <Grid item lg={1} md={2} sm={2} xs={2}>
                <Image
                  src="https://i.ibb.co/ZJSqyxq/gstab.png"
                  width={80}
                  height={120}
                  alt=""
                />
              </Grid>
              <Grid item lg={1} md={2} sm={2} xs={2}>
                <Image
                  src="https://i.ibb.co/h84ypn4/accelbtab.png"
                  width={80}
                  height={120}
                  alt=""
                />
              </Grid>
            </Grid>

            <Typography
              color="white"
              fontSize="medium"
              textAlign={"left"}
              mt={4}
            >
              <b>
                Coming once a semester, your StudyVillage Outline is a
                snapshot of how you're tracking in your studies and life abroad.
              </b>
              <br />
              <br />
              Module content varies according to what stage of your studies
              you're at. These differences are detailed in each module video,
              available here in the <b style={{fontWeight:'bolder'}}>Your Program</b> section of this website. Each
              module outline combines your survey information, goal tracking (if
              you're at that stage) and some dialog from your student supporter.
              Together, this information is an invaluable record of progress, or
              alert to address areas of concern. Modules are emailed to you, and
              your parent/guardian, if you've agreed to it. Used effectively,
              this is a key part of the StudyVillage program, providing you
              great support and inspiration but a fantastic platform for success
            </Typography>
            <br/>
            
            <Typography variant="h6" textAlign={"left"}>Completed Outlines for (Student Name)</Typography>

            <Box>
              
              <Grid
                container
                columns={12}
                columnSpacing={{ sm: 2, xs: 0.5 }}
                mt={2}
                maxWidth="500px"
                width={{ sm: "100%", xs: "70%" }}
              >
                <Grid
                  item
                  sm={6}
                  xs={12}
                  display="flex"
                  // justifyContent={"space-around"}
                  mt={2}
                >
                  <Image
                    src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                    alt=""
                    height={50}
                    width={50}
                  />
                  <Link
                    href="#"
                    fontSize={{ lg: "large", md: "medium" }}
                    sx={{ color: "#C5D512", ml: 2 }}
                  >
                    <span style={{ color: "#C5D512", textAlign: "left" }}>
                      <b>BLara_8932689 Settling_In</b>
                    </span>
                  </Link>
                </Grid>
                <Grid
                  item
                  sm={6}
                  xs={12}
                  display={"flex"}
                  // justifyContent={"space-around"}
                  mt={2}
                >
                  <Image
                    src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                    alt=""
                    height={50}
                    width={50}
                  />
                  <Link
                    href="#"
                    fontSize={{ lg: "large", md: "medium" }}
                    sx={{ color: "#C5D512", ml: 2 }}
                  >
                    <span style={{ color: "#C5D512", textAlign: "left" }}>
                      <b>BLara_8932689 Tracking_Progress</b>
                    </span>
                  </Link>
                </Grid>
                {/* <Grid item sm={6} xs={0}></Grid> */}
              </Grid>
              <Grid
                container
                columns={12}
                columnSpacing={{ sm: 2, xs: 0.5 }}
                mt={2}
                maxWidth="500px"
                width={{ sm: "100%", xs: "70%" }}
              >
                <Grid
                  item
                  sm={6}
                  xs={12}
                  display="flex"
                  // justifyContent={'space-around'}
                  mt={2}
                >
                  <Image
                    src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                    alt=""
                    height={50}
                    width={50}
                  />
                  <Link
                    href="#"
                    fontSize={{ lg: "large", md: "medium" }}
                    sx={{ color: "#C5D512", ml: 2 }}
                  >
                    <span style={{ color: "#C5D512", textAlign: "left" }}>
                      <b>BLara_8932689 Consolidating Studies</b>
                    </span>
                  </Link>
                </Grid>
                <Grid
                  item
                  sm={6}
                  xs={12}
                  display="flex"
                  // justifyContent={"space-around"}
                  mt={2}
                >
                  <Image
                    src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                    alt=""
                    height={50}
                    width={50}
                  />
                  <Link
                    href="#"
                    fontSize={{ lg: "large", md: "medium" }}
                    sx={{ color: "#C5D512", ml: 2 }}
                  >
                    <span style={{ color: "#C5D512", textAlign: "left" }}>
                      <b>BLara_8932689 Goal_setting</b>
                    </span>
                  </Link>
                </Grid>
                {/* <Grid item sm={6} xs={0}></Grid> */}
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            textAlign="center"
            mt={3}
          ></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Module_outlines;
