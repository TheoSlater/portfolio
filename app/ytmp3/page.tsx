"use client";

import { useState, FormEvent } from "react";

export default function YTMP3() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleDownload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Downloading MP4...");

    try {
      const response = await fetch("http://127.0.0.1:8000/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ url }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("An unknown error occurred.");
      }
    }
  };

  const handleDownloadAndConvert = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Downloading and Converting to MP3...");

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/download_and_convert",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ url }),
        }
      );

      const data = await response.json();
      setMessage(data.message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("An unknown error occurred.");
      }
    }
  };

  const handleDebugDownload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Debug Downloading MP4...");

    try {
      const response = await fetch("http://127.0.0.1:8000/debug_download", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ url }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      <h1>YouTube to MP3 Converter</h1>
      <form onSubmit={handleDownload}>
        <label htmlFor="url">YouTube URL:</label>
        <input
          type="text"
          id="url"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Download MP4</button>
      </form>
      <form onSubmit={handleDownloadAndConvert}>
        <button type="submit">Download and Convert to MP3</button>
      </form>
      <form onSubmit={handleDebugDownload}>
        <button type="submit">Debug Download MP4</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
