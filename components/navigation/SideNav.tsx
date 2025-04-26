"use client"

import { Home, FileText, MessageSquare, Upload, CreditCard, HelpCircle, Folder, ChevronDown, Receipt } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavItemProps {
  icon: React.ReactNode
  text: string
  active?: boolean
  badge?: string | null
  href?: string
}

interface SideNavProps {
  activePath: string
}

export function NavItem({ icon, text, active = false, badge = null, href = "#" }: NavItemProps) {
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

export default function SideNav({ activePath }: SideNavProps) {
  return (
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
        <NavItem icon={<Home />} text="Project Overview" active={activePath === "/"} href="/" />
        <NavItem icon={<FileText />} text="Tasks & Milestones" badge="2" href="/tasks" active={activePath === "/tasks"} />
        <NavItem icon={<Folder />} text="Files & Deliverables" badge="3" href="/files" active={activePath === "/files"} />
        <NavItem icon={<MessageSquare />} text="Messages" badge="1" href="/messages" active={activePath === "/messages"} />
        
        {/* Expenses Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                activePath.startsWith("/expenses")
                  ? "text-purple-600 bg-purple-50/50"
                  : "text-gray-600 hover:bg-gray-100/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5" />
                <span className="font-medium">Expenses</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem asChild>
              <Link href="/expenses/subscriptions" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Subscriptions</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/expenses/proposals" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Proposals</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/expenses/invoices" className="flex items-center gap-2">
                <Receipt className="h-4 w-4" />
                <span>Invoices</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
  )
} 