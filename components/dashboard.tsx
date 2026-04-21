"use client"

import { Calendar, FileText, Users, Bell, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type PageType = 
  | "dashboard"
  | "schedule-create"
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

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">대시보드</h1>
        <p className="text-muted-foreground mt-1">NextWave에 오신 것을 환영합니다</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary">
                <Calendar className="h-5 w-5 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg">일정 관리</CardTitle>
            </div>
            <CardDescription>팀의 일정을 생성하고 관리하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-between"
              onClick={() => onNavigate("schedule-create")}
            >
              일정 생성
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-between"
              onClick={() => onNavigate("schedule-view")}
            >
              일정 조회
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary">
                <FileText className="h-5 w-5 text-secondary-foreground" />
              </div>
              <CardTitle className="text-lg">협업 메모</CardTitle>
            </div>
            <CardDescription>팀원들과 메모를 작성하고 공유하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-between"
              onClick={() => onNavigate("memo-write")}
            >
              메모 작성
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-between"
              onClick={() => onNavigate("memo-share")}
            >
              메모 공유
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg">팀 협업</CardTitle>
            </div>
            <CardDescription>팀을 구성하고 협업을 시작하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-between"
              onClick={() => onNavigate("team-create")}
            >
              팀 생성
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-between"
              onClick={() => onNavigate("team-invite")}
            >
              팀 초대
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-3">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary">
                <Bell className="h-5 w-5 text-secondary-foreground" />
              </div>
              <CardTitle className="text-lg">알림 자동화</CardTitle>
            </div>
            <CardDescription>자동 알림을 설정하여 중요한 이벤트를 놓치지 마세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="outline"
                onClick={() => onNavigate("notification-create")}
              >
                알림 생성
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigate("notification-rules")}
              >
                규칙 알림
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">오늘의 일정</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">공유된 메모</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">팀 멤버</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
