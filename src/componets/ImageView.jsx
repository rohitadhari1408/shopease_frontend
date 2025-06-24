import React from "react";
import Modal from "../componets/ui/customfields/Model";

const ImageView = ({ imageUrl, isOpen, onClose }) => {
  if (!imageUrl) return null;

  return (
    <Modal title="Image Preview" isOpen={isOpen} onClose={onClose} width="max-w-3xl">
      <div className="flex justify-center">
        <img
          src={imageUrl}
          alt="Preview"
          className="max-h-[75vh] w-auto rounded shadow"
        />
      </div>
    </Modal>
  );
};

export default ImageView;
