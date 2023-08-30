import {
  Box,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import MainMenu from "../../components/MainMenu";
import { useContext } from "react";
import { StateContex } from "../Context/StateProvider";
import Image from "next/image";

// import useTrackedStore from "../../store/useTrackedStore";
// import { getSession } from "next-auth/client";
// import * as cookie from "cookie";
// import axios from "axios";

const HomePage = () => {
  // console.log({ agentsResp });
  // const state = useTrackedStore();

  // state.setAgentsResp(agentsResp);
  // state.setPortalUserResp(portalUserResp);
  // state.setStudentsResp(studentsResp);
  // state.setCounsellorResp(counsellor);
  // const [open, setOpen] = useState(false);
  const { open, setOpen } = useContext(StateContex);

  const matches = useMediaQuery("(max-height:963px)");
  return (
    <Box sx={{ overflow: "hidden", bgcolor: "#121F28" }}>
      <Box
        className="bg"
        sx={{
          // backgroundImage: `url(${sydney})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        height={matches === true ? "51svh" : "68svh"}
        // height={'50vh'}
      >
        <Grid container columns={12} zIndex={1}>
          <Grid
            item
            lg={7}
            md={6}
            sm={5}
            xs={5}
            textAlign={"left"}
            p={5}
            pl={2}
            pt={{ lg: 5, md: 3, sm: 0, xs: 3 }}
          >
            <Link href={"/HomePage"}>
              <Image
                src={'https://i.ibb.co/SBgmb10/Study-Village-Logo.png'}
                alt=""
                width={200}
                height={200}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Grid>
          <Grid item lg={2} md={2} xs={3} pt={{sm:6,xs:4}} >
            <Typography
              // variant={{ lg: "h1", md: "h1", sm: "h4", xs: "h4" }}
              fontSize={{sm:'23px',xs:'15px'}}
              color={"white"} fontStyle={'italic'}
              fontWeight={'bolder'}
            >
                Brian Lara <br />
            </Typography>
            <Typography
              variant="p"
              color={"#C5D512"}
              fontStyle={'italic'}
              fontWeight={'bolder'}
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
          <Grid item lg={1} md={2} sm={2} xs={2} pt={3} mt={1} textAlign={"center"}>
            <Box
              width={"100%"}
              textAlign={"center"}
            >
              <Image src={'https://i.ibb.co/bQF1RLb/Brian-Lara-Avatar-I-1.png'} alt="" width={150} height={150} />
            </Box>
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            sm={2}
            xs={2}
            textAlign={"center"}
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

          <Grid item xs={12} p={5} pt={0}>
            <Typography variant="h5" color={"white"}>
              <b>
                {" "}
                <i>Student Portal</i>
              </b>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        pb={9.5}
        sx={{ backgroundColor: "#121F28", borderTop: "1px solid #C5D512" }}
      >
        <Box
          textAlign={"center"}
          height={"40px"}
          width={"250px"}
          border={"1px solid skyblue"}
          borderRadius={2.5}
          color={"white"}
          justifyContent={"center"}
          margin={"0 auto"}
          mt={2}
          pt={1}
          pb={0.5}
        >
          <Typography fontStyle={"italic"}>
            {" "}
            <b> WHAT DO YOU WANT TO DO?</b>
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          width={"100%"}
          justifyContent={"space-evenly"}
          mt={4}
          // p={2}
        >
          <Box
            // width={"30%"}
            height="183px"
            sx={{
              backgroundColor: "#121F28",
              color: "white",
              border: "1px solid #C5D512",
              width: { xs: "274px" },
              mb: 8,
              p: 0,
            }}
          >
            <Image
              src={'https://i.ibb.co/mhkLB0j/Brian-Lara-Avatar-I-3.png'}
              alt="s1"
              // fill
              // objectFit="contain"
              width={272}
              height={181}
              className="homeImg"
            />

            <Typography
              textAlign={"center"}
              color={"white"}
              fontWeight={"50px"}
              fontSize={"large"}
              fontStyle={"italic"}
            >
              <b>COMPLETE AN ACTION</b>
            </Typography>
          </Box>
          <Box
            // width={"30%"}
            height={"182px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid #C5D512",
              width: { xs: "274px" },
              position: "relative",
              // height: { xs: "200px", sm: "200px", md: "220px", lg: "260px" },
              mb: 8,
              p: 0,
            }}
          >
            <Image
              src={"https://i.ibb.co/RTdBNp2/Study-Village-image-4.png"}
              alt="s1"
              className="homeImg"
              width={272}
              height={180}
            />

            <Typography
              textAlign={"center"}
              color={"white"}
              fontWeight={"50px"}
              fontSize={"large"}
              fontStyle={"italic"}
            >
              <b>ACCESS YOUR PROGRAM INFO</b>
            </Typography>
          </Box>
          <Box
            // width={"30%"}
            height={"182px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid #C5D512",
              width: { xs: "274px" },
              // height: { xs: "200px", sm: "200px", md: "180px", lg: "260px" },
              mb: 8,
              p: 0,
            }}
          >
            <Box width={"100%"} height={"180px"}>
              <Image
                src={"https://i.ibb.co/kKsScdb/Study-Village-image-3.png"}
                alt="s1"
                objectFit="fill"
                className="homeImg"
                width={272}
              height={180}
              />
            </Box>
            <Typography
              textAlign={"center"}
              color={"white"}
              fontWeight={"50px"}
              fontSize={"large"}
              fontStyle={"italic"}
              mt={1}
            >
              <b> LEARN ABOUT SV PROGRAMS</b>
            </Typography>
          </Box>

          <Box
            // width={"30%"}
            height={"182px"}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid #C5D512",
              width: { xs: "274px" },
              // height: { xs: "200px", sm: "200px", md: "180px", lg: "260px" },
              mb: 8,
              p: 0,
            }}
          >
            <Box width={"100%"} height={"180px"} position={"relative"}>
              <Image
                src={'https://i.ibb.co/T4WGFpG/Study-Village-image-1.png'}
                alt="s1"
                objectFit="fill"
                className="homeImg"
                width={272}
              height={180}
              />
            </Box>
            <Typography
              textAlign={"center"}
              color={"white"}
              fontWeight={"30px"}
              fontSize={"large"}
              fontStyle={"italic"}
              mt={1}
            >
              <b>REQUEST A OPEN HOURS CALL</b>
            </Typography>
          </Box>
          {/* </Box> */}
        </Box>
      </Box>
      <Box
        sx={{ backgroundColor: "#C5D512", display: "flex", flexWrap: "wrap" }}
        pb={3}
      >
        <Box
          pt={3}
          display={"flex"}
          flexWrap={"wrap"}
          sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" } }}
          textAlign={{ xs: "center", md: "left" }}
          justifyContent={{ xs: "center" }}
        >
          <Image src={'https://i.ibb.co/MCwZSf6/phoneicon-transformed.png'} alt="" width={60} height={60} />
          <Typography
            textAlign={{ md: "left", xs: "center" }}
            ml={3}
            mt={1.8}
            color={"black"}
            fontSize={"large"}
          >
            <b>(+613) 703 603 47</b>
          </Typography>
        </Box>
        <Box
          textAlign={{ xs: "center", md: "center" }}
          justifyContent={"space-around"}
          pt={3}
          sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" } }}
        >
          <Link m={2}>
            <Image src={'https://i.ibb.co/3RzkScZ/youtubeicon-transformed.png'} width={50} height={50} alt=""/>
          </Link>
          <Link m={2}>
            <Image src={'https://i.ibb.co/BLspTkg/linkedicon-transformed.png'} height={50} width={50} alt=""/>
          </Link>
          <Link m={2}>
            <Image src={'https://i.ibb.co/98rHhrp/FBicon-transformed.png'} height={50} width={50} alt=""/>
          </Link>
          <Link m={2}>
            <Image src={'https://i.ibb.co/kqdMcG4/mailicon-transformed.png'} width={50} height={50} alt=""/>
          </Link>
          <Link m={2} mt={3}>
            <Image src={'https://i.ibb.co/s18RRrR/6488f4e4-5889-49d8-a841-3577c20639c7.png'} width={60} height={45} alt=""/>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

// export async function getServerSideProps(context) {
//   // const session = await getSession(context);

//   // console.log({ sessionData: session });

//   // const parsedCookies = cookie.parse(context.req.headers.cookie || "");

//   // if seesion not found then navigate him to the login
//   // if (!session) {
//   //   return {
//   //     redirect: {
//   //       destination: "/login",
//   //     },
//   //     props: {
//   //       session: null,
//   //     },
//   //   };
//   // }

//   // when user sign in using credential provider and uncheck the remember option
//   if (session && session.remember === false) {
//     // when the user signin first time, remember variable in cookie will be empty but session variable will contain exp thats why we have to check it first
//     let expired = Date.now() > (parsedCookies.expiredTime ?? session.exp);

//     if (expired) {
//       //remove remember from cookie
//       if (parsedCookies.expiredTime) {
//         context.res.setHeader(
//           "Set-Cookie",
//           cookie.serialize("expiredTime", String(parsedCookies.expiredTime), {
//             httpOnly: true,
//             maxAge: 0,
//           })
//         );
//       }
//       return {
//         redirect: {
//           destination: "/login",
//         },
//         props: {
//           session: null,
//         },
//       };
//     }
//   }
//   return {
//     props: {
//       data: true,
//     },
//   };
// }
