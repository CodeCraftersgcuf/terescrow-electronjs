import { Images } from '@renderer/constant/Image';
import React from 'react';

interface Agent {
  id: number;
  src: string;
  alt: string;
}

const OnlineAgents: React.FC = () => {
  const agents: Agent[] = [
    { id: 1, src: Images.agent1, alt: 'Agent 1' },
    { id: 2, src: Images.agent1, alt: 'Agent 2' },
    { id: 3, src: Images.agent1, alt: 'Agent 3' },
  ];

  return (
    <div className="flex flex-col items-center ">
      {/* Title */}
      <span className={`text-sm text-[#00000080] mb-2 font-[400]`}>Online Agents</span>

      {/* Avatars */}
      <div className="flex -space-x-2">
        {agents.map((agent) => (
          <img
            key={agent.id}
            src={agent.src}
            alt={agent.alt}
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
          />
        ))}
        <span className="w-10 h-10 flex items-center justify-center bg-gray-300 text-gray-600 text-sm font-semibold rounded-full border-2 border-white shadow-md">
          +3
        </span>
      </div>
    </div>
  );
};

export default OnlineAgents;
