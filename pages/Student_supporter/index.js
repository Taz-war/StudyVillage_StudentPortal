import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  TableContainer,
  Table,
  tableCellClasses,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { StateContex } from "../Context/StateProvider";
import Image from "next/image";
import MainMenu from "../../components/MainMenu";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";


let datas = [
  { api_name: "First Name", field: "Glen" },
  { api_name: "Last Name", field: "Meehan" },
  { api_name: "Email address", field: "glenmeehan@studyvillage.org" },
  { api_name: "Mobile/Cell Whatsapp number", field: "+61 411 251 535" },
  { api_name: "Telephone", field: "(+61) 370 360 347 (ext.002)" },
  { api_name: "Profile", field: "Hilari Clinton Supporter.pdf" },
];

const Programs = () => {
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
        <h2 style={{ borderBottom: "1px solid yellow", paddingBottom: 20 }}>
          <i style={{ color: "white" }}>Your Student Supporter</i>
        </h2>
        <Box maxWidth={"850px"} width={'100%'} display={'inline-block'}>
          <Typography variant="p" fontSize={"medium"} color={'white'} textAlign={'left'}>
            Here's your Student Supporter's contact and profile details. They're
            only a phone call away. Please be respectful of night-time hours.
            For more information on their role and the way you interact with
            your supporter, check out the video.{" "}
          </Typography>
          <TableContainer sx={{ mt: 5 }}>
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
                        key={data?.api_name}
                        className="cellColor"
                        sx={{
                          overflow: "hidden",
                          height: "10px",
                          whiteSpace: "nowrap ",
                        }}
                      >
                        {data.api_name === "Profile" ? (
                          <>
                            <TableCell>{data?.api_name}</TableCell>
                            <TableCell >
                              <Box sx={{display:'flex'}}>
                              <Image
                                src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                                alt=""
                                height={30}
                                width={30}
                              />
                              <Link sx={{textDecorationColor:'black',color:'black',ml:2 ,fontSize:'medium'}}>{data?.field}</Link>
                              </Box>
                            </TableCell>
                          </>
                        ) : (
                          <>
                            <TableCell>{data?.api_name}</TableCell>
                            <TableCell>{data?.field}</TableCell>
                          </>
                        )}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box maxWidth={'285px'} width={'100%'} display={'inline-block'}  p={{lg:5,md:2,xs:5}}>
          <Box textAlign={'center'} mb={3}>
        <Image src={'https://i.ibb.co/VvxfY9C/Brian-Lara-Avatar-I-2.png'} alt="" width={170} height={200} />
        </Box>
          <Image src={'https://i.ibb.co/P97ppgq/image01.png'} alt="" width={250} height={150}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Programs;
