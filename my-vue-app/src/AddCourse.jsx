import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Typography,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// import jwtDecode from "jwt-decode";
const AddCourse = () => {
  const [coursename, setcoursename] = useState("");
  const [courseprice, setcourseprice] = useState("");
  const [coursedescription, setcoursedescription] = useState("");
  const [courseduration, setcoursduration] = useState("");
  const [courselanguage, setcourselanguage] = useState("");
  const [courseimage, setcourseimage] = useState("");
  const [studentgains, setstudentgains] = useState("");
  const [coursevideo, setcoursevideo] = useState("");
  const Addcour = (post) => {
    console.log(post);
    axios
      .post(`http://localhost:5173/api/addCourse`, {
        name: coursename,
        price: courseprice,
        description: coursedescription,
        duration: courseduration,
        language: courselanguage,
        thumbnail: courseimage,
        gains: studentgains,
        video: coursevideo,
        instructor: data[0].idusers,
        cat: "",
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <Container
        id="wrappercourse"
        sx={{
          bgcolor: "transparent",
          height: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            margin: "1",
            fontFamily: " 'Raleway', sans-serif",
          }}
        >
          Add Course
        </Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ mt: "150px" }}
        >
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Course Name
            </Typography>
            <TextField
              onChange={(e) => {
                setcoursename(e.target.value);
              }}
              id="inputcourse"
              label={coursename}
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Course Price
            </Typography>
            <TextField
              onChange={(e) => {
                setcourseprice(e.target.value);
              }}
              id="inputcourseprice"
              label={courseprice}
              variant="standard"
            ></TextField>
          </Grid>

          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Course Duration
            </Typography>
            <TextField
              onChange={(e) => {
                setcoursduration(e.target.value);
              }}
              id="inputcourseduration"
              label={courseduration}
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Course Language
            </Typography>
            <TextField
              onChange={(e) => {
                setcourselanguage(e.target.value);
              }}
              id="inputcourselanguage"
              label={courselanguage}
              variant="standard"
            ></TextField>
          </Grid>

          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Students Gains
            </Typography>
            <TextField
              onChange={(e) => {
                setstudentgains(e.target.value);
              }}
              id="inputcoursegains"
              label={studentgains}
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Course thumbnail{" "}
            </Typography>
            <TextField
              onChange={(e) => {
                setcourseimage(e.target.value);
              }}
              id="inputimgcourse"
              label="Thumbnail link "
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Course Description
            </Typography>
            <TextField
              onChange={(e) => {
                setcoursedescription(e.target.value);
              }}
              id="inputcoursedescription"
              variant="standard"
              type="text"
              multiline
              rows={5}
              sx={{ width: "350px" }}
              defaultValue={coursedescription}
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Course Video{" "}
            </Typography>
            <TextField
              onChange={(e) => {
                setcoursevideo(e.target.value);
              }}
              id="inputvidcourse"
              label="Video link"
              variant="standard"
            ></TextField>
          </Grid>

          <Grid
            xs={6}
            sx={{
              my: "50px",
              paddingBottom: "190px",
              ml: "270px",
            }}
          >
            <Button
              onClick={() => Addcour}
              variant="outlined"
              type="submit"
              sx={{
                color: "#81D1FF",
                border: "3px solid #81D1FF",

                "&:hover": {
                  boxShadow: "0px 17px 16px -11px #81D1FF",
                  transform: "translateY(-5px)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              Save Course
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Paper
        sx={{
          marginTop: "-70px",
          width: "100%",

          bottom: 0,
        }}
        component="footer"
        square
        variant="outlined"
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my: 1,
            }}
          >
            <div>
              {/* <Image
                priority
                src="/Logo.svg"
                width={75}
                height={30}
                alt="Logo"
              /> */}
            </div>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            <Grid sx={{ mx: "30px" }}>
              <Typography
                sx={{ fontFamily: " 'Raleway', sans-serif" }}
                variant="caption"
              >
                Home
              </Typography>
            </Grid>
            <Grid sx={{ mx: "30px" }}>
              <Typography
                sx={{ fontFamily: " 'Raleway', sans-serif" }}
                variant="caption"
              >
                About BrainLab
              </Typography>
            </Grid>
            <Grid sx={{ mx: "30px" }}>
              <Typography
                sx={{ fontFamily: " 'Raleway', sans-serif" }}
                variant="caption"
              >
                All Courses
              </Typography>
            </Grid>
            <Grid sx={{ marginTop: "110px", marginLeft: "auto" }}>
              <Typography
                sx={{ fontFamily: " 'Raleway', sans-serif" }}
                variant="caption"
                color="initial"
              >
                Copyright ©2023 BrainLab.
              </Typography>
            </Grid>
          </Box>
        </Container>
      </Paper>
    </div>
  );
};
export default AddCourse;
