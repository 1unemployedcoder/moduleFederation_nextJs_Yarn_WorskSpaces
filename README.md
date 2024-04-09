# nextJsYarn

## Overview
This project serves as a template for creating projects with module federation for Next.js using Yarn WorkSpaces.

## Motivation
I've put it together mostly for myself as I plan to write several micro frontends for my portfolio, but feel free to use it and contribute fixes if you're interested.

## How to Run the Project
1. Clone this repository.
2. Navigate to the project directory.
3. yarn
4. in host/admin/shop you can "yarn run dev" for see. its will start on localhost:3000 for host, 3001 for shop, 3002 for admin.

## Errors
if u see msg like "Error: process.env.NEXT_PRIVATE_LOCAL_WEBPACK is not set to true, please set it to true, and "npm install webpack"
at NextFederationPlugin.validateOptions" you need in every directory write it:  $env:NEXT_PRIVATE_LOCAL_WEBPACK = "true" (for example in powershell).
