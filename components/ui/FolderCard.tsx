import React from "react";
import { Folder } from "lucide-react";

interface FolderCardProps {
  title: string;
  description: string;
  className?: string;
}

const FolderCard: React.FC<FolderCardProps> = ({ title, className = "" }) => {
  return (
    <div className="w-fit   px-3 pb-3">
      <div className="bg-indigo-500 rounded-md p-3 flex items-center space-x-3  text-white cursor-pointer ">
        <Folder className="w-10 h-10" />
        <p className="justify-start">{title}</p>
      </div>
    </div>
  );
};

export default FolderCard;
