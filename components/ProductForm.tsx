
"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function ProductForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [offerUrl, setOfferUrl] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const router = useRouter()

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    const filePath = `products/${Date.now()}-${file.name}`
    const { data, error } = await supabase.storage
      .from("products")
      .upload(filePath, file)

    if (data) {
      const publicUrl = supabase.storage.from("products").getPublicUrl(data.path).data.publicUrl
      setImageUrl(publicUrl)
    } else {
      alert("Ошибка при загрузке изображения")
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const { error } = await supabase.from("products").insert({
      title,
      description,
      category,
      offer_url: offerUrl,
      image_url: imageUrl,
    })

    if (!error) {
      router.push("/admin/products")
    } else {
      alert("Ошибка при добавлении товара")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Категория"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Ссылка на оффер"
        value={offerUrl}
        onChange={(e) => setOfferUrl(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageUrl && <img src={imageUrl} alt="preview" className="w-32 mt-2" />}
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">Сохранить</button>
    </form>
  )
}
