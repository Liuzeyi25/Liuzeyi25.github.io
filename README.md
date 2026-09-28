# Zeyi Liu · Academic Homepage

个人学术主页，使用 React + vinext 构建，通过 GitHub Actions 自动发布到 GitHub Pages。

网站地址：https://liuzeyi25.github.io/

## 更新主页内容

日常更新主要编辑 `app/page.tsx`。可直接在 GitHub 打开文件，点击铅笔编辑并提交到 `main`。

| 内容 | 编辑位置 |
| --- | --- |
| 新闻 | `app/page.tsx` 中的 `const news` |
| 论文 | `app/page.tsx` 中的 `const publications` |
| 教育经历 | `app/page.tsx` 中的 `const education` |
| 审稿经历 | `app/page.tsx` 中的 `const reviewer` |
| 奖项 | `app/page.tsx` 中的 `const honors` |
| 简介、单位、邮箱、专利、页脚日期 | `app/page.tsx` 中对应文字 |
| 字体、颜色、布局 | `app/globals.css` |
| 网站标题、描述、分享预览 | `app/layout.tsx` |
| 头像 | `public/profile.jpg` |
| 分享预览图 | `public/og.png` |
| 访客地球与统计入口 | `app/page.tsx`、`app/map-my-visitors-tracker.tsx`、`public/visitor-globe.svg` |

新增论文：复制 `publications` 数组中的一个对象，修改 `venue`、`year`、`title`、`authors`、`paper`；`code` 和 `website` 为可选字段。目前同时填写这两个字段时，页面优先显示 Code 链接。

新增新闻：在 `news` 数组最前面添加，例如：

```tsx
["2026.09", "One paper is accepted by XXX."],
```

图片、PDF 等文件放入 `public/`。例如 `public/cv.pdf` 在页面中引用为 `/cv.pdf`。
更新内容时，请同步修改页脚的 `Last updated` 日期。

访客统计由 MapMyVisitors 提供。追踪脚本仅在正式域名 `liuzeyi25.github.io` 加载，因此本地开发和预览不会计入线上访客数据。

## 本地开发和验证

需要 Node.js >= 22.13.0；GitHub Actions 使用 Node.js 22。

```bash
npm ci
npm run dev
```

提交前验证：

```bash
npm test
```

`npm test` 先构建静态网站，再检查导出的首页内容、分享信息及本地资源是否完整。
单独构建使用 `npm run build`，可部署的静态文件位于 **`dist/client/`**。

## GitHub Pages 部署

1. 打开仓库 **Settings → Pages**。
2. 在 **Build and deployment → Source** 选择 **GitHub Actions**。
3. 将代码提交到 `main`，或在 **Actions → Deploy homepage to GitHub Pages → Run workflow** 手动部署。
4. 工作流成功后，访问 https://liuzeyi25.github.io/ 。

`.github/workflows/deploy.yml` 会构建、测试并发布 `dist/client/`。Pull request 只执行构建和测试，不发布。
不需要 Cloudflare 账号、API Token 或额外仓库 Secrets。

不要选择 `Deploy from a branch` 的 `main / (root)`：仓库根目录是源码，GitHub Pages 需要构建后的静态文件。

`next.config.ts` 启用 `output: "export"`；`app/layout.tsx` 使用固定的网站地址生成元信息，不依赖请求头。
以后新增页面也必须能在构建时生成；GitHub Pages 不运行 API、数据库查询、登录服务或其他服务器逻辑。
仓库中的 `worker/`、`db/`、`drizzle/`、`examples/d1/` 和 `app/chatgpt-auth.ts` 是原模板遗留文件，不参与当前主页的部署。
