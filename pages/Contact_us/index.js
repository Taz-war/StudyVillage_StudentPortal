import {
    Box,
    Button,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Typography,
    tableCellClasses,
  } from "@mui/material";
  import React from "react";
  import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
  
  import MainMenu from "../../components/MainMenu";
  import { StateContex } from "../Context/StateProvider";
  import { useState } from "react";
  import { useContext } from "react";
  // import { Link } from "react-router-dom";
  import Link from "next/link";
  import Image from 'next/image'

  let datas = [
    { api_name: "First Name", field: "Glen" },
    { api_name: "Last Name", field: "Meehan" },
    { api_name: "Email address", field: "glenmeehan@studyvillage.org" },
    { api_name: "Mobile/Cell Whatsapp number", field: "+61 411 251 535" },
    { api_name: "Telephone", field: "(+61) 370 360 347 (ext.002)" },
  ];
  
  const keys = Object.keys(datas);
  const Contact_us = () => {
    const { open, setOpen } = useContext(StateContex);
    const [inputField, setInputFeild] = useState(datas);
  
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
            <i style={{ color: "white" }}>Contact Us</i>
          </h2>
          {/* <hr style={{ border: "1px solid #C5D512", marginTop: "25px" }} /> */}
          <Box maxWidth={"850px"}>
            <Typography variant="p" color={'white'}>
              Please feel to reach out to your super-friendly StudyVillage account
              manager if you have any questions or concerns about your program. We
              love any kind of feedback positive or pointing out areas where we
              can improve!
            </Typography>
          </Box>
  
          <TableContainer sx={{ maxWidth: "850px", mt: 5 }}>
            <Table
              sx={{
                [`& .${tableCellClasses.root}`]: {
                  borderBottom: "none",
                },
                borderCollapse: "separate",
                borderSpacing: "0px 10px",
              }}
            >
                <TableBody>
              {inputField.length > 0 &&
                inputField.map((data, index) => {
                  return (
                    <TableRow
                    key={index}
                      className="cellColor"
                      style={{
                        overflow: "hidden",
                        height: "10px",
                        whiteSpace: "nowrap ",
                      }}
                    >
                      <TableCell>
                        <b>{data.api_name}</b>
                      </TableCell>
                      <TableCell>{data.field}</TableCell>
                    </TableRow>
                  );
                })}
                </TableBody>
            </Table>
          </TableContainer>
          {/* <Button
              variant="contained"
              onClick={() => {
                editDetails === false
                  ? setEditDetails(true)
                  : setEditDetails(false);
              }}
              sx={{
                mt: 3,
                backgroundColor: "#121F28",
                border: "1px solid #2FAFD4",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <i>{editDetails === false ? "Edit Details" : "Submit details"}</i>
            </Button> */}
        </Box>
      </Box>
    );
  };
  
  export default Contact_us;
  