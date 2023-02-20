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
import { Cookie, PhotoCamera, Token } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
// import { borderRadius } from "@mui/system";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useAuth } from "./Auth";
var decodedTokenteacher;
const Tokenteacher = Cookies.get("AcessToken");
if (Tokenteacher) {
  decodedTokenteacher = jwt_decode(Tokenteacher) || "";
}

const TeacherProfile = () => {

  const isconnected = useAuth((state)=>state.connected)
  const user = useAuth((state)=>state.user)
  const connect = useAuth((state)=>state.connect)
 
  const [teachername, setteachername] = useState(undefined);
  const [teacherlastname, setteacherlastname] = useState(undefined);
  const [teacherusername, setteacherusername] = useState(undefined);
  const [teacherspeciality, setteacherspecialty] = useState(undefined);
  const [teachermail, setteachermail] = useState(undefined);
  const [teacherpassword, setteacherpassword] = useState(undefined);
  const [teacheraddress, setteacheraddress] = useState(undefined);
  const [teacherage, setteacherage] = useState(undefined);
  const [uploadedImage, setuploadedImage] = useState(undefined);
  const [teacherpicChosen, setteacherpicChosen] = useState(undefined);

  const uploadPic = () => {
    const pict = new FormData();
    pict.append("file", teacherpicChosen);
    pict.append("upload_preset", "maboz3uf");

    axios
      .post("https://api.cloudinary.com/v1_1/du5ydewvs/image/upload", pict)
      .then((res) => {
        console.log(res.data);
        const uploadedImage = res.data.secure_url;
        setuploadedImage(uploadedImage);
      });
  };
  let navigate = useNavigate();
  const routeHome = () => {
    let studentprofile = `/teacherprofile`;
    navigate(studentprofile);
  };

  const deleteTeacher = () => {
    axios.delete(
      `http://127.0.0.1:5173/api/users/${decodedTokenteacher.idusers}`,
      {
        headers: {
          Authorization: `Bearer ${Tokenteacher}`,
        },
      }
    ).then((res)=>{
      Cookies.remove("AcessToken")
      navigate("/")
    });
  };
  const EditTeacher = () => {
    connect({
      name: teachername || user.name,
      img: uploadedImage || user.img,
      lastname: teacherlastname || user.lastname,
      username: teacherusername || user.username,
      specialty: teacherspeciality || user.specialty,
      email: teachermail || user.email,
      password: teacherpassword || user.password,
      address: teacheraddress || user.address,
      age: teacherage || user.age,
    
    })
    axios
      .put(
        `http://127.0.0.1:5173/api/users/${decodedTokenteacher.idusers}/put`,
        {
         ...user,
          role: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${Tokenteacher}`,
          },
        }
      )
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
          src={decodedTokenteacher.img}
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
              label={user.name}
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
              label={user.lastname}
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
              label={user.username}
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
              label={user.specialty}
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
              label={user.email}
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
              label="*******"
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
              label={user.address}
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
              label={user.age}
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
                      deleteTeacher();

                      onclick = () => {
                        routeHome();
                      };
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
