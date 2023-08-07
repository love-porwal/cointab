# Project README

## Table of Contents
- [Introduction](#introduction)
- [Project Demo](#project-demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Features](#Features)

## Introduction
This project is a company assignment given by the company called Cointab. The objective of the project is to create a web application that manages user data. 
It is built using a tech stack that includes HTML, CSS, JavaScript for the frontend and Express, MySQL, and Node.js for the backend.
<br><br> Visit: https://cointab-user-board.netlify.app/

## Project Demo
https://drive.google.com/file/d/1wrrg4nzN6NSE_i1H5-qQT0Xtt3S1ZlDC/view?usp=sharing

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Express, MySQL, Node.js

## Getting Started
To run the project on your local machine, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/love-porwal/cointab.git
  
2. Install Dependencies:

   ```bash
   npm i 
  
3. Run backend server:

   ```bash
   npm run server

4. Start frontend:

   ```bash
   npm run start

## API Endpoints
The project exposes the following API endpoints:

1. GET `/all-users`: To get user data .
2. GET `/fetch-get-users`:  To get user data based on the page number.
3. GET `/get/filter`: To get user data based on certain filters.
4. GET `/users-pagination`: To get user data based on pagination.
5. DELETE `/table-delete`: To delete user table from DB.

## Features
The project includes the following features:
- Pagination: To navigate through the user data in a paginated manner.
- Multiple Filters: To filter user data based on various criteria.

![Home Page](https://github.com/love-porwal/cointab/assets/112820391/4a2a090a-5a2e-4878-b9e2-34835c341c2f)

![User Details](https://github.com/love-porwal/cointab/assets/112820391/6847c103-5aa0-4a55-883a-b99610360172)
