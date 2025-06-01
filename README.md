# 💬 Group Chat Application

A real-time **Group Chat Application** built using **Node.js**, **Socket.IO**, and **HTML/CSS**. This project allows multiple users to join a chat room, send messages, and get notified when a new user joins or leaves.

## 🚀 Features

- 🔒 Enter your name to join the chat
- 💬 Real-time messaging with Socket.IO
- 📢 Broadcasts a message when a user joins or leaves
- 🌐 Simple and interactive user interface using HTML & CSS
- ⚡ Server built with Express and WebSockets (Socket.IO)

## 🛠️ Technologies Used

- Node.js
- Express.js
- Socket.IO
- HTML5, CSS3, JavaScript

## 📷 Screenshots

![Chat UI](screenshot.png)

## 📁 Project Structure

ChatApp/
│
├── View/
| ├── index.html # Chat UI
│ ├── js/ client.js # Frontend Javascript code
│ └── css/ style.css # Styling
│
├── server.js # Node.js server with Socket.IO
└── package.json # Project metadata and dependencies


## 🧑‍💻 How to Run the Project Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Divansu-Attri/ChatApp.git
   cd ChatApp

2. **Install dependencies**

     npm install

3. **Start the server**

     node server.js

4. **Open your browser**

   Run: http://127.0.0.1:5500/View/index.html


🙋‍♂️ How It Works:

   - When a user opens the app, they're prompted to enter their name.

   - Upon joining, a broadcast is sent to other users announcing their arrival.

   - Users can send and receive messages instantly in real-time.

