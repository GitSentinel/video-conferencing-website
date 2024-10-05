# Video Conferencing Website

This project is a video conferencing web application that allows users to conduct virtual meetings seamlessly. It includes features like video, audio, and chat functionalities, providing a complete virtual meeting solution.

## Features

- **Video & Audio Conferencing**: Connect face-to-face with real-time video and audio support.
- **Chat Functionality**: Send instant messages during the meeting.
- **Screen Sharing**: Share your screen for better presentations and collaboration.
- **User Authentication**: Secure login to access video conferencing rooms.

## Technologies Used

- **Frontend**: NextJS
- **Backend**: Server Actions
- **Stream**: For real-time video and audio functionality
- **ShadCN**: For pre-built components
- **Clerk**: For user authentication

## Installation

To set up the project locally:

1. Clone the repository:

   ```sh
   git clone https://github.com/GitSentinel/video-conferencing-website.git

   ```

2. Navigate to the project directory:

   ```sh
   cd video-conferencing-website

   ```

3. Install the dependencies:

   ```sh
   npm i

   ```

4. Create a .env file in the root folder and provide the following variables:

   ```sh
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=KEY
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_STREAM_KEY=KEY
   STREAM_SECRET_KEY=KEY
   NEXT_PUBLIC_BASE_URL=localhost:3000

   ```

5. Start the server:
   ```sh
   npm start
   ```

## Technologies Used

- Navigate to http://localhost:YOUR_PORT to access the application.
- Create or join a meeting room.
- Share the meeting room link with others to start conferencing.

## Contributing

Feel free to open an issue or submit a pull request if you have suggestions or improvements.
