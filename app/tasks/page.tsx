"use client"

import { Bell, FileText, CheckCircle, MessageSquare, Calendar, Clock, ChevronDown, Plus, Building2, Check, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import SideNav from "@/components/navigation/SideNav"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const tasks = [
  {
    id: 1,
    title: "Review Design Mockups",
    description: "Review and provide feedback on the new website design mockups",
    status: "Pending Review",
    dueDate: "May 15, 2023",
    priority: "high",
    type: "review",
    progress: 0
  },
  {
    id: 2,
    title: "Content Approval",
    description: "Approve the final content for the homepage and about page",
    status: "In Progress",
    dueDate: "May 20, 2023",
    priority: "medium",
    type: "approval",
    progress: 50
  },
  {
    id: 3,
    title: "Brand Guidelines Review",
    description: "Review and approve the new brand guidelines document",
    status: "Completed",
    dueDate: "May 10, 2023",
    priority: "low",
    type: "review",
    progress: 100
  },
  {
    id: 4,
    title: "Final Website Review",
    description: "Review the final website before launch",
    status: "Not Started",
    dueDate: "June 1, 2023",
    priority: "high",
    type: "review",
    progress: 0
  }
]

const milestones = [
  {
    id: 1,
    title: "Design Phase Complete",
    date: "May 15, 2023",
    status: "In Progress",
    tasks: 3,
    completedTasks: 1
  },
  {
    id: 2,
    title: "Content Phase Complete",
    date: "May 30, 2023",
    status: "Upcoming",
    tasks: 2,
    completedTasks: 0
  },
  {
    id: 3,
    title: "Development Phase Complete",
    date: "June 15, 2023",
    status: "Upcoming",
    tasks: 4,
    completedTasks: 0
  }
]

export default function Tasks() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 p-6">
      <div className="flex w-full max-w-7xl mx-auto gap-6 border border-gray-100/20 rounded-3xl shadow-lg backdrop-blur-xl bg-white/30">
        <SideNav activePath="/tasks" />

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6 py-6 pr-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-3 bg-white/40 backdrop-blur-sm border-gray-100/20 px-4 py-6">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Building2 className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-semibold text-gray-800">Website Redesign</h2>
                      <p className="text-sm text-gray-500">Currently Selected</p>
                    </div>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-80 p-2">
                  <div className="px-2 py-1.5">
                    <h3 className="text-sm font-medium text-gray-500">Switch Project</h3>
                  </div>
                  {tasks.map((task) => (
                    <DropdownMenuItem key={task.id} className="flex flex-col items-start p-3 gap-2">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-50 rounded-lg">
                            <Building2 className="h-5 w-5 text-purple-500" />
                          </div>
                          <span className="font-medium">{task.title}</span>
                          {task.id === 1 && (
                            <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200">
                              <Check className="h-3 w-3 mr-1" />
                              Current
                            </Badge>
                          )}
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`${
                            task.status === "Completed" ? "bg-green-50 text-green-600 border-green-200" :
                            task.status === "In Progress" ? "bg-blue-50 text-blue-600 border-blue-200" :
                            "bg-amber-50 text-amber-600 border-amber-200"
                          }`}
                        >
                          {task.status}
                        </Badge>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="relative backdrop-blur-sm bg-white/40 border-gray-100/20">
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                        2
                      </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>You have 2 new notifications</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Input
                placeholder="Search tasks..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-100/20 bg-white/40 backdrop-blur-sm"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-white/40 backdrop-blur-sm border-gray-100/20">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>All Tasks</DropdownMenuItem>
                <DropdownMenuItem>Pending Review</DropdownMenuItem>
                <DropdownMenuItem>In Progress</DropdownMenuItem>
                <DropdownMenuItem>Completed</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Milestones */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Project Timeline</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="text-purple-600 border-purple-200">
                  View Timeline
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="relative pl-16">
                    {/* Timeline dot */}
                    <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${
                      milestone.status === "Completed" ? "bg-green-500 border-green-600" :
                      milestone.status === "In Progress" ? "bg-blue-500 border-blue-600" :
                      "bg-gray-300 border-gray-400"
                    }`}></div>
                    
                    <div className="bg-white/50 rounded-xl p-4 border border-gray-100 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-purple-50 rounded-lg">
                            <Calendar className="h-5 w-5 text-purple-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">{milestone.title}</h3>
                            <p className="text-sm text-gray-500">Due {milestone.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Progress</p>
                            <p className="font-medium">{milestone.completedTasks} of {milestone.tasks} tasks</p>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`${
                              milestone.status === "Completed" ? "bg-green-50 text-green-600 border-green-200" :
                              milestone.status === "In Progress" ? "bg-blue-50 text-blue-600 border-blue-200" :
                              "bg-gray-50 text-gray-600 border-gray-200"
                            }`}
                          >
                            {milestone.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Your Tasks</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="text-purple-600 border-purple-200">
                  View All Tasks
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tasks.map((task) => (
                <div key={task.id} className="bg-white/50 rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${
                      task.type === "review" ? "bg-purple-50" : "bg-blue-50"
                    }`}>
                      {task.type === "review" ? (
                        <FileText className="h-5 w-5 text-purple-500" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 mb-1">{task.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{task.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          Due {task.dueDate}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm font-medium text-gray-800">
                            {task.progress}% Complete
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`${
                              task.status === "Completed" ? "bg-green-50 text-green-600 border-green-200" :
                              task.status === "In Progress" ? "bg-blue-50 text-blue-600 border-blue-200" :
                              "bg-amber-50 text-amber-600 border-amber-200"
                            }`}
                          >
                            {task.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 