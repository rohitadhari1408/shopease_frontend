
import Modal from "../componets/ui/customfields/Model";
import Button from "../componets/ui/customfields/Button";

export default function ConfirmDeleteModal({ product, onCancel, onConfirm, isOpen }) {
  return (
    <Modal title="Delete Product" isOpen={isOpen} onClose={onCancel} width="max-w-sm">
      <p className="text-center">
        Are you sure you want to delete{" "}
        <strong>{product?.name || "this product"}</strong>?
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </Modal>
  );
}
