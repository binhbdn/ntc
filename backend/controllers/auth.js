import { sign, verify } from "hono/jwt";

export const login = async (c) => {
  const kv = c.env.KV;

  const { username, password } = await c.req.json();
  if (!username || !password) return c.json({ success: false, error: "Tên người dùng và mật khẩu là bắt buộc" }, 400);
  if (username !== c.env.USERNAME || password !== c.env.PASSWORD) return c.json({ success: false, error: "Tên người dùng hoặc mật khẩu không hợp lệ" }, 401);

  const version = await kv.get("app:version");
  const token = await sign({ name: c.env.USERNAME }, c.env.JWT_SECRET);

  return c.json({ success: true, version, token });
};

export const verifyToken = async (c) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader) return c.json({ success: false, error: "Không có token xác thực" }, 401);

  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;
  const error = "Token không hợp lệ";
  if (!token) return c.json({ success: false, error }, 401);

  try {
    const isValid = await verify(token, c.env.JWT_SECRET);
    if (!isValid) return c.json({ success: false, error }, 401);
    return c.json({ success: true });
  } catch (error) {
    return c.json({ success: false, error }, 401);
  }
};

export const loginRequired = async (c, next) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader) return c.json({ success: false, error: "Không có token xác thực" }, 401);

  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;
  const error = "Token không hợp lệ";
  if (!token) return c.json({ success: false, error }, 401);

  try {
    const isValid = await verify(token, c.env.JWT_SECRET);
    if (!isValid) return c.json({ success: false, error }, 401);
    await next();
  } catch (error) {
    return c.json({ success: false, error }, 401);
  }
};
