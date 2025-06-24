import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../componets/ui/customfields/Input";
import Select from "../componets/ui/customfields/Select";
import Button from "../componets/ui/customfields/Button";
import Modal from "../componets/ui/customfields/Model";
import { categoryOptions } from "../utils/utils";

export default function ProductFormModal({ onClose, onSave, initialData }) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      quantity: "",
      price: "",
      category: "",
      description: "",
      image: null,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name || "");
    formData.append("quantity", data.quantity || "");
    formData.append("price", data.price || "");
    formData.append("category", data.category || "");
    formData.append("description", data.description || "");
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    const payload = initialData?._id
      ? { ...data, _id: initialData._id, image: data.image?.[0] }
      : formData;

    onSave(payload);
  };

  return (
    <Modal title={initialData ? "Edit Product" : "Add Product"} isOpen={true} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" encType="multipart/form-data">
        <Input
          label="Product Name"
          name="name"
          placeholder="Enter product name"
          {...register("name")}
        />
        <Input
          label="Quantity"
          name="quantity"
          type="number"
          placeholder="Enter quantity"
          {...register("quantity")}
        />
        <Input
          label="Price"
          name="price"
          type="number"
          placeholder="Enter price"
          {...register("price")}
        />
        <Select
          label="Category"
          name="category"
          options={categoryOptions}
          placeholder="Select category"
          {...register("category")}
        />
        <Input
          label="Description"
          name="description"
          type="text"
          placeholder="Enter product description"
          {...register("description")}
        />
        <Input
          label="Product Image"
          name="image"
          type="file"
          {...register("image")}
        />
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="secondary" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">
            {initialData ? "Update" : "Add"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
