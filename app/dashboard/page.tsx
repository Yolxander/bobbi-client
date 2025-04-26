"use client"

import { Bell, FileText, CheckCircle, MessageSquare, Calendar, Clock, ChevronDown, Plus, Building2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import SideNav from "@/components/navigation/SideNav"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const projects = [
  { 
    id: 1, 
    name: "Website Redesign", 
    status: "On Track", 
    progress: 65,
    startDate: "May 1, 2023",
    endDate: "June 30, 2023"
  },
  { 
    id: 2, 
    name: "Mobile App Development", 
    status: "In Progress", 
    progress: 30,
    startDate: "June 15, 2023",
    endDate: "August 30, 2023"
  },
  { 
    id: 3, 
    name: "Brand Identity", 
    status: "Completed", 
    progress: 100,
    startDate: "April 1, 2023",
    endDate: "May 15, 2023"
  },
]

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 p-6">
      <div className="flex w-full max-w-7xl mx-auto gap-6 border border-gray-100/20 rounded-3xl shadow-lg backdrop-blur-xl bg-white/30">
        <SideNav activePath="/" />

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
                  {projects.map((project) => (
                    <DropdownMenuItem key={project.id} className="flex flex-col items-start p-3 gap-2">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-50 rounded-lg">
                            <Building2 className="h-5 w-5 text-purple-500" />
                          </div>
                          <span className="font-medium">{project.name}</span>
                          {project.id === 1 && (
                            <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200">
                              <Check className="h-3 w-3 mr-1" />
                              Current
                            </Badge>
                          )}
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`${
                            project.status === "On Track" ? "bg-green-50 text-green-600 border-green-200" :
                            project.status === "In Progress" ? "bg-blue-50 text-blue-600 border-blue-200" :
                            "bg-gray-50 text-gray-600 border-gray-200"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500 pl-11">
                        <span>{project.progress}% Complete</span>
                        <span>•</span>
                        <span>Due {project.endDate}</span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                  <div className="border-t border-gray-100 pt-2">
                    <DropdownMenuItem className="text-purple-600 py-2">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Project
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">On Track</Badge>
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

          {/* Project Status Card */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white/80 backdrop-blur-md rounded-xl p-5 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Website Redesign Project</h2>
                  <p className="text-sm text-gray-500">Project Manager: Sarah Miller</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">On Track</Badge>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Overall Progress</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2 bg-gray-100" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Start Date</p>
                    <p className="font-medium">May 1, 2023</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">End Date</p>
                    <p className="font-medium">June 30, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 border border-gray-100 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  Review Latest Deliverables
                </Button>
                <Button variant="outline" className="w-full border-purple-200 text-purple-700">
                  Message Project Team
                </Button>
                <Button variant="outline" className="w-full border-purple-200 text-purple-700">
                  View Project Timeline
                </Button>
              </div>
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Upcoming Tasks</h2>
              <Button variant="outline" size="sm" className="text-purple-600 border-purple-200">
                View All Tasks
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <FileText className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Review Design Mockups</h3>
                    <p className="text-sm text-gray-500">Due in 2 days</p>
                  </div>
                </div>
                <Badge className="bg-amber-100 text-amber-700">Pending Review</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Content Approval</h3>
                    <p className="text-sm text-gray-500">Due in 5 days</p>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-700">In Progress</Badge>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 border border-gray-100 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <FileText className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">New design mockups uploaded for review</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">Content outline approved</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">New message from Sarah about timeline</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 