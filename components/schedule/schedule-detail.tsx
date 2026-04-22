"use client"

import { Calendar, Clock, Users, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface ScheduleDetailProps {
  schedule: {
    id: number
    title: string
    description: string
    startDate: string
    endDate: string
    participants: string[]
    status: string
  }
  onBack: () => void
}

export function ScheduleDetail({ schedule, onBack }: ScheduleDetailProps) {
  if (!schedule) return null

  return (
    <div className="p-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6 hover:bg-secondary transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        목록으로 돌아가기
      </Button>

      <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm overflow-hidden rounded-3xl">
        <div className={`h-2 w-full ${schedule.status === "completed" ? "bg-muted" : "bg-primary"}`} />
        <CardHeader className="pb-6 p-8">
          <div className="flex items-center justify-between mb-4">
            <Badge
              variant={schedule.status === "completed" ? "secondary" : "default"}
              className="px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full"
            >
              {schedule.status === "completed" ? (
                <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> 완료</span>
              ) : (
                <span className="flex items-center gap-1"><AlertCircle className="h-3 w-3" /> 예정</span>
              )}
            </Badge>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>일정 상세 정보</span>
            </div>
          </div>
          <CardTitle className="text-4xl font-black tracking-tight text-foreground/90 mb-4">
            {schedule.title}
          </CardTitle>
          <CardDescription className="text-lg leading-relaxed text-foreground/70">
            {schedule.description}
          </CardDescription>
        </CardHeader>

        <Separator className="mx-8" />

        <CardContent className="p-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                <Clock className="h-4 w-4" /> 일정 시간
              </h3>
              <div className="bg-muted/30 p-6 rounded-2xl border border-border/50 shadow-inner">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">시작일 (start_time)</p>
                    <p className="text-xl font-bold">{schedule.startDate}</p>
                  </div>
                  <div className="w-8 h-px bg-border ml-1" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">종료일 (end_time)</p>
                    <p className="text-xl font-bold">{schedule.endDate}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                <Users className="h-4 w-4" /> 참여자
              </h3>
              <div className="flex flex-wrap gap-2">
                {schedule.participants.map((participant, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1.5 rounded-lg text-sm font-medium border border-border/50">
                    {participant}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border/30 flex justify-end gap-3">
            <Button variant="outline" className="rounded-xl px-6">수정하기</Button>
            <Button variant="destructive" className="rounded-xl px-6">삭제하기</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
