## PranavFlix

PranavFlix is a web application that allows users to browse popular movies and search for specific titles. It utilizes The Movie Database (TMDb) API to fetch movie information and display it in an attractive, responsive layout.

## Features

- Display popular movies with posters, titles, and ratings
- Search functionality to find specific movies
- Dark mode toggle for improved user experience
- Responsive design for various screen sizes

## Technologies Used

- HTML
- CSS
- JavaScript
- TMDb API

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Open `index.html` in your web browser to run the application locally.

## API Configuration

**(MOST IMPORTANTLY, AS THIS API IS NOT WORKING IN INDIA, YOU WILL HAVE TO USE A VPN TO ACCESS THE MOVIE DATA, SO PLEASE TURN ON ANY VPN IN YOUR DEVICE TO RUN THIS PROJECT SMOOTHLY!)**

This project uses the TMDb API. To run the application, you'll need to:

1. Sign up for a TMDb account at https://www.themoviedb.org/
2. Obtain an API key from your account settings
3. Replace the `API_KEY` constant in `script.js` with your own API key

### javascript
const API_KEY = 'your_api_key_here';

## Usage

* The homepage displays popular movies by default
* Use the search bar to find specific movies
* Hover on movie to view its description
* Toggle between light and dark mode using the button in the navigation bar

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
