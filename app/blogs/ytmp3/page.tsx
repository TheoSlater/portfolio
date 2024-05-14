import { Container, Box, Typography, Button } from "@mui/material";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Ytmp3() {
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
            marginBottom: "15px",
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
              Building the app
            </Typography>
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
            {" "}
            <p>
              Of course, creating the actual backend for the Python application
              turned out to be a quite complex yet very rewarding task that
              demanded an attentive approach, as well as creative
              problem-solving skills. At the very beginning of this project, I
              developed a Python script which features the integration of the
              two respective libraries which are PyTube and MoviePy for the
              script to perform the primary functions. <br /> <br /> In the
              process of reading the documentation about both PyTube and
              MoviePy, I came up with a unique delivery of my solution which
              meets the goal of the application and that is downloading videos
              from YouTube with ease. It was a process of devising a mechanism
              through which users could provide the YouTube URLs via the
              command-line interface and which the script would automatically
              parse and get the PyTube capabilities to download the most
              relevant video in the background. <br /> <br /> Nonetheless, the
              very launch of the project faced a restriction - it could only
              download videos in MP4 format so users were allowed to only get
              the videos on their machines to watch and listen to them locally.
              The recognition that the application&apos;s usability can be
              further improved by including video-to-audio conversion prompted
              me to delve into implementing such a solution through the
              exploitation of features provided by the MoviePy library. <br />{" "}
              <br /> This smart technical concept was based on MoviePy&apos;s
              Convert() function, which would not only allow users to fetch the
              video file in the MP4 format but also convert this file to MP3
              directly. This further increased the applicability of the
              application. This involved the creation of a complex coding
              system, which was then tested and refined to guarantee smooth and
              user-friendly operation. <br /> <br /> The path of the Python
              application design back-end represented the whole concept of
              software development as a dynamic mixture of technical skills,
              creative problem-solving, and undeterred commitment to deliver an
              advanced and feature-rich solution, supposed to meet the growing
              market requirements.
              <br /> <br />
              Lately, I&apos;ve created the multi-threading functionality in the
              Python app which is to optimize its performance and make it
              faster, too. Realizing the need to be efficient, I incorporated
              multi-threading to allow for multiple processes to run in a
              concurrent fashion that minimizes the processing time and creates
              a great user experience. This is the indication that such an
              update is critical towards the long-lasting of this application
              being a competition and addressing the changing users&apos;
              requirements. <br /> <br />
              With a now finalised back end for my project, we move onto the
              front-end design.
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
              alt="ytmp3v1"
              layout="responsive"
              width={1000}
              height={500}
              style={{ borderRadius: "15px", marginBottom: "15px" }}
            />
            <p style={{ marginBottom: "15px" }}>
              After that, I implemented the design into the code to make a
              working YouTube video downloader. <br /> <br />
              It worked just fine. But, I needed something better. I created 2
              different buttons to download an MP4 or download and convert to
              MP3. For some reason, I just felt like I also had to add a console
              to the right.
            </p>
            <Image
              src="/ytmp3v2.png"
              alt="ytmp3v2"
              layout="responsive"
              width={1000}
              height={500}
              style={{ borderRadius: "15px", marginBottom: "15px" }}
            />
            <p style={{ marginBottom: "15px" }}>
              I&apos;ve recently updated my YTMP3 Converter to look much more
              user friendly by using CustomTkinter instead of Tkinter. Although
              tkinter had its flaws it worked just fine but didnt look very
              appealing for the users. <br /> <br /> I believe that having the
              console on the right was too overwhelming for the users causing
              them to not know what to do. <br /> <br /> Here is what is
              currently looks like (this is subject to change. "v1.2"):
            </p>
            <Image
              src="/ytmp3v3.png"
              alt="ytmp3v3"
              layout="responsive"
              width={800}
              height={400}
              style={{ borderRadius: "15px", marginBottom: "15px" }}
            />
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
              Conclusion
            </Typography>
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
            }}
          >
            <p style={{ fontSize: "18px" }}>
              So what did we get from this project? <br /> <br />
              Well, we no longer need to rely on terrible converter websites
              with loads of adverts popping up and potential viruses to just
              download an mp3. <br /> <br />
              Now that I&apos;ve developed this app to meet people&apos;s needs,
              it&apos;s truly a game-changer. In the near future I&apos;m going
              to update this project with better UI and even a website anyone
              can use.
              <br /> <br />I hope you enjoyed and got something out of this blog
              post. If you have any questions, feel free to reach out to me via
              email or text message. I&apos;d love to hear from you! <br />{" "}
              <br />
              You can download it here:{" "}
              <Link
                href="https://github.com/TheoSlater/YoutubeToMp3-Mp4/releases/tag/v1.2"
                passHref
                style={{ fontWeight: "500", textDecoration: "underline" }}
              >
                DOWNLOAD
              </Link>
            </p>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
