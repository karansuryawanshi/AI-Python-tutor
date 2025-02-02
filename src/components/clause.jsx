import React, { useState, useEffect } from "react";
import { MessageCircle, Settings, Book, Award, Key } from "lucide-react";
import ReactMarkdown from "react-markdown";
import space from "../assets/need_some_space.glb";
import { Play } from "lucide-react";
import Logo from "../assets/logo.jpeg";
import robotBackground from "../assets/robot_playground.glb";
import "@google/model-viewer";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const CodeTutor = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [apiKey, setApiKey] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState("professor");
  const [showError, setShowError] = useState(false);
  const [headDescription, setHeadDescription] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const characters = {
    professor: "Professor Python 🎓",
    robot: "Robo Coder 🤖",
    wizard: "Code Wizard ✨",
    astronaut: "Space Coder 👨‍🚀",
  };

  console.log("API Key", process.env.GEMINI_API_KEY);

  const callGeminiAPI = async (prompt) => {
    if (apiKey == undefined) return "Please set up your API key first!";
    setLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(
        "AIzaSyBP3jeiOVm5mhFicvtcY09c0tG7V_X06hk"
      );

      const instruction =
        "You are a Python teacher for mall children. Keep your answers simple and engaging, with an emphasis on fun and easy-to-understand examples.";
      const fullPrompt = instruction + " " + prompt;

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(fullPrompt);
      setLoading(false);
      return result.response.text();
    } catch (error) {
      setLoading(false);
      return "Error fetching response. Please check your API key.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setShowError(true);
      return;
    }
    setShowError(false);

    const newMessage = { text: message, sender: "user" };
    setChat((prev) => [...prev, newMessage]);
    setMessage("");

    try {
      const response = await callGeminiAPI(message);
      const aiMessage = { text: response, sender: "ai" };
      setChat((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const openChat = () => {
    setShowChat(!showChat);
    setHeadDescription(!headDescription);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "" : "bg-gradient-to-b from-purple-50 to-white"
      }`}
    >
      {darkMode && (
        <div className="absolute top-16 -z-10 bg-black">
          {/* <img className="h-96 w-96" src={Logo} alt="" /> */}
          <model-viewer
            src={space}
            animation-name="Wave"
            alt="A 3D model"
            auto-rotate
            autoplay
            camera-controls
            camera-orbit="0deg 75deg 0.5m"
            field-of-view="1deg"
            style={{ width: "1400px", height: "900px" }}
            // onClick={() => alert("3D Model Clicked!")} // Click event here
          />
        </div>
      )}
      <div className="flex justify-between px-10 h-18 py-4 bg-purple-200 rounded-b-xl">
        <h1 className="flex items-center text-xl text-purple-600">
          <img src={Logo} className="w-8 h-8 rounded-full" alt="" />
          <span
            className={`text-4xl font-bold text-purple-600 font-serif ${
              darkMode ? "text-white" : " text-purple-700"
            }`}
          >
            P
          </span>
          ythonLabs
        </h1>

        <button
          onClick={toggleDarkMode}
          className="text-purple-600 p-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        {/* {showChat && (
          <button
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-gray-50 shadow-sm transition-colors"
            onClick={() => {
              setHeadDescription(!headDescription);
            }}
          >
            Dashboard
          </button>
        )} */}
      </div>

      <div className="max-w-4xl mx-auto mb-8 mt-8">
        {headDescription && (
          <div>
            <div
              className={` rounded-lg shadow-md p-6 mb-6 ${
                darkMode ? "" : "bg-white"
              }`}
            >
              <h2
                className={`text-xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Welcome to PythonLabs! 🚀
              </h2>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-500" : "text-gray-600"
                }`}
              >
                PythonLabs is your friendly AI-powered Python tutor designed
                specially for young coders! Our interactive learning environment
                makes coding fun and easy to understand, with personalized
                guidance from your choice of fun teacher characters.
              </p>
              <p className={` ${darkMode ? "text-gray-500" : "text-gray-600"}`}>
                Features include real-time coding help, multiple tutor
                personalities to choose from, and interactive exercises that
                make learning Python as fun as playing a game!
              </p>
            </div>

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
            <div className="flex justify-center items-center rounded-xl bg-white shadow-md">
              <model-viewer
                src={robotBackground}
                animation-name="Wave"
                alt="A 3D model"
                auto-rotate
                autoplay
                camera-controls
                style={{ width: "100%", height: "200px" }}
              />
            </div>
          </div>
        )}

        {showError && (
          <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-4">
            Please enter a message and set up your API key first!
          </div>
        )}
        {!headDescription && (
          <div className="bg-white rounded-lg shadow-md p-4">
            {chat?.length === 0 && (
              <p className="flex justify-center ">
                <span className="flex bg-purple-600 text-white px-4 py-1 rounded-lg">
                  Start Chat
                </span>
              </p>
            )}
            <div className="h-96 overflow-y-auto mb-4 space-y-4">
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
                    {msg.sender === "user"
                      ? "You"
                      : //   <model-viewer
                        //     src={robotBackground} // Replace this with the actual path or state containing the model URL
                        //     alt="A 3D model"
                        //     auto-rotate
                        //     autoplay
                        //     camera-controls
                        //     style={{ width: "10%", height: "20px" }}
                        //   />
                        characters[character]}
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
              {loading && (
                <div className="text-center text-gray-500 animate-pulse">
                  {characters[character]} is thinking...
                </div>
              )}
            </div>

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

export default CodeTutor;
