module.exports = (req, res, next) => {
  res.header(
    "Access-Control-Expose-Headers",
    "Content-Range",
    "bytes : 0-9/*"
  );
  res.header["X-Total-Count"] = "100";
  res.header["Access-Control-Expose-Headers"] = "X-Total-Count";
  next();
};
