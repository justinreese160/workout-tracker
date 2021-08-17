
const router = require("express").Router()
const path = require("path")
const apiRoutes = require("./api")
router.use("/api", apiRoutes)

router.use("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  router.use("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  module.exports = router