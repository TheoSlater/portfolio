"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Downloader() {
  const [url, setUrl] = useState("");
  const [consoleOutput, setConsoleOutput] = useState("");

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const downloadMp4 = async () => {
    try {
      const response = await fetch(`YOUR_DOWNLOAD_ENDPOINT?videoUrl=${url}`);
      const data = await response.json();
      setConsoleOutput(
        `Downloading MP4: ${data.title}\nMP4 Download completed!\n`
      );
    } catch (error: any) {
      setConsoleOutput(`Error: ${error.message}\n`);
    }
  };

  const downloadAndConvert = async () => {
    try {
      const response = await fetch(`YOUR_CONVERT_ENDPOINT?videoUrl=${url}`);
      const data = await response.json();
      setConsoleOutput(
        `Downloading MP4: ${data.title}\nMP4 Download completed!\nConversion to MP3 completed!\n`
      );
    } catch (error: any) {
      setConsoleOutput(`Error: ${error.message}\n`);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <label>Enter YouTube video URL:</label>
      <input
        type="text"
        value={url}
        onChange={handleUrlChange}
        placeholder="Paste YouTube URL here"
      />

      <button onClick={downloadMp4}>Download MP4</button>
      <button onClick={downloadAndConvert}>Download and Convert to MP3</button>

      <div>
        <textarea value={consoleOutput} readOnly />
      </div>
    </div>
  );
}
