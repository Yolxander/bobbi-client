"use client"

import { ArrowLeft, Bell, MoreVertical, Share2, Settings, Users, Calendar, Tag, CheckCircle, Clock, AlertCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import SideNav from "@/components/navigation/SideNav"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [expandedDeliverables, setExpandedDeliverables] = useState<number[]>([])

  // Mock data for deliverables and tasks
  const deliverables = [
    {
      id: 1,
      title: "Website Design",
      description: "Complete design system and wireframes",
      status: "In Progress",
      dueDate: "May 10, 2023",
      tasks: [
        { id: 1, title: "Create wireframes", status: "Completed", assignedTo: "Sarah Miller" },
        { id: 2, title: "Design system documentation", status: "In Progress", assignedTo: "Sarah Miller" },
        { id: 3, title: "Mobile responsive design", status: "Not Started", assignedTo: "Alex Johnson" },
      ]
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Implement the website using React and Next.js",
      status: "Not Started",
      dueDate: "May 25, 2023",
      tasks: [
        { id: 4, title: "Set up Next.js project", status: "Not Started", assignedTo: "David Chen" },
        { id: 5, title: "Implement homepage", status: "Not Started", assignedTo: "David Chen" },
        { id: 6, title: "Create reusable components", status: "Not Started", assignedTo: "David Chen" },
      ]
    },
    {
      id: 3,
      title: "Content Creation",
      description: "Write and optimize website content",
      status: "Not Started",
      dueDate: "May 20, 2023",
      tasks: [
        { id: 7, title: "Write homepage copy", status: "Not Started", assignedTo: "Emily Brown" },
        { id: 8, title: "Create blog content", status: "Not Started", assignedTo: "Emily Brown" },
        { id: 9, title: "SEO optimization", status: "Not Started", assignedTo: "Emily Brown" },
      ]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "In Progress":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "Not Started":
        return <AlertCircle className="h-4 w-4 text-gray-400" />
      default:
        return null
    }
  }

  const toggleDeliverable = (id: number) => {
    setExpandedDeliverables(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 p-6">
      <div className="flex w-full max-w-7xl mx-auto gap-6 border border-gray-100/20 rounded-3xl shadow-lg backdrop-blur-xl bg-white/30">
        <SideNav activePath="/projects" />

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6 py-6 pr-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-white/40"
                onClick={() => router.back()}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-bold text-gray-800">Project Details</h1>
              <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Active</Badge>
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
              <Button variant="outline" size="icon" className="backdrop-blur-sm bg-white/40 border-gray-100/20">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="backdrop-blur-sm bg-white/40 border-gray-100/20">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="backdrop-blur-sm bg-white/40 border-gray-100/20">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="col-span-2 space-y-6">
              <div className="backdrop-blur-sm bg-white/40 p-6 rounded-xl border border-gray-100/20">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Overview</h2>
                <p className="text-gray-600">
                  This is a detailed description of the project. It includes information about the goals,
                  timeline, and key deliverables. The project aims to achieve specific objectives and
                  deliver value to stakeholders.
                </p>
              </div>

              {/* Deliverables Section */}
              <div className="backdrop-blur-sm bg-white/40 p-6 rounded-xl border border-gray-100/20">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">Deliverables & Tasks</h2>
                  <Button variant="outline" size="sm" className="bg-white/40 backdrop-blur-sm border-gray-100/20">
                    Add Deliverable
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {deliverables.map((deliverable) => (
                    <div key={deliverable.id} className="border border-gray-100/20 rounded-lg overflow-hidden">
                      <div 
                        className="flex justify-between items-center p-4 cursor-pointer hover:bg-white/20 transition-colors"
                        onClick={() => toggleDeliverable(deliverable.id)}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform duration-200 ${
                              expandedDeliverables.includes(deliverable.id) ? 'rotate-180' : ''
                            }`}
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-gray-800">{deliverable.title}</h3>
                              <Badge variant="outline" className="text-xs">
                                {deliverable.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-500">{deliverable.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>Due: {deliverable.dueDate}</span>
                        </div>
                      </div>

                      {expandedDeliverables.includes(deliverable.id) && (
                        <div className="border-t border-gray-100/20 p-4 space-y-2">
                          {deliverable.tasks.map((task) => (
                            <div key={task.id} className="flex items-center justify-between p-2 rounded-lg bg-white/30 backdrop-blur-sm">
                              <div className="flex items-center gap-2">
                                {getStatusIcon(task.status)}
                                <span className="text-sm">{task.title}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">{task.assignedTo}</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="backdrop-blur-sm bg-white/40 p-6 rounded-xl border border-gray-100/20">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Team Members</p>
                      <p className="font-medium">12 Members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Due Date</p>
                      <p className="font-medium">May 15, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Tag className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Tags</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">Design</Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Development</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-white/40 p-6 rounded-xl border border-gray-100/20">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Progress</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Overall Progress</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 