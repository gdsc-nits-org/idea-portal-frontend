import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_API_URL, {
  transports: ["websocket"],
  reconnectionAttempts: 10,
  timeout: 10000,
});

export default socket;
