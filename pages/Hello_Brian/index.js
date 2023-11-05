import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { useContext } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MainMenu from "../../components/MainMenu";
import { StateContex } from "../Context/StateProvider";
import { useState } from "react";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";


// import MABECSlogo from "../../public/student_assets/learning-assets/MABECSlogo.PNG";
// import useTrackedStore from "../../../store/useTrackedStore";

const Hello_Brian = () => {
  const {
    open,
    setOpen,
    marketingResource,
    setMarketingResource,
    learningResource,
    setLearningResource,
    destinationPrep,
    setDestinationPrep,
  } = useContext(StateContex);

  // const state = useTrackedStore();
  // console.log({ test: state?.studentsResp });
  // const [agentRecords, setAgentRecords] = useState(
  //   state?.agentsResp?.[0] || {}
  // );
  return (
    <Box
      minWidth={"420px"}
      width={"100%"}
      overflow={"hidden"}
      sx={{ backgroundColor: "#121F28" }}
    >
      <Box sx={{ backgroundColor: "#121F28" }} height={"32vh"}>
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

      {/* -------------------- */}

      <Box
        width={"100%"}
        // height={"65vh"}
        minWidth={"420px"}
        sx={{ backgroundColor: "#121F28" }}
        // pr={{xs:4,sm:0}}
        m={0}
        pb={15}
      >
        <h2
          style={{
            color: "white",
            margin: 0,
            textAlign: "left",
            marginLeft: 30,
            borderBottom: "1px solid #C5D512",
            paddingBottom: 15,
            marginRight: 30,
          }}
        >
          <i>Hello <span style={{color:'#C5D512'}}>Brian</span></i>
        </h2>
        <Box
          sx={{
            height: { lg: 120, md: 120, sm: 150, xs: 320 },
            maxWidth: "1150px",
            width: { md: "90%", xs: "95%" },
            mt: 3,
            ml: { md: 4, sm: 3, xs: 3 },
            borderRadius: "15px",
            bgcolor: "black",
            p: { md: 2, sm: 2, xs: 1 },
            pt: { md: 2, sm: 2, xs: 1.5 },
            pb: { md: 2, sm: 2, xs: 1 },
            pl: { sm: 2, xs: 2 },
          }}
        >
          <Grid
            container
            lg={12}
            rowSpacing={1}
            columnSpacing={1}
            maxWidth={"1150px"}
            width={"100%"}
          >
            <Grid
              item
              lg={6}
              md={6}
              sm={4}
              xs={12}
              //   height={{ lg: "100px", md: "45px", sm: "60px", xs: "45px" }}
              height={80}
              mb={{ sm: 0, xs: 2.5 }}
            >
              <Box>
                <Box width={"100%"} height={"33px"} bgcolor={"#C5D512"} mb={1}>
                  <Typography
                    color={"black"}
                    fontWeight={"bold"}
                    pl={2.5}
                    p={0.6}
                    style={{paddingLeft:"10px"}}
                  >
                    Event/task
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: `${
                      marketingResource === true ? "transparent" : "black"
                    }`,
                    width: "100%",
                    height: { md: 49, sm: 79, xs: 49 },
                    color: "white",
                    borderRadius: 0,
                    border: "1px solid skyblue",
                    justifyContent: "flex-start",
                    "&:hover": {
                      backgroundColor:'transparent',
                    },
                  }}
                  onClick={() => {
                    setMarketingResource(true);
                    setDestinationPrep(false);
                    setLearningResource(false);
                  }}
                >
                  <TaskAltOutlinedIcon sx={{ color: "#C5D512", mr: 2 }} />
                  <b>Task Description (from CRM)</b>
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={4}
              xs={12}
              //   height={{ lg: "85px", md: "45px", sm: "60px", xs: "45px" }}
              height={80}
              mb={{ sm: 0, xs: 2.5 }}
            >
              <Box textAlign={"left"}>
                <Box width={"100%"} height={"33px"} bgcolor={"#D9D9D9"} mb={1}>
                  <Typography
                    color={"black"}
                    fontWeight={"bold"}
                    pl={2.5}
                    p={0.6}
                    style={{paddingLeft:"10px"}}
                  >
                    Complete by (date)
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: `${
                      learningResource === true ? "transparent" : "black"
                    }`,
                    width: "100%",
                    height: { md: 49, sm: 79, xs: 49 },
                    color: "white",
                    border: "1px solid skyblue",
                    justifyContent: "flex-start",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => {
                    setMarketingResource(false);
                    setDestinationPrep(false);
                    setLearningResource(true);
                  }}
                >
                  {/* <TaskAltOutlinedIcon sx={{ color: "white", mr: 2 }} /> */}
                  <ArrowForwardIosRoundedIcon
                    sx={{
                      color: "#C5D512",
                      mr: 2,
                      border: "1px solid #C5D512",
                      borderRadius: "50%",
                      p: 0.5,
                    }}
                  />
                  <b>Thursday 3 july 2023</b>
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              lg={2}
              md={2}
              sm={4}
              xs={12}
              //   height={{ lg: "85px", md: "45px", sm: "60px", xs: "45px" }}
              height={80}
              mb={{ sm: 0, xs: 2.5 }}
            >
              <Box>
                <Box width={"100%"} height={"33px"} bgcolor={"#D9D9D9"} mb={1}>
                  <Typography
                    color={"black"}
                    fontWeight={"bold"}
                    pl={2.5}
                    p={0.6}
                    style={{paddingLeft:"10px"}}
                  >
                    Info
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: `${
                      destinationPrep === true ? "transparent" : "black"
                    }`,
                    width: "100%",
                    height: { md: 49, sm: 79, xs: 49 },
                    color: "white",
                    display: "flex",
                    border: "1px solid skyblue",
                    justifyContent: "space-around",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => {
                    setMarketingResource(false);
                    setDestinationPrep(true);
                    setLearningResource(false);
                  }}
                >
                  <Image
                    src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
                    alt=""
                    height={35}
                    width={35}
                  />
                  <Image
                    src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                    alt=""
                    height={35}
                    width={35}
                  />
                </Button>
              </Box>
            </Grid>
            <Grid item lg={3} md={0} sm={0} xs={0}></Grid>
          </Grid>
        </Box>
        <Grid container columns={12} maxWidth={'1150px'} columnSpacing={2} mt={3} ml={2}>
          <Grid item md={6}>
            <Typography variant="h5" ml={4} fontWeight={"bolder"} color={'white'} >
              YOUR PROGRAM 
            </Typography>
            <Grid container columns={12} columnSpacing={2} mt={2}>
              <Grid item md={6} textAlign={'center'}>
                <Image src={'https://i.ibb.co/1XMM44X/WheelsEC.png'} alt="" width={250} height={250}/>
                <Typography variant="h5" textAlign={'center'} fontWeight={"bolder"} color={'white'} mt={2}>ELICOS</Typography>
              </Grid>
              <Grid item md={6} textAlign={'center'}>
                <Image src={'https://i.ibb.co/NnWVThs/Wheels6.png'} alt="" width={250} height={250}/>
                <Typography variant="h5" textAlign={'center'} fontWeight={"bolder"} color={'white'} mt={2}>AWARD</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} textAlign={'center'}>
            <Box mb={3} mt={4}>
            <Button variant="contained" sx={{bgcolor:'#004AAD',color:'white','& .hover':{bgcolor:'#004AAD',color:'white'}}}>Book an open hours meeting</Button>
            </Box>
            <Image src={'https://i.ibb.co/MN8YdXk/openhourspc-1.png'} alt="" width={280} height={175}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hello_Brian;
