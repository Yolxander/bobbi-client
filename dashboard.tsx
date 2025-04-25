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
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  ListTodo,
  Activity,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Add TypeScript interfaces for all component props at the top of the file
interface NavItemProps {
  icon: React.ReactNode
  text: string
  active?: boolean
  badge?: string | null
  href?: string
}

interface NextStepItemProps {
  icon: React.ReactNode
  title: string
  description: string
  action: string
  priority: "high" | "medium" | "low"
}

interface ProjectCardProps {
  title: string
  description: string
  progress: number
  status: string
  dueDate: string
  action: string
  highlight?: boolean
}

interface ActivityItemProps {
  icon: React.ReactNode
  title: string
  description: string
  time: string
}

interface TeamMemberProps {
  name: string
  role: string
  avatar: string
}

interface DeadlineItemProps {
  title: string
  date: string
  daysLeft: number
  priority: "high" | "medium" | "low"
}

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="flex w-full max-w-7xl mx-auto gap-6 border border-gray-100/20 rounded-3xl shadow-lg backdrop-blur-xl bg-white/30">
        {/* Left Sidebar */}
        <div className="w-64 rounded-3xl p-6 flex flex-col">
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
            <NavItem icon={<Home />} text="Your Dashboard" active />
            <NavItem icon={<FileText />} text="Your Projects" badge="2" href="/projects" />
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
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back, Samantha!</h1>
            <div className="flex items-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="relative">
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
                  placeholder="Search anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white/70 w-64"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="next-steps" className="flex-1">
            <TabsList className="mb-4 bg-transparent p-1 rounded-lg flex gap-2">
              <TabsTrigger 
                value="next-steps" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-purple-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:bg-gray-50 transition-all duration-200"
              >
                <ListTodo className="h-4 w-4" />
                <span>Next Steps</span>
                <Badge className="ml-1 bg-red-100 text-red-600 hover:bg-red-100">3</Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="projects" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-purple-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:bg-gray-50 transition-all duration-200"
              >
                <FileText className="h-4 w-4" />
                <span>Projects</span>
              </TabsTrigger>
              <TabsTrigger 
                value="activity" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-purple-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:bg-gray-50 transition-all duration-200"
              >
                <Activity className="h-4 w-4" />
                <span>Activity</span>
              </TabsTrigger>
            </TabsList>

            {/* Next Steps Content */}
            <TabsContent value="next-steps" className="mt-0">
              <div className="bg-white/40 backdrop-blur-xl rounded-xl p-5 border border-gray-100/20 shadow-lg">
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
            </TabsContent>

            {/* Projects Content */}
            <TabsContent value="projects" className="mt-0">
              <div className="bg-white/40 backdrop-blur-xl rounded-xl p-5 border border-gray-100/20 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Your Active Projects</h2>
                  <Button variant="ghost" size="sm" className="text-purple-600 gap-1">
                    <Plus className="h-4 w-4" />
                    <span>Start New Project</span>
                  </Button>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="tasks">Tasks</TabsTrigger>
                    <TabsTrigger value="files">Files</TabsTrigger>
                    <TabsTrigger value="messages">Messages</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <ProjectCard
                      title="Website Redesign"
                      description="Complete overhaul of your company website with new branding"
                      progress={65}
                      status="In Progress"
                      dueDate="May 15, 2023"
                      action="View Details"
                    />
                    <ProjectCard
                      title="Marketing Campaign"
                      description="Social media and content marketing for Q2 product launch"
                      progress={30}
                      status="Feedback Needed"
                      dueDate="June 30, 2023"
                      action="Provide Feedback"
                      highlight={true}
                    />
                  </TabsContent>

                  <TabsContent value="tasks">
                    <p className="text-sm text-gray-500">Your project tasks will appear here.</p>
                  </TabsContent>

                  <TabsContent value="files">
                    <p className="text-sm text-gray-500">Your project files will appear here.</p>
                  </TabsContent>

                  <TabsContent value="messages">
                    <p className="text-sm text-gray-500">Your project messages will appear here.</p>
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>

            {/* Activity Content */}
            <TabsContent value="activity" className="mt-0">
              <div className="bg-white/40 backdrop-blur-xl rounded-xl p-5 border border-gray-100/20 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
                  <Button variant="ghost" size="sm" className="text-gray-500">
                    View All
                  </Button>
                </div>

                <div className="space-y-4">
                  <ActivityItem
                    icon={<Upload className="h-5 w-5 text-blue-500" />}
                    title="New Files Uploaded"
                    description="Alex uploaded 3 new mockups for the Website Redesign project"
                    time="2 hours ago"
                  />
                  <ActivityItem
                    icon={<MessageSquare className="h-5 w-5 text-green-500" />}
                    title="New Message"
                    description="Sarah sent you a message about the Marketing Campaign timeline"
                    time="Yesterday"
                  />
                  <ActivityItem
                    icon={<CreditCard className="h-5 w-5 text-purple-500" />}
                    title="Invoice Paid"
                    description="Your payment for invoice #INV-2023-03 was processed successfully"
                    time="3 days ago"
                  />
                  <ActivityItem
                    icon={<FileText className="h-5 w-5 text-amber-500" />}
                    title="Project Update"
                    description="Website Redesign project status updated to 65% complete"
                    time="4 days ago"
                  />
                  <ActivityItem
                    icon={<MessageSquare className="h-5 w-5 text-green-500" />}
                    title="New Comment"
                    description="David left a comment on the homepage mockup"
                    time="1 week ago"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 backdrop-blur-xl bg-white/40 rounded-3xl p-6 shadow-lg border border-gray-100/20">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Project Details</h2>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-medium text-gray-700">Team Members</h3>
                <Button variant="ghost" size="sm" className="text-purple-600 h-8 px-2">
                  <Plus className="h-4 w-4 mr-1" />
                  <span>Message</span>
                </Button>
              </div>
              <div className="space-y-3">
                <TeamMember name="Alex Johnson" role="Project Manager" avatar="/placeholder.svg?height=40&width=40" />
                <TeamMember name="Sarah Miller" role="Designer" avatar="/placeholder.svg?height=40&width=40" />
                <TeamMember name="David Chen" role="Developer" avatar="/placeholder.svg?height=40&width=40" />
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-700 mb-3">Upcoming Deadlines</h3>
              <div className="space-y-3">
                <DeadlineItem title="Website Mockup Approval" date="May 5, 2023" daysLeft={2} priority="high" />
                <DeadlineItem title="Content Submission" date="May 12, 2023" daysLeft={9} priority="medium" />
                <DeadlineItem title="Final Review" date="May 25, 2023" daysLeft={22} priority="low" />
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-base font-medium text-gray-700 mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg">
                  Upload Files
                </Button>
                <Button variant="outline" className="w-full py-2 border-purple-200 text-purple-700 rounded-lg">
                  Schedule Call
                </Button>
                <Button variant="outline" className="w-full py-2 border-purple-200 text-purple-700 rounded-lg">
                  Share Feedback
                </Button>
                <Button variant="outline" className="w-full py-2 border-purple-200 text-purple-700 rounded-lg">
                  View Timeline
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-medium text-gray-700">Project Health</h3>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">On Track</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Timeline</span>
                  <span className="font-medium">65% Complete</span>
                </div>
                <Progress value={65} className="h-2 bg-gray-100" />

                <div className="flex justify-between text-sm mb-1 mt-3">
                  <span className="text-gray-500">Budget</span>
                  <span className="font-medium">48% Used</span>
                </div>
                <Progress value={48} className="h-2 bg-gray-100" />
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

// Update the NextStepItem function to use the interface
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
        <Button size="sm" className="h-8 bg-purple-500 hover:bg-purple-600 text-white">
          {action}
        </Button>
      </div>
    </div>
  )
}

// Update the ProjectCard function to use the interface
function ProjectCard({ title, description, progress, status, dueDate, action, highlight = false }: ProjectCardProps) {
  const statusColors = {
    "In Progress": "bg-blue-100 text-blue-700",
    "Feedback Needed": "bg-amber-100 text-amber-700",
    Completed: "bg-green-100 text-green-700",
    "On Hold": "bg-gray-100 text-gray-700",
  }

  return (
    <div
      className={`p-4 rounded-lg border ${highlight ? "border-purple-200 bg-purple-50/30" : "border-gray-100 bg-white"}`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <Badge className={statusColors[status] || "bg-gray-100 text-gray-700"}>{status}</Badge>
      </div>

      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-500">Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-100" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Due: {dueDate}</span>
        </div>
        <Button
          size="sm"
          className={`h-8 ${highlight ? "bg-purple-500 hover:bg-purple-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
        >
          {action}
        </Button>
      </div>
    </div>
  )
}

// Update the ActivityItem function to use the interface
function ActivityItem({ icon, title, description, time }: ActivityItemProps) {
  return (
    <div className="flex gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  )
}

// Update the TeamMember function to use the interface
function TeamMember({ name, role, avatar }: TeamMemberProps) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
      <Avatar className="h-10 w-10 border border-gray-200">
        <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-medium text-gray-800">{name}</h4>
        <p className="text-xs text-gray-500">{role}</p>
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
