"use client"

import { useState } from "react"
import { Bell, Clock, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function NotificationCreate() {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    type: "",
    schedule: "",
    recipients: "",
    repeat: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Notification created:", formData)
    alert("알림이 생성되었습니다!")
    setFormData({
      title: "",
      message: "",
      type: "",
      schedule: "",
      recipients: "",
      repeat: false
    })
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">알림 생성</h1>
        <p className="text-muted-foreground mt-1">자동 알림을 설정하세요</p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            새 알림
          </CardTitle>
          <CardDescription>알림 정보를 입력해 주세요</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">알림 제목</Label>
              <Input
                id="title"
                placeholder="알림 제목을 입력하세요"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">알림 메시지</Label>
              <Textarea
                id="message"
                placeholder="알림 내용을 입력하세요"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type">알림 유형</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => setFormData({ ...formData, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="유형 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">이메일</SelectItem>
                    <SelectItem value="push">푸시 알림</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                    <SelectItem value="slack">Slack</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="schedule" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  예약 시간
                </Label>
                <Input
                  id="schedule"
                  type="datetime-local"
                  value={formData.schedule}
                  onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="recipients" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                수신자
              </Label>
              <Input
                id="recipients"
                placeholder="수신자 이메일을 쉼표로 구분하여 입력하세요"
                value={formData.recipients}
                onChange={(e) => setFormData({ ...formData, recipients: e.target.value })}
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg border">
              <div className="space-y-0.5">
                <Label>반복 알림</Label>
                <p className="text-sm text-muted-foreground">
                  설정한 시간에 알림을 반복합니다
                </p>
              </div>
              <Switch
                checked={formData.repeat}
                onCheckedChange={(checked) => setFormData({ ...formData, repeat: checked })}
              />
            </div>

            <Button type="submit" className="w-full">
              알림 생성하기
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
