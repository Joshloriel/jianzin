"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/network/firebase/firebase";
import { collection, addDoc, onSnapshot, doc, updateDoc } from "firebase/firestore";

type ProductData = {
  t_prd: string;
  c_prd: string;
  p_prd: number;
  f_use: "Y" | "N";
  delete: "Y" | "N";
};

type FirestoreProduct = ProductData & {
  id: string;
};

const initialState: ProductData = {
  t_prd: "",
  c_prd: "",
  p_prd: 0,
  f_use: "Y",
  delete: "N",
};

export default function ProductForm() {
  const [formState, setFormState] = useState<ProductData>(initialState);
  const [products, setProducts] = useState<FirestoreProduct[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), formState);
      setFormState(initialState);
      alert("Product added successfully!");
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (querySnapshot) => {
      const fetched = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as ProductData),
      }));
      setProducts(fetched.filter((p) => p.delete !== "Y")); // Show all products except those marked as deleted
    });

    return () => unsubscribe();
  }, []);

  const toggleVisibility = async (productId: string, currentStatus: "Y" | "N") => {
    try {
      await updateDoc(doc(db, "products", productId), { f_use: currentStatus === "Y" ? "N" : "Y" });
    } catch (err) {
      console.error("Error toggling visibility:", err);
    }
  };

  const handleDelete = async (productId: string) => {
    try {
      await updateDoc(doc(db, "products", productId), { delete: "Y" });
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-200 p-6">
      <div className="flex gap-8">
        {/* Form */}
        <div className="bg-gradient-to-tr from-black via-zinc-500 to-zinc-800 p-6 rounded-2xl shadow-2xl space-y-6 w-[30rem] ">
          <h2 className="text-2xl font-bold text-center text-zinc-200">Add Item</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id: "t_prd", label: "Product Name", type: "text" },
              { id: "p_prd", label: "Price", type: "number" },
            ].map(({ id, label, type }) => (
              <div key={id} className="flex flex-col">
                <label htmlFor={id}>{label}</label>
                <input
                  type={type}
                  id={id}
                  value={formState[id as keyof ProductData]}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      [id]: type === "number" ? e.target.valueAsNumber : e.target.value,
                    })
                  }
                  className="p-2 rounded-md bg-zinc-800 border border-zinc-600"
                />
              </div>
            ))}

            <div className="flex flex-col">
              <label htmlFor="f_use" className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="f_use"
                  checked={formState.f_use === "Y"}
                  onChange={(e) => setFormState({ ...formState, f_use: e.target.checked ? "Y" : "N" })}
                  className="accent-red-900 w-5 h-5"
                />
                Display item
              </label>
            </div>

            <div className="flex flex-col">
              <label htmlFor="c_prd">Description</label>
              <textarea
                value={formState.c_prd}
                onChange={(e) => setFormState({ ...formState, c_prd: e.target.value })}
                className="w-full p-2 rounded-md bg-zinc-800 border border-zinc-600"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 rounded-md bg-red-800 hover:bg-red-900 text-white"
            >
              Save Product
            </button>
          </form>
        </div>

        {/* Product Table */}
        <div className="w-full overflow-x-auto">
          <table className="table-auto w-full bg-zinc-700 rounded-lg text-zinc-200">
            <thead className="bg-zinc-800">
              <tr>
                <th className="px-4 py-2 text-left">Product Name</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-center">Visibility</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prd) => (
                <tr key={prd.id} className="border-t border-zinc-600 hover:bg-zinc-600">
                  <td className="px-4 py-2">{prd.t_prd}</td>
                  <td className="px-4 py-2">{prd.c_prd}</td>
                  <td className="px-4 py-2">₱{prd.p_prd}</td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={prd.f_use === "Y"}
                      onChange={() => toggleVisibility(prd.id, prd.f_use)}
                      className="accent-green-500 w-5 h-5"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleDelete(prd.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}