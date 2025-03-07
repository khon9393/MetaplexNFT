"use client"


import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SolCalcDrawer } from "../candibar/SolCalcDrawer"


export function CandibarDropdownMenu2() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

        <Button variant="link" className="text-white text-lg flex items-center hover:no-underline">
          Guide
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-53 bg-[#8878c3]">

      <DropdownMenuItem>
          <Button variant="link" onClick={() => { window.location.href = '/getstarted'; }}
            className="w-full justify-start">
            Getting Started
          </Button>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
       
        <DropdownMenuItem>
          <Button variant="link" onClick={() => { window.location.href = '/CPAG'; }}
            className="w-full justify-start">
            CPAG
          </Button>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Button variant="link" onClick={() => { window.location.href = '/faq'; }}
            className="w-full justify-start">
            FAQ
          </Button>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
};
