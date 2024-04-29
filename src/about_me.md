# 關於我

iOS 工程師.
自 2009 年開發 iOS App, 擁有 **10年** 以上 iOS App 開發經驗.  
開發過的 App 類型:

- 購物商城
- 聊天軟體
- 藍芽 4.0 以上, 或是 iBeacon
- 2D 遊戲
- MFI
- 影音串流
- 音樂串流

## 技能

### 程式語言

- Objective-C 2009 ~ now
- Swift 3.0 ~ now

### 語言

- 中文 (母語)
- 英文 (普)

### iOS 技能

- Testing

  - Unit testing
  - UI Testing

- Custom UI

  - Interface Builder
  - Storyboard
  - Hardcode
  - AutoLayout
  - Autoresizing
  - Core Animation
  - [SpriteKit]
  - [SwiftUI]

- API communication

  - ~~NSURLConnection~~
  - URLSession
  - gRPC with [grpc-swift](https://github.com/grpc/grpc-swift)
  - gRPC with [connect-swift](https://github.com/connectrpc/connect-swift)
  - 3rd-paryty library ([Alamofire]... etc)

- Instant message

  - XMPP with [XMPPFramework]
  - MQTT with [MQTT-Client-Framework]
  - Socket with [NSStream]
  - SignalR with [SignalR-ObjC]
  - Live streaming with [ijkplayer], [HaishinKit], [ReplayKit]
  - VOIP

- Database

  - CoreData
  - [fmdb]
  - [Realm]
  - NSKeyedArchiver / NSkeyedUnarchiver
  - Plist
  - NSUserDefaults
  - KeyChain

- BlueTooth

  - BLE 4.0 or iBeacon

- Gaming

  - [SpriteKit] for 2D game

- Version control

  - Git

- CI / CD

  - [Jenkins]
  - [Fastlane]
  - [Travis CI]
  - Xcode server bots

- 3rd-party managment
  - [Carthage]
  - [CocoaPods]
  - [Swift-Package-Manager][SPM]

## 工作經歷

### 皆凱科技

#### iOS 工程師 2023/09 ~ now

開發與維護公司 [金田GT](https://apps.apple.com/tw/app/id6467499244) App, 參考[影片](https://youtu.be/Rh_pZrOLsh0).

工作內容:

- 使用 Swift 開發維護 App, 並與 3rd-party Objective-C 混編.
- 使用 [MVVVR](https://github.com/shinrenpan/Note/discussions/27) 架構開發.
- 導入 [XcodeGen](https://github.com/yonaskolb/XcodeGen) 管理 Project.
- 實作 App 審核時, 隱藏 UI 功能.
- 客製化 UI.
- 使用 gRPC 介接資料.
- 使用 Jenkins + fastlane 實作簡易 CI / CD.
- 使用 Firebase 分發 dev / qat 環境 App.
- 撰寫 Script 切換 dev / qat / production 環境.
- 導入 Xcode 15 新功能 [Asset symbol generation](https://sarunw.com/posts/swift-symbols-for-asset-catalog/).
- HTML5 網站與 app 交互.
- 使用 SPM / cocoapod 管理套件.

### 恒遠科技

#### iOS 工程師 2022/04 ~ 2023/07

開發與維護公司超級簽 App, 參考[影片](https://youtu.be/vgyh0lbtPYY)

> [!NOTE]  
> 使用手機錄影, 長短影片功能無法正常顯示.

App 內容包含:

- 短影音
- 長影音
- 漫畫
- 小說
- 遊戲
- 直播
- 聊天

工作內容:

- 接手大陸同事 Objective-C 專案, 並維護.
- 使用 Swift 開發新功能, 與 Objective-C 混編.
- 導入 [XcodeGen](https://github.com/yonaskolb/XcodeGen) 管理 Project.
- 主導專案由 Objective-C 逐漸轉換成 Swift.
- 導入 [MVVVR](https://github.com/shinrenpan/Note/discussions/27) 架構開發.
- 移除常年不維護第三方套件, 使用原生 API 替代.
- 移除使用 [GCDWebServer] 播放本地端 m3u8, 使用原生 API 替代, [參考1].
- 撰寫 Script 切換環境.
- 實作漫畫閱讀器.
- 實作小說閱讀器.
- 遊戲 Web 與 App 交互.
- 導入合作方直播套件.
- 與超級簽廠商溝通.

### 遊戲橘子集團

#### iOS 約聘工程師 2019/06 ~ 2022/02

開發與維護 [BeanFun] App.

工作內容:

- 與主管及同事, 導入 [Clean Swift] 架構.
- 修正 Objective-C 既有 bug, 並使用 Swift 重構.
- 使用 Swift 開發新功能, 與 Objective-C 混編.
- 實作大量 WebView 與 App 交互

> [!NOTE]  
> 透過雙子數位科技於與遊戲橘子簽約.

#### iOS 約聘工程師 2018/09 ~ 2019/03

開發與維護 In-House 專案管理 App.

工作內容:

- 使用 Objective-C 開發與維護 App
- 透過 [fmdb] 暫存 API 資料, 達到離線使用.
- 實作圖片暫存機制, 本地端有圖片就先使用, 沒有的話, 先下載縮圖呈現在畫面, 之後再下載原圖.

維護企業內部專案管理 App 期間, 集團 CEO 至南極挑戰,  
故此 App 必須調教到 CEO 能在南極使用.

> [!NOTE]  
> 透過干城數碼與遊戲橘子簽約.

### 緯創軟體

#### iOS 工程 2016/08 ~ 2018/03

開發與維護 [國泰人壽] App

工作內容:

- 維護現有 App bug, 並開發新功能, 使用 Objective-C
- 逐漸汰換 Objective-C, 使用 Swift 重構

> [!NOTE]  
> 駐點內湖國泰人壽.

### 和特資訊

#### iOS 工程師 2016/03 ~ 2016/06

開發飯店內部管理系統 App .

工作內容:

- 使用 Objective-C 實作開發.
- 基於 [SignalR] 開發聊天功能.
- 實作限制地點打卡功能

> [!NOTE]  
> 公司缺發資金, 最後未發佈 App.

### 互聯網行動科技

#### iOS 工程師 2015/04 ~ 2016/01

開發與實作老闆發想的 App.

工作內容:

- 使用 Objective-C 實作開發.
- 基於 [XMPP] 開發聊天功能
- 基於 [SpriteKit] 開發遊戲功能.
- 實作購物商城功能.

> [!NOTE]  
> 公司找不到定位, 最後未發佈 App.

### PiPiMy

#### iOS 工程師 (Objective-C) 2015/01 ~ 2015/03

開發 ~~[行動拍拍賣]~~ Beta 版本

工作內容:

- 使用 Objective-C 實作開發.

> [!NOTE]  
> 公司主管無法溝通, 故開發完 Beta 版本離職.

### 時間軸科技

#### iOS 工程師 2013/09 ~ 2014/06

開發套版類型 App 機制, 類似今日的 [91 App].

工作內容:

- 使用 Objective-C 實作開發.
- 開發套版類型 App 架構.
- 與後端同事討論如何使用套版機制.

> [!NOTE]  
> 公司被遠傳併購後, 產品未能上線.

#### iOS 工程師 2012/05 ~ 2012/08

開發 [巷弄] 第一版

工作內容:

- 使用 Objective-C 實作開發.
- Memory management (期間 ARC 剛發佈).
- 使用 Xcode Instruments 檢測 Memory leak 與其他事項.
- 汰換 AutoResizing 使用 AutoLayout 取代 (期間 AutoLayout 發佈不久).
- Cell 越來越多層, 使用 layer 與多執行緒來達到 UITableView 滾動時的順暢.

### JamZoo

#### iOS 工程師 2012/11 ~ 2013/06

接案公司, 開發大量 App.

工作內容:

- 使用 Objective-C 實作開發.
- 重構 [單身銀行] 聊天機制, 使用 [MQTT] 替代 Long Polling.
- 研究其他聊天機制, 例如 [XMPP], Socket.
- 開發租車業者 In-House App, 並實作離線功能, [參考2].
- 開發美髮業者 In-House App.
- 與工研院同事合作基於 HTML5 電子書瀏覽器 App, 並使用 UIWebVIew 與 App 互通.

### 汎美達電信

#### iOS 工程師 2010/09 ~ 2012/02

接案公司, 開發大量 App.

工作內容:

- 使用 Objective-C 實作開發.
- 透過 NSURLConnection 與 api 介接取得資料
- 透過 Media Player Framework 實作媒體 App, [參考3]
- 使用 UIKit 製作小遊戲功能, [參考4], [參考5]
- 實作 Core Location App, 與下載 App Skin 功能, [參考6]
- 實作其他未接觸功能, 例如 SQLite, BLE...

### 旭揚半導體

#### iOS 工程師 2010/03 ~ 2010/07

開發與維護 App, [參考7].

工作內容:

- 使用 Objective-C 實作開發.
- 使用 UIKit, Foundation Framework 實作 App 功能.

公司主要產品為 [DAB][dab] 數位廣播晶片, 並開發帶有 DAB 晶片的手機殼, 透過 UART 讓 iPhone 可以收聽 DAB,  
故一併學習了 [External Accessory Framework][eac].

> [!NOTE]  
> 第一份 iOS 工作, 第一次接觸 UIKit

## 學歷

### 資策會數位-數位內容學院

iOS 學習階段2009 (六個月)

學習內容:

- 學習 Objective-C 基礎
- 學習 [cocos2d for iPhone][cocos2d]

> [!NOTE]
>
> 1. 結業時與其他兩位學院同學一起使用 [cocos2d for iPhone][cocos2d] 開發出擋十個音樂節奏遊戲,  
>    拿下 2009 數位內容係列競賽手機遊戲創作組金獎.
> 2. 與學院同學結業後, 接案開發音樂 App, [參考8]

### 朝陽科技大學

資訊管理系畢業

### 高苑專校

五專電子工程科畢業

[參考1]: https://github.com/shinrenpan/Note/discussions/6
[參考2]: https://www.youtube.com/watch?v=aail3KJdb4c
[參考3]: https://www.youtube.com/watch?v=Unv4XT5EjNI
[參考4]: https://www.youtube.com/watch?v=fLPyCJoCQWY
[參考5]: https://www.youtube.com/watch?v=khn3skxDjls
[參考6]: https://www.youtube.com/watch?v=197C74y68Oo
[參考7]: https://www.youtube.com/watch?v=ZVgwwkCCrUQ
[參考8]: https://youtu.be/npV4b-Z9A4w?t=177
[GCDWebServer]: https://github.com/swisspol/GCDWebServer
[SpriteKit]: https://developer.apple.com/library/ios/documentation/SpriteKit/Reference/SpriteKitFramework_Ref/
[XMPPFramework]: https://github.com/robbiehanson/XMPPFramework
[MQTT-Client-Framework]: https://github.com/ckrey/MQTT-Client-Framework
[NSStream]: https://developer.apple.com/library/ios/documentation/Cocoa/Reference/Foundation/Classes/NSStream_Class/
[SignalR-ObjC]: https://github.com/DyKnow/SignalR-ObjC
[Hotelityin]: http://www.hotelityin.com
[fmdb]: https://github.com/ccgus/fmdb
[Realm]: https://realm.io
[Jenkins]: https://jenkins.io
[Fastlane]: https://fastlane.tools
[CocoaPods]: https://cocoapods.org
[Carthage]: https://github.com/Carthage/Carthage
[巷弄]: https://itunes.apple.com/tw/app/巷弄-美食餐廳半價優惠/id551945238?mt=8
[MQTT]: http://mqtt.org
[行動拍拍賣]: https://itunes.apple.com/app/id1049599582
[XMPP]: https://xmpp.org
[SignalR]: https://www.asp.net/signalr
[國泰人壽]: https://itunes.apple.com/tw/app/id432046643
[Travis CI]: https://travis-ci.org
[單身銀行]: https://itunes.apple.com/tw/app/單身銀行-實名制-未婚身份認證/id672623637?mt=8
[ReplayKit]: https://developer.apple.com/documentation/replaykit
[HaishinKit]: https://github.com/shogo4405/HaishinKit.swift
[ijkplayer]: https://github.com/bilibili/ijkplayer
[Alamofire]: https://github.com/Alamofire/Alamofire
[BeanFun]: https://apps.apple.com/tw/app/beanfun/id1108282446
[SwiftUI]: https://developer.apple.com/documentation/swiftui
[SPM]: https://www.swift.org/package-manager/
[cocos2d]: https://zh.wikipedia.org/wiki/Cocos2d
[dab]: https://en.wikipedia.org/wiki/Digital_Audio_Broadcasting
[eac]: https://developer.apple.com/documentation/externalaccessory
[91app]: https://www.91app.com/
[Clean Swift]: https://clean-swift.com/
