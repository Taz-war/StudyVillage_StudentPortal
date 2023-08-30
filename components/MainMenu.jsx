import {
    Box,
    Button,
    Drawer,
    Grid,
    IconButton,
    Typography,
    useMediaQuery,
  } from "@mui/material";
  import React, { useContext } from "react";
  // import { Link } from "react-router-dom";
  import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
  import Link from "next/link";
//   import { signOut, useSession } from "next-auth/client";
//   import Cookies from "js-cookie";
  import { useEffect } from "react";
  
  const MainMenu = ({ open, setOpen }) => {
    // const [session, loading] = useSession();
  
    // useEffect(() => {
    //   // Remove those data from cookies which u saved in the cookies at the time of password reset
    //   Cookies.get("name") && Cookies.remove("name", { path: "" });
    //   Cookies.get("user_email") && Cookies.remove("user_email", { path: "" });
    //   Cookies.get("remember") && Cookies.remove("remember", { path: "" });
    //   Cookies.get("record_id") && Cookies.remove("record_id", { path: "" });
    // }, []);
  
    // let time;
  
    // useEffect(() => {
    //   if (!!session && session.credentials) {
    //     time = setInterval(async () => {
    //       Cookies.set("expiredTime", Date.now() + 2 * 10000);
    //     }, 1000);
    //   }
    // }, [!!session]);
    // const {open,setOpen} = useContext(State)
    // const router = useRouter();
    // console.log({ router });
    let anchor = "";
    const matches = useMediaQuery("(min-width:900px)");
    if (matches === true) {
      anchor = "top";
    } else {
      anchor = "left";
    }
    return (
      <Drawer
        anchor={anchor}
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          height: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
          // backgroundColor: "red",
          position: "relative",
          zIndex: 222222,
        }}
      >
        <Box
          sx={{ width: { xs: 250, sm: 300, md: "100%", lg: "100%" },backgroundColor:'#C5D512' }}
          height={'100%'}
          display={"flex"}
        >
          <Grid
            container
            columns={12}
            mt={2}
            sx={{ width: { lg: "95%", md: "95%", sm: "90%", xs: "89%" } }}
          >
            <Grid item lg={6} xs={0} md={0} sm={0}></Grid>
            <Grid item lg={3} xs={0} sm={0} md={6} pl={2}>
              {/* <h6 style={{ fontStyle: "italic",fontWeight:'bolder' }}><b> ACTIONS</b></h6>
              <Link href={"/student_application"}>
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Student Applications
                </span>
              </Link>
              <br></br>
              <Link href="">
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  Start a SV campaign
                </span>
              </Link>
              <br></br>
              <Link href="">
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Submit Student lead
                </span>
              </Link>
              <br></br>
              <Link href="">
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "grey",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Enrol a student in Destination Prep
                </span>
              </Link>
              <br></br>
              <Link href="">
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "grey",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  Book a individual counselling session
                </span>
              </Link>
              <br></br>
              <Link href={""}>
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "grey",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  Contact us
                </span>
              </Link>
              <br />
              <br /> */}
            </Grid>
            <Grid item lg={3} xs={12} sm={12} md={6} pl={2}>
              {/* <h6 style={{ fontStyle: "italic",fontWeight:'bolder' }}><b> RESOURCES</b></h6> */}
              <Link href="/Hello_Brian">
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  Complete an action
                </span>
              </Link>
              <br></br>
              <Link href={"/Your_Programs"}>
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  Your Program information
                </span>
              </Link>
              <br></br>
              <Link href={"/Student_supporter"}>
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  About your student supporter
                </span>
              </Link>
              <br></br>
  
              <Link href={"/Module_outline"}>
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Access your module outlines
                </span>
              </Link>
              <br></br>
              <Link
                href={"/Your_profile"}
                onClick={() => setOpen(false)}
              >
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  View/update your profile
                </span>
              </Link>
              <br></br>
              <Link
                href={"/StudyVillage_explained"}
                onClick={() => setOpen(false)}
              >
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  StudyVillage explained
                </span>
              </Link>
              <br></br>
              <Link
                href={"/Contact_us"}
                onClick={() => setOpen(false)}
              >
                <span
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  Contact us
                </span>
              </Link>
              <br></br>
  
              {/* <Typography
                onClick={async () => {
                  if (session.credentials) {
                    clearInterval(time);
                    // Cookies.set("expiredTime", 0, { expires: 0 });
                    Cookies.remove("expiredTime", { path: "" });
                  }
                  await signOut();
                }}
              >
                <span
                  style={{
                    textDecoration: "none",
                    color: "black",
                    lineHeight: 1.8,
                    cursor: "pointer",
                  }}
                >
                  Sign out
                </span>
              </Typography> */}
  
              
              <br></br>
            </Grid>
          </Grid>
          <Box
            textAlign={"right"}
            sx={{ width: { lg: "5%", md: "5%", sm: "10%", xs: "11%" } }}
            p={0}
          >
            <IconButton
              disableRipple
              onClick={() => {

                setOpen(false);
              }}
              sx={{ pr: "3px", p: 0 }}
            >
              <ClearOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    );
  };
  
  export default MainMenu;
  