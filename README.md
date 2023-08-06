# Project README

## Table of Contents
- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Features](#Features)

## Introduction
This project is a company assignment given by the company called Cointab. The objective of the project is to create a web application that manages user data. 
It is built using a tech stack that includes HTML, CSS, JavaScript for the frontend and Express, MySQL, and Node.js for the backend.


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
- Debouncing: For handling user input with reduced API calls.
- Pagination: To navigate through the user data in a paginated manner.
- Multiple Filters: To filter user data based on various criteria.
