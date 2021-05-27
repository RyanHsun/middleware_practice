# 中介軟體流程執行測試 - Express Middleware Practice
透過這個小工具可以幫助了解 Middleware 在 request 到 response 之間發生了什麼事。

## 功能描述 - Features
* 開始運行時會在終端機記錄：時間戳記(以台北當地時間顯示)、請求的 HTTP 方法、該頁面的 URL。
* 在進入路由時透過 auth 這個 Middleware 作為送出回應前的權限認證，判斷該路由是否為開放狀態並在畫面顯示相對應資訊。
* 結束運行後會在終端機記錄：時間戳記(以台北當地時間顯示)、請求的 HTTP 方法、該頁面的 URL 以及運行過程總共花費的時間。

## 專案畫面
![MiddlewarePractice-Demo](https://raw.githubusercontent.com/RyanHsun/middleware_practice/master/app-demo.jpg "Middleware Practice - Demo") 

## 環境建置與需求 - Prerequisites
* 開發環境：Node.js v10.15.0
* 開發框架：Express v4.17.1

## 安裝與執行步驟 - Installation and execution
1. 打開終端機(Terminal)，使用 git clone 將專案下載至本機電腦，或是直接在 github 下載專案壓縮檔(Download ZIP)。
```
git clone https://github.com/RyanHsun/middleware_practice.git
```

2. 在終端機輸入以下指令，進入專案資料夾
```
cd middleware_practice
```

3. 再安裝執行專案需要的相關套件
```
npm install
npm install nodemon
```

7. 接著就可以啟動伺服器來執行專案。
```
npm run dev
``` 

8. 當終端機顯示以下訊息即成功啟動，使用瀏覽器於網址列中輸入 http://localhost:3000 即可開始操作專案～
```
App running on port 3000
```

9. 在伺服器啟動狀態下於鍵盤按下 Ctrl + C ，即可關閉伺服器停止執行專案


## 專案開發人員 - Contributor
[RyanHsun](https://github.com/RyanHsun)