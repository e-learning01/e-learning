import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import $ from "jquery";
import {
  Container,
  TextField,
  Typography,
  Box,
  Grid,
  IconButton,
  Switch,
  FormControlLabel,
  CssBaseline,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
// import { borderRadius } from "@mui/system";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import "@fontsource/roboto";
import { useState } from "react";

const StudentProfile = () => {
  const [studentname, setstudentname] = useState("");
  const [studentlastname, setstudentlastname] = useState("");
  const [studentusername, setstudentusername] = useState("");
  const [studentmail, setstudentmail] = useState("");
  const [studentpassword, setstudentpassword] = useState("");
  const [studentaddress, setstudentaddress] = useState("");
  const [studentage, setstudentage] = useState(0);

  const [picChosen, setpicChosen] = useState({});
  const [uploadedImg, setuploadedImg] = useState("");

  const [decodedToken, setdecodedToken] = useState({});

  $(document).ready(function () {
    $("#dark").click(function () {
      $("html").css({
        "background-color": "black",
        color: "white",
      });
    });
  });

  $(document).ready(function () {
    $("#dark").click(function () {
      $("header").css({
        "background-color": "lightgrey",
        color: "black",
      });
    });
  });
  $(document).ready(function () {
    $("#dark").click(function () {
      $("a").css({
        color: "black",
      });
    });
  });
  $(document).ready(function () {
    $("#dark").click(function () {
      $("h1").css({
        color: "black",
      });
    });
  });

  $(document).ready(function () {
    $("#dark").click(function () {
      $("#building").css({
        color: "black",
        "background-color": "#b4b4b4",

        border: "solid grey",
      });
    });
  });

  $(document).ready(function () {
    $("#light").hide(function () {});
  });

  $(document).ready(function () {
    $("#light").click(function () {
      $("html").css({
        "background-color": "white",
        color: "black",
      });
    });
  });

  $(document).ready(function () {
    $("#light").click(function () {
      $("header").css({
        "background-color": "black",
        color: "white",
      });
    });
  });
  $(document).ready(function () {
    $("#light").click(function () {
      $("a").css({
        color: "#f70776",
      });
    });
  });
  $(document).ready(function () {
    $("#light").click(function () {
      $("h1").css({
        color: "#f70776",
      });
    });
  });
  $(document).ready(function () {
    $("#light").click(function () {
      $(this).css({
        color: "black",
        "background-color": "black",
        color: "transparent",
        border: "solid #f70776",
      });
    });
  });
  $(document).ready(function () {
    $("#dark").click(function () {
      $("#light").show(2000);
      $("#dark").hide(2000);
    });
  });
  $(document).ready(function () {
    $("#light").click(function () {
      $(this).hide(function () {
        $("#dark").show(function () {});
      });
    });
  });

  var Token = Cookies.get("AcessToken");
  useEffect(() => {
    if (Token) {
      setdecodedToken(jwt_decode(Token) || "");
    }
  }, []);

  const uploadPic = () => {
    const picd = new FormData();
    picd.append("file", picChosen);
    picd.append("upload_preset", "maboz3uf");

    axios
      .post("https://api.cloudinary.com/v1_1/du5ydewvs/image/upload", picd)
      .then((res) => {
        console.log(res.data);
        const uploadedImg = res.data.secure_url;
        setuploadedImg(uploadedImg);
      });
  };
  let navigate = useNavigate();
  const routeHome = () => {
    let teacherprofile = `/teacherprofile`;
    navigate(teacherprofile);
  };
  const deleteStudent = () => {
    axios.delete(`http://127.0.0.1:5173/api/users/${decodedToken.idusers}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
  };

  const EditStudent = () => {
    // if (studentname === "") {
    //   setstudentname(studentname);
    // } else if (studentlastname === "") {
    //   setstudentlastname(studentlastname);
    // } else if (studentusername === "") {
    //   setstudentusername(studentusername);
    // } else if (studentmail === "") {
    //   setstudentmail(studentmail);
    // } else if (studentpassword === "") {
    //   setstudentpassword(studentpassword);
    // } else if (studentaddress === "") {
    //   setstudentaddress(studentaddress);
    // } else if (studentage === "") {
    //   setstudentage(studentage);
    // } else if (uploadedImg === "") {
    //   setuploadedImg(uploadedImg);
    // }
    axios
      .put(
        `http://127.0.0.1:5173/api/users/${decodedToken.idusers}/put`,

        {
          name: studentname,
          lastname: studentlastname,
          username: studentusername,
          email: studentmail,
          password: studentpassword,
          address: studentaddress,
          img: uploadedImg,
          age: studentage,
          role: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        Cookies.set("AcessToken", res.data);
        setdecodedToken(jwt_decode(Cookies.get("AcessToken")));
        Token = res.data;
      });
  };
  return (
    <div>
      <button id="dark">Dark Mode</button>
      <button id="light">Light Mode</button>
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
            fontFamily: " 'Raleway', sans-serif",
          }}
        >
          Student Info
        </Typography>
        <Avatar
          alt="Remy Sharp"
          src={decodedToken.img}
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
            <Typography
              sx={{ fontFamily: " 'Raleway', sans-serif" }}
              variant="overline"
            >
              Update
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
                setstudentname(e.target.value);
              }}
              id="inputnamestudent  "
              label={decodedToken.name}
              value={studentname}
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Last Name
            </Typography>
            <TextField
              onChange={(e) => {
                setstudentlastname(e.target.value);
              }}
              id="inputlastnameteacher"
              label={decodedToken.lastname}
              defaultValue={studentlastname}
              variant="standard"
            ></TextField>
          </Grid>
          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              User Name
            </Typography>
            <TextField
              onChange={(e) => {
                setstudentusername(e.target.value);
                console.log(studentusername);
              }}
              id="inputusernamestudent"
              label={decodedToken.username}
              defaultValue={studentusername}
              variant="standard"
            ></TextField>
          </Grid>

          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              E-mail
            </Typography>
            <TextField
              onChange={(e) => {
                setstudentmail(e.target.value);
              }}
              id="inputmailstudent"
              label={decodedToken.email}
              defaultValue={studentmail}
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
                setstudentpassword(e.target.value);
              }}
              id="inputpasswordstudent"
              label="******"
              defaultValue={studentpassword}
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
                setstudentaddress(e.target.value);
              }}
              id="inputaddressstudent"
              label={decodedToken.address}
              defaultValue={studentaddress}
              variant="standard"
            ></TextField>
          </Grid>

          <Grid xs={6} sx={{ my: "50px" }}>
            <Typography sx={{ fontFamily: " 'Raleway', sans-serif" }}>
              Age
            </Typography>
            <TextField
              onChange={(e) => {
                console.log(e.target.value);
                setstudentage(e.target.value);
              }}
              id="inputagestudent"
              label={decodedToken.age}
              defaultValue={studentage}
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
                      (onclick = () => {
                        deleteStudent();

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

          <Grid xs={12} sx={{ my: "50px", ml: "600px", mt: "-100px" }}>
            <Button
              onClick={(e) => {
                EditStudent();
              }}
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
export default StudentProfile;
