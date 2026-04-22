"use client"

import {
  Calendar,
  FileText,
  Users,
  Bell,
  ArrowRight,
  Plus,
  Clock,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
  CalendarDays
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type PageType =
  | "dashboard"
  | "schedule-view"
  | "memo-write"
  | "memo-share"
  | "team-create"
  | "team-invite"
  | "notification-create"
  | "notification-rules"

interface DashboardProps {
  onNavigate: (page: PageType) => void
}

// Dummy Data
const DUMMY_SCHEDULES = [
  { id: 1, title: "주간 팀 회의", time: "오전 10:00", type: "회의", color: "bg-blue-500" },
  { id: 2, title: "프로젝트 마일스톤 리뷰", time: "오후 2:00", type: "기획", color: "bg-purple-500" },
  { id: 3, title: "디자인 시스템 업데이트", time: "오후 4:30", type: "개발", color: "bg-emerald-500" },
]

const DUMMY_MEMOS = [
  { id: 1, title: "Q2 마케팅 전략", author: "김철수", date: "2024.04.21", avatar: "KS" },
  { id: 2, title: "신규 기능 상세 설계서", author: "이영희", date: "2024.04.20", avatar: "YH" },
  { id: 3, title: "팀 회식 장소 투표 결과", author: "박지민", date: "2024.04.19", avatar: "JM" },
]

const DUMMY_NOTIFICATIONS = [
  { id: 1, content: "새로운 메모 'Q2 마케팅 전략'이 공유되었습니다.", time: "5분 전", icon: FileText, color: "text-blue-500" },
  { id: 2, content: "오후 2:00에 예정된 회의 알림입니다.", time: "1시간 전", icon: Calendar, color: "text-purple-500" },
  { id: 3, content: "이영희님이 당신을 '디자인 협업' 팀에 초대했습니다.", time: "3시간 전", icon: Users, color: "text-emerald-500" },
]

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            안녕하세요, 팀원님! 👋
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            오늘도 NextWave와 함께 효율적인 협업을 시작해보세요.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => onNavigate("schedule-view")}
            className="shadow-md hover:shadow-lg transition-all"
          >
            <Plus className="mr-2 h-4 w-4" /> 일정 만들기
          </Button>
          <Button
            variant="outline"
            onClick={() => onNavigate("memo-write")}
            className="hover:bg-accent transition-colors"
          >
            <FileText className="mr-2 h-4 w-4" /> 메모 작성
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "예정된 일정", value: "3개", icon: CalendarDays, color: "text-blue-500" },
          { label: "새 알림", value: "5개", icon: Bell, color: "text-amber-500" },
          { label: "공유된 메모", value: "12개", icon: MessageSquare, color: "text-emerald-500" },
          // { label: "팀 활동성", value: "+24%", icon: TrendingUp, color: "text-purple-500" },
        ].map((stat, i) => (
          <Card key={i} className="hover:bg-accent/50 transition-colors">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl bg-background border shadow-sm ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Schedules */}
        <Card className="flex flex-col shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> 예정된 일정
              </CardTitle>
              <CardDescription>오늘 예정된 주요 일정입니다</CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={() => onNavigate("schedule-view")}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            {DUMMY_SCHEDULES.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-3 rounded-lg border bg-card hover:bg-accent/30 transition-colors group">
                <div className={`w-1 h-10 rounded-full ${item.color}`} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{item.title}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {item.time}
                  </div>
                </div>
                <Badge variant="secondary" className="group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {item.type}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Collaborative Memos */}
        <Card className="flex flex-col shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> 최근 협업 메모
              </CardTitle>
              <CardDescription>팀원들과 공유 중인 최근 메모</CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={() => onNavigate("memo-share")}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            {DUMMY_MEMOS.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-3 rounded-lg border bg-card hover:bg-accent/30 transition-colors">
                <Avatar className="h-10 w-10 border">
                  <AvatarFallback className="bg-primary/5 text-primary text-xs font-bold">
                    {item.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.author} • {item.date}
                  </p>
                </div>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground/30" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Notifications */}
        <Card className="flex flex-col shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" /> 최근 알림
              </CardTitle>
              <CardDescription>놓친 활동들을 확인하세요</CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-muted before:via-muted before:to-transparent">
              {DUMMY_NOTIFICATIONS.map((item) => (
                <div key={item.id} className="relative flex items-start gap-4 pl-0">
                  <div className={`mt-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm z-10 ${item.color}`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col gap-1 pt-1">
                    <p className="text-sm leading-relaxed">{item.content}</p>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
