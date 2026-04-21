"use client"

import { Calendar, Clock, Users, MoreVertical } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const mockSchedules = [
  {
    id: 1,
    title: "주간 팀 회의",
    description: "이번 주 진행 상황 공유 및 다음 주 계획 논의",
    date: "2026-04-21",
    time: "10:00",
    participants: ["김철수", "이영희", "박지민"],
    status: "upcoming"
  },
  {
    id: 2,
    title: "프로젝트 킥오프",
    description: "새 프로젝트 시작 미팅",
    date: "2026-04-22",
    time: "14:00",
    participants: ["김철수", "최민수"],
    status: "upcoming"
  },
  {
    id: 3,
    title: "디자인 리뷰",
    description: "UI/UX 디자인 검토 및 피드백",
    date: "2026-04-20",
    time: "15:30",
    participants: ["이영희", "박지민", "정소연"],
    status: "completed"
  },
  {
    id: 4,
    title: "스프린트 회고",
    description: "스프린트 2 회고 미팅",
    date: "2026-04-23",
    time: "11:00",
    participants: ["전체 팀"],
    status: "upcoming"
  }
]

export function ScheduleView() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">일정 조회</h1>
          <p className="text-muted-foreground mt-1">등록된 일정을 확인하세요</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">이번 주</Button>
          <Button variant="outline" size="sm">이번 달</Button>
          <Button variant="outline" size="sm">전체</Button>
        </div>
      </div>

      <div className="grid gap-4">
        {mockSchedules.map((schedule) => (
          <Card key={schedule.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary">
                    <Calendar className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{schedule.title}</CardTitle>
                    <CardDescription>{schedule.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={schedule.status === "completed" ? "secondary" : "default"}>
                    {schedule.status === "completed" ? "완료" : "예정"}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>수정</DropdownMenuItem>
                      <DropdownMenuItem>삭제</DropdownMenuItem>
                      <DropdownMenuItem>공유</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{schedule.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{schedule.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{schedule.participants.join(", ")}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
