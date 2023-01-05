# [111-1] Web Programming Final 

## 專題題目名稱
(Group 69) Cafe Finder

## Demo 影片連結
https://youtu.be/hHq5gmMKiEA

## 描述這個服務在做什麼
這是一個以網路社群方式運作的咖啡廳評價網，使用者在登入後可以自行添加任何想評論的咖啡廳，
被添加的咖啡廳就能被所有其他使用者一起評價。<br>
進入每一家咖啡廳的頁面，會有四個部分:<br>
一: 咖啡廳的基本資料<br>
二: 咖啡廳的各項細項評分，而評分的項目則由使用者自行添加<br>
三: 留言區，使用者可以給出自己對這間咖啡廳的整體評論，並加上留言<br>
四: 2D平面圖，使用者可以用不同顏色標出整個咖啡廳內部的大致分布<br>

## Deploy 連結
https://wpfinalproject-production-28aa.up.railway.app/

## 其他說明
咖啡廳review頁面在輸入並送出後，可能需要重新整理頁面才會刷新。<br>
comment和review頁面，為了避免有人刷評價，同個帳號的重複留言和評分僅會保留最後輸入的<br>
而2D平面圖的部分，因每個人畫出的圖不同，所以按下看其他的圖，就會隨機跳出其中一位使用者畫的圖<br>
因目前添加的咖啡廳很少，如果要搜尋可以打: 西雅圖、伯朗咖啡、starbucks、行路...等咖啡廳（只要餐廳名稱有包含搜尋字串都會顯示）

## 使用與參考之框架/模組/原始碼
Mui template

## 使用之第三方套件、框架、程式碼
後端：graphQL, mongoose
前端：antd, react, react-router-dom, mui, styled-components

## 專題製作心得
這次是我們第一次製作一個大型專案，真的花費很多時間與精力，中間也必須解決許多問題，遇到了很多挫折。
但能夠發揮自己整學期所學，並做出成果真的十分有成就感，也很慶幸修了這門課～

## 如何在 localhost 安裝與測試之詳細步驟
複製final資料夾後，進入frontend資料夾打入yarn install，再進入backend資料夾打入yarn install。
接著要在backend資料夾中加上自己的.env檔，
最後在final資料夾中打入yarn start開啟前端，打入yarn server開啟後端，
此時網頁就應該可以正常操作。<br>
進入網頁後可自行sign up一個帳號，再登入就可以使用所有功能了。

## 每位組員之負責項目
吳冠廷: graphQL的後端資料處理、cafe comment頁面、cafe 2D graph頁面、sign in 與 register頁面
<br>
郭馥瑜: search頁面、add cafe頁面、homepage頁面、sign in 與 register頁面
<br>
吳承洋: cafe about頁面、cafe rate與add rate頁面、sign in 與 register頁面
<br>
但因為大部份檔案都是大家共同製作，所以以上只是大略分配。
