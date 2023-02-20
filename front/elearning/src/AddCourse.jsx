import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Container,
  TextField,
  Typography,
  Box,
  Grid,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const AddCourse = () => {
  const [coursename, setcoursename] = useState("");
  const [courseprice, setcourseprice] = useState("");
  const [coursedescription, setcoursedescription] = useState("");
  const [courseduration, setcoursduration] = useState("");
  const [courselanguage, setcourselanguage] = useState("");
  const [courseimage, setcourseimage] = useState("");
  const [studentgains, setstudentgains] = useState("");
  const [coursevideo, setcoursevideo] = useState("");
  const [coursecategorie, setcoursecategorie] = useState("");

  var Token = Cookies.get("AcessToken");

  const decodedToken = jwt_decode(Token) || "";

  const Addcour = (post) => {
    axios
      .post(`http://127.0.0.1:5173/api/courses/add`, {
        name: coursename,
        price: courseprice,
        description: coursedescription,
        duration: courseduration,
        language: courselanguage,
        thumbnail: courseimage,
        gains: studentgains,
        video: coursevideo,
        instructor: decodedToken.idusers,
        cat: coursecategorie,
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
          <Grid xs={6} sx={{ my: "50px" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="cate">Categorie</InputLabel>
              <Select
                labelId="cat-select"
                id="cat-seleect"
                value={coursecategorie}
                onChange={(e) => {
                  setcoursecategorie(e.target.value);
                }}
                label="Categorie"
              >
                <MenuItem value={1}>Math</MenuItem>
                <MenuItem value={2}>Science</MenuItem>
                <MenuItem value={3}>Development</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            xs={0}
            sx={{
              my: "70px",
              paddingBottom: "190px",
              ml: "230px",
            }}
          >
            <IconButton
              onClick={() => {
                Swal.fire({
                  titleText: coursename,
                  text: { coursedescription },

                  imageUrl: { courseimage },
                  footer: { courseprice },
                  imageWidth: 400,
                  imageHeight: 200,
                  imageAlt: "Custom image",
                  animation: false,
                  width: "500px",
                });
              }}
              size="large"
            >
              <VisibilityIcon />
            </IconButton>
            <Button
              onClick={() => Addcour()}
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
