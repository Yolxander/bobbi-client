"use client"

import { Eye, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"

interface ProjectDetailCardProps {
  title: string
  description: string
  progress: number
  status: string
  dueDate: string
  highlight?: boolean
}

function ProjectDetailCard({
  title,
  description,
  progress,
  status,
  dueDate,
  highlight = false,
}: ProjectDetailCardProps) {
  const router = useRouter()
  const statusColors: Record<string, string> = {
    "In Progress": "bg-blue-100 text-blue-700",
    "Feedback Needed": "bg-amber-100 text-amber-700",
    "Just Started": "bg-purple-100 text-purple-700",
    "Almost Done": "bg-green-100 text-green-700",
    "On Track": "bg-teal-100 text-teal-700",
    Completed: "bg-gray-100 text-gray-700",
  }

  const handleClick = () => {
    // Convert title to URL-friendly format
    const projectId = title.toLowerCase().replace(/\s+/g, '-')
    router.push(`/projects/${projectId}`)
  }

  return (
    <div
      onClick={handleClick}
      className={`p-4 rounded-xl border backdrop-blur-xl transition-all duration-300 cursor-pointer 
        group hover:scale-[1.02] hover:-translate-y-1 ${
        highlight 
          ? "border-purple-200/50 bg-white/60 shadow-lg hover:shadow-xl hover:bg-white/70" 
          : "border-white/50 bg-white/60 hover:shadow-xl hover:bg-white/70 hover:border-purple-200/50"
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">{title}</h3>
            <Badge className={`${statusColors[status] || "bg-gray-100 text-gray-700"} backdrop-blur-sm text-xs`}>
              {status}
            </Badge>
          </div>
          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-7 w-7 backdrop-blur-sm bg-white/50 border-white/50 transition-colors
            group-hover:bg-purple-100 group-hover:text-purple-600 group-hover:border-purple-200"
        >
          <Eye className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Calendar className="h-3.5 w-3.5 group-hover:text-purple-500 transition-colors" />
          <span className="group-hover:text-purple-600 transition-colors">{dueDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 group-hover:text-purple-600 transition-colors">{progress}%</span>
          <Progress value={progress} className="h-1.5 w-16 bg-gray-100/30 group-hover:bg-purple-100/50" />
        </div>
      </div>
    </div>
  )
}

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <ProjectDetailCard
        title="Website Redesign"
        description="Complete overhaul of your company website with new branding"
        progress={65}
        status="In Progress"
        dueDate="May 15, 2023"
        highlight={true}
      />

      <ProjectDetailCard
        title="Marketing Campaign"
        description="Social media and content marketing for Q2 product launch"
        progress={30}
        status="Feedback Needed"
        dueDate="June 30, 2023"
        highlight={true}
      />

      <ProjectDetailCard
        title="Mobile App Development"
        description="iOS and Android app for customer engagement"
        progress={15}
        status="Just Started"
        dueDate="August 20, 2023"
        highlight={true}
      />

      <ProjectDetailCard
        title="Brand Identity"
        description="Logo design and brand guidelines for your company"
        progress={90}
        status="Almost Done"
        dueDate="May 5, 2023"
        highlight={true}
      />

      <ProjectDetailCard
        title="Content Creation"
        description="Blog posts and social media content for your brand"
        progress={50}
        status="On Track"
        dueDate="July 10, 2023"
        highlight={true}
      />

      <div className="flex items-center justify-center p-6 border border-dashed border-gray-200 rounded-xl bg-white/50 hover:bg-white/80 transition-colors cursor-pointer">
        <div className="text-center">
          <Plus className="h-8 w-8 text-purple-400 mx-auto mb-2" />
          <h3 className="font-medium text-gray-800">Add New Project</h3>
          <p className="text-sm text-gray-500">Start a new collaboration</p>
        </div>
      </div>
    </div>
  )
} 