"use client"

import { Search, Bell, Filter, Plus, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import SideNav from "@/components/navigation/SideNav"
import ProjectGrid from "@/app/sections/projects/ProjectGrid"

export default function Projects() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 p-6">
      <div className="flex w-full max-w-7xl mx-auto gap-6 border border-gray-100/20 rounded-3xl shadow-lg backdrop-blur-xl bg-white/30">
        <SideNav activePath="/projects" />

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
                  <TabsTrigger 
                    value="all" 
                    className="data-[state=active]:bg-white/40 data-[state=active]:shadow-sm data-[state=active]:text-purple-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:bg-gray-50/20 transition-all duration-200"
                  >
                    All Projects
                  </TabsTrigger>
                  <TabsTrigger 
                    value="active" 
                    className="data-[state=active]:bg-white/40 data-[state=active]:shadow-sm data-[state=active]:text-purple-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:bg-gray-50/20 transition-all duration-200"
                  >
                    Active
                  </TabsTrigger>
                  <TabsTrigger 
                    value="completed" 
                    className="data-[state=active]:bg-white/40 data-[state=active]:shadow-sm data-[state=active]:text-purple-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:bg-gray-50/20 transition-all duration-200"
                  >
                    Completed
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <Button className="bg-purple-500 hover:bg-purple-600 text-white gap-2 shadow-lg shadow-purple-500/20">
              <Plus className="h-4 w-4" />
              <span>New Project</span>
            </Button>
          </div>

          {/* Projects Grid */}
          <ProjectGrid />
        </div>
      </div>
    </div>
  )
}
