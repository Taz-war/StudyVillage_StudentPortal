import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useContext } from "react";
import { StateContex } from "../Context/StateProvider";
import Image from "next/image";

import MainMenu from "../../components/MainMenu";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Programs = () => {
  const { open, setOpen } = useContext(StateContex);
  return (
    <>
      <Box sx={{ backgroundColor: "#121F28" }} height={"35vh"}>
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
                src={"https://i.ibb.co/SBgmb10/Study-Village-Logo.png"}
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
              color={"white"}
              fontStyle={"italic"}
              fontWeight={"bolder"}
            >
              Brian Lara <br />
            </Typography>
            <Typography
              variant="p"
              color={"#C5D512"}
              fontStyle={"italic"}
              fontWeight={"bolder"}
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
            textAlign={"center"}
          >
            <Box width={"100%"} textAlign={"center"}>
              <Image
                src={"https://i.ibb.co/bQF1RLb/Brian-Lara-Avatar-I-1.png"}
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
      <Box width={"100%"} sx={{ backgroundColor: "#121F28" }} m={0} pb={9}>
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
          <i>Your Program</i>
        </h2>
        <Grid container columns={12} mt={3} pb={10} p={2} pl={4}>
          <Grid item lg={6} md={7} sm={9} xs={12} pr={2} pb={4}>
            <Typography
              variant="p"
              color={"white"}
              fontSize={"medium"}
              lineHeight={-0.5}
              textAlign={"justify"}
            >
              Your eight -semester program consists of eight modules and packs a
              lot of punch. The program is designed to ensure you’re settled in,
              tracking well in your studies and ready to take on what comes next
              post-study. There’s a detailed description of what this unique
              module entails below, and of course short video explainers in the
              resources section. As the name suggests, key module Goalsetting is
              about setting goals and working toward your desired outcomes – by
              importantly with your student supporter who is there to support
              you all the way! Remember it consists of both structured
              interactions – which your Student Supporter will setup, and an
              Open hours facility. Make sure you make the most of your time with
              us!
            </Typography>
          </Grid>
          <Grid item lg={3} md={4} sm={5} xs={12}>
            {/* <Box display={"flex"} width={"100%"} ml={1}>
              <Box width={"50%"}>
                <Typography variant="h6" color={"white"}>
                  <b> OVERVIEW</b>
                </Typography>
                <Box display={"flex"} mt={1.5}>
                  <Image
                    src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                    alt=""
                    height={50}
                    width={50}
                  />
                  <<Link
                href="https://workdrive.zohoexternal.com/external/57523b2e3313c2a1d5903cdb7f75449e1f588c025c772999adcfb9c5b09a8031"
                target="_blank"
                fontSize={{ lg: "large", md: "medium" }}
                sx={{ color: "#C5D512", ml: 2 }}
              >
                Download <br /> QuickGuide
              </Link>
                  </Link>
                </Box>
              </Box>
              <Box width={"50%"} textAlign={"left"}>
                <Image src={'https://i.ibb.co/7jMjmBB/overviewpc.png'} alt="" width={180} height={100} />
              </Box>
            </Box> */}
          </Grid>
        </Grid>

        <Grid container columns={12} columnSpacing={2} p={2} pl={4}>
          <Grid item md={3} xs={12} mt={4} textAlign={"center"}>
            <Image
              src={"https://i.ibb.co/TtJjfcV/WheelsEB.png"}
              alt=""
              height={300}
              width={300}
            />
            <Typography
              sx={{ fontFamily: "Open Sans Condensed" }}
              color={"white"}
              textAlign={"center"}
              variant="h5"
              mt={2}
              mb={4}
            >
              <b>YOUR ELICOS PROGRAM</b>
            </Typography>
            <Image
              src={"https://i.ibb.co/x7LfFFV/Wheels8.png"}
              alt=""
              height={300}
              width={300}
            />
            <Typography
              color={"white"}
              textAlign={"center"}
              variant="h5"
              mt={2}
              sx={{ fontFamily: "Open Sans Condensed" }}
            >
              <b>YOUR AWARD PROGRAM</b>
            </Typography>
          </Grid>
          <Grid item md={9} xs={12}>
            <Box
              sx={{
                ml: { md: 2, sm: 2, xs: 0 },
                mt: 3,
                maxWidth: "1321px",
                width: "100%",
                p: 1,
                pl: 0,
                pr: 0,
              }}
            >
              {/* 1 */}
              <Grid
                container
                columns={12}
                columnSpacing={2}
                borderBottom={"1px solid skyblue"}
                pb={2}
                pr={1}
                mt={2}
              >
                <Grid item md={2} xs={6}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      marginTop: 0,
                      mb: 2,
                      fontFamily: "Open Sans Condensed",
                    }}
                  >
                    {" "}
                    <b>ELICOS A </b>
                  </Typography>
                  <Box width={"100%"} display={"flex"}>
                    <Image
                      src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                      alt=""
                      height={50}
                      width={50}
                    />
                    <Link
                      href="https://workdrive.zohoexternal.com/external/57523b2e3313c2a1d5903cdb7f75449e1f588c025c772999adcfb9c5b09a8031"
                      target="_blank"
                      fontSize={{ lg: "large", md: "medium" }}
                      sx={{ color: "#C5D512", ml: 2 }}
                    >
                      Download <br /> QuickGuide
                    </Link>
                  </Box>
                </Grid>
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Image
                    src={"https://i.ibb.co/pRCzWyf/eapc.png"}
                    alt=""
                    style={{ maxHeight: "170px", maxWidth: "330px" }}
                    width={196}
                    height={113}
                  />
                </Grid>
                <Grid item md={1} xs={3}>
                  <Image
                    src={"https://i.ibb.co/kDywC9h/eatab.png"}
                    alt=""
                    width={94}
                    height={130}
                  />
                </Grid>
                <Grid item md={6} sm={8} xs={9}>
                  <Typography
                    fontSize={{
                      lg: "small",
                      md: "x-small",
                      sm: "small",
                      xs: "small",
                    }}
                    sx={{ wordSpacing: "1px" }}
                    color={"white"}
                  >
                    For most StudyVillage students, this is the first diploma or
                    degree course module. It tracks progress in the
                    all-important transition into the university phase. And it
                    often involves the very first meeting with your mentor; a
                    friend, muse, and all-round useful buddy. The Settling In
                    module is about: Finding your feet; Adjusting to your new
                    environment; Establishing your study habits; Getting
                    connected and; Preparing for success.
                  </Typography>
                </Grid>
              </Grid>
              {/* 2 */}
              <Grid
                container
                columns={12}
                columnSpacing={2}
                borderBottom={"1px solid skyblue"}
                pb={2}
                pr={1}
                mt={2}
              >
                <Grid item md={2} xs={6} mb={2}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      marginTop: 0,
                      mb: 2,
                      fontFamily: "Open Sans Condensed",
                    }}
                  >
                    {" "}
                    <b>ELICOS B</b>
                  </Typography>
                  <Box width={"100%"} display={"flex"}>
                    <Image
                      src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                      alt=""
                      height={50}
                      width={50}
                    />
                    <Link
                      href="https://workdrive.zohoexternal.com/external/9c33a766bd9b854630f1bb5a2d86c339a56f686d5c15ff4c2a5606786214ea47"
                      target="_blank"
                      fontSize={{ lg: "large", md: "medium" }}
                      sx={{ color: "#C5D512", ml: 2 }}
                    >
                      Download <br /> QuickGuide
                    </Link>
                  </Box>
                </Grid>
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Image
                    src={"https://i.ibb.co/NtdFdZz/ebpc.png"}
                    alt=""
                    style={{ maxHeight: "170px", maxWidth: "330px" }}
                    width={196}
                    height={113}
                  />
                </Grid>
                <Grid item md={1} xs={3}>
                  <Image
                    src={"https://i.ibb.co/T4V2hCJ/ebtab.png"}
                    alt=""
                    width={94}
                    height={130}
                  />
                </Grid>
                <Grid item md={6} sm={8} xs={9}>
                  <Typography
                    fontSize={{
                      lg: "small",
                      md: "x-small",
                      sm: "small",
                      xs: "small",
                    }}
                    sx={{ wordSpacing: "1px" }}
                    color={"white"}
                  >
                    For most StudyVillage students, this is the first diploma or
                    degree course module. It tracks progress in the
                    all-important transition into the university phase. And it
                    often involves the very first meeting with your mentor; a
                    friend, muse, and all-round useful buddy. The Settling In
                    module is about: Finding your feet; Adjusting to your new
                    environment; Establishing your study habits; Getting
                    connected and; Preparing for success.
                  </Typography>
                </Grid>
              </Grid>

              {/* 3 */}
              <Grid
                container
                columns={12}
                columnSpacing={2}
                borderBottom={"1px solid skyblue"}
                pb={2}
                pr={1}
                mt={2}
              >
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      marginTop: 0,
                      fontFamily: "Open Sans Condensed",
                    }}
                  >
                    {" "}
                    <b>Settling In </b>
                  </Typography>
                  <Box width={"100%"} display={"flex"}>
                    <Image
                      src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                      alt=""
                      height={50}
                      width={50}
                    />
                    <Link
                      href="https://workdrive.zohoexternal.com/external/0bab68c1d9ed6827d4feb7d4209f6a49c8c97a41c566b43727fc237965e970d1"
                      target="_blank"
                      fontSize={{ lg: "large", md: "medium" }}
                      sx={{ color: "#C5D512", ml: 2 }}
                    >
                      Download <br /> QuickGuide
                    </Link>
                  </Box>
                </Grid>
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Link
                    target={"_blank"}
                    href="https://www.youtube.com/watch?v=3VyrvWoXqrY&ab_channel=StudyVillage"
                  >
                    <Image
                      src={"https://i.ibb.co/p3q1dcc/settling.png"}
                      alt=""
                      width={196}
                      height={113}
                      style={{ maxHeight: "170px", maxWidth: "330px" }}
                    />
                  </Link>
                </Grid>
                <Grid item md={1} xs={3}>
                  <Image
                    src={"https://i.ibb.co/BTG2nT5/Settlingtab.png"}
                    objectFit="fill"
                    alt=""
                    width={94}
                    height={130}
                  />
                </Grid>
                <Grid item md={7} sm={8} xs={9}>
                  <Typography
                    fontSize={{
                      lg: "small",
                      md: "x-small",
                      sm: "small",
                      xs: "small",
                    }}
                    sx={{ wordSpacing: "1px" }}
                    color={"white"}
                  >
                    For most StudyVillage students, this is the first diploma or
                    degree course module. It tracks progress in the
                    all-important transition into the university phase. And it
                    often involves the very first meeting with your mentor; a
                    friend, muse, and all-round useful buddy. The Settling In
                    module is about: Finding your feet; Adjusting to your new
                    environment; Establishing your study habits; Getting
                    connected and; Preparing for success.
                  </Typography>
                </Grid>
              </Grid>
              {/* 4 */}
              <Grid
                container
                columns={12}
                columnSpacing={2}
                borderBottom={"1px solid skyblue"}
                pb={2}
                pr={1}
                mt={2}
              >
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      marginTop: 0,
                      fontFamily: "Open Sans Condensed",
                    }}
                  >
                    {" "}
                    <b>Consolidating Studies </b>
                  </Typography>
                  <Box width={"100%"} display={"flex"}>
                    <Image
                      src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                      alt=""
                      height={50}
                      width={50}
                    />
                    <Link
                      href="https://workdrive.zohoexternal.com/external/71383903fbf82c91eace229b5d01255ba5d8542c9a509839f1429e8b61ce995b"
                      target="_blank"
                      fontSize={{ lg: "large", md: "medium" }}
                      sx={{ color: "#C5D512", ml: 2 }}
                    >
                      Download <br /> QuickGuide
                    </Link>
                  </Box>
                </Grid>
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Link
                    target={"_blank"}
                    href="https://www.youtube.com/watch?v=3VyrvWoXqrY&ab_channel=StudyVillage"
                  >
                    <Image
                      src={"https://i.ibb.co/JK4Xhmx/CSpc.png"}
                      alt=""
                      style={{ maxHeight: "170px", maxWidth: "330px" }}
                      width={196}
                      height={113}
                    />
                  </Link>
                </Grid>
                <Grid item md={1} xs={3}>
                  <Image
                    src={"https://i.ibb.co/GnSrb2Y/cstab.png"}
                    alt=""
                    width={94}
                    height={130}
                  />
                </Grid>
                <Grid item md={6} sm={8} xs={9}>
                  <Typography
                    fontSize={{
                      lg: "small",
                      md: "x-small",
                      sm: "small",
                      xs: "small",
                    }}
                    sx={{ wordSpacing: "1px" }}
                    color={"white"}
                  >
                    Now established in student life, the Consolidating Studies
                    module introduces broader elements of happiness and
                    wellbeing, setting the pre-conditions for balance, stability
                    and success. With a focus on study habits and performance,
                    this sections also checks parameters on part time work.
                    Trends and scope for study improvement emerge in this phase.
                  </Typography>
                </Grid>
              </Grid>

              {/* 5 */}
              <Grid
                container
                columns={12}
                columnSpacing={2}
                borderBottom={"1px solid skyblue"}
                pb={2}
                pr={1}
                mt={2}
              >
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      marginTop: 0,
                      fontFamily: "Open Sans Condensed",
                    }}
                  >
                    {" "}
                    <b>Tracking Progress </b>
                  </Typography>
                  <Box width={"100%"} display={"flex"}>
                    <Image
                      src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                      alt=""
                      height={50}
                      width={50}
                    />
                    <Link
                      href="https://workdrive.zohoexternal.com/external/bc5bc8c06a67ea9a9668fe20b1068216b45cf5b6310c8467e98419180d0c106a"
                      target="_blank"
                      fontSize={{ lg: "large", md: "medium" }}
                      sx={{ color: "#C5D512", ml: 2 }}
                    >
                      Download <br /> QuickGuide
                    </Link>
                  </Box>
                </Grid>
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Link
                    target={"_blank"}
                    href="https://www.youtube.com/watch?v=WI0ayWpZzGs&list=PL4JWIvijTInKtFVushQLadFo7IgiJzuR4&index=5&ab_channel=StudyVillage"
                  >
                    <Image
                      src={"https://i.ibb.co/sH8kgPY/tppc.png"}
                      alt=""
                      style={{ maxHeight: "170px", maxWidth: "330px" }}
                      width={196}
                      height={113}
                    />
                  </Link>
                </Grid>
                <Grid item md={1} xs={3}>
                  <Image
                    src={"https://i.ibb.co/D4PZJt4/tptab.png"}
                    alt=""
                    width={94}
                    height={130}
                  />
                </Grid>
                <Grid item md={6} sm={8} xs={9}>
                  <Typography
                    fontSize={{
                      lg: "small",
                      md: "x-small",
                      sm: "small",
                      xs: "small",
                    }}
                    sx={{ wordSpacing: "1px" }}
                    color={"white"}
                  >
                    s the name suggests, Tracking Progress is about how you’re
                    going so far in your new life abroad. It’s about identifying
                    trends, focussing on areas for improvement and celebrating
                    achievements. But it’s also about setting up the middle and
                    end stages of your studies. The Tracking Progress module is
                    about setting the foundation for the all-important second
                    and third years of study; closing the gaps between ambition
                    and reality; taking opportunities; Honestly addressing
                    challenges
                  </Typography>
                </Grid>
              </Grid>

              {/* 6 */}
              <Grid
                container
                columns={12}
                columnSpacing={2}
                borderBottom={"1px solid skyblue"}
                pb={2}
                pr={1}
                mt={2}
              >
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      marginTop: 0,
                      fontFamily: "Open Sans Condensed",
                    }}
                  >
                    {" "}
                    <b>Goal Setting </b>
                  </Typography>
                  <Box width={"100%"} display={"flex"}>
                    <Image
                      src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                      alt=""
                      height={50}
                      width={50}
                    />
                    <Link
                      href="https://workdrive.zohoexternal.com/external/b1a11569ca8b8c7fed85a67cf209b217befa6e615714c6e92a1010e95de4ed1c"
                      target="_blank"
                      fontSize={{ lg: "large", md: "medium" }}
                      sx={{ color: "#C5D512", ml: 2 }}
                    >
                      Download <br /> QuickGuide
                    </Link>
                  </Box>
                </Grid>
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Link
                    target={"_blank"}
                    href="https://www.youtube.com/watch?v=eY9cdYmtUnk&ab_channel=StudyVillage"
                  >
                    <Image
                      src={"https://i.ibb.co/g4mXdMF/gspc.png"}
                      alt=""
                      style={{ maxHeight: "170px", maxWidth: "330px" }}
                      width={196}
                      height={113}
                    />
                  </Link>
                </Grid>
                <Grid item md={1} xs={3}>
                  <Image
                    src={"https://i.ibb.co/ZJSqyxq/gstab.png"}
                    alt=""
                    width={94}
                    height={130}
                  />
                </Grid>
                <Grid item md={6} sm={8} xs={9}>
                  <Typography
                    fontSize={{
                      lg: "small",
                      md: "x-small",
                      sm: "small",
                      xs: "small",
                    }}
                    sx={{ wordSpacing: "1px" }}
                    color={"white"}
                  >
                    t’s time to re-focus on broader ambitions and what it will
                    take to get there. In this module we help you focus by
                    setting some specific goals in important areas of life. We
                    also start to think about what direction you would like to
                    take after you finish your studies. The Goal Setting module
                    is about: Building on the foundation you’ve already set;
                    Continuing to practice positive habits and lifestyle
                    choices; Thinking about your post-study future; Setting core
                    goals to carry you through to the end of your studies.
                  </Typography>
                </Grid>
              </Grid>

              {/* 7 */}
              <Grid
                container
                columns={12}
                columnSpacing={2}
                borderBottom={"1px solid skyblue"}
                pb={2}
                pr={1}
                mt={2}
              >
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      marginTop: 0,
                      fontFamily: "Open Sans Condensed",
                    }}
                  >
                    {" "}
                    <b>Accelerator A </b>
                  </Typography>
                  <Box width={"100%"} display={"flex"}>
                    <Image
                      src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                      alt=""
                      height={50}
                      width={50}
                    />
                    <Link
                      href="https://workdrive.zohoexternal.com/external/b90a1215cc60472b2d10e2fd9563aa35b1dbbdf5f80a3428046f840cd3783960"
                      target="_blank"
                      fontSize={{ lg: "large", md: "medium" }}
                      sx={{ color: "#C5D512", ml: 2 }}
                    >
                      Download <br /> QuickGuide
                    </Link>
                  </Box>
                </Grid>
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Link
                    target={"_blank"}
                    href="https://www.youtube.com/watch?v=cj9FQv4_gjM&ab_channel=StudyVillage"
                  >
                    <Image
                      src={"https://i.ibb.co/GnH8qK0/accelapc.png"}
                      alt=""
                      style={{ maxHeight: "170px", maxWidth: "330px" }}
                      width={196}
                      height={113}
                    />
                  </Link>
                </Grid>
                <Grid item md={1} xs={3}>
                  <Image
                    src={"https://i.ibb.co/6n23BYX/accelatab.png"}
                    alt=""
                    width={94}
                    height={130}
                  />
                </Grid>
                <Grid item md={6} sm={8} xs={9}>
                  <Typography
                    fontSize={{
                      lg: "small",
                      md: "x-small",
                      sm: "small",
                      xs: "small",
                    }}
                    sx={{ wordSpacing: "1px" }}
                    color={"white"}
                  >
                    Accelerator A is only available to students taking a
                    four-year degree program. This module checks in on progress
                    made against the goals and aspirations developed in the
                    Goalsetting outline – and again asks you to consider what
                    you plan to do post study. The Accelerator A module is
                    about: <br />
                    1. Staying motivated and maintaining good habits;
                    <br />
                    2. Using your goals to drive you on;
                    <br />
                    3. Breaking ambitious goals down into simple steps;
                    <br />
                    4. Thinking toward your post-study future.
                  </Typography>
                </Grid>
              </Grid>

              {/* 8 */}
              <Grid
                container
                columns={12}
                columnSpacing={2}
                borderBottom={"1px solid skyblue"}
                pb={2}
                pr={1}
                mt={2}
              >
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      marginTop: 0,
                      fontFamily: "Open Sans Condensed",
                    }}
                  >
                    {" "}
                    <b>Accelerator B</b>
                  </Typography>
                  <Box width={"100%"} display={"flex"}>
                    <Image
                      src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                      alt=""
                      height={50}
                      width={50}
                    />
                    <Link
                      href="https://workdrive.zohoexternal.com/external/7961692594241226a438734a62b4ee0ad088fd371f8cc2fb714d13f9799a2365"
                      target="_blank"
                      fontSize={{ lg: "large", md: "medium" }}
                      sx={{ color: "#C5D512", ml: 2 }}
                    >
                      Download <br /> QuickGuide
                    </Link>
                  </Box>
                </Grid>
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  {/* <Link target={"_blank"} href=""> */}
                    <Image
                      src={"https://i.ibb.co/NCZ7tN6/accelbpc.png"}
                      alt=""
                      style={{ maxHeight: "170px", maxWidth: "330px" }}
                      width={196}
                      height={113}
                    />
                  {/* </Link> */}
                </Grid>
                <Grid item md={1} xs={3}>
                  <Image
                    src={"https://i.ibb.co/h84ypn4/accelbtab.png"}
                    alt=""
                    width={94}
                    height={130}
                  />
                </Grid>
                <Grid item md={6} sm={8} xs={9}>
                  <Typography
                    fontSize={{
                      lg: "small",
                      md: "x-small",
                      sm: "small",
                      xs: "small",
                    }}
                    sx={{ wordSpacing: "1px" }}
                    color={"white"}
                  >
                    his module offers you a chance to refresh and choose a new
                    set of goals to carry you through to degree completion.
                    Having experienced one round of goalsetting and tracking,
                    you’re well placed to refine your own process, the way you
                    work with your student supporter, and sharpen your
                    ambitions. It’s time to setup for a big final year of study.
                    The Accelerator B module is about: <br />
                    1. A chance to refresh; <br />
                    2.New goals to carry you through to the end of your studies;{" "}
                    <br />
                    3.Continuing to practice those positive habits and
                    life-style choices;
                    <br />
                  </Typography>
                </Grid>
              </Grid>

              {/* 9 */}
              <Grid
                container
                columns={12}
                columnSpacing={2}
                borderBottom={"1px solid skyblue"}
                pb={2}
                pr={1}
                mt={2}
              >
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      marginTop: 0,
                      fontFamily: "Open Sans Condensed",
                    }}
                  >
                    {" "}
                    <b>Goal Tracking</b>
                  </Typography>
                  <Box width={"100%"} display={"flex"}>
                    <Image
                      src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                      alt=""
                      height={50}
                      width={50}
                    />
                    <Link
                      href="https://workdrive.zohoexternal.com/external/2aaf444a0589bf0bbe18d095bc5394bdad6f54f70ff52bfa2c2b9b1da012ed7d"
                      target="_blank"
                      fontSize={{ lg: "large", md: "medium" }}
                      sx={{ color: "#C5D512", ml: 2 }}
                    >
                      Download <br /> QuickGuide
                    </Link>
                  </Box>
                </Grid>
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Link
                    target={"_blank"}
                    href="https://www.youtube.com/watch?v=mTMAzMeWiko&ab_channel=StudyVillage"
                  >
                    <Image
                      src={"https://i.ibb.co/pRCzWyf/eapc.png"}
                      alt=""
                      style={{ maxHeight: "170px", maxWidth: "330px" }}
                      width={196}
                      height={113}
                    />
                  </Link>
                </Grid>
                <Grid item md={1} xs={3}>
                  <Image
                    src={"https://i.ibb.co/WHThrM6/gttab.png"}
                    alt=""
                    width={94}
                    height={130}
                  />
                </Grid>
                <Grid item md={6} sm={8} xs={9}>
                  <Typography
                    fontSize={{
                      lg: "small",
                      md: "x-small",
                      sm: "small",
                      xs: "small",
                    }}
                    sx={{ wordSpacing: "1px" }}
                    color={"white"}
                  >
                    Like its name suggests, Goaltracking is about tracking the
                    specific goals you’ve set yourself as we plan for a
                    post-study future. You’re now embarking on your penultimate
                    semester of study. The other key aspects of GoalTracking is
                    exploring actions around post-study intentions. The Goal
                    Tracking module is about: Reviewing set goals; Following
                    through; Being accountable for what you’ve set yourself;
                    Nominating actions to make your post-study transition a
                    success.
                  </Typography>
                </Grid>
              </Grid>

              {/* 10 */}
              <Grid
                container
                columns={12}
                columnSpacing={2}
                pb={7}
                pr={1}
                mt={2}
              >
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      marginTop: 0,
                      fontFamily: "Open Sans Condensed",
                    }}
                  >
                    {" "}
                    <b>Transition</b>
                  </Typography>
                  <Box width={"100%"} display={"flex"}>
                    <Image
                      src="https://www.iconpacks.net/icons/2/free-pdf-upload-icon-3389-thumb.png"
                      alt=""
                      height={50}
                      width={50}
                    />
                    <Link
                      href="https://workdrive.zohoexternal.com/file/1a1vl6c35e94548c14a75a73f90774299bd8b"
                      target="_blank"
                      fontSize={{ lg: "large", md: "medium" }}
                      sx={{ color: "#C5D512", ml: 2 }}
                    >
                      Download <br /> QuickGuide
                    </Link>
                  </Box>
                </Grid>
                <Grid item md={2} xs={6} mb={2} pr={1}>
                  <Link
                    target={"_blank"}
                    href="https://www.youtube.com/watch?v=p1flK_Se6_c&ab_channel=StudyVillage"
                  >
                    <Image
                      src={"https://i.ibb.co/SXh0XV1/transpc.png"}
                      alt=""
                      style={{ maxHeight: "170px", maxWidth: "330px" }}
                      width={196}
                      height={113}
                    />
                  </Link>
                </Grid>
                <Grid item md={1} xs={3}>
                  <Image
                    src={"https://i.ibb.co/ZTVbYzx/transtab.png"}
                    alt=""
                    width={94}
                    height={130}
                  />
                </Grid>
                <Grid item md={6} sm={8} xs={9}>
                  <Typography
                    fontSize={{
                      lg: "small",
                      md: "x-small",
                      sm: "small",
                      xs: "small",
                    }}
                    sx={{ wordSpacing: "1px" }}
                    color={"white"}
                  >
                    Transition helps you through your final semester of study.
                    The module is a timely opportunity to consolidate and assess
                    your plans as you move into post-study life. Whether you’re
                    planning to return home or stay in the destination country,
                    ‘Transition’ requires you to think critically about how
                    you’re now positioned.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Box mb={10} p={6} pl={8}>
          <Grid
            container
            columns={12}
            columnSpacing={2}
            bgcolor={"#111818"}
            display={"flex"}
            p={2}
          >
            <Grid item md={4} xs={12} pb={4}>
              <Box
                display={"flex"}
                pt={{ lg: 3, md: 1, xs: 2 }}
                mt={{ lg: 5, md: 2, xs: 3 }}
                textAlign={{ md: "left", xs: "center" }}
              >
                <Image
                  src={
                    "https://i.ibb.co/VW6f97N/youtubeiconagentpage-transformed.png"
                  }
                  alt=""
                  width={60}
                  height={50}
                />
                <Typography
                  variant="h5"
                  color={"white"}
                  display={"inline-block"}
                  textAlign={{ md: "left", xs: "center" }}
                  pl={2}
                >
                  <b>
                    {" "}
                    ADDITIONAL <br /> VIDEO GUIDES
                  </b>
                </Typography>
              </Box>
            </Grid>

            <Grid item md={2} xs={12} pb={2} pt={2} textAlign={"center"}>
              <Link
                target={"_blank"}
                href="https://www.youtube.com/watch?v=xXtgn4Hy-68&ab_channel=StudyVillage"
              >
                <Image
                  src={"https://i.ibb.co/Lt4VgWQ/connectpc.png"}
                  width={263}
                  height={152}
                  alt=""
                />
              </Link>
            </Grid>
            <Grid item md={2} xs={12} pb={2} pt={2} textAlign={"center"}>
              <Link
                target={"_blank"}
                href="https://www.youtube.com/watch?v=4zbBSVJPtxc&ab_channel=StudyVillage"
              >
                <Image
                  src={"https://i.ibb.co/ZGBcKnL/sspc.png"}
                  width={263}
                  height={152}
                  alt=""
                />
              </Link>
            </Grid>
            <Grid item md={2} xs={12} pb={2} pt={2} textAlign={"center"}>
              <Link
                target={"_blank"}
                href="https://www.youtube.com/watch?v=mMtTr2Rr4Ew&ab_channel=StudyVillage"
              >
                <Image
                  src={"https://i.ibb.co/NpW8NBW/surveyspc.png"}
                  width={263}
                  height={152}
                  alt=""
                />
              </Link>
            </Grid>
            <Grid item md={2} xs={12} pb={2} pt={2} textAlign={"center"}>
              <Link
                target={"_blank"}
                href="https://www.youtube.com/watch?v=FQ-pjTlOHDY&ab_channel=StudyVillage"
              >
                <Image
                  src={"https://i.ibb.co/qkDJgnk/openhourspc.png"}
                  width={263}
                  height={152}
                  alt=""
                />
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Programs;
