import { getChatStats } from "@renderer/api/queries/admin.chat.queries";
import ChatFilters from "@renderer/components/ChatFilters";
import ChatTable from "@renderer/components/ChatTable";
import StatsCard from "@renderer/components/StatsCard";
import { useAuth } from "@renderer/context/authContext";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
// import ChatTable from "./ChatTable";
// import ChatFilters from "./ChatFilters";
const chats = [
  {
    id: 1,
    name: "Qamardeen Abdulmalik",
    message: "I want to trade $500...",
    amount: "$100\nNGN170,000",
    agent: "Maleek",
    date: "Nov 7, 2024",
    status: "Successful",
  },
  {
    id: 2,
    name: "Qamardeen Abdulmalik",
    message: "I want to trade $500...",
    amount: "$100\nNGN170,000",
    agent: "Maleek",
    date: "Nov 7, 2024",
    status: "Declined",
  },
  // Add more chats
];

const ChatPage: React.FC = () => {
  const [filters, setFilters] = useState({
    status: "All",
    transactionType: "Buy",
    search: "",
  });
  const {token}=useAuth();
  const filteredChats = chats.filter((chat) => {
    const matchesStatus =
      filters.status === "All" || chat.status === filters.status;
    const matchesSearch =
      filters.search === "" ||
      chat.name.toLowerCase().includes(filters.search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-[40px] font-normal text-gray-800">Chats</h1>

      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatsCard
          title="Total Chats"
          value="15,000"
          change="+1%"
          isPositive={true}
        />
        <StatsCard
          title="Active Now"
          value="20"
          change="+1%"
          isPositive={true}
        />
        <StatsCard
          title="Offline Now"
          value="14,980"
          change="+1%"
          isPositive={true}
        />
        <StatsCard
          title="Total Transactions"
          value="1,500"
          change="-1%"
          isPositive={false}
        />
      </div>

      {/* Filters */}
      <ChatFilters
        filters={filters}
        onChange={(updatedFilters) =>
          setFilters({ ...filters, ...updatedFilters })
        }
      />

      {/* Chat Table */}
      <ChatTable data={filteredChats} />
    </div>
  );
};

export default ChatPage;
