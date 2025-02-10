import { Hono } from "hono";
import { cors } from "hono/cors";
import { login, verifyToken, loginRequired } from "./controllers/auth";
import { setBanners, getBanners } from "./controllers/banners";

const app = new Hono();

app.use("/api/*", cors({ origin: ["https://ntc-me.pages.dev", "http://localhost:5175"] }));

// auth
app.post("/api/login", login);
app.get("/api/verify-token", verifyToken);

// banners
app.post("/api/banners", loginRequired, setBanners);
app.get("/api/banners", getBanners);

export default {
  fetch: app.fetch.bind(app)
};
