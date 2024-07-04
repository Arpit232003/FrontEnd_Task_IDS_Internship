# FrontEnd_Task_IDS_Internship

Welcome to the FrontEnd_Task_IDS_Internship repository! This project is built using React and Vite, providing a fast and efficient development environment for building modern web applications.

- [Live Demo](https://arpit232003.github.io/FrontEnd_Task_IDS_Internship/#/)

## Table of Contents

- Introduction
- Features
- Installation
- Usage
- Project Structure
- API Information

## Introduction

This project is a part of the IDS Internship task, where the goal is to create a frontend application using React and Vite. Vite is a next-generation frontend tool that offers a faster and leaner development experience for modern web projects.

## Features

- Fast and efficient development setup with Vite
- Modular and scalable React components
- Easy-to-use project structure
- Quick build and hot-reload capabilities
- Fetch Data(list of items) from API
- The items are displayed in form of grid
- The data items shows relevant information about Book including the title, author and published date
- The web App provides the search functionality which allow user to search any books according th their will, the search is case Insensitive
- The web app also allow the user to filter the the book from their title in real time
- User can also sort the books with respect to the title, author and published date
- The web app is responsive, the design will look flawless in both desktop ans mobile devices
- Functional components are used
- Pagination is implemented as well, the user can load more books when they click on Load More button
- Redux is used for state management
- The user can add books which they like the whole state is managed by redux

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Arpit232003/FrontEnd_Task_IDS_Internship.git
    ```
2. Navigate to the project directory:
    ```bash
    cd FrontEnd_Task_IDS_Internship
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To start the development server, run the following command:
```bash
npm run dev
```
- The above command will start the web app in browser at http://localhost:5173/FrontEnd_Task_IDS_Internship/

## Project Structure


- FrontEnd_Task_IDS_Internship
  - public
  - src
    - assets
    - components
    - pages
    - redux
    - slices
    - App.jsx
    - main.jsx
  - index.html
  - package.json
  - vite.config.js
  - README.md


 ## Information About API used
 - The API used is [Openlibrary API](https://openlibrary.org/developers/api)
 - When the page is initially loaded then the data is fetched on the subject basis in this it is 'fantasy'
 - Using this api the pagination is implemented as well using 'offset' and 'limit' which indicates the current data that is being read and the ammount of data that can be fetched in one request.


