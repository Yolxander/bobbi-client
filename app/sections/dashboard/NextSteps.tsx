"use client"

import { FileText, CreditCard, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface NextStepItemProps {
  icon: React.ReactNode
  title: string
  description: string
  action: string
  priority: "high" | "medium" | "low"
}

function NextStepItem({ icon, title, description, action, priority }: NextStepItemProps) {
  const priorityColors = {
    high: "border-l-red-500",
    medium: "border-l-amber-500",
    low: "border-l-blue-500",
  }

  return (
    <div className={`flex items-start gap-4 p-3 bg-white rounded-lg border-l-4 ${priorityColors[priority]}`}>
      <div className="mt-1">{icon}</div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <button className="h-8 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm">
          {action}
        </button>
      </div>
    </div>
  )
}

export default function NextSteps() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Your Next Steps</h2>
        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
          3 Actions Needed
        </Badge>
      </div>
      <div className="space-y-3">
        <NextStepItem
          icon={<FileText className="h-5 w-5 text-amber-500" />}
          title="Review Website Mockup"
          description="The design team uploaded new mockups for your review"
          action="Review Now"
          priority="high"
        />
        <NextStepItem
          icon={<CreditCard className="h-5 w-5 text-green-500" />}
          title="Approve Monthly Invoice"
          description="Your invoice #INV-2023-04 is ready for approval"
          action="View & Approve"
          priority="medium"
        />
        <NextStepItem
          icon={<MessageSquare className="h-5 w-5 text-blue-500" />}
          title="Reply to Message"
          description="Alex sent you a message about project timeline"
          action="Reply"
          priority="low"
        />
      </div>
    </div>
  )
} 