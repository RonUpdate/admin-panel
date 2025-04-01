"use client"
import { redirect } from "next/navigation"

export default function Home() {
    redirect("/admin/products/new")
    return null
}
