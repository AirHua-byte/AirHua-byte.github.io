# AirHua-byte.github.io

[English](./README.md) | [简体中文](./README.zh-CN.md)

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](./LICENSE)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black)](https://threejs.org/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=github)](https://pages.github.com/)
[![Stars](https://img.shields.io/github/stars/AirHua-byte/AirHua-byte.github.io?style=social)](https://github.com/AirHua-byte/AirHua-byte.github.io/stargazers)

A Three.js/WebGL personal website template for interactive 3D portfolios on GitHub Pages.

This repository is a reusable 3D portfolio starter built with Three.js, Ammo.js
physics, custom textures, shader assets, and a Webpack-based static deployment
workflow. It is designed for front-end developers who want a playful personal
site that can be customized with their own links, billboard images, skills, and
project entries.

## Table of Contents

- [Live Demo](#live-demo)
- [Highlights](#highlights)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Customization Guide](#customization-guide)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Maintenance Status](#maintenance-status)
- [Contributing](#contributing)
- [Security](#security)
- [Credits](#credits)
- [License](#license)

## Live Demo

- GitHub Pages: <https://airhua-byte.github.io>
- Personal demo: <https://love.huabyte.com>
- Preview video: <https://assets.huabyte.com/blog/image/Tab-1645529042263.webm>

## Highlights

- Immersive 3D scene rendered with Three.js and WebGL.
- Physics-driven rolling globe interaction powered by Ammo.js.
- Desktop keyboard controls and mobile-friendly touch controls.
- Clickable 3D objects that link to your GitHub, blog, music site, email, and
  other personal destinations.
- Configurable billboard textures for projects or personal sections.
- Shader, lens flare, particles, and surface text assets for a richer visual
  portfolio.
- Static output that can be deployed to GitHub Pages or any static hosting
  provider.

## Tech Stack

- JavaScript
- Three.js
- Ammo.js
- WebGL shaders
- Webpack 4
- Express, optional local/static server

## Quick Start

### Prerequisites

- Node.js 14 or 16 is recommended for this legacy Webpack 4 project.
- npm

> Node.js 17+ may require `NODE_OPTIONS=--openssl-legacy-provider` for older
> Webpack 4 builds. If you only want to customize the static assets, start with
> Node.js 16 to avoid the OpenSSL compatibility issue.

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The development server runs at:

```text
http://localhost:8082
```

### Build

```bash
npm run build
```

### Serve the Static Site

```bash
npm start
```

## Customization Guide

Most personal-site content is configured in
[`src/resources/textures.js`](./src/resources/textures.js).

### Update Project Billboards

Replace these image paths with your own transparent PNG/JPG assets:

```js
billboardTextures.blogTexture = '../src/jsm/blog.png';
billboardTextures.musicTexture = '../src/jsm/music.png';
billboardTextures.fundTexture = '../src/jsm/fund.png';
```

### Update Social Links

Change the `URL` object to point to your own destinations:

```js
URL.blog = 'https://your-domain.com';
URL.gitHub = 'https://github.com/your-name';
URL.email = 'mailto:you@example.com';
```

### Replace Icons and Visual Assets

The visual assets live in [`src/jsm`](./src/jsm). Keep filenames and letter
case consistent when replacing files, especially if you work across macOS,
Windows, and Linux.

Useful asset groups:

- `blog.png`, `music.png`, `fund.png`: billboard images.
- `githubLogo.png`, `bilibili.png`, `qq.png`, `envelope.png`: link icons.
- `pc-control.png`, `mobile-control.png`: control hint images.
- `fragment.glsl`, `vertex.glsl`: shader sources.
- `earth.jpg`, `woodTexture.jpg`, `stone.png`: scene textures.

### Scene and Interaction Files

- [`src/app.js`](./src/app.js): main scene bootstrap and physics loop.
- [`src/resources/world.js`](./src/resources/world.js): renderer, camera,
  lights, particles, and world setup.
- [`src/resources/surfaces.js`](./src/resources/surfaces.js): text and surface
  elements.
- [`src/resources/eventHandlers.js`](./src/resources/eventHandlers.js): desktop
  and mobile controls.
- [`src/resources/utils.js`](./src/resources/utils.js): picking, hover, click,
  and camera helpers.

## Project Structure

```text
.
├── build/                  # Generated static bundle
├── src/
│   ├── app.js              # Main application entry
│   ├── WebGL.js            # WebGL capability check
│   ├── jsm/                # Textures, icons, fonts, shaders
│   ├── libs/               # Ammo.js runtime files
│   └── resources/          # Scene, controls, textures, utilities
├── index.html              # Static entry page
├── style.css               # Global page styles
├── webpack.config.js       # Webpack build configuration
├── server.js               # Optional Express static server
└── deploy.sh               # Manual GitHub Pages deployment helper
```

## Deployment

### GitHub Pages

For a user or organization page, publish the repository as:

```text
<username>.github.io
```

Then enable GitHub Pages in repository settings and select the branch/folder
that contains your built static files.

### Manual Deploy Script

This repository includes [`deploy.sh`](./deploy.sh). Review the target Git URL
inside that file before using it for your own fork.

```bash
npm run build
npm run deploy
```

## Maintenance Status

This project is maintained as a learning-friendly Three.js/WebGL portfolio
template.

Current maintenance priorities:

- keep the setup and deployment documentation clear;
- triage dependency and security issues;
- document compatibility notes for modern Node.js versions;
- accept focused fixes for docs, build issues, and customization examples.

## Contributing

Issues and pull requests are welcome when they are focused on documentation,
build compatibility, asset customization, or security/dependency maintenance.

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

## Security

Please do not open public issues for sensitive security reports. See
[SECURITY.md](./SECURITY.md) for the reporting process.

## Credits

This project was adapted from and inspired by
[0xFloyd/Portfolio_2020](https://github.com/0xFloyd/Portfolio_2020). Thanks to
the Three.js community and the open-source examples that make WebGL learning
more approachable.

## License

[ISC](./LICENSE) © AirHua-byte.
