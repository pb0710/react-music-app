# 脚手架·快速开发

## 简介

基于`create-react-app`，根据个人偏好配置的`react`脚手架。

支持：实时热更新、模块动态引入、样式按需加载、绝对路径、Babel、Devtools插件等。

### 目录结构

```bash
.
├── README.md
├── config-overrides.js
├── jsconfig.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── api
│   │   ├── fetch.js
│   │   └── index.js
│   ├── common
│   │   ├── config.js
│   │   ├── navRouteMap.js
│   │   └── pagesRouteMap.js
│   ├── components
│   │   ├── Carousel
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   ├── Layout
│   │   │   ├── Content
│   │   │   │   ├── index.js
│   │   │   │   ├── store
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── reducer.js
│   │   │   │   └── style.js
│   │   │   ├── Footer
│   │   │   │   ├── Control
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── store
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   └── reducer.js
│   │   │   │   │   └── style.js
│   │   │   │   ├── Operation
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── store
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   └── reducer.js
│   │   │   │   │   └── style.js
│   │   │   │   ├── Playing
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── store
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   └── reducer.js
│   │   │   │   │   └── style.js
│   │   │   │   ├── index.js
│   │   │   │   ├── store
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── reducer.js
│   │   │   │   └── style.js
│   │   │   ├── Header
│   │   │   │   ├── Nav
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.js
│   │   │   │   ├── index.js
│   │   │   │   ├── store
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── reducer.js
│   │   │   │   └── style.js
│   │   │   ├── Sider
│   │   │   │   ├── Drawer
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.js
│   │   │   │   ├── index.js
│   │   │   │   ├── store
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── reducer.js
│   │   │   │   └── style.js
│   │   │   ├── index.js
│   │   │   ├── store
│   │   │   │   ├── index.js
│   │   │   │   ├── reducer.js
│   │   │   │   └── saga
│   │   │   │       ├── index.js
│   │   │   │       └── searchSaga.js
│   │   │   └── style.js
│   │   ├── ListItem
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   ├── MVCard
│   │   │   ├── index.js
│   │   │   ├── store
│   │   │   │   ├── index.js
│   │   │   │   └── reducer.js
│   │   │   └── style.js
│   │   ├── NewSongCard
│   │   │   ├── index.js
│   │   │   ├── store
│   │   │   │   ├── index.js
│   │   │   │   └── reducer.js
│   │   │   └── style.js
│   │   ├── Pannel
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   ├── Search
│   │   │   ├── Hot
│   │   │   │   ├── index.js
│   │   │   │   └── style.js
│   │   │   ├── SearchInput
│   │   │   │   ├── index.js
│   │   │   │   └── style.js
│   │   │   ├── Suggest
│   │   │   │   ├── index.js
│   │   │   │   └── style.js
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   ├── SongslistCard
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   ├── SongslistContent
│   │   │   ├── index.js
│   │   │   └── style.js
│   │   └── SongslistTitle
│   │       ├── index.js
│   │       └── style.js
│   ├── index.js
│   ├── pages
│   │   ├── Playlist
│   │   │   ├── index.js
│   │   │   ├── store
│   │   │   │   ├── index.js
│   │   │   │   └── reducer.js
│   │   │   └── style.js
│   │   ├── Recommend
│   │   │   ├── index.js
│   │   │   └── store
│   │   │       ├── index.js
│   │   │       └── reducer.js
│   │   └── Songslist
│   │       ├── index.js
│   │       └── store
│   │           ├── index.js
│   │           └── reducer.js
│   ├── styles
│   │   ├── globalStyle.js
│   │   └── icon.js
│   └── utils
│       └── index.js
└── yarn.lock

47 directories, 96 files
```

### 模块

- react
- redux
- redux-saga
- react-router
- ant design
- styled-components
- axios

