export const setBanners = async (c) => {
  const { banners } = await c.req.json();
  await c.env.KV.put("banners", JSON.stringify(banners));

  return c.json({ success: true }, 201);
};

export const getBanners = async (c) => {
  const banners = await c.env.KV.get("banners");

  return c.json({ success: true, data: JSON.parse(banners) });
};
