# Joe's Blog - CLAUDE.md

This is a Hugo static site blog focused on iOS development (Swift, SwiftUI, architecture).
Theme: `ink-free`. Language: Traditional Chinese (Taiwan).

## File Naming & Location

- Posts live in `content/posts/`
- Filename format: `YYYY-MM-DD.md`

## Front Matter Template

```yaml
---
title: 文章標題
description: 一句話摘要，吸引人點進來。
date: YYYY-MM-DD
lastmod: YYYY-MM-DD
slug: YYYY-MM-DD
tags: ["AI寫作", "TagA", "TagB"]
categories: [Personal]
---
```

### Front Matter Rules

- `slug` = same as filename date (e.g., `2026-04-24`)
- Always include `"AI寫作"` tag for AI-assisted posts
- `lastmod` = today's date when creating or updating
- `categories`: usually `[Personal]`; use `[Demo]` for demo/sample projects
- `pinned: true` only for evergreen reference pages (e.g., bookmarks list)

## Common Tags

iOS: `Swift`, `SwiftUI`, `UIKit`, `Networking`, `Architecture`, `MVVMC`, `TCA`, `MQTT`, `BadBackend`
Meta: `AI寫作`

## Code Examples

- **Never use GitHub Gist embeds** (`{{< gist ... >}}`). Always write code directly in fenced code blocks.
- Gists go stale and are external dependencies; inline code blocks are self-contained and always render correctly.

## Demo Projects

- Do not create GitHub demo projects autonomously.
- If the article topic would benefit from a runnable demo, **tell the user** at the end and let them decide.

## Writing Style

- Language: Traditional Chinese (Taiwan), technical terms stay in English
- Tone: conversational + technically precise — like explaining to a peer over coffee
- Opening: start with a relatable scenario or pain point, not a definition
- Use `---` horizontal rules to separate major sections
- Section headers use emojis (e.g., `## 🏛️ 架構圖`, `## 🛠️ 核心實作`, `## 💡 總結`)
- Include Mermaid diagrams for architecture/flow explanations
- Code blocks always specify language (`swift`, `mermaid`, etc.)
- End AI-assisted articles with: `*本文使用 Claude 共同完成*`

## Article Structure (typical long-form)

1. Opening scenario / pain point
2. Architecture overview (Mermaid diagram if applicable)
3. Core implementation with code examples
4. Real-world usage examples
5. Summary / takeaways
6. Links to GitHub demo (if any)

## Images

- Store in `static/images/YYYY-MM-DD/`
- Reference as `/images/YYYY-MM-DD/filename.png`

## README Convention

- README.md must be written in Traditional Chinese — it's for the owner's personal reference only.

## Hugo Commands

```bash
hugo server          # local dev server
hugo                 # build
```
