"use client";
import React, { useState } from "react";

const YtMp3 = () => {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const handleConvert = async () => {
    try {
      const currentUrl = url;
      const res = await fetch("https://ytmp3-server.vercel.app/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: currentUrl }),
      });
      if (!res.ok) {
        throw new Error("Conversion failed");
      }
      const data = await res.json();
      if ("error" in data) {
        throw new Error(data.error);
      }
      const audioUrl = data.audio_file_path;
      const link = document.createElement("a");
      link.href = audioUrl;
      link.setAttribute("download", "converted.mp3");
      document.body.appendChild(link);
      link.click();
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      setResponse("Conversion successful. File will be downloaded.");
    } catch (error: any) {
      console.error("Error converting:", error);
      setResponse(error.message);
    }
  };

  return (
    <div>
      <h1>YouTube to MP3 Converter</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube URL"
      />
      <button onClick={handleConvert}>Convert</button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default YtMp3;
