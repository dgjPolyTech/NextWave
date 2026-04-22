"use client"

import { useState } from "react"
import { Calendar, Clock, Users, MoreVertical, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ScheduleCreateForm } from "./schedule-create"

const mockSchedules = [
  {
    id: 1,
    title: "주간 팀 회의",
    description: "이번 주 진행 상황 공유 및 다음 주 계획 논의",
    startDate: "2026-04-21",
    endDate: "2026-04-21",
    // date: "2026-04-21",
    // time: "10:00",
    participants: ["김철수", "이영희", "박지민"],
    status: "upcoming"
  },
  {
    id: 2,
    title: "주간 팀 회의2222",
    description: "이번 주 진행 상황 공유 및 다음 주 계획 논의",
    startDate: "2026-04-21",
    endDate: "2026-04-21",
    // date: "2026-04-21",
    // time: "10:00",
    participants: ["김철수", "이영희", "박지민"],
    status: "upcoming"
  }
  // {
  //   id: 2,
  //   title: "프로젝트 킥오프",
  //   description: "새 프로젝트 시작 미팅",
  //   date: "2026-04-22",
  //   time: "14:00",
  //   participants: ["김철수", "최민수"],
  //   status: "upcoming"
  // },
  // {
  //   id: 3,
  //   title: "디자인 리뷰",
  //   description: "UI/UX 디자인 검토 및 피드백",
  //   date: "2026-04-20",
  //   time: "15:30",
  //   participants: ["이영희", "박지민", "정소연"],
  //   status: "completed"
  // },
  // {
  //   id: 4,
  //   title: "스프린트 회고",
  //   description: "스프린트 2 회고 미팅",
  //   date: "2026-04-23",
  //   time: "11:00",
  //   participants: ["전체 팀"],
  //   status: "upcoming"
  // }
]

interface ScheduleViewProps {
  onSelectSchedule?: (schedule: any) => void
}

export function ScheduleView({ onSelectSchedule }: ScheduleViewProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            일정 관리
          </h1>
          <p className="text-muted-foreground mt-1">
            등록된 팀 일정을 확인하고 새로운 일정을 계획하세요.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 border rounded-lg p-1 bg-muted/30">
            <Button variant="ghost" size="sm" className="h-8">이번 주</Button>
            <Button variant="ghost" size="sm" className="h-8">이번 달</Button>
            <Button variant="ghost" size="sm" className="h-8 bg-background shadow-sm">전체</Button>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="shadow-md hover:shadow-lg transition-all">
                <Plus className="mr-2 h-4 w-4" /> 일정 생성
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <ScheduleCreateForm onSuccess={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4">
        {mockSchedules.map((schedule) => (
          <Card 
            key={schedule.id} 
            className="hover:shadow-md transition-all group cursor-pointer"
            onClick={() => onSelectSchedule?.(schedule)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-3 rounded-xl shadow-sm transition-colors",
                    schedule.status === "completed" ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  )}>
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">{schedule.title}</CardTitle>
                    <CardDescription className="line-clamp-1">{schedule.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={schedule.status === "completed" ? "secondary" : "default"} className="px-3">
                    {schedule.status === "completed" ? "완료" : "예정"}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-32">
                      <DropdownMenuItem>수정</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">삭제</DropdownMenuItem>
                      <DropdownMenuItem>공유</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{schedule.startDate} ~ {schedule.endDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="truncate max-w-[200px]">{schedule.participants.join(", ")}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
