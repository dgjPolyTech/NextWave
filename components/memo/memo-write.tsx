"use client"

import { useState } from "react"
import { FileText, Bold, Italic, List, Link, Save } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function MemoWrite() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Memo created:", formData)
    alert("메모가 저장되었습니다!")
    setFormData({
      title: "",
      content: "",
      category: ""
    })
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">메모 작성</h1>
        <p className="text-muted-foreground mt-1">새로운 메모를 작성하세요</p>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            새 메모
          </CardTitle>
          <CardDescription>메모 내용을 입력해 주세요</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-2">
                <Label htmlFor="title">제목</Label>
                <Input
                  id="title"
                  placeholder="메모 제목을 입력하세요"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">카테고리</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meeting">회의록</SelectItem>
                    <SelectItem value="idea">아이디어</SelectItem>
                    <SelectItem value="task">업무</SelectItem>
                    <SelectItem value="reference">참고자료</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">내용</Label>
              <div className="border rounded-lg">
                <div className="flex items-center gap-1 p-2 border-b bg-muted/50">
                  <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                    <List className="h-4 w-4" />
                  </Button>
                  <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                    <Link className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  id="content"
                  placeholder="메모 내용을 입력하세요..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="border-0 focus-visible:ring-0 min-h-[300px] resize-none"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline">
                임시 저장
              </Button>
              <Button type="submit">
                <Save className="h-4 w-4 mr-2" />
                저장하기
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
