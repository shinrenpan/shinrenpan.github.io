# shinrenpan.github.io

個人 Blog，記錄 iOS 開發筆記，使用 [Hugo](https://gohugo.io/) 建置，部署在 GitHub Pages。

## 技術架構

| 層級 | 工具 |
|---|---|
| 靜態網站產生器 | Hugo Extended `0.152.2` |
| 主題 | [ink-free](https://github.com/chollinger93/ink-free)（git submodule）|
| 託管 | GitHub Pages |
| CI/CD | GitHub Actions（push 到 `main` 自動部署）|

## 運作方式

Push 到 `main` → GitHub Actions 建置 Hugo → 自動部署到 GitHub Pages，不需要手動 build。

## 本地開發

### 1. 安裝 Hugo

```bash
brew install hugo
```

> 注意要安裝 **Hugo Extended**，主題需要它。

### 2. Clone（含 submodule）

```bash
git clone --recurse-submodules https://github.com/shinrenpan/shinrenpan.github.io.git
```

如果已經 clone 但忘了帶 submodule：

```bash
git submodule update --init --recursive
```

### 3. 啟動開發伺服器

```bash
hugo server
```

開啟 http://localhost:1313

## 新增文章

1. 在 `content/posts/` 建立 `YYYY-MM-DD.md`
2. Front matter 範本：

```yaml
---
title: 文章標題
description: 一句話摘要。
date: YYYY-MM-DD
lastmod: YYYY-MM-DD
slug: YYYY-MM-DD
tags: ["AI寫作", "TagA"]
categories: [Personal]
---
```

3. Push 到 `main`，GitHub Actions 自動部署。

## 留言系統

使用 [Giscus](https://giscus.app/)，以 GitHub Discussions 作為留言後端。

| 設定 | 值 |
|---|---|
| Repo | `shinrenpan/shinrenpan.github.io` |
| Repo ID | `R_kgDOL0c7oA` |
| Category | `Announcements` |
| Category ID | `DIC_kwDOL0c7oM4CfCpP` |
| Mapping | `og:title` |
| 語言 | `zh-TW` |

設定檔位置：`layouts/partials/comments.html`

如需重新設定，至 [giscus.app](https://giscus.app/) 重新產生 script，貼回該檔案即可。

## 自訂功能（非原始主題）

以下功能是自己加的，實作在 `layouts/` 覆寫，升級主題時注意不要被蓋掉：

| 功能 | 相關檔案 |
|---|---|
| `pinned: true` — 文章釘選到首頁最上方 | `layouts/index.html` |
| `lastmod` 顯示 — 當 `lastmod > date` 時顯示更新日期 | `layouts/index.html`、`layouts/_default/list.html`、`layouts/_default/term.html`、`layouts/partials/post_header.html` |

## 目錄結構

```
.
├── content/posts/     # 文章（Markdown）
├── static/
│   ├── css/           # custom.css（樣式客製化）
│   └── images/        # 文章圖片（YYYY-MM-DD/檔名.png）
├── themes/ink-free/   # 主題（git submodule）
├── layouts/           # 覆寫主題的 template
└── hugo.toml          # 網站設定
```

## 圖片

圖片放在 `static/images/YYYY-MM-DD/`，文章內引用方式：

```markdown
![說明文字](/images/YYYY-MM-DD/檔名.png)
```
