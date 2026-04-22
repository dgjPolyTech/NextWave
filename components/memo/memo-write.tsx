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
    schedule_id: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Memo created:", formData)
    alert("메모가 저장되었습니다!")
    setFormData({
      title: "",
      content: "",
      schedule_id: ""
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
              {/* 이 부분은 나중에 db로부터 불러오게끔 수정 필요함. */}
              <div className="space-y-2">
                <Label htmlFor="schedule_id">일정 선택</Label>
                <Select
                  value={formData.schedule_id}
                  onValueChange={(value) => setFormData({ ...formData, schedule_id: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">오전 회의</SelectItem>
                    <SelectItem value="2">휴가</SelectItem>
                    <SelectItem value="3">업무 미팅</SelectItem>
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
