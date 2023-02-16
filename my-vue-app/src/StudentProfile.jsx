import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
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

const StudentProfile = () => {
  const [studentname, setstudentname] = useState("");
  const [studentlastname, setstudentlastname] = useState("");
  const [studentusername, setstudentusername] = useState("");
  const [studentmail, setstudentmail] = useState("");
  const [studentpassword, setstudentpassword] = useState("");
  const [studentaddress, setstudentaddress] = useState("");
  const [studentage, setstudentage] = useState(0);

  const [picChosen, setpicChosen] = useState({});
  const uploadPic = () => {
    const picd = new FormData();
    picd.append("file", picChosen);
    picd.append("upload_preset", "maboz3uf");

    axios
      .post("https://api.cloudinary.com/v1_1/du5ydewvs/image/upload", picd)
      .then((res) =>
        axios.post("database", {
          image: res.data.url,
        })
      );
  };
  let navigate = useNavigate();
  const routeHome = () => {
    let teacher = `/`;
    navigate(home);
  };
  const deleteStudent = () => {
    axios.delete("");
  };
  const EditStudent = () => {
    axios
      .put(`http://localhost:3000/api/${data[0].username}`, {
        name: studentname,
        lastname: studentlastname,
        username: studentusername,
        email: studentmail,
        password: studentpassword,
        address: studentaddress,
        age: studentage,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <Container
        id="wrapperstudent"
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
          }}
        >
          Student Info
        </Typography>
        <Avatar
          alt="Remy Sharp"
          src="https://t4.ftcdn.net/jpg/01/12/09/17/360_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg"
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
                setpicChosen(e.target.files[0]);
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
              transition: "all 0.3s ease-in-out",
              m: "0.5rem",
              fontSize: "0.8rem",
              cursor: "pointer",
              "&:hover": {
                boxShadow: "0px 17px 16px -11px #81D1FF",
              },
            }}
            variant="outlined"
            color="primary"
            aria-label="upload picture"
            component="label"
            onClick={() => uploadPic()}
          >
            <Typography variant="overline"> Update </Typography>
          </Button>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography>Name</Typography>
            <TextField
              onChange={(e) => {
                setstudentname(e.target.value);
              }}
              id="inputnamestudent  "
              label={studentname}
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography>Last Name</Typography>
            <TextField
              onChange={(e) => {
                setstudentlastname(e.target.value);
              }}
              id="inputlastnameteacher"
              label={studentlastname}
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography>User Name</Typography>
            <TextField
              onChange={(e) => {
                setstudentusername(e.target.value);
              }}
              id="inputusernamestudent"
              label={studentusername}
              variant="standard"
            ></TextField>
          </Grid>

          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography>E-mail</Typography>
            <TextField
              onChange={(e) => {
                setstudentmail(e.target.value);
              }}
              id="inputmailstudent"
              label={studentmail}
              variant="standard"
              type="email"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography>Password</Typography>
            <TextField
              onChange={(e) => {
                setstudentpassword(e.target.value);
              }}
              id="inputpasswordstudent"
              label={studentpassword}
              variant="standard"
              type="password"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography>Address</Typography>
            <TextField
              onChange={(e) => {
                setstudentaddress(e.target.value);
              }}
              id="inputaddressstudent"
              label={studentaddress}
              variant="standard"
            ></TextField>
          </Grid>

          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography>Age</Typography>
            <TextField
              onChange={(e) => {
                setstudentage(e.target.value);
              }}
              id="inputagestudent"
              label={studentage}
              variant="standard"
              type="number"
              inputProps={{ min: "15", max: "90", step: "1" }}
            ></TextField>
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
                      (onclick = { deleteStudent, routeHome })
                    );
                  }
                });
              }}
              size="large"
            >
              <DeleteIcon />
            </IconButton>
          </Grid>

          <Grid xs={12} sx={{ my: "50px", ml: "600px", mt: "-100px" }}>
            <Button
              onClick={EditStudent}
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
        </Grid>
      </Container>
      <Paper
        sx={{
          marginTop: "-50px",
          width: "100%",

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
              <Typography variant="caption">Home</Typography>
            </Grid>
            <Grid sx={{ mx: "30px" }}>
              <Typography variant="caption">About BrainLab</Typography>
            </Grid>
            <Grid sx={{ mx: "30px" }}>
              <Typography variant="caption">All Courses</Typography>
            </Grid>
            <Grid sx={{ marginTop: "110px", marginLeft: "auto" }}>
              <Typography variant="caption" color="initial">
                Copyright ©2023 BrainLab.
              </Typography>
            </Grid>
          </Box>
        </Container>
      </Paper>
    </div>
  );
};
export default StudentProfile;
