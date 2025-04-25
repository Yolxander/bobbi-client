"use client"

import { Home, FileText, MessageSquare, Upload, CreditCard, HelpCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
        <NavItem icon={<Home />} text="Your Dashboard" href="/" active={activePath === "/"} />
        <NavItem 
          icon={<FileText />} 
          text="Your Projects" 
          badge="2" 
          href="/projects" 
          active={activePath === "/projects"} 
        />
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
  )
} 