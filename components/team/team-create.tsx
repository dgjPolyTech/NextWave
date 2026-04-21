"use client"

import { useState } from "react"
import { Users, Image } from "lucide-react"
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

export function TeamCreate() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    visibility: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Team created:", formData)
    alert("팀이 생성되었습니다!")
    setFormData({
      name: "",
      description: "",
      visibility: "",
    })
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">팀 생성</h1>
        <p className="text-muted-foreground mt-1">새로운 팀을 만들어 협업을 시작하세요</p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            새 팀 만들기
          </CardTitle>
          <CardDescription>팀 정보를 입력해 주세요</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-lg bg-muted flex items-center justify-center border-2 border-dashed border-border">
                  <Image className="h-8 w-8 text-muted-foreground" />
                </div>
                <Button type="button" variant="outline" size="sm">
                  이미지 업로드
                </Button>
              </div>
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">팀 이름</Label>
                  <Input
                    id="name"
                    placeholder="팀 이름을 입력하세요"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="visibility">공개 설정</Label>
                  <Select
                    value={formData.visibility}
                    onValueChange={(value) => setFormData({ ...formData, visibility: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="공개 범위 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">전체 공개</SelectItem>
                      <SelectItem value="private">비공개</SelectItem>
                      <SelectItem value="invite">초대만</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">팀 설명</Label>
              <Textarea
                id="description"
                placeholder="팀에 대한 설명을 입력하세요"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full">
              팀 생성하기
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
