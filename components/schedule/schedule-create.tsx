"use client"

import { useState } from "react"
import { Calendar, Clock, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ScheduleCreateFormProps {
  onSuccess?: () => void
}

export function ScheduleCreateForm({ onSuccess }: ScheduleCreateFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    participants: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Schedule created:", formData)
    alert("일정이 생성되었습니다!")
    setFormData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      participants: ""
    })
    if (onSuccess) onSuccess()
  }

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calendar className="h-5 w-5 text-primary" />
          새 일정 등록
        </CardTitle>
        <CardDescription>일정 정보를 입력하여 팀과 공유하세요.</CardDescription>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">일정 제목</Label>{/* title  */}
            <Input
              id="title"
              placeholder="예: 주간 팀 회의"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">설명</Label>{/* description  */}
            <Textarea
              id="description"
              placeholder="회의 안건이나 주요 내용을 입력하세요"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate" className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                시작일
              </Label>
              <Input
                id="startDate"
                type="datetime-local"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate" className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                종료일
              </Label>
              <Input
                id="endDate"
                type="datetime-local"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="participants" className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              담당자
            </Label>
            <Input
              id="participants"
              placeholder="참여자 성함 또는 이메일"
              value={formData.participants}
              onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
            />
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full shadow-md hover:shadow-lg transition-all">
              일정 생성하기
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
