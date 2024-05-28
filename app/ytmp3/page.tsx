import { useState } from "react";

export default function YTMP3() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleDownload = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessage("Downloading MP4...");

    const response = await fetch("http://127.0.0.1:8000/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ url }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  const handleDownloadAndConvert = async (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    setMessage("Downloading and Converting to MP3...");

    const response = await fetch(
      "http://127.0.0.1:8000//download_and_convert",
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
      <p>{message}</p>
    </div>
  );
}
