"use client"

import { Calendar, FileText, Users, Bell, Home, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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

interface AppSidebarProps {
  currentPage: PageType
  onNavigate: (page: PageType) => void
}

export function AppSidebar({ currentPage, onNavigate }: AppSidebarProps) {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground min-h-screen flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold">NextWave</h1>
        <p className="text-sm text-sidebar-foreground/70">팀 협업 플랫폼</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent",
            currentPage === "dashboard" && "bg-sidebar-accent"
          )}
          onClick={() => onNavigate("dashboard")}
        >
          <Home className="h-4 w-4" />
          대시보드
        </Button>

        <Collapsible defaultOpen>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <span className="flex items-center gap-3">
                <Calendar className="h-4 w-4" />
                일정 관리
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-7 space-y-1 mt-1">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent",
                currentPage === "schedule-create" && "bg-sidebar-accent text-sidebar-foreground"
              )}
              onClick={() => onNavigate("schedule-create")}
            >
              일정 생성
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent",
                currentPage === "schedule-view" && "bg-sidebar-accent text-sidebar-foreground"
              )}
              onClick={() => onNavigate("schedule-view")}
            >
              일정 조회
            </Button>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <span className="flex items-center gap-3">
                <FileText className="h-4 w-4" />
                협업 메모
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-7 space-y-1 mt-1">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent",
                currentPage === "memo-write" && "bg-sidebar-accent text-sidebar-foreground"
              )}
              onClick={() => onNavigate("memo-write")}
            >
              메모 작성
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent",
                currentPage === "memo-share" && "bg-sidebar-accent text-sidebar-foreground"
              )}
              onClick={() => onNavigate("memo-share")}
            >
              메모 공유
            </Button>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible defaultOpen>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <span className="flex items-center gap-3">
                <Users className="h-4 w-4" />
                팀 협업
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-7 space-y-1 mt-1">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent",
                currentPage === "team-create" && "bg-sidebar-accent text-sidebar-foreground"
              )}
              onClick={() => onNavigate("team-create")}
            >
              팀 생성
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent",
                currentPage === "team-invite" && "bg-sidebar-accent text-sidebar-foreground"
              )}
              onClick={() => onNavigate("team-invite")}
            >
              팀 초대
            </Button>
            <Collapsible defaultOpen>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between text-sidebar-foreground/80 hover:bg-sidebar-accent"
                >
                  <span className="flex items-center gap-2">
                    <Bell className="h-3 w-3" />
                    알림 자동화
                  </span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-5 space-y-1 mt-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "w-full justify-start text-sidebar-foreground/70 hover:bg-sidebar-accent text-xs",
                    currentPage === "notification-create" && "bg-sidebar-accent text-sidebar-foreground"
                  )}
                  onClick={() => onNavigate("notification-create")}
                >
                  알림 생성
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "w-full justify-start text-sidebar-foreground/70 hover:bg-sidebar-accent text-xs",
                    currentPage === "notification-rules" && "bg-sidebar-accent text-sidebar-foreground"
                  )}
                  onClick={() => onNavigate("notification-rules")}
                >
                  규칙 알림
                </Button>
              </CollapsibleContent>
            </Collapsible>
          </CollapsibleContent>
        </Collapsible>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground text-sm font-medium">
            U
          </div>
          <div>
            <p className="text-sm font-medium">사용자</p>
            <p className="text-xs text-sidebar-foreground/60">user@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
