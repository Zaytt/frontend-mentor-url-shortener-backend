# URL Shortener

A simple URL shortening service built with Node.js, Express, and MongoDB. This project includes a backend API for shortening URLs. Each URL is associated with a unique user ID stored in MongoDB, and URLs are automatically deleted after 24 hours.

## Features

- Shorten URLs
- Retrieve original URLs from shortened links
- User-specific URL management using local storage
- Automatic URL expiry after 24 hours

## Tech Stack

- **Backend**: Node.js, Express, MongoDB
- **Storage**: Local Storage (for user ID)
