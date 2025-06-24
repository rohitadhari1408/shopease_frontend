import React, { useState, useEffect } from "react";
import ProductTable from "../componets/Table/ProuductTabel";
import ProductFormModal from "../Forms/ProductForm";
import ConfirmDeleteModal from "../componets/ConfirmDeleteModel";
import ImageView from "../componets/ImageView";
import Button from "../componets/ui/customfields/Button";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

// Get base API URL from Vite env
const base_url = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = base_url || "http://localhost:5000";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [viewImgUrl, setViewImgUrl] = useState(null);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    console.log("📦 Retrieved token from localStorage:", token);

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log("📨 Sending headers:", headers);

    return { headers };
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/products`, getAuthHeaders());
      setProducts(res.data);
    } catch (error) {
      console.error("❌ Error fetching products:", error);
      toast.error("Failed to load products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddEdit = async (product) => {
    try {
      if (product._id) {
        const res = await axios.put(
          `${API_BASE_URL}/products/${product._id}`,
          product,
          getAuthHeaders()
        );
        setProducts((prev) =>
          prev.map((p) => (p._id === res.data._id ? res.data : p))
        );
        toast.success("Product updated!");
      } else {
        const res = await axios.post(
          `${API_BASE_URL}/products`,
          product,
          getAuthHeaders()
        );
        setProducts((prev) => [...prev, res.data]);
        toast.success("Product added!");
      }
      setModalOpen(false);
      setEditProduct(null);
    } catch (error) {
      console.error("❌ Error in add/edit:", error);
      toast.error("Operation failed");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${API_BASE_URL}/products/${deleteProduct._id}`,
        getAuthHeaders()
      );
      setProducts((prev) => prev.filter((p) => p._id !== deleteProduct._id));
      toast.success("Product deleted!");
      setDeleteProduct(null);
    } catch (error) {
      console.error("❌ Error deleting product:", error);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Inventory Dashboard</h1>

        <div className="mb-4 text-right">
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            + Add Product
          </Button>
        </div>

        <ProductTable
          products={products}
          onEdit={(p) => {
            setEditProduct(p);
            setModalOpen(true);
          }}
          onDelete={(p) => setDeleteProduct(p)}
          onView={(p) => {
            if (p?.image) {
              setViewImgUrl(`${API_BASE_URL}${p.image}`);
            } else {
              toast.error("No image available");
            }
          }}
        />

        {modalOpen && (
          <ProductFormModal
            onClose={() => {
              setModalOpen(false);
              setEditProduct(null);
            }}
            onSave={handleAddEdit}
            initialData={editProduct}
          />
        )}

        <ConfirmDeleteModal
          product={deleteProduct}
          isOpen={!!deleteProduct}
          onCancel={() => setDeleteProduct(null)}
          onConfirm={handleDelete}
        />

        <ImageView
          imageUrl={viewImgUrl}
          isOpen={!!viewImgUrl}
          onClose={() => setViewImgUrl(null)}
        />
      </div>
      <Toaster />
    </div>
  );
};

export default Dashboard;
