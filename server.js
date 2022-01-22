// express服务搭建
const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

app.use((req, res, next) => {
  if (req.header("x-forwarded-proto") !== "https") {
    res.redirect("https://" + req.header("host") + req.baseUrl)
  } else {
    next()
  }
})

app.use(express.static(__dirname))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
})

app.listen(port)
