import { Container, Box, Typography, Button } from "@mui/material";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Ytmp3() {
  const currentDate = new Date();
  const dateString = `${currentDate.getDate()} · ${currentDate.toLocaleString(
    "default",
    { month: "long" }
  )} · ${currentDate.getFullYear()}`;

  return (
    <div
      className="page-container"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Container
        fixed
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90vh",
          margin: "auto",
          marginTop: "16px",
        }}
      >
        <Navbar />
        <Box
          sx={{
            padding: "25px",
            bgcolor: "rgb(34, 34, 34)",
            borderColor: "rgb(55, 55, 55)",
            borderWidth: "1px",
            width: "100%",
            minHeight: "90vh",
            borderRadius: "15px",
            marginTop: "1px",
          }}
        >
          <Box
            sx={{
              padding: "15px",
              bgcolor: "rgb(38, 38, 38)",
              borderColor: "rgb(55, 55, 55)",
              borderWidth: "1px",
              width: "100%",
              minHeight: "5vh",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              marginBottom: "30px",
            }}
          >
            <Typography variant="h4" color="white" fontWeight={"550"}>
              Youtube To Mp3
            </Typography>
            <Typography variant="body1" color="rgb(125, 125, 125)">
              May 10 · 2024
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "15px",
              bgcolor: "rgb(38, 38, 38)",
              borderColor: "rgb(55, 55, 55)",
              borderWidth: "1px",
              width: "100%",
              minHeight: "30vh",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              marginBottom: "30px",
            }}
          >
            <Image
              src="/YoutubeToMp3.png"
              alt="ytmp3poster"
              layout="responsive"
              width={1000}
              height={500}
              style={{ borderRadius: "15px" }}
            />
          </Box>
          <Box
            sx={{
              padding: "15px",
              bgcolor: "rgb(38, 38, 38)",
              borderColor: "rgb(55, 55, 55)",
              borderWidth: "1px",
              width: "100%",
              minHeight: "20vh",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              marginBottom: "30px",
            }}
          >
            <p>
              Let&apos;s rewind time to the starting month of January 2024 when
              I was facing a problem continually during school hours—blocked
              YouTube converter sites. Being fed up with overcoming this same
              recurring difficulty, I quite deliberately started working on a
              solution. The idea of making an application to convert YouTube to
              MP3 or MP4 in Python sparked a creative fire in me. When the
              evenings I came back home were both tiresome and mentally
              draining, I made it a habit to analyze the best moves that I could
              make. <br /> <br />
              The Python which was taught to me was taken on as a raw material
              and I never showed a lack of motivation. My goal was clear: to
              write an elegantly functional and user-centred code that strives
              for maximum efficiency without messing the experience with
              intrusive ads, if any. The app launching turned out to be a
              crucial step not only in the journey to overcome a problem but
              also in my first chance to grasp proven computer science
              technology skills and a chance to be original. <br></br>
              <br /> At this point, as I look back on the path, I am fully aware
              of the difference that was made in my life by my choice to meet
              that challenge on equal terms. One day from January 2024 I have
              been committed to bringing my app to perfection through refining
              and polishing. While designing the app, keeping the user
              convenience in mind is of course the ultimate goal of the
              application and with each iteration, I will make sure that users
              can convert their favorite YouTube videos without any
              difficulties. This project, by far, has gone beyond just being a
              solution to my problem. Instead, it has become a reflection of how
              resilient and driven I can be. Yet, I know accompanying the next
              chapter of what lies ahead is full of new possibilities and
              thrilling.
            </p>
          </Box>
          <Box
            sx={{
              padding: "15px",
              bgcolor: "rgb(38, 38, 38)",
              borderColor: "rgb(55, 55, 55)",
              borderWidth: "1px",
              width: "100%",
              minHeight: "5vh",
              borderRadius: "15px",
              marginBottom: "30px",
            }}
          >
            <Typography variant="h4" color="white" fontWeight={"550"}>
              Designing the front-end
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "15px",
              bgcolor: "rgb(38, 38, 38)",
              borderColor: "rgb(55, 55, 55)",
              borderWidth: "1px",
              width: "100%",
              minHeight: "30vh",
              borderRadius: "15px",
              marginBottom: "30px",
            }}
          >
            <p style={{ marginBottom: "15px" }}>
              Using Tkinter for Python allowed me to create some simple UI/UX
              for the buttons and text box. Although Tkinter isn&apos;t as
              rewarding in terms of good-looking UI it still does the job.{" "}
              <br /> <br />
              After messing around with tk for a bit I created a simple window
              with a text box and a button that allowed me to move further into
              the backend of the program.
            </p>
            <Image
              src="/ytmp3v1.png"
              alt="ytmp3poster"
              layout="responsive"
              width={1000}
              height={500}
              style={{ borderRadius: "15px" }}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
}
