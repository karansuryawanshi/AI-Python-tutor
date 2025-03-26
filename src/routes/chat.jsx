import React, { useState, useEffect } from "react";
import { MessageCircle, Settings, Book, Award, Key } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Play } from "lucide-react";
import Logo from "../assets/logo.jpeg";
import robotBackground from "../assets/robot_playground.glb";
import tom_dance from "../assets/tom_cat_swing_dancing.glb";
import "@google/model-viewer";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const Chat = () => {
  // State hooks for various aspects of the app
  const [message, setMessage] = useState(""); // User's input message
  const [chat, setChat] = useState([]); // List of chat messages
  const [apiKey, setApiKey] = useState(""); // User's Gemini API key
  const [showSettings, setShowSettings] = useState(false); // Toggle settings visibility
  const [showChat, setShowChat] = useState(false); // Toggle chat visibility
  const [loading, setLoading] = useState(false); // Loading state while waiting for response
  const [character, setCharacter] = useState("professor"); // Selected tutor character
  const [showError, setShowError] = useState(false); // Show error if message/API key is missing
  const [headDescription, setHeadDescription] = useState(true); // Description view toggle

  // Different tutor characters available
  const characters = {
    professor: "Professor Python 🎓",
    robot: "Robo Coder 🤖",
    wizard: "Code Wizard ✨",
    astronaut: "Space Coder 👨‍🚀",
  };

  // Function to call the Gemini AI API and get a response
  const callGeminiAPI = async (prompt) => {
    setLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(
        process.env.REACT_APP_API_KEY || apiKey
      );

      // Prepares the prompt for the AI with instructions
      const instruction =
        "You are a Python teacher for mall children. Keep your answers simple and engaging, with an emphasis on fun and easy-to-understand examples.";
      const fullPrompt = instruction + " " + prompt;

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(fullPrompt); // Get the response from the model
      setLoading(false);
      return result.response.text(); // Return the text response
    } catch (error) {
      setLoading(false);
      return "Error fetching response. Please check your API key."; // Error message
    }
  };

  // Handle message submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setShowError(true); // Show error if message is empty
      return;
    }
    setShowError(false);

    // Add user's message to the chat
    const newMessage = { text: message, sender: "user" };
    setChat((prev) => [...prev, newMessage]);
    setMessage(""); // Reset input field

    try {
      const response = await callGeminiAPI(message); // Get AI response
      const aiMessage = { text: response, sender: "ai" };
      setChat((prev) => [...prev, aiMessage]); // Add AI's message to the chat
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Toggle chat window visibility
  const openChat = () => {
    setShowChat(!showChat);
    setHeadDescription(!headDescription);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header with logo and title */}
      <div className="flex justify-between px-10 h-18 py-4 bg-purple-200 rounded-b-xl">
        <h1 className="flex items-center text-xl text-purple-600">
          <img src={Logo} className="w-8 h-8 rounded-full" alt="" />
          <span className="text-4xl font-bold text-purple-600 font-serif">
            P
          </span>
          ythonLabs
        </h1>
      </div>

      {/* Main content area */}
      <div className="max-w-4xl mx-auto mb-8 mt-8">
        {headDescription && (
          <div>
            {/* Welcome description */}
            <div className="rounded-lg shadow-md bg-white p-6 mb-6">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                Welcome to PythonLabs! 🚀
              </h2>
              <p className="mb-4 text-gray-600">
                PythonLabs is your friendly AI-powered Python tutor designed
                specially for young coders! Our interactive learning environment
                makes coding fun and easy to understand, with personalized
                guidance from your choice of fun teacher characters.
              </p>
              <p className="text-gray-600">
                Features include real-time coding help, multiple tutor
                personalities to choose from, and interactive exercises that
                make learning Python as fun as playing a game!
              </p>
            </div>

            {/* Settings and Start buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="flex items-center gap-2 mb-4 px-4 py-2 bg-white rounded-lg hover:bg-gray-50 shadow-sm transition-colors"
              >
                <Settings className="text-purple-600" size={16} />
                <p className="text-purple-600">Settings</p>
              </button>
              <button
                onClick={() => openChat()}
                className="flex items-center gap-2 mb-4 px-4 py-2 bg-white rounded-lg hover:bg-gray-50 shadow-sm transition-colors"
              >
                <Play className="text-purple-600" size={16} />
                <p className="text-purple-600">Start</p>
              </button>
            </div>

            {/* Settings panel */}
            {showSettings && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      API Key
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder="Enter your Gemini API key"
                        className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <button className="p-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                        <Key size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Character selection */}
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Choose Your Tutor
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(characters).map(([key, name]) => (
                        <button
                          key={key}
                          onClick={() => setCharacter(key)}
                          className={`p-2 rounded transition-colors ${
                            character === key
                              ? "bg-purple-600 text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3D model viewer */}
            <div className="flex justify-center items-center rounded-xl bg-white shadow-md">
              <model-viewer
                src={robotBackground}
                animation-name="Wave"
                alt="A 3D model"
                auto-rotate
                autoplay
                camera-controls
                camera-orbit="0deg 70deg 5m"
                field-of-view="50deg"
                style={{ width: "100%", height: "200px" }}
              />
            </div>
          </div>
        )}

        {/* Error message if API key or message is missing */}
        {showError && (
          <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-4">
            Please enter a message and set up your API key first!
          </div>
        )}

        {/* Chat interface */}
        {!headDescription && (
          <div className="bg-white rounded-lg shadow-md p-4">
            {chat?.length === 0 && (
              <div className="flex justify-center items-center flex-col">
                <p className="flex bg-purple-600 text-white px-4 py-1 rounded-lg">
                  New Chat
                </p>
                <p className="text-gray-500 absolute mt-96 text-clip">
                  Hey I am {characters[character]} Lets Start learning Python
                  together!
                </p>
              </div>
            )}
            <div className="h-96 overflow-y-auto mb-4 space-y-4">
              {/* Displaying chat messages */}
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-purple-100 ml-12"
                      : "bg-gray-100 mr-12"
                  }`}
                >
                  <div className="font-medium mb-1 text-gray-800">
                    {msg.sender === "user" ? "You" : characters[character]}
                  </div>
                  <ReactMarkdown
                    components={{
                      pre: ({ node, ...props }) => (
                        <div className="overflow-auto w-full my-2 bg-black/10 p-2 text-gray-700 rounded-lg">
                          <pre {...props} />
                        </div>
                      ),
                      code: ({ node, ...props }) => (
                        <code
                          className="bg-black/10 rounded-lg p-1 text-gray-700"
                          {...props}
                        />
                      ),
                    }}
                    className="text-sm overflow-hidden leading-7 text-gray-700"
                  >
                    {msg.text || ""}
                  </ReactMarkdown>
                </div>
              ))}
              {/* Loading state with animation */}
              {!loading && (
                <div className="text-center">
                  <p className="text-gray-500 animate-pulse">
                    {characters[character]} is thinking...
                    <br />
                    till that time Enjoy 🕺
                  </p>
                  <div className=" flex items-center justify-center">
                    <model-viewer
                      src={tom_dance}
                      animation-name="Wave"
                      alt="A 3D model"
                      auto-rotate
                      autoplay
                      camera-controls
                      style={{ width: "1000px", height: "300px" }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* User input field */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything about Python!"
                className="flex-1 p-2 text-purple-700 border rounded focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:bg-purple-300 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
