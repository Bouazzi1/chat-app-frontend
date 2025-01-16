import React, { useState, useEffect, useRef } from 'react';
    import { FaCircle, FaCheckDouble } from 'react-icons/fa';
    
    function Chat({ onLogout }) {
      const [messages, setMessages] = useState({});
      const [newMessage, setNewMessage] = useState('');
      const [selectedUser, setSelectedUser] = useState(null);
      const [users, setUsers] = useState([
        { id: 1, name: 'User 1', online: true, avatar: 'https://placekitten.com/50/50' },
        { id: 2, name: 'User 2', online: false, avatar: 'https://placekitten.com/51/51' },
        { id: 3, name: 'User 3', online: true, avatar: 'https://placekitten.com/52/52' },
      ]);
      const chatContainerRef = useRef(null);
    
      useEffect(() => {
        if (selectedUser) {
          scrollToBottom();
        }
      }, [messages, selectedUser]);
    
      const scrollToBottom = () => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      };
    
      const handleSendMessage = () => {
        if (newMessage.trim() !== '' && selectedUser) {
          const message = {
            id: Date.now(),
            text: newMessage,
            sender: 'You',
            timestamp: new Date().toLocaleTimeString(),
            status: 'sent',
          };
          setMessages(prevMessages => ({
            ...prevMessages,
            [selectedUser.id]: [...(prevMessages[selectedUser.id] || []), message]
          }));
          setNewMessage('');
        }
      };
    
      const handleInputChange = (e) => {
        setNewMessage(e.target.value);
      };
    
      const handleLogoutClick = () => {
        onLogout();
      };
    
      const handleUserSelect = (user) => {
        setSelectedUser(user);
      };
    
      return (
        <div className="h-screen bg-background dark:bg-background-dark grid grid-cols-1 md:grid-cols-4">
          <aside className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-text dark:text-text-dark">Users</h2>
            <ul>
              {users.map((user) => (
                <li
                  key={user.id}
                  className={`flex items-center mb-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer ${
                    selectedUser?.id === user.id ? 'bg-gray-200 dark:bg-gray-700' : ''
                  }`}
                  onClick={() => handleUserSelect(user)}
                >
                  <img src={user.avatar} alt="User Avatar" className="w-8 h-8 rounded-full mr-2" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-text dark:text-text-dark font-medium">{user.name}</span>
                      <FaCircle
                        className={`ml-2 text-xs ${
                          user.online ? 'text-green-500' : 'text-gray-400'
                        }`}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
          <main className="col-span-1 md:col-span-3 flex flex-col p-4">
            {selectedUser ? (
              <>
                <div className="text-xl font-bold mb-4 text-text dark:text-text-dark">
                  Chat with {selectedUser.name}
                </div>
                <div
                  ref={chatContainerRef}
                  className="flex-1 overflow-y-auto mb-4 p-4 border border-gray-300 dark:border-gray-700 rounded"
                >
                  {(messages[selectedUser.id] || []).map((message) => (
                    <div
                      key={message.id}
                      className={`mb-4 p-3 rounded w-fit max-w-[70%] relative ${
                        message.sender === 'You'
                          ? 'bg-primary-light dark:bg-primary-dark ml-auto text-right'
                          : 'bg-gray-200 dark:bg-gray-700 mr-auto'
                      }`}
                    >
                      <div className="text-sm text-gray-600 dark:text-gray-300">{message.sender}</div>
                      <div className="text-text dark:text-text-dark">{message.text}</div>
                      <div className="flex items-center justify-end text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <span className="mr-1">{message.timestamp}</span>
                        {message.sender === 'You' && (
                          <FaCheckDouble
                            className={`text-xs ${
                              message.status === 'sent' ? 'text-gray-500' : 'text-blue-500'
                            }`}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 dark:border-gray-700 rounded p-2 mr-2 text-text dark:text-text-dark dark:bg-gray-700"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={handleInputChange}
                  />
                  <button
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
                    onClick={handleSendMessage}
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-gray-500 dark:text-gray-400">Select a user to start chatting</span>
              </div>
            )}
            <button
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          </main>
        </div>
      );
    }
    
    export default Chat;
