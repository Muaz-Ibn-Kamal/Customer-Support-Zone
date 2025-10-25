import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./Component/Banner";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import IssueManagement from "./Component/IssueManagement";
import { Toaster } from "react-hot-toast";

function App() {
  const [issues, setIssues] = useState([]);
  const [history, setHistory] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Data fetch async/await
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/Tickets.json");
      const data = await res.json();
      setIssues(data);
    };
    fetchData();

   
  }, []);

  // In Progress
  const addToHistory = (issue) => {
    if (history.find((item) => item.id === issue.id)) return;

    setIssues((prev) =>
      prev.map((item) =>
        item.id === issue.id ? { ...item, status: "In-Progress" } : item
      )
    );
    setHistory((prev) => [...prev, { ...issue, status: "In-Progress" }]);
  };

  // Complete Task
  const completeTask = (task) => {
    setHistory((prev) => prev.filter((item) => item.id !== task.id));
    setIssues((prev) => prev.filter((item) => item.id !== task.id));
    setResolved((prev) => [...prev, task]);
  };

  return (
    <div>
      <Navbar />
      <Banner
        inProgressCount={history.length}
        resolvedCount={resolved.length}
      />
      <IssueManagement
        issues={issues}
        addToHistory={addToHistory}
        completeTask={completeTask}
        history={history}
        resolved={resolved}
      />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
