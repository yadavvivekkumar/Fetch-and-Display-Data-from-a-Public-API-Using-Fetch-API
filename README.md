Fetch Users Example

This is a simple project that fetches and displays user data from a public API using the JavaScript Fetch API.

Features

Fetches user data from JSONPlaceholder API

Displays name, email, and full address (street, suite, city, zipcode)

Shows loading message while fetching

Error handling for network/API failures

Reload button to refetch data

Project Structure
fetch-users/
│── index.html     # Main HTML file
│── style.css      # Styling for layout and cards
│── script.js      # JavaScript (Fetch API logic)

How to Run

Download or clone this project

Open index.html in your browser (Chrome recommended)

User list will load automatically

Click Reload Data button to fetch again

Error Handling

If the internet is disconnected or API fails, an error message will appear:

Failed to fetch user data. <error details>

Future Improvements

Add search/filter users by name

Show more details like phone, company, website

Use a loading spinner instead of text
