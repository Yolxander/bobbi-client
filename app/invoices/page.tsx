"use client"

import { Bell, FileText, ChevronDown, Building2, Check, Search, Download, Upload, Folder, File, Image, DollarSign, Receipt, FileCheck, FileX, Clock, Filter, CreditCard, Calendar, RefreshCw } from "lucide-react"
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

const subscriptions = [
  {
    id: 1,
    name: "Website Maintenance",
    amount: "$500",
    frequency: "monthly",
    nextPayment: "June 15, 2023",
    status: "active",
    description: "Monthly website maintenance and updates"
  },
  {
    id: 2,
    name: "SEO Services",
    amount: "$300",
    frequency: "monthly",
    nextPayment: "June 20, 2023",
    status: "active",
    description: "Monthly SEO optimization and reporting"
  }
]

const documents = [
  {
    id: 1,
    type: "proposal",
    title: "Website Redesign Proposal",
    date: "May 1, 2023",
    amount: "$5,000",
    status: "accepted",
    dueDate: "May 15, 2023",
    description: "Complete website redesign including new design system and responsive implementation"
  },
  {
    id: 2,
    type: "invoice",
    title: "Website Redesign - First Payment",
    date: "May 16, 2023",
    amount: "$2,500",
    status: "paid",
    dueDate: "May 30, 2023",
    description: "50% advance payment for website redesign project"
  },
  {
    id: 3,
    type: "invoice",
    title: "Website Redesign - Final Payment",
    date: "June 1, 2023",
    amount: "$2,500",
    status: "pending",
    dueDate: "June 15, 2023",
    description: "Final payment for completed website redesign"
  },
  {
    id: 4,
    type: "proposal",
    title: "Brand Identity Package",
    date: "June 5, 2023",
    amount: "$3,000",
    status: "pending",
    dueDate: "June 20, 2023",
    description: "Complete brand identity package including logo, color palette, and typography"
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'paid':
      return <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Paid</Badge>;
    case 'accepted':
      return <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">Accepted</Badge>;
    case 'rejected':
      return <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">Rejected</Badge>;
    case 'pending':
      return <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">Pending</Badge>;
    case 'active':
      return <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Active</Badge>;
    default:
      return null;
  }
}

const getDocumentIcon = (type: string) => {
  switch (type) {
    case 'invoice':
      return <Receipt className="h-5 w-5 text-purple-500" />;
    case 'proposal':
      return <FileText className="h-5 w-5 text-blue-500" />;
    default:
      return <File className="h-5 w-5 text-gray-500" />;
  }
}

export default function Invoices() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 p-6">
      <div className="flex w-full max-w-7xl mx-auto gap-6 border border-gray-100/20 rounded-3xl shadow-lg backdrop-blur-xl bg-white/30">
        <SideNav activePath="/invoices" />

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
                  {documents.map((doc) => (
                    <DropdownMenuItem key={doc.id} className="flex flex-col items-start p-3 gap-2">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-50 rounded-lg">
                            <Building2 className="h-5 w-5 text-purple-500" />
                          </div>
                          <span className="font-medium">{doc.title}</span>
                          {doc.id === 1 && (
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
                placeholder="Search documents..."
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
                <DropdownMenuItem>All Documents</DropdownMenuItem>
                <DropdownMenuItem>Proposals</DropdownMenuItem>
                <DropdownMenuItem>Invoices</DropdownMenuItem>
                <DropdownMenuItem>Paid</DropdownMenuItem>
                <DropdownMenuItem>Pending</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Active Subscriptions */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Active Subscriptions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subscriptions.map((sub) => (
                <div key={sub.id} className="bg-white/50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <CreditCard className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">{sub.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{sub.description}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-800">{sub.amount}/{sub.frequency}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">Next: {sub.nextPayment}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {getStatusBadge(sub.status)}
                      <Button variant="outline" className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100">
                        Manage Subscription
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proposals Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Proposals</h2>
            <div className="space-y-4">
              {documents.filter(doc => doc.type === "proposal").map((doc) => (
                <div key={doc.id} className="bg-white/50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        {getDocumentIcon(doc.type)}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">{doc.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{doc.description}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-800">{doc.amount}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">Due {doc.dueDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {getStatusBadge(doc.status)}
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="hover:bg-white/50">
                          <Download className="h-4 w-4" />
                        </Button>
                        {doc.status === "pending" && (
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

          {/* Invoices Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Invoices</h2>
            <div className="space-y-4">
              {documents.filter(doc => doc.type === "invoice").map((doc) => (
                <div key={doc.id} className="bg-white/50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        {getDocumentIcon(doc.type)}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">{doc.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{doc.description}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-800">{doc.amount}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">Due {doc.dueDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {getStatusBadge(doc.status)}
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="hover:bg-white/50">
                          <Download className="h-4 w-4" />
                        </Button>
                        {doc.status === "pending" && (
                          <Button variant="outline" className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100">
                            Pay Now
                          </Button>
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
    </div>
  )
} 