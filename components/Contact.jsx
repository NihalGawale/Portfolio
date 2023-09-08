"use client";
import React, { useEffect, useState ,useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Button, FormControl, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "next-themes";
import emailjs from '@emailjs/browser';
import Link from "next/link";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3086B8",
    },
    secondary: {
      main: "#03a9f4",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

const Contact = () => {
  const { theme, setTheme } = useTheme();
  const [fullName, setFullName] = useState();

  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 
    console.log(e,form.current,"-----");
    emailjs.sendForm('service_y1pu6e7', 'template_h1u3zhn', form.current, 'dnK1sKT-Kja__Zmva')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

//   const handleSubmit = () => {
//     console.log(firstName, lastName, email, phoneNumber, subject, message);
//   };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : ""}>
      <div id="contact" className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-2 pt-28  pb-14 w-full">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
            Contact
          </p>
          <h2 className="py-4">Get in Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-lg dark:shadow-gray-700 rounded-xl p-4">
              <div className="lg:p-4  h-full">
                <div>
                  <img
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src="/assets/contact.jpg"
                  ></img>
                </div>

                <div>
                  <h2 className="py-2"> NIHAL GAWALE</h2>
                  <p>Full Stack Developer</p>
                  <p className="py-4"> Let's get Connected and have a talk. </p>
                </div>
                <div>
                  <p className="uppercase pt-4 text-[#5651e5]">
                    Connect with me
                  </p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-md dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                    <Link href="https://www.linkedin.com/in/nihal-gawale-3860a1161/">
                       <LinkedInIcon />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-md dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                      <Link href="https://www.instagram.com/nihalgawale_99/?next=%2F">
                      <InstagramIcon />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-md dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                      <Link href="#contact">
                      <EmailOutlinedIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-md dark:shadow-gray-700 rounded-xl lg:p-4">
              <div className="p-4 flex items-center justify-center">
                <form   ref={form} onSubmit={sendEmail}>
                  <div className="grid md:grid-cols-2 gap-8 w-full py-2 ">
                    <div className="flex flex-col">
                      <TextField    
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        color="primary"
                        name = "user_name"
                        required={true}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        color="primary"
                        type="email"
                        maxLength="64"
                        name = "user_email"
                        required={true}
                        pattern=".+@beststartupever.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                 

                    {/* <div className="flex flex-col col-span-2">
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        color="primary"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div> */}

                    {/* <div className="flex flex-col col-span-2">
                      <TextField
                        id="outlined-basic"
                        name="email"
                        label="Subject"
                        variant="outlined"
                        color="primary"
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div> */}

                    <div className="flex flex-col col-span-2 ">
                      <TextField
                        id="outlined-basic"
                        name="message"
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        
                        color="primary"
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col col-span-2  ">
                      <button
                        className="rounded-lg dark:shadow-none py-2 bg-blue-600"
                        type="submit" value="Send" onClick={() => {console.log("clicked");}}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Contact;
