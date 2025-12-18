import { readFile } from "fs/promises";
import { createServer } from "http";

const server = createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // For API-like usage
  
  if (req.method === "GET") {
    if (req.url === "/" || req.url === "/index.html") {
      try {
        const data = await readFile("index.html", "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } catch (error) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - index.html not found</h1>");
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

const PORT = process.env.PORT || 3002;

server.listen(PORT, "0.0.0.0", () => {  // Bind to 0.0.0.0 for Render
  console.log(`Server running on port ${PORT}`);
});
