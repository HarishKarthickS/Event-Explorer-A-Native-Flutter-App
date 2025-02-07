# Event Explorer

## Overview
Event Explorer is a mobile application built using Flutter that allows users to discover, create, and manage local events. It provides a seamless user experience with features such as event listings, event details, and an event creation form. The app is powered by a Node.js backend that handles API requests and event data storage.

## Features
### **Frontend (Flutter)**
- **Event Listings:** Browse a list of upcoming events.
- **Event Details:** View detailed information about an event.
- **Create Event:** Users can add new events with title, description, location, and date.
- **Smooth Navigation:** Simple and intuitive navigation between screens.
- **Modern UI:** Responsive and clean design for a great user experience.

### **Backend (Node.js + Express)**
- **RESTful API:** Provides endpoints to retrieve and create events.
- **Data Storage:** Uses an in-memory array (can be extended to a database like MongoDB).
- **UUID for Unique IDs:** Ensures each event has a unique identifier.
- **CORS Enabled:** Allows communication between the frontend and backend.

## Tech Stack
### **Frontend:**
- Flutter
- Dart
- HTTP package for API communication

### **Backend:**
- Node.js
- Express.js
- UUID (for generating unique event IDs)
- CORS (Cross-Origin Resource Sharing)

## Project Structure
```
event_explorer/
├── lib/
│   ├── main.dart
│   ├── models/
│   │   └── event.dart
│   ├── screens/
│   │   ├── event_list_screen.dart
│   │   ├── event_detail_screen.dart
│   │   └── event_create_screen.dart
│   └── services/
│       └── api_service.dart
└── pubspec.yaml
backend/
├── server.js
├── package.json
└── package-lock.json
```

---

## Installation & Setup
### **Backend Setup (Node.js)**
1. Install Node.js if you haven't already: [Download Node.js](https://nodejs.org/)
2. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/event-explorer.git
   cd event-explorer/backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the backend server:
   ```sh
   npm start
   ```
   - The server will run on `http://localhost:3000`

### **Frontend Setup (Flutter)**
1. Install Flutter from [Flutter's official website](https://flutter.dev/docs/get-started/install)
2. Navigate to the Flutter project directory:
   ```sh
   cd event-explorer
   ```
3. Install dependencies:
   ```sh
   flutter pub get
   ```
4. Run the app on an emulator or physical device:
   ```sh
   flutter run
   ```

---

## API Documentation
### **Base URL:**
```
http://localhost:3000
```

### **1. Get All Events**
- **Endpoint:** `/events`
- **Method:** `GET`
- **Response:** Returns a list of all events.
```json
[
  {
    "id": "1",
    "title": "Flutter Workshop",
    "description": "Learn Flutter basics with hands-on experience",
    "date": "2025-02-10T12:00:00.000Z",
    "location": "Tech Park"
  }
]
```

### **2. Get Event by ID**
- **Endpoint:** `/events/:id`
- **Method:** `GET`
- **Response:** Returns event details for a given ID.
```json
{
  "id": "1",
  "title": "Flutter Workshop",
  "description": "Learn Flutter basics with hands-on experience",
  "date": "2025-02-10T12:00:00.000Z",
  "location": "Tech Park"
}
```

### **3. Create a New Event**
- **Endpoint:** `/events`
- **Method:** `POST`
- **Request Body:**
```json
{
  "title": "React Native Bootcamp",
  "description": "A deep dive into React Native development",
  "date": "2025-02-15T15:00:00.000Z",
  "location": "Online"
}
```
- **Response:**
```json
{
  "id": "generated-uuid",
  "title": "React Native Bootcamp",
  "description": "A deep dive into React Native development",
  "date": "2025-02-15T15:00:00.000Z",
  "location": "Online"
}
```

---

## Enhancements & Future Improvements
- **Database Integration:** Replace in-memory storage with MongoDB or PostgreSQL.
- **User Authentication:** Add user authentication (Sign-up/Login) with Firebase or JWT.
- **Image Uploads:** Allow users to upload event images.
- **Push Notifications:** Notify users of upcoming events.
- **Event Filtering:** Add search and filter options for better event discovery.


## License
This project is licensed under the MIT License.

## Contact
For questions or collaborations, reach out to harish.s@kalvium.community.

