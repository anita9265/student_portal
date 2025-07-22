// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
// import axios from "axios";
// import "./style.css";

// const socket = io("http://localhost:3030");

// const Chat = () => {
//   const [studentList, setStudentList] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");
//   const [typingStatus, setTypingStatus] = useState("");

//   // 🟢 Get logged-in user and student list
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:3030/getname", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const loginUser = res.data.name;
//         const otherUsers = res.data.all.filter((u) => u.name !== loginUser);
//         setStudentList(otherUsers);

//         socket.emit("register", loginUser);
//         localStorage.setItem("loginUser", loginUser);
//       } catch (err) {
//         console.error("Error fetching users:", err.message);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // 🟢 Handle user click to open chat
//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//     localStorage.setItem("selectedUser", JSON.stringify(user));

//     const loginUser = localStorage.getItem("loginUser");
//     const key = `${loginUser}_${user.name}`;
//     const savedMessages = JSON.parse(localStorage.getItem(key)) || [];
//     setMessages(savedMessages);
//   };

//   // 🟢 Send message
//   const sendMessage = () => {
//     if (!message || !selectedUser) return;
//     const loginUser = localStorage.getItem("loginUser");

//     const newMsg = {
//       sender: loginUser,
//       receiver: selectedUser.name,
//       text: message,
//       time: new Date().toLocaleTimeString(),
//     };

//     socket.emit("send_message", newMsg);

//     const updatedMessages = [...messages, newMsg];
//     setMessages(updatedMessages);
//     setMessage("");

//     const chatKey = `${loginUser}_${selectedUser.name}`;
//     localStorage.setItem(chatKey, JSON.stringify(updatedMessages));
//   };

//   // 🟢 Receive message
//   useEffect(() => {
//     socket.on("receive_message", (newMsg) => {
//       const loginUser = localStorage.getItem("loginUser");

//       const isReceiver = newMsg.receiver === loginUser;
//       const isSender = newMsg.sender === loginUser;

//       const isRelevant =
//         selectedUser &&
//         (newMsg.sender === selectedUser.name ||
//           newMsg.receiver === selectedUser.name);

//       if ((isSender || isReceiver) && isRelevant) {
//         const updatedMessages = [...messages, newMsg];
//         setMessages(updatedMessages);

//         const chatKey = `${loginUser}_${selectedUser.name}`;
//         localStorage.setItem(chatKey, JSON.stringify(updatedMessages));
//       }
//     });

//     return () => {
//       socket.off("receive_message");
//     };
//   }, [messages, selectedUser]);

//   return (
//     <div className="chat-container d-flex">
//       {/* LEFT SIDE - USER LIST */}
//       <div className="sidebar p-3 border-end" style={{ width: "250px" }}>
//         <h5 className="mb-3">Users</h5>
//         {studentList.map((user, index) => (
//           <div
//             key={index}
//             onClick={() => handleUserClick(user)}
//             className={`user-item p-2 mb-2 rounded ${
//               selectedUser?.name === user.name ? "bg-primary text-white" : ""
//             }`}
//             style={{ cursor: "pointer" }}
//           >
//             {user.name}
//           </div>
//         ))}
//       </div>

//       {/* RIGHT SIDE - CHAT BOX */}
//       <div className="chat-box flex-grow-1 p-3">
//         {selectedUser ? (
//           <>
//             <h5 className="mb-3">Chat with {selectedUser.name}</h5>

//             <div
//               className="message-area mb-3"
//               style={{
//                 height: "400px",
//                 overflowY: "scroll",
//                 background: "#f1f1f1",
//                 padding: "10px",
//                 borderRadius: "10px",
//               }}
//             >
//               {messages.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   className={`mb-2 ${
//                     msg.sender === localStorage.getItem("loginUser")
//                       ? "text-end"
//                       : "text-start"
//                   }`}
//                 >
//                   <div className="small fw-bold text-dark">
//                     {msg.sender === localStorage.getItem("loginUser")
//                       ? "You"
//                       : msg.sender}
//                   </div>
//                   <div className="bg-dark p-2 rounded d-inline-block">
//                     {msg.text}
//                   </div>
//                   <div className="small text-muted">{msg.time}</div>
//                 </div>
//               ))}
//             </div>

//             <div className="d-flex">
//               <input
//                 type="text"
//                 value={message}
//                 className="form-control me-2"
//                 onChange={(e) => setMessage(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//                 placeholder="Type message..."
//               />
//               <button onClick={sendMessage} className="btn btn-primary">
//                 Send
//               </button>
//             </div>
//           </>
//         ) : (
//           <h6>Select a user to start chatting</h6>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chat;

import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";
import "./style.css";

const socket = io("http://localhost:3030");

const Chat = () => {
  const [studentList, setStudentList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [loginUser, setLoginUser] = useState(null);
  const messageRef = useRef(null);

  //  Get logged-in user from /profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3030/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const studentData = res.data.studentdata;
        setLoginUser(studentData);
        socket.emit("register", studentData.name);
        localStorage.setItem("loginUser", studentData.name);

        // 🔹 Now fetch all users
        const allUsers = await axios.get("http://localhost:3030/getname", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const others = allUsers.data.all.filter(
          (u) => u.name !== studentData.name
        );
        setStudentList(others);
      } catch (err) {
        console.error("Error fetching user info:", err.message);
      }
    };

    fetchProfile();
  }, []);

  //  Handle selecting a user
  const handleUserClick = (user) => {
    setSelectedUser(user);
    localStorage.setItem("selectedUser", JSON.stringify(user));

    const chatKey = `${loginUser.name}_${user.name}`;
    const savedMsgs = JSON.parse(localStorage.getItem(chatKey)) || [];
    setMessages(savedMsgs);
  };

  //  Send a message
  const sendMessage = () => {
    if (!message || !selectedUser || !loginUser) return;

    const newMsg = {
      sender: loginUser.name,
      receiver: selectedUser.name,
      text: message,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit("send_message", newMsg);

    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);
    setMessage("");

    const chatKey = `${loginUser.name}_${selectedUser.name}`;
    localStorage.setItem(chatKey, JSON.stringify(updatedMessages));
  };

  //  Receive new messages
  useEffect(() => {
    socket.on("receive_message", (newMsg) => {
      if (!loginUser) return;

      const isSender = newMsg.sender === loginUser.name;
      const isReceiver = newMsg.receiver === loginUser.name;

      const isRelevant =
        selectedUser &&
        (newMsg.sender === selectedUser.name ||
          newMsg.receiver === selectedUser.name);

      if ((isSender || isReceiver) && isRelevant) {
        const updated = [...messages, newMsg];
        setMessages(updated);

        const chatKey = `${loginUser.name}_${selectedUser.name}`;
        localStorage.setItem(chatKey, JSON.stringify(updated));
      }
    });

    return () => {
      socket.off("receive_message");
    };
  }, [messages, selectedUser, loginUser]);

  //  Scroll down to latest message
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container d-flex">
      {/* LEFT - USERS */}
      <div
        className="sidebar p-3 border-end bg-dark text-white"
        style={{ width: "250px" }}
      >
        <h5 className="mb-3">Users</h5>
        {studentList.map((user, index) => (
          <div
            key={index}
            onClick={() => handleUserClick(user)}
            className={`p-2 mb-2 rounded ${
              selectedUser?.name === user.name
                ? "bg-success text-white"
                : "bg-secondary text-white"
            }`}
            style={{ cursor: "pointer" }}
          >
            {user.name}
          </div>
        ))}
      </div>

      {/* RIGHT - CHAT */}
      <div className="chat-box flex-grow-1 p-3 d-flex flex-column">
        {selectedUser ? (
          <>
            <h5 className="mb-3 border-bottom pb-2">
              Chat with: {selectedUser.name}
            </h5>

            <div
              ref={messageRef}
              className="flex-grow-1 overflow-auto mb-3 p-3"
              style={{
                background: "#f1f1f1",
                borderRadius: "10px",
              }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 d-flex ${
                    msg.sender === loginUser?.name
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                >
                  <div
                    className={`p-2 rounded shadow ${
                      msg.sender === loginUser?.name
                        ? "bg-success text-white"
                        : "bg-light"
                    }`}
                    style={{ maxWidth: "70%" }}
                  >
                    <div className="small fw-bold">
                      {msg.sender === loginUser?.name ? "You" : msg.sender}
                    </div>
                    <div>{msg.text}</div>
                    <div className="small text-muted text-end mt-1">
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex">
              <input
                type="text"
                value={message}
                className="form-control me-2"
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage} className="btn btn-primary">
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="text-muted">Select a user to start chatting.</div>
        )}
      </div>
    </div>
  );
};

export default Chat;
