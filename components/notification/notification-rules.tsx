"use client"

import { useState } from "react"
import { Bell, Settings, MoreVertical, Play, Pause, Trash2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NotificationCreate } from "@/components/notification/notification-create"


const mockRules = [
  {
    id: 1,
    name: "일정 시작 전 알림",
    description: "일정 시작 30분 전에 알림을 보냅니다",
    trigger: "schedule_start",
    condition: "30분 전",
    action: "이메일 + 푸시 알림",
    active: true
  },
  {
    id: 2,
    name: "새 메모 공유 알림",
    description: "메모가 나에게 공유되면 알림을 보냅니다",
    trigger: "memo_shared",
    condition: "즉시",
    action: "푸시 알림",
    active: true
  },
  {
    id: 3,
    name: "팀 초대 알림",
    description: "새로운 팀 초대가 오면 알림을 보냅니다",
    trigger: "team_invite",
    condition: "즉시",
    action: "이메일",
    active: true
  },
  {
    id: 4,
    name: "주간 요약 알림",
    description: "매주 월요일 오전 9시에 주간 요약을 보냅니다",
    trigger: "weekly_summary",
    condition: "매주 월요일 09:00",
    action: "이메일",
    active: false
  },
  {
    id: 5,
    name: "마감 임박 알림",
    description: "일정 마감 1일 전에 알림을 보냅니다",
    trigger: "deadline_approaching",
    condition: "1일 전",
    action: "이메일 + Slack",
    active: true
  }
]

const triggerLabels: Record<string, string> = {
  schedule_start: "일정 시작",
  memo_shared: "메모 공유",
  team_invite: "팀 초대",
  weekly_summary: "주간 요약",
  deadline_approaching: "마감 임박"
}

export function NotificationRules() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">규칙 알림</h1>
          <p className="text-muted-foreground mt-1">자동 알림 규칙을 관리하세요</p>
        </div>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button>
              <Settings className="h-4 w-4 mr-2" />
              새 규칙 추가
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>새 규칙 추가</DialogTitle>
            </DialogHeader>
            <NotificationCreate onSuccess={() => setIsCreateModalOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {mockRules.map((rule) => (
          <Card key={rule.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${rule.active ? "bg-primary" : "bg-muted"}`}>
                    <Bell className={`h-4 w-4 ${rule.active ? "text-primary-foreground" : "text-muted-foreground"}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {rule.name}
                      {!rule.active && (
                        <Badge variant="secondary">비활성</Badge>
                      )}
                    </CardTitle>
                    <CardDescription>{rule.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked={rule.active} />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Settings className="h-4 w-4 mr-2" />
                        수정
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        {rule.active ? (
                          <>
                            <Pause className="h-4 w-4 mr-2" />
                            비활성화
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-2" />
                            활성화
                          </>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        삭제
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">트리거:</span>
                  <Badge variant="outline">{triggerLabels[rule.trigger]}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">조건:</span>
                  <span className="font-medium">{rule.condition}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">액션:</span>
                  <span className="font-medium">{rule.action}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
