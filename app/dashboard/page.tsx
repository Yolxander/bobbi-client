"use client"

import { Search, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import SideNav from "@/components/navigation/SideNav"
import NextSteps from "@/app/sections/dashboard/NextSteps"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="flex w-full max-w-7xl mx-auto gap-6 border border-gray-100/20 rounded-3xl shadow-lg backdrop-blur-xl bg-white/30">
        <SideNav activePath="/" />

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6 py-6 pr-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back, Samantha!</h1>
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
                  placeholder="Search anything..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-100/20 bg-white/40 backdrop-blur-sm w-64"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="next-steps" className="flex-1">
            <TabsList className="mb-4 bg-transparent">
              <TabsTrigger 
                value="next-steps" 
                className="data-[state=active]:bg-white/40 data-[state=active]:shadow-sm data-[state=active]:text-purple-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:bg-gray-50/20 transition-all duration-200"
              >
                Next Steps
              </TabsTrigger>
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-white/40 data-[state=active]:shadow-sm data-[state=active]:text-purple-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:bg-gray-50/20 transition-all duration-200"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="activity" 
                className="data-[state=active]:bg-white/40 data-[state=active]:shadow-sm data-[state=active]:text-purple-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:bg-gray-50/20 transition-all duration-200"
              >
                Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="next-steps" className="mt-0">
              <NextSteps />
            </TabsContent>

            <TabsContent value="overview" className="mt-0">
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 border border-gray-100 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">Overview Content</h2>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="mt-0">
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-5 border border-gray-100 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">Activity Content</h2>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 