"use client"

import { useState } from "react"
import { Users, Mail, Link2, Copy, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockTeamMembers = [
  { id: 1, name: "김철수", email: "kim@example.com", role: "admin", status: "active" },
  { id: 2, name: "이영희", email: "lee@example.com", role: "member", status: "active" },
  { id: 3, name: "박지민", email: "park@example.com", role: "member", status: "active" },
  { id: 4, name: "최민수", email: "choi@example.com", role: "member", status: "pending" },
]

export function TeamInvite() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [copied, setCopied] = useState(false)
  const inviteLink = "https://nextwave.app/invite/abc123"

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Invite sent to:", email, "with role:", role)
    alert(`${email}으로 초대 링크가 전송되었습니다!`)
    setEmail("")
    setRole("")
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">팀 초대</h1>
        <p className="text-muted-foreground mt-1">새로운 팀원을 초대하세요</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              이메일로 초대
            </CardTitle>
            <CardDescription>이메일 주소로 초대 링크를 보내세요</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleInvite} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">이메일 주소</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="초대할 이메일을 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">역할</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="역할 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">관리자</SelectItem>
                    <SelectItem value="member">멤버</SelectItem>
                    <SelectItem value="viewer">뷰어</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">
                초대 보내기
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link2 className="h-5 w-5" />
              초대 링크
            </CardTitle>
            <CardDescription>링크를 공유하여 팀에 초대하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input value={inviteLink} readOnly className="bg-muted" />
              <Button variant="outline" onClick={handleCopyLink}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              이 링크는 7일간 유효합니다
            </p>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              현재 팀원
            </CardTitle>
            <CardDescription>팀에 참여 중인 멤버들입니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTeamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={member.status === "active" ? "default" : "secondary"}>
                      {member.status === "active" ? "활성" : "대기중"}
                    </Badge>
                    <Badge variant="outline">
                      {member.role === "admin" ? "관리자" : "멤버"}
                    </Badge>
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
