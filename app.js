// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log(`${new Date().toLocaleString()} | ${req.method} from ${req.url}`)
  next()
})

const auth = (req, res, next) => {
  if (req.url === '/new') {
    next()
  } else {
    res.send('此頁面目前不開放！')
  }
}

app.get('/', auth, (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', auth, (req, res) => {
  res.send(`新增 Todo 頁面
  <form action="/" method="POST">
    <button type="submit">新增</button>
  </form>
  `)
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
