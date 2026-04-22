"use client"

import { useState } from "react"
import { Users, Plus, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TeamCreate } from "@/components/team/team-create"

const mockTeams = [
  { id: 1, name: "디자인 팀", members: 5, description: "UI/UX 및 브랜드 디자인 담당" },
  { id: 2, name: "개발 팀", members: 12, description: "프론트엔드 및 백엔드 시스템 개발" },
  { id: 3, name: "마케팅 팀", members: 8, description: "SNS 마케팅 및 광고 전략 수립" },
]

interface MainPageProps {
  onSelectTeam: () => void
  onNavigate: (page: any) => void
}

export function MainPage({ onSelectTeam, onNavigate }: MainPageProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8 md:p-12 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl">
              <Sparkles className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                NextWave
              </h1>
              <p className="text-muted-foreground text-sm font-medium">협업을 위한 새로운 물결</p>
            </div>
          </div>

          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button className="shadow-lg hover:shadow-xl transition-all h-12 px-6 rounded-xl font-bold">
                <Plus className="mr-2 h-5 w-5" />
                새 팀 생성
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>새 팀 생성</DialogTitle>
              </DialogHeader>
              <TeamCreate onSuccess={() => setIsCreateModalOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">팀 선택</h2>
          <p className="text-muted-foreground">참여 중인 팀의 대시보드에 입장하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTeams.map((team) => (
            <Card
              key={team.id}
              className="group hover:shadow-2xl transition-all duration-300 border-none shadow-md bg-card/80 backdrop-blur-sm cursor-pointer overflow-hidden rounded-3xl"
              onClick={onSelectTeam}
            >
              <CardHeader className="pb-4 p-8">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-inner">
                    <Users className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary/50">
                    멤버 {team.members}명
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold mt-6 group-hover:text-primary transition-colors">
                  {team.name}
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2 leading-relaxed text-base">
                  {team.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-4 pb-6 px-8 border-t border-border/50 bg-muted/20">
                <div className="flex items-center text-sm font-bold text-primary w-full justify-between group/btn">
                  <span>대시보드 입장</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
