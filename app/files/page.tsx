"use client"

import { Bell, FileText, ChevronDown, Building2, Check, Search, Download, Upload, Folder, File, Image } from "lucide-react"
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

const folders = [
  {
    id: 1,
    name: "Design Files",
    files: [
      { name: "homepage-mockup.psd", size: "2.4 MB", type: "image" },
      { name: "about-page-mockup.psd", size: "1.8 MB", type: "image" },
      { name: "product-page-mockup.psd", size: "2.1 MB", type: "image" }
    ]
  },
  {
    id: 2,
    name: "Brand Guidelines",
    files: [
      { name: "brand-guidelines.pdf", size: "4.2 MB", type: "document" },
      { name: "color-palette.ai", size: "1.5 MB", type: "image" }
    ]
  },
  {
    id: 3,
    name: "Website Content",
    files: [
      { name: "website-content.docx", size: "1.2 MB", type: "document" },
      { name: "seo-keywords.xlsx", size: "0.8 MB", type: "document" }
    ]
  }
]

const getFileIcon = (type: string) => {
  switch (type) {
    case 'image':
      return <Image className="h-5 w-5 text-blue-500" />;
    case 'document':
      return <FileText className="h-5 w-5 text-purple-500" />;
    default:
      return <File className="h-5 w-5 text-gray-500" />;
  }
}

export default function Files() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 p-6">
      <div className="flex w-full max-w-7xl mx-auto gap-6 border border-gray-100/20 rounded-3xl shadow-lg backdrop-blur-xl bg-white/30">
        <SideNav activePath="/files" />

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
                  {folders.map((folder) => (
                    <DropdownMenuItem key={folder.id} className="flex flex-col items-start p-3 gap-2">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-50 rounded-lg">
                            <Building2 className="h-5 w-5 text-purple-500" />
                          </div>
                          <span className="font-medium">{folder.name}</span>
                          {folder.id === 1 && (
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
            <Button variant="outline" className="flex items-center gap-2 bg-white/40 backdrop-blur-sm border-gray-100/20">
              <Upload className="h-4 w-4" />
              <span>Upload Files</span>
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Input
              placeholder="Search files..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-100/20 bg-white/40 backdrop-blur-sm"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Folders */}
          <div className="space-y-6">
            {folders.map((folder) => (
              <div key={folder.id} className="bg-white/50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Folder className="h-6 w-6 text-purple-500" />
                  <h2 className="text-lg font-medium text-gray-800">{folder.name}</h2>
                </div>
                
                <div className="space-y-2">
                  {folder.files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/30 rounded-lg hover:bg-white/40 transition-colors">
                      <div className="flex items-center gap-3">
                        {getFileIcon(file.type)}
                        <div>
                          <p className="text-sm font-medium text-gray-800">{file.name}</p>
                          <p className="text-xs text-gray-500">{file.size}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="hover:bg-white/50">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 