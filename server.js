const express = require("express");

const app = express();
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT) || 3000;

app.get("/", (_req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello Vic</title>
        <style>
          :root {
            color-scheme: light;
            font-family: "Avenir Next", "Segoe UI", sans-serif;
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            background:
              radial-gradient(circle at top, #fff4cc, transparent 40%),
              linear-gradient(135deg, #0f172a, #1e293b 55%, #334155);
            color: #f8fafc;
          }

          main {
            padding: 3rem 4rem;
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 24px;
            background: rgba(15, 23, 42, 0.65);
            box-shadow: 0 24px 80px rgba(15, 23, 42, 0.35);
            backdrop-filter: blur(12px);
            text-align: center;
          }

          h1 {
            margin: 0;
            font-size: clamp(2.5rem, 8vw, 5rem);
            letter-spacing: 0.08em;
          }
        </style>
      </head>
      <body>
        <main>
          <h1>Hello Vic</h1>
        </main>
      </body>
    </html>
  `);
});

function startServer() {
  return app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
}

if (require.main === module) {
  startServer();
}

module.exports = { app, startServer };
