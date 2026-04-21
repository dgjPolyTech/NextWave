"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { Dashboard } from "@/components/dashboard"
import { ScheduleCreate } from "@/components/schedule/schedule-create"
import { ScheduleView } from "@/components/schedule/schedule-view"
import { MemoWrite } from "@/components/memo/memo-write"
import { MemoShare } from "@/components/memo/memo-share"
import { TeamCreate } from "@/components/team/team-create"
import { TeamInvite } from "@/components/team/team-invite"
import { NotificationCreate } from "@/components/notification/notification-create"
import { NotificationRules } from "@/components/notification/notification-rules"

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

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>("dashboard")

  const renderContent = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard onNavigate={setCurrentPage} />
      case "schedule-create":
        return <ScheduleCreate />
      case "schedule-view":
        return <ScheduleView />
      case "memo-write":
        return <MemoWrite />
      case "memo-share":
        return <MemoShare />
      case "team-create":
        return <TeamCreate />
      case "team-invite":
        return <TeamInvite />
      case "notification-create":
        return <NotificationCreate />
      case "notification-rules":
        return <NotificationRules />
      default:
        return <Dashboard onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="flex min-h-screen">
      <AppSidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  )
}
