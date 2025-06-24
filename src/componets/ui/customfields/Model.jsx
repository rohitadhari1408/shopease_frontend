import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../customfields/Button"; // adjust path if needed

export default function Modal({ title, isOpen, onClose, children, width = "max-w-md" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className={`bg-white w-full ${width} rounded shadow-lg overflow-hidden`}>
        <div className="flex justify-between items-center px-5 py-3 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <Button
            variant="outline"
            className="p-1 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <AiOutlineClose size={20} />
          </Button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
