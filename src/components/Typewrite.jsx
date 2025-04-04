import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const TypewriterCode = ({ code, language = "javascript", speed = 50 }) => {
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode((prev) => prev + (code[index] || ""));

        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [code, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SyntaxHighlighter language={language} style={atomDark}>
        {displayedCode}
      </SyntaxHighlighter>
    </motion.div>
  );
};

export default function App() {
  const sampleCode = `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=' ')
        a, b = b, a + b

def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

print("Fibonacci Series:")
fibonacci(10)
print("\nFactorial of 5:", factorial(5))`;

  //   console.log("[sampleCode]", sampleCode);

  return (
    <div className="p-4  min-h-screen flex justify-center items-center">
      <TypewriterCode
        className="bg-white"
        code={sampleCode}
        language="javascript"
        speed={50}
      />
    </div>
  );
}
