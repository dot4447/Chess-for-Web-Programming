import { DiamondIcon as ChessIcon, PuzzleIcon, GraduationCapIcon, PlayCircleIcon, NewspaperIcon, UsersIcon, MoreHorizontalIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#272522] p-4 flex flex-col">
      <div className="mb-4">
        <img src="/placeholder.svg?height=32&width=120" alt="Chess.com" className="h-8" />
      </div>
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <ChessIcon className="mr-2 h-5 w-5" />
          Play
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <PuzzleIcon className="mr-2 h-5 w-5" />
          Puzzles
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <GraduationCapIcon className="mr-2 h-5 w-5" />
          Learn
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <PlayCircleIcon className="mr-2 h-5 w-5" />
          Watch
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <NewspaperIcon className="mr-2 h-5 w-5" />
          News
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <UsersIcon className="mr-2 h-5 w-5" />
          Social
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <MoreHorizontalIcon className="mr-2 h-5 w-5" />
          More
        </Button>
      </nav>
      <div className="mt-4">
        <Input type="search" placeholder="Search" className="bg-[#312E2B]" />
      </div>
      <div className="mt-auto space-y-2">
        <Button className="w-full bg-[#82AC4A] hover:bg-[#90BD4B]">Sign Up</Button>
        <Button variant="outline" className="w-full">Log In</Button>
      </div>
    </div>
  )
}
