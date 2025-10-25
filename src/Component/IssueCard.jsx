import React from "react";

const IssueCard = ({ issue, onSelect }) => {
  const statusColors = {
    Open: "bg-green-100 text-green-600",
    "In-Progress": "bg-yellow-100 text-yellow-600",
  };

  const priorityColors = {
    "HIGH PRIORITY": "text-red-500 font-semibold",
    "MEDIUM PRIORITY": "text-yellow-600 font-semibold",
    "LOW PRIORITY": "text-green-500 font-semibold",
  };

  return (
    <div
      onClick={onSelect}
      className="cursor-pointer bg-white p-4 rounded-md shadow-md  hover:shadow-lg hover:scale-[1.01] transition"
    >
      {/* Title + Status */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-gray-800 text-sm md:text-base">
          {issue.title}
        </h2>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            statusColors[issue.status]
          }`}
        >
          {issue.status}
        </span>
      </div>

      <p className="text-gray-500 text-sm mb-3">{issue.desc}</p>

      <div className="flex flex-wrap justify-between items-center text-xs text-gray-600">
        <span>
          {issue.id}{" "}
          <span className={priorityColors[issue.priority]}>
            {issue.priority}
          </span>
        </span>
        <span className="space-x-2">
          <span>{issue.name}</span>
          <span>{issue.date}</span>
        </span>
      </div>
    </div>
  );
};

export default IssueCard;
