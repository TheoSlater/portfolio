"use client";

import { useState } from "react";

const YtMp3 = () => {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      setResponse(data.message || data.error);
    } catch (error) {
      setResponse("Error: Could not reach the server.");
    }
  };

  return (
    <div>
      <h1>YouTube to MP3 Converter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube URL"
        />
        <button type="submit">Convert</button>
      </form>
      {response && <div>{response}</div>}
    </div>
  );
};

export default YtMp3;
