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
import { useState } from "react";
import { StateContex } from "../Context/StateProvider";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";


let datas = [
  { api_name: "First Name", field: "Brian" },
  { api_name: "Last Name", field: "Lara" },
  { api_name: "Gender", field: "Male" },
  { api_name: "Email address", field: "blara@wicricket.org" },
  { api_name: "Mobile/Cell Whatsapp Number", field: "+61 411 251 535" },
  { api_name: "Date of Birth", field: "08/09/59" },
  { api_name: "Nationality", field: "Trinidadian" },
  { api_name: "College/University", field: "La Trobe University" },
  { api_name: "Campus", field: "Melbourne" },
  { api_name: "College/University Country", field: "Australia" },
  { api_name: "Award Program", field: "AP8" },
];

let GuardianProfile= [
  { api_name: "First Name", field: "Brian" },
  { api_name: "Last Name", field: "Lara" },
  { api_name: "Gender", field: "Male" },
  { api_name: "Email address", field: "blara@wicricket.org" },
  { api_name: "Mobile/Cell Whatsapp Number", field: "+61 411 251 535" },
  { api_name: "Home Address", field: "27 Sanders Rd Frankston, Victoria" },
];
let GuardianProfile2= [
    { api_name: "First Name", field: "Brian" },
    { api_name: "Last Name", field: "Lara" },
    { api_name: "Gender", field: "Male" },
    { api_name: "Email address", field: "blara@wicricket.org" },
    { api_name: "Mobile/Cell Whatsapp Number", field: "+61 411 251 535" },
    { api_name: "Home Address", field: "27 Sanders Rd Frankston, Victoria" },
  ];

const keys = Object.keys(datas);
const Your_profile = () => {
  const { open, setOpen } = useContext(StateContex);
  const [editProfile, setEditProfile] = useState(false);
  const [editGuardianProfile, setEditGuardianProfile] = useState(false);
  const [editGuardian2, setEditGuardian2] = useState(false);
  const [inputField, setInputFeild] = useState(datas);
  const [guardianProfile,setGuardianProfile]=useState(GuardianProfile)
  const [guardian2,setGuardian2]=useState(GuardianProfile2)

  const handleProfileUpdate = (e, i) => {
    const tempData = datas;

    tempData[i].field = e;
    setInputFeild(tempData);
  };
  const handleGuardianProfileUpdate = (e, i) => {
    const tempData = GuardianProfile;

    tempData[i].field = e;
    setGuardianProfile(tempData);
  };
  const handleGuardianUpdate = (e, i) => {
    const tempData = GuardianProfile2;

    tempData[i].field = e;
    setGuardian2(tempData);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121F28",
        height: "100%",
        overflowY: "hidden",
        pb: 10,
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
        <h2
          style={{
            color: "white",
            borderBottom: "1px solid #C5D512",
            paddingBottom: "25px",
          }}
        >
          <i>Your Profile</i>
        </h2>

        <Box display={"flex"}>
          <Box width={"100%"} maxWidth={"850px"} pt={3}>
            <Typography variant="p" textAlign={"left"} fontSize={"large"} color={'white'}>
              We have the following information on record. Please keep
              this information up to date so we can stay in touch.{" "}
            </Typography>
            <TableContainer sx={{ mt: 3 }}>
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
                          <TableCell>
                            {!editProfile && data.field}
                            {editProfile && (
                              <TextField
                                defaultValue={data.field}
                                onChange={(e) => {
                                  handleProfileUpdate(e.target.value, index);
                                }}
                                sx={{
                                  backgroundColor: "white",
                                  m: 0,
                                  p: 0,
                                  "& .MuiOutlinedInput-root": {
                                    height: "30px",
                                  },
                                }}
                              />
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant="contained"
              onClick={() => {
                editProfile === false
                  ? setEditProfile(true)
                  : setEditProfile(false);
              }}
              sx={{
                mt: 3,
                backgroundColor: "#FF914D",
                border: "1px solid white",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#FF914D",
                },
              }}
            >
              <i>{editProfile === false ? "Edit Profile" : "Submit details"}</i>
            </Button>

            <Typography variant="h5" fontWeight={"bolder"} fontStyle={'italic'} color={'white'} mt={3}>
              Parent/Guardian (1) details in home country
            </Typography>
            <TableContainer sx={{ mt: 3 }}>
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
                  {guardianProfile.length > 0 &&
                    guardianProfile.map((data, index) => {
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
                          <TableCell>
                            {!editGuardianProfile && data.field}
                            {editGuardianProfile && (
                              <TextField
                                defaultValue={data.field}
                                onChange={(e) => {
                                  handleGuardianProfileUpdate(e.target.value, index);
                                }}
                                sx={{
                                  backgroundColor: "white",
                                  m: 0,
                                  p: 0,
                                  "& .MuiOutlinedInput-root": {
                                    height: "30px",
                                  },
                                }}
                              />
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant="contained"
              onClick={() => {
                editGuardianProfile === false
                  ? setEditGuardianProfile(true)
                  : setEditGuardianProfile(false);
              }}
              sx={{
                mt: 3,
                backgroundColor: "#FF914D",
                border: "1px solid white",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#FF914D",
                },
              }}
            >
              <i>{editGuardianProfile === false ? "Edit Guardian Profile" : "Submit details"}</i>
            </Button>

            <Typography variant="h5" fontWeight={"bolder"} color={'white'}  fontStyle={'italic'} mt={3}>
              Parent/Guardian (2) details in home country
            </Typography>
            <TableContainer sx={{ mt: 3 }}>
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
                  {guardian2.length > 0 &&
                    guardian2.map((data, index) => {
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
                          <TableCell>
                            {!editGuardian2 && data.field}
                            {editGuardian2 && (
                              <TextField
                                defaultValue={data.field}
                                onChange={(e) => {
                                  handleGuardianUpdate(e.target.value, index);
                                }}
                                sx={{
                                  backgroundColor: "white",
                                  m: 0,
                                  p: 0,
                                  "& .MuiOutlinedInput-root": {
                                    height: "30px",
                                  },
                                }}
                              />
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant="contained"
              onClick={() => {
                editGuardian2 === false
                  ? setEditGuardian2(true)
                  : setEditGuardian2(false);
              }}
              sx={{
                mt: 3,
                backgroundColor: "#FF914D",
                border: "1px solid white",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#FF914D",
                },
              }}
            >
              <i>{editGuardian2 === false ? "Edit Guardian Profile" : "Submit details"}</i>
            </Button>
          </Box>
          <Box ml={4} mt={8} p={5} pl={7}>
            <Image src={'https://i.ibb.co/Zc4LskV/Brian-Lara.png'} alt="" width={236} height={313}/>
            <Button
              variant="contained"
              onClick={() => {
                editProfile === false
                  ? setEditProfile(true)
                  : setEditProfile(false);
              }}
              sx={{
                mt: 3,
                display: "block",
                backgroundColor: "#FF914D",
                border: "1px solid white",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#FF914D",
                },
              }}
            >
              <i>{editProfile === false ? "Edit Photo" : "Submit Photo"}</i>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Your_profile;
