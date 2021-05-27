// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  const processStart = new Date()
  console.log(`收到請求：${processStart.toLocaleString()} | ${req.method} from ${req.url}`)
  res.on('finish', () => {
    const processEnd = new Date()
    const durationTime = (processEnd - processStart)
    console.log(`送出回應：${processEnd.toLocaleString()} | ${req.method} from ${req.originalUrl} | total time : ${durationTime}ms`)
  })
  next()
})

const auth = (req, res, next) => {
  if (req.url === '/') {
    next()
  } else {
    res.send('此頁面目前不開放！')
  }
}

app.get('/', auth, (req, res) => {
  res.send(`列出全部 Todo
  <form action="/" method="POST">
    <button type="submit">新增</button>
  </form>
  `)
})

app.get('/new', auth, (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
