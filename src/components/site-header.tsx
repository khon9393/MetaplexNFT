import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import tokenimg from '../../public/images/token.jpg';
import Image from "next/image";
export function SiteHeader() {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear bg-gradient-to-br from-purple-500 to-indigo-800">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 text-gray-200 dark:text-gray-400">
        {/* <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        /> */}
        <Image src={tokenimg} alt="Candibar Token" width={25} height={25} />
        <h1 className="text-lg sm:text-2xl font-medium break-words">
          Candibar Tokens
        </h1>
      </div>
    </header>
  )
}
