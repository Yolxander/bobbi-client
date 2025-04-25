"use client"

import type React from "react"

import { useState } from "react"
import {
  Search,
  Calendar,
  Home,
  MessageSquare,
  FileText,
  CreditCard,
  Bell,
  HelpCircle,
  Upload,
  Filter,
  Plus,
  ChevronDown,
  CheckCircle,
  Clock,
  AlertCircle,
  MoreHorizontal,
  Users,
  Folder,
  Eye,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Add TypeScript interfaces for all component props at the top of the file
interface NavItemProps {
  icon: React.ReactNode
  text: string
  active?: boolean
  badge?: string | null
  href?: string
}

interface ProjectDetailCardProps {
  title: string
  description: string
  progress: number
  status: string
  dueDate: string
  teamSize: number
  tasks: {
    total: number
    completed: number
  }
  files: number
  highlight?: boolean
}

interface ActivityItemProps {
  icon: React.ReactNode
  title: string
  description: string
  time: string
  project?: string | null
}

interface DeadlineItemProps {
  title: string
  date: string
  daysLeft: number
  priority: "high" | "medium" | "low"
}

interface FileItemProps {
  name: string
  size: string
  date: string
}

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewType, setViewType] = useState("grid")

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="flex w-full max-w-7xl mx-auto gap-6 border border-gray-100/20 rounded-3xl shadow-lg backdrop-blur-xl bg-white/30">
        {/* Left Sidebar */}
        <div className="w-64 rounded-3xl p-6 flex flex-col backdrop-blur-xl bg-white/40 border-r border-gray-100/20">
          <div className="flex items-center gap-3 mb-8">
            <Avatar className="h-12 w-12 border-2 border-white">
              <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
              <AvatarFallback>SW</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-800">Samantha William</h3>
              <p className="text-sm text-gray-500">Client Portal</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-1">Your Current Balance</p>
            <h2 className="text-2xl font-bold text-gray-800">$12,450.00</h2>
          </div>

          <nav className="flex-1 space-y-2">
            <NavItem icon={<Home />} text="Your Dashboard" href="/" />
            <NavItem icon={<FileText />} text="Your Projects" badge="2" active />
            <NavItem icon={<MessageSquare />} text="Messages" badge="3" />
            <NavItem icon={<Upload />} text="Your Files" />
            <NavItem icon={<CreditCard />} text="Billing & Payments" />
          </nav>

          <div className="mt-6 p-4 bg-purple-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="h-4 w-4 text-purple-600" />
              <h4 className="font-medium text-sm text-purple-700">Need Help?</h4>
            </div>
            <p className="text-xs text-purple-600 mb-3">
              Have questions about your project or how to use this dashboard?
            </p>
            <Button variant="outline" size="sm" className="w-full text-purple-700 border-purple-200 bg-white">
              Ask for Support
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6 py-6 pr-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-800">Your Projects</h1>
              <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200">6 Active</Badge>
            </div>
            <div className="flex items-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="relative backdrop-blur-sm bg-white/40 border-gray-100/20">
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                        3
                      </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>You have 3 new notifications</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="relative">
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-100/20 bg-white/40 backdrop-blur-sm w-64"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Project Filters */}
          <div className="flex justify-between items-center backdrop-blur-sm bg-white/40 p-3 rounded-xl border border-gray-100/20">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white/40 backdrop-blur-sm border-gray-100/20">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>

              <Tabs defaultValue="all" className="w-auto">
                <TabsList className="bg-transparent">
                  <TabsTrigger value="all" className="data-[state=active]:bg-white/40 data-[state=active]:shadow-sm data-[state=active]:text-purple-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:bg-gray-50/20 transition-all duration-200">All Projects</TabsTrigger>
                  <TabsTrigger value="active" className="data-[state=active]:bg-white/40 data-[state=active]:shadow-sm data-[state=active]:text-purple-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:bg-gray-50/20 transition-all duration-200">Active</TabsTrigger>
                  <TabsTrigger value="completed" className="data-[state=active]:bg-white/40 data-[state=active]:shadow-sm data-[state=active]:text-purple-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:bg-gray-50/20 transition-all duration-200">Completed</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <Button className="bg-purple-500 hover:bg-purple-600 text-white gap-2 shadow-lg shadow-purple-500/20">
              <Plus className="h-4 w-4" />
              <span>New Project</span>
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 gap-5">
            <ProjectDetailCard
              title="Website Redesign"
              description="Complete overhaul of your company website with new branding"
              progress={65}
              status="In Progress"
              dueDate="May 15, 2023"
              teamSize={4}
              tasks={{ total: 24, completed: 16 }}
              files={12}
              highlight={true}
            />

            <ProjectDetailCard
              title="Marketing Campaign"
              description="Social media and content marketing for Q2 product launch"
              progress={30}
              status="Feedback Needed"
              dueDate="June 30, 2023"
              teamSize={3}
              tasks={{ total: 18, completed: 5 }}
              files={8}
               highlight={true}
            />

            <ProjectDetailCard
              title="Mobile App Development"
              description="iOS and Android app for customer engagement"
              progress={15}
              status="Just Started"
              dueDate="August 20, 2023"
              teamSize={5}
              tasks={{ total: 32, completed: 4 }}
              files={6}
               highlight={true}
            />

            <ProjectDetailCard
              title="Brand Identity"
              description="Logo design and brand guidelines for your company"
              progress={90}
              status="Almost Done"
              dueDate="May 5, 2023"
              teamSize={2}
              tasks={{ total: 12, completed: 11 }}
              files={15}
              highlight={true}
            />

            <ProjectDetailCard
              title="Content Creation"
              description="Blog posts and social media content for your brand"
              progress={50}
              status="On Track"
              dueDate="July 10, 2023"
              teamSize={3}
              tasks={{ total: 20, completed: 10 }}
              files={9}
              highlight={false}
            />

            <div className="flex items-center justify-center p-6 border border-dashed border-gray-200 rounded-xl bg-white/50 hover:bg-white/80 transition-colors cursor-pointer">
              <div className="text-center">
                <Plus className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h3 className="font-medium text-gray-800">Add New Project</h3>
                <p className="text-sm text-gray-500">Start a new collaboration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 backdrop-blur-xl bg-white/40 rounded-3xl p-6 shadow-lg border border-gray-100/20">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Project Activity</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-medium text-gray-700 mb-3">Recent Updates</h3>
              <div className="space-y-4">
                <ActivityItem
                  icon={<Upload className="h-5 w-5 text-blue-500" />}
                  title="New Files Uploaded"
                  description="Alex uploaded 3 new mockups for the Website Redesign project"
                  time="2 hours ago"
                  project="Website Redesign"
                />
                <ActivityItem
                  icon={<CheckCircle className="h-5 w-5 text-green-500" />}
                  title="Task Completed"
                  description="Homepage wireframes approved by client"
                  time="Yesterday"
                  project="Website Redesign"
                />
                <ActivityItem
                  icon={<MessageSquare className="h-5 w-5 text-purple-500" />}
                  title="New Comment"
                  description="Sarah commented on the social media strategy"
                  time="2 days ago"
                  project="Marketing Campaign"
                />
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-base font-medium text-gray-700 mb-3">Upcoming Deadlines</h3>
              <div className="space-y-3">
                <DeadlineItem title="Website Mockup Approval" date="May 5, 2023" daysLeft={2} priority="high" />
                <DeadlineItem title="Content Submission" date="May 12, 2023" daysLeft={9} priority="medium" />
                <DeadlineItem title="Final Review" date="May 25, 2023" daysLeft={22} priority="low" />
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-base font-medium text-gray-700 mb-3">Project Files</h3>
              <div className="space-y-2">
                <FileItem name="Website_Mockups_v2.zip" size="24.5 MB" date="May 1, 2023" />
                <FileItem name="Brand_Guidelines.pdf" size="8.2 MB" date="Apr 28, 2023" />
                <FileItem name="Content_Strategy.docx" size="1.8 MB" date="Apr 25, 2023" />
                <Button variant="ghost" size="sm" className="text-purple-600 w-full justify-start mt-2">
                  View all files
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Update the NavItem function to use the interface
function NavItem({ icon, text, active = false, badge = null, href = "#" }: NavItemProps) {
  return (
    <a
      href={href}
      className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
        active ? "text-purple-600 bg-purple-50/50" : "text-gray-600 hover:bg-gray-100/50"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{text}</span>
      </div>
      {badge && <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-100">{badge}</Badge>}
    </a>
  )
}

// Update the ProjectDetailCard function to use the interface
function ProjectDetailCard({
  title,
  description,
  progress,
  status,
  dueDate,
  teamSize,
  tasks,
  files,
  highlight = false,
}: ProjectDetailCardProps) {
  const statusColors: Record<string, string> = {
    "In Progress": "bg-blue-100 text-blue-700",
    "Feedback Needed": "bg-amber-100 text-amber-700",
    "Just Started": "bg-purple-100 text-purple-700",
    "Almost Done": "bg-green-100 text-green-700",
    "On Track": "bg-teal-100 text-teal-700",
    Completed: "bg-gray-100 text-gray-700",
  }

  return (
    <div
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

// Update the ActivityItem function to use the interface
function ActivityItem({ icon, title, description, time, project = null }: ActivityItemProps) {
  return (
    <div className="flex gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        {project && (
          <Badge variant="outline" className="text-xs mt-1 bg-purple-50 text-purple-600">
            {project}
          </Badge>
        )}
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  )
}

// Update the DeadlineItem function to use the interface
function DeadlineItem({ title, date, daysLeft, priority }: DeadlineItemProps) {
  const priorityColors = {
    high: "text-red-500",
    medium: "text-amber-500",
    low: "text-blue-500",
  }

  const priorityIcons = {
    high: <AlertCircle className="h-4 w-4 text-red-500" />,
    medium: <Clock className="h-4 w-4 text-amber-500" />,
    low: <CheckCircle className="h-4 w-4 text-blue-500" />,
  }

  return (
    <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
      <div className="mt-1">{priorityIcons[priority]}</div>
      <div>
        <h4 className="font-medium text-gray-800">{title}</h4>
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-500">{date}</p>
          <Badge variant="outline" className={`text-xs ${priorityColors[priority]}`}>
            {daysLeft} days left
          </Badge>
        </div>
      </div>
    </div>
  )
}

// Update the FileItem function to use the interface
function FileItem({ name, size, date }: FileItemProps) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-gray-400" />
        <div>
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">{size}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  )
}
