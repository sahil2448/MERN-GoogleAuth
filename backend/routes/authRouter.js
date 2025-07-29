const router = require("express").Router();

router.get("/test", (req, res) => {
  res.json({ message: "test passed" });
});

module.exports = router;
