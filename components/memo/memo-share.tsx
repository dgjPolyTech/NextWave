"use client"

import { FileText, Share2, Eye, Edit, Clock, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const mockMemos = [
  {
    id: 1,
    title: "프로젝트 요구사항 정리",
    content: "클라이언트 미팅에서 논의된 주요 요구사항들을 정리했습니다...",
    category: "meeting",
    author: "김철수",
    createdAt: "2026-04-20 14:30",
    sharedWith: ["이영희", "박지민"]
  },
  {
    id: 2,
    title: "디자인 가이드라인",
    content: "새로운 디자인 시스템 가이드라인입니다...",
    category: "reference",
    author: "이영희",
    createdAt: "2026-04-19 10:15",
    sharedWith: ["전체 팀"]
  },
  {
    id: 3,
    title: "API 연동 방법",
    content: "백엔드 API 연동 방법에 대한 기술 문서입니다...",
    category: "task",
    author: "최민수",
    createdAt: "2026-04-18 16:45",
    sharedWith: ["김철수"]
  },
  {
    id: 4,
    title: "새로운 기능 아이디어",
    content: "사용자 피드백을 바탕으로 한 새로운 기능 제안...",
    category: "idea",
    author: "박지민",
    createdAt: "2026-04-17 09:00",
    sharedWith: []
  }
]

const categoryLabels: Record<string, string> = {
  meeting: "회의록",
  idea: "아이디어",
  task: "업무",
  reference: "참고자료"
}

export function MemoShare() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">메모 공유</h1>
        <p className="text-muted-foreground mt-1">팀원들과 메모를 공유하세요</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockMemos.map((memo) => (
          <Card key={memo.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <FileText className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{memo.title}</CardTitle>
                    <CardDescription className="line-clamp-1">{memo.content}</CardDescription>
                  </div>
                </div>
                <Badge variant="outline">{categoryLabels[memo.category]}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{memo.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{memo.createdAt}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {memo.sharedWith.length > 0 && (
                    <div className="flex -space-x-2 mr-2">
                      {memo.sharedWith.slice(0, 3).map((person, idx) => (
                        <Avatar key={idx} className="h-6 w-6 border-2 border-background">
                          <AvatarFallback className="text-[10px]">
                            {person.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  )}
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>메모 공유</DialogTitle>
                        <DialogDescription>
                          이 메모를 공유할 팀원을 선택하세요
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="share-email">이메일 주소</Label>
                          <div className="flex gap-2">
                            <Input
                              id="share-email"
                              placeholder="이메일을 입력하세요"
                            />
                            <Button>공유</Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>공유된 사람</Label>
                          <div className="flex flex-wrap gap-2">
                            {memo.sharedWith.length > 0 ? (
                              memo.sharedWith.map((person, idx) => (
                                <Badge key={idx} variant="secondary">
                                  {person}
                                </Badge>
                              ))
                            ) : (
                              <p className="text-sm text-muted-foreground">
                                아직 공유된 사람이 없습니다
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
