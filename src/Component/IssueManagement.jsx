import React from "react";
import IssueCard from "./IssueCard";
import toast from "react-hot-toast";
import { addCartToLs, getCartFromLs } from "../Utility/localStorage";

const IssueManagement = ({
  issues,
  addToHistory,
  completeTask,
  history,
  resolved,
}) => {
  
    const getCartFromLS = getCartFromLs();
    console.log(getCartFromLS);
  const handleSelect = (issue) => {
    addToHistory(issue);
    const storedCart = [];
    const singleIssue = issues.find((issueId) => issueId.id === issue.id);
    if (singleIssue) {
      storedCart.push(singleIssue);
    }
    console.log("storedCart", storedCart);
    console.log(singleIssue);
    toast("In-Progress ", {
      style: {
        background: "#10b981",
        color: "#fff",
      },
    });
  };

  const handleComplete = (issue) => {
    completeTask(issue);
    toast.success("Completed  ", {
      style: {
        background: "#10b981",
        color: "#fff",
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-xl font-bold text-gray-700 mb-2">
            Customer Tickets
          </h1>
          <div className="grid md:grid-cols-2 gap-4">
            {issues.map((issue) => (
              <IssueCard
                key={issue.id}
                issue={issue}
                onSelect={() => {
                  handleSelect(issue); 
                  addCartToLs(issue.id); 
                }}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h1 className="text-xl font-bold text-gray-700 mb-2">Task Status</h1>

          {/* In-Progress */}
          <h2 className="text-md font-semibold text-gray-700 mb-2">
            In-Progress
          </h2>
          <div className="bg-white p-4 rounded-md shadow-sm mb-6 space-y-3">
            {history.length === 0 && (
              <p className="text-gray-500">No tasks in progress</p>
            )}
            {history.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-3 gap-2 bg-white rounded-md shadow-sm"
              >
                <span className="font-medium text-lg text-green-950">
                  {item.title}
                </span>
                <button
                  className="bg-green-600 text-white p-2 rounded cursor-pointer"
                  onClick={() => handleComplete(item)}
                >
                  Complete
                </button>
              </div>
            ))}
          </div>

          {/* Resolved Tasks */}
          <h2 className="text-md font-semibold text-gray-700 mb-2">Resolved</h2>
          <div className="bg-gray-50 p-4 rounded-md shadow-sm space-y-2 max-h-[400px] overflow-y-auto">
            {resolved.length === 0 && (
              <p className="text-gray-500">No resolved tasks yet</p>
            )}
            {resolved.map((task, idx) => (
              <div
                key={idx}
                className="bg-green-100 text-gray-700 p-2 rounded-md"
              >
                {task.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueManagement;
