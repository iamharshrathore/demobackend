import { readFile } from "fs/promises";
import { createServer } from "http";

const server = createServer(async (req, res) => {

  if (req.method === "GET") {
    if (req.url === "/") {
      try {
        const data = await readFile("index.html", "utf-8");

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } catch (error) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 page not found");
      }
    } 
  } 
});

const PORT = process.env.PORT;

server.listen(PORT, "0.0.0.0", () => {  // Bind to 0.0.0.0 for Render
  console.log(`Server running on port ${PORT}`);
});
