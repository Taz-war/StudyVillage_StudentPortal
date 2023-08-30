import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import MainMenu from "../../components/MainMenu";
import { StateContex } from "../Context/StateProvider";
import { useState } from "react";
import { useContext } from "react";
// import { Link } from "react-router-dom";
//   import Link from "next/link";
import Image from "next/image";


const StudyVillage_explained = () => {
  const { open, setOpen } = useContext(StateContex);
  // const [inputField, setInputFeild] = useState(datas);

  return (
    <Box
      sx={{
        backgroundColor: "#121F28",
        //   height: "100%",
        overflowY: "hidden",
        pb: 30,
      }}
    >
      <Box sx={{ backgroundColor: "#121F28" }} height={"20vh"}>
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
            pt={{ lg: 3, md: 3, sm: 0, xs: 3 }}
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
        </Grid>
      </Box>
      <Box sx={{ p: { xs: 2, sm: 8, md: 8 }, pl: { md: 5, xs: 2 } }}>
        <h2 style={{ borderBottom: "1px solid #C5D512", paddingBottom: 20 }}>
          <i style={{ color: "white" }}>StudyVillage Explained</i>
        </h2>
        {/* <hr style={{ border: "1px solid #C5D512", marginTop: "25px" }} /> */}
        <Box maxWidth={"850px"}>
          <Typography variant="p" color={"white"}>
            The videos below explain the key parts of a StudyVillage Program.
            Together with the Module explanations, in the Your Program section,
            they give you a complete picture of what to look forward to. For
            those wanting the more detail, check out the complete written PDF
            guide below.
          </Typography>
        </Box>
        <Grid
          container
          maxWidth={"1150px"}
          columns={12}
          columnSpacing={5}
          mt={5}
        >
          <Grid item md={4} sm={6} xs={12} mb={3}>
            <Image src={"https://i.ibb.co/7jMjmBB/overviewpc.png"} alt="" width={343} height={197}/>
          </Grid>
          <Grid item md={4} sm={6} xs={12} mb={3}>
            <Image src={"https://i.ibb.co/vhvJCPh/openhourspc.png"} alt="" width={343} height={197}/>
          </Grid>
          <Grid item md={4} sm={6} xs={12} mb={3}>
            <Image src={"https://i.ibb.co/ccz95SM/surveyspc.png"} alt="" width={343} height={197}/>
          </Grid>
          <Grid item md={4} sm={6} xs={12} mb={3}>
            <Image src={'https://i.ibb.co/7j5TLLL/sspc.png'} alt="" width={343} height={197}/>
          </Grid>
          <Grid item md={4} sm={6} xs={12} mb={3}>
            <Image src={'https://i.ibb.co/vzvw2Tb/connectpc.png'} alt="" width={343} height={197}/>
          </Grid>
          <Grid item md={4} sm={6} xs={12} mb={3}>
            <Box width={"100%"} height={"50%"} textAlign={"center"}>
              <Image src={'https://i.ibb.co/NKYLY9m/biblepc.png'} alt="" width={180} height={100} />
            </Box>
            <Box
              width={"100%"}
              height={"50%"}
              textAlign={"center"}
              justifyContent={"space-evenly"}
              pt={4}
            >
              <Image src={'https://i.ibb.co/689T5CC/pdficon.png'} alt="" height={50} width={50} />
              <Link
                href="#"
                fontSize={{ lg: "large", md: "medium" }}
                sx={{ color: "#C5D512", ml: 2, top: 0 }}
              >
                <span style={{ color: "#C5D512", textAlign: "left" }}>
                  <b>Download Written Guide</b>
                </span>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default StudyVillage_explained;
