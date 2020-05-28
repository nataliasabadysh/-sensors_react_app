import io from 'socket.io-client';

export const socket = io('ws://localhost:5000', { 
//      origins: 'http://localhost:3000/', 
//      serveClient: false,
//      transportOptions: {
//       polling: {
//         extraHeaders: {
//           'x-clientid': 'abc'
//         }
//       }
//     }
  }
  );