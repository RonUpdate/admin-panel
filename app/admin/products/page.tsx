import Link from "next/link"
import { PlusCircle, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AdminLayout } from "@/components/admin-layout"
import { Input } from "@/components/ui/input"

// Update the title and product data to match Креатив Фабрика

// Replace the products array with this:
const products = [
  {
    id: "1",
    name: "Набор для творчества 'Акварель'",
    category: "Художественные материалы",
    createdAt: "2023-10-15",
  },
  {
    id: "2",
    name: "Мастер-класс 'Скульптура из глины'",
    category: "Мастер-классы",
    createdAt: "2023-09-22",
  },
  {
    id: "3",
    name: "Холст на подрамнике 50x70",
    category: "Холсты и подрамники",
    createdAt: "2023-11-05",
  },
  {
    id: "4",
    name: "Набор кистей 'Профессионал'",
    category: "Инструменты",
    createdAt: "2023-08-30",
  },
  {
    id: "5",
    name: "Декоративные элементы 'Винтаж'",
    category: "Декор",
    createdAt: "2023-12-01",
  },
  {
    id: "6",
    name: "Мольберт складной 'Студио'",
    category: "Оборудование",
    createdAt: "2024-01-10",
  },
]

export default function ProductsPage() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Товары</h1>
          <Button asChild>
            <Link href="/admin/products/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Добавить товар
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Поиск товаров..." className="pl-8" />
          </div>
          <div className="w-full sm:w-[180px]">
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
              <option value="">Все категории</option>
              <option value="Художественные материалы">Художественные материалы</option>
              <option value="Мастер-классы">Мастер-классы</option>
              <option value="Холсты и подрамники">Холсты и подрамники</option>
              <option value="Инструменты">Инструменты</option>
              <option value="Декор">Декор</option>
              <option value="Оборудование">Оборудование</option>
            </select>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Название</TableHead>
                <TableHead className="hidden md:table-cell">Категория</TableHead>
                <TableHead className="hidden md:table-cell">Дата создания</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center">
                    Товары не найдены.
                  </TableCell>
                </TableRow>
              ) : (
                products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{product.category}</TableCell>
                    <TableCell className="hidden md:table-cell">{product.createdAt}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/admin/products/${product.id}/edit`}>Редактировать</Link>
                        </Button>
                        <Button variant="destructive" size="sm">
                          Удалить
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  )
}

