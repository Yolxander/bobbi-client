"use client"

import { FileText, ChevronDown, Building2, Check, Search, Download, Filter, DollarSign, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import SideNav from "@/components/navigation/SideNav"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const proposals = [
  {
    id: 1,
    title: "Website Redesign Proposal",
    date: "May 1, 2023",
    amount: "$5,000",
    status: "accepted",
    dueDate: "May 15, 2023",
    description: "Complete website redesign including new design system and responsive implementation"
  },
  {
    id: 2,
    title: "Brand Identity Package",
    date: "June 5, 2023",
    amount: "$3,000",
    status: "pending",
    dueDate: "June 20, 2023",
    description: "Complete brand identity package including logo, color palette, and typography"
  }
]

export default function Proposals() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 p-6">
      <div className="flex w-full max-w-7xl mx-auto gap-6 border border-gray-100/20 rounded-3xl shadow-lg backdrop-blur-xl bg-white/30">
        <SideNav activePath="/expenses/proposals" />

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6 py-6 pr-6">
          {/* Header */}
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
                  {proposals.map((proposal) => (
                    <DropdownMenuItem key={proposal.id} className="flex flex-col items-start p-3 gap-2">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-50 rounded-lg">
                            <Building2 className="h-5 w-5 text-purple-500" />
                          </div>
                          <span className="font-medium">{proposal.title}</span>
                          {proposal.id === 1 && (
                            <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200">
                              <Check className="h-3 w-3 mr-1" />
                              Current
                            </Badge>
                          )}
                        </div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2 bg-white/40 backdrop-blur-sm border-gray-100/20">
                <Download className="h-4 w-4" />
                <span>Export All</span>
              </Button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Input
                placeholder="Search proposals..."
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
                <DropdownMenuItem>All Proposals</DropdownMenuItem>
                <DropdownMenuItem>Accepted</DropdownMenuItem>
                <DropdownMenuItem>Pending</DropdownMenuItem>
                <DropdownMenuItem>Rejected</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Proposals List */}
          <div className="space-y-4">
            {proposals.map((proposal) => (
              <div key={proposal.id} className="bg-white/50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">{proposal.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{proposal.description}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-800">{proposal.amount}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-500">Due {proposal.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {proposal.status === "accepted" ? (
                      <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">Accepted</Badge>
                    ) : (
                      <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">Pending</Badge>
                    )}
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="hover:bg-white/50">
                        <Download className="h-4 w-4" />
                      </Button>
                      {proposal.status === "pending" && (
                        <div className="flex items-center gap-2">
                          <Button variant="outline" className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100">
                            Accept
                          </Button>
                          <Button variant="outline" className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100">
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 