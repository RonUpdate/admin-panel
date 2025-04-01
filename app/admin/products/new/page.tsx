
"use client"

import ProductForm from "@/components/ProductForm"

export default function NewProductPage() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Добавить товар</h1>
      <ProductForm />
    </div>
  )
}
