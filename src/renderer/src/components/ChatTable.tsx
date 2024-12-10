import React, { useState } from 'react';
// import ChatApplication from '../ChatApplication';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import TeamChat from './TeamChat';
import ChatApplication from './ChatApplication';
// import TeamChat from '../TeamChat';

interface Transaction {
  id: number;
  name: string;
  username: string;
  status: string;
  serviceType?: string;
  transactionType?: string;
  date?: string;
  amount?: string;
  dateAdded?: string;
  role?: 'Manager' | 'Agent';
}

interface TransactionsTableProps {
  data: Transaction[];
  isChat?: boolean; // Optional prop
  isTeam?: boolean;
}

const ChatTable: React.FC<TransactionsTableProps> = ({ data, isChat = false, isTeam = false, }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTeamChatOpen, setIsTeamChatOpen] = useState(false);

  if (isChat) {
    // Render Chat Section Format (as per the image)
    return (
      <div className="mt-6 bg-white rounded-lg shadow-md">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="py-3 px-4">Name, Chat</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Agent</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((transaction) => (
              <tr key={transaction.id} className="border-t hover:bg-gray-50 relative">
                <td className="py-3 px-4">
                  <div>
                    <span className="font-semibold">{transaction.name}</span>
                    <p className="text-sm text-gray-500">I want to trade $500...</p>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div>
                    <span className="block font-semibold">{transaction.amount}</span>
                    <span className="text-sm text-gray-500">NGN170,000</span>
                  </div>
                </td>
                <td className="py-3 px-4">Maleek</td>
                <td className="py-3 px-4">{transaction.date}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-lg ${transaction.status === 'Successful'
                      ? 'bg-green-100 text-green-700'
                      : transaction.status === 'Declined'
                        ? 'bg-red-100 text-red-700'
                        : transaction.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : transaction.status === 'Unanswered'
                            ? 'bg-gray-100 text-gray-500'
                            : 'bg-purple-100 text-purple-700'
                      }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="py-3 px-4 flex justify-center items-center space-x-2">
                  <div>
                    {/* Button to Open Chat */}
                    <button
                      className="text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={() => setIsChatOpen(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3C7.5 3 3.75 7.03 2.25 12c1.5 4.97 5.25 9 9.75 9s8.25-4.03 9.75-9C20.25 7.03 16.5 3 12 3zM12 15a3 3 0 100-6 3 3 0 000 6z"
                        />
                      </svg>
                    </button>

                    {/* Chat Application */}
                    {isChatOpen && (
                      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg relative">
                          {/* Close Button */}
                          <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={() => setIsChatOpen(false)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                          {/* ChatApplication Component */}
                          <ChatApplication data={data} id={transaction.id} onClose={() => setIsChatOpen(false)} />
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => toggleMenu(transaction.id)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    &#x22EE; {/* Vertical ellipsis */}
                  </button>
                  {activeMenu === transaction.id && (
                    <div
                      className="absolute right-0 mt-2 bg-[#F6F7FF] rounded-md w-48 z-50"
                      style={{
                        boxShadow: '0px 4px 6px #00000040', // Custom drop shadow
                      }}
                    >
                      <button
                        onClick={() => console.log('View Chat Details')}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        View Chat Details
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (isTeam) {
    // Render Team Members Table
    return (
      <div className="mt-6 bg-white rounded-lg shadow-md">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="py-3 px-4">Name, Username</th>
              <th className="py-3 px-4">Date Added</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((member) => (
              <tr key={member.id} className="border-t hover:bg-gray-50">
                {/* Name and Username */}
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800">{member.name}</span>
                      <p className="text-sm text-gray-500">{member.username}</p>
                    </div>
                    <span
                      className={`w-3 h-3 rounded-full ${member.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                    ></span>
                  </div>
                </td>

                {/* Date Added */}
                <td className="py-3 px-4">{member.dateAdded}</td>

                {/* Role */}
                <td className="py-3 px-4">{member.role}</td>


                {/* Action */}
                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center space-x-2">
                    {/* View Button */}
                    <button
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => setIsTeamChatOpen(true)}
                    >
                      <AiOutlineEye className="text-gray-700 w-5 h-5" />
                    </button>

                    {/* Edit Button */}
                    <button
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => console.log('Edit', member.id)}
                    >
                      <AiOutlineEdit className="text-gray-700 w-5 h-5" />
                    </button>

                    {/* Delete Button */}
                    <button
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => console.log('Delete', member.id)}
                    >
                      <AiOutlineDelete className="text-red-500 w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
             {/* Chat Application */}
             {isTeamChatOpen && (
                      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center z-50">
                        <div className="bg-white ms-10 w-full max-w-3xl rounded-lg shadow-lg relative">
                          {/* Close Button */}
                          <button
                            className="absolute top-3 right-[-36.3rem] text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={() => setIsTeamChatOpen(false)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                          <TeamChat  />
                        </div>
                      </div>
                    )}
      </div>
    );
  }
  // Default Table Format
  return (
    <div className="mt-6 bg-white rounded-lg shadow-md">
      <table className="min-w-full text-left text-sm text-gray-700">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="py-3 px-4">Name, Username</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Service Type</th>
            <th className="py-3 px-4">Transaction Type</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-1"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => (
            <tr key={transaction.id} className="border-t hover:bg-gray-50 relative">
              <td className="py-3 px-4">
                <div>
                  <span className="font-semibold">{transaction.name}</span>
                  <span className="text-sm text-gray-500"> ({transaction.username})</span>
                </div>
              </td>
              <td className="py-3 px-4">
                <span
                  className={`px-2 py-1 text-xs rounded-lg ${transaction.status === 'Successful'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                    }`}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="py-3 px-4">{transaction.serviceType}</td>
              <td className="py-3 px-4">{transaction.transactionType}</td>
              <td className="py-3 px-4">{transaction.date}</td>
              <td className="py-3 px-4">{transaction.amount}</td>
              <td className="py-3 px-4 text-right ">
                <button
                  onClick={() => toggleMenu(transaction.id)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  &#x22EE; {/* Vertical ellipsis */}
                </button>
                {activeMenu === transaction.id && (
                  <div
                    className="absolute right-0 mt-2 bg-[#F6F7FF] rounded-md w-48 z-50"
                    style={{
                      boxShadow: '0px 4px 6px #00000040', // Custom drop shadow
                    }}
                  >
                    <button
                      onClick={() => console.log('View Customer Details')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      View Customer Details
                    </button>
                    <button
                      onClick={() => console.log('View Transaction Details')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      View Transaction Details
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChatTable;