import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";

// import styled from "styled-components";
import {
  Container,
  TextField,
  Typography,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
// import { borderRadius } from "@mui/system";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TeacherProfile = () => {
  const [teachername, setteachername] = useState("");
  const [teacherlastname, setteacherlastname] = useState("");
  const [teacherusername, setteacherusername] = useState("");
  const [teacherspeciality, setteacherspecialty] = useState("");
  const [teachermail, setteachermail] = useState("");
  const [teacherpassword, setteacherpassword] = useState("");
  const [teacheraddress, setteacheraddress] = useState("");
  const [teacherage, setteacherage] = useState(0);
  const [uploadedImage, setuploadedImage] = useState("");
  const [teacherpicChosen, setteacherpicChosen] = useState({});

  const uploadPic = () => {
    const pict = new FormData();
    pict.append("file", teacherpicChosen);
    pict.append("upload_preset", "maboz3uf");

    axios
      .post("https://api.cloudinary.com/v1_1/du5ydewvs/image/upload", pict)
      .then((res) => {
        console.log(res.data);
        const uploadedimage = res.data.url;
        setuploadedImage(uploadedimage);
      });
  };
  let navigate = useNavigate();
  const routeHome = () => {
    let home = `/`;
    navigate(home);
  };

  const deleteTeacher = () => {
    axios.delete(`http://localhost:3000/api/users/${data[0].idusers}`);
  };
  const EditTeacher = () => {
    axios
      .put(`http://localhost:3000/api/users/${data[0].idusers}/put`, {
        name: teachername,
        img: uploadedImage,
        lastname: teacherlastname,
        username: teacherusername,
        specialty: teacherspeciality,
        email: teachermail,
        password: teacherpassword,
        address: teacheraddress,
        age: teacherage,
        role: 1,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <Container
        id="wrapperteacher"
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
          Teacher Info
        </Typography>
        <Avatar
          alt="Remy Sharp"
          src={uploadedImage}
          sx={{
            width: 300,
            height: 300,
            maxHeight: 300,
            maxWidth: 300,

            alignSelf: "center",
          }}
        />
        <Grid sx={{ mt: "-40px", mb: "40px", ml: "8px" }}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={(e) => {
                setteacherpicChosen(e.target.files[0]);
              }}
            />
            <PhotoCamera />
          </IconButton>
        </Grid>
        <Grid sx={{ mt: "-35px" }}>
          <Button
            sx={{
              background: "#81D1FF",
              border: "none",
              p: "0.9rem 1.1rem",
              color: "#fff",
              borderRadius: "1rem",
              boxShadow: "0px 13px 24px -7px #81D1FF",

              m: "0.5rem",
              fontSize: "0.8rem",
              cursor: "pointer",
              "&:hover": {
                boxShadow: "0px 17px 16px -11px #81D1FF",

                transition: "all 0.3s ease-in-out",
              },
            }}
            variant="outlined"
            color="primary"
            aria-label="upload picture"
            component="label"
            onClick={() => uploadPic()}
          >
            <Typography
              sx={{ fontFamily: " 'Raleway', sans-serif" }}
              variant="overline"
            >
              {" "}
              Update{" "}
            </Typography>
          </Button>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Name
            </Typography>
            <TextField
              onChange={(e) => {
                setteachername(e.target.value);
              }}
              id="inputnameteacher "
              label={teachername}
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Last Name
            </Typography>
            <TextField
              onChange={(e) => {
                setteacherlastname(e.target.value);
              }}
              id="inputlastnamestudent"
              label={teacherlastname}
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              User Name
            </Typography>
            <TextField
              onChange={(e) => {
                setteacherusername(e.target.value);
              }}
              id="inputusernameteacher"
              label={teacherusername}
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Specialty
            </Typography>
            <TextField
              onChange={(e) => {
                setteacherspecialty(e.target.value);
              }}
              id="inputspecialityteacher"
              label={teacherspeciality}
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              E-mail
            </Typography>
            <TextField
              onChange={(e) => {
                setteachermail(e.target.value);
              }}
              id="inputmailteacher"
              label={teachermail}
              variant="standard"
              type="email"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Password
            </Typography>
            <TextField
              onChange={(e) => {
                setteacherpassword(e.target.value);
              }}
              id="inputpasswordteacher"
              label={teacherpassword}
              variant="standard"
              type="password"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Address
            </Typography>
            <TextField
              onChange={(e) => {
                setteacheraddress(e.target.value);
              }}
              id="inputaddressteacher"
              label={teacheraddress}
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Age
            </Typography>
            <TextField
              onChange={(e) => {
                setteacherage(e.target.value);
              }}
              id="inputageteacher"
              label={teacherage}
              variant="standard"
              type="number"
              inputProps={{ min: "25", max: "90", step: "1" }}
            ></TextField>
          </Grid>
        </Grid>
        <Grid xs={6} sx={{ my: "50px", mx: "400px" }}>
          Want to delete your account ?
          <IconButton
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "I'm Sure",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    "Deleted!",
                    "Your account has been deleted.",
                    "success",
                    (onclick = () => {
                      routeHome();
                    })
                  );
                }
              });
            }}
            size="large"
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid sx={{ my: "40px", mt: "00px" }}>
          <Button
            onClick={EditTeacher}
            sx={{
              mt: "-280px",
              ml: "-20px",
              color: "#81D1FF",
              border: "3px solid #81D1FF",
              "&:hover": {
                boxShadow: "0px 17px 16px -11px #81D1FF",
                transform: "translateY(-5px)",
                transition: "all 0.3s ease-in-out",
              },
            }}
            variant="outlined"
            type="submit"
          >
            Save Modifications
          </Button>
        </Grid>
      </Container>
      <Paper
        sx={{
          marginTop: "-50px",

          bottom: 0,
          width: "100%",
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
export default TeacherProfile;
