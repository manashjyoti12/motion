import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return (
        <div className="flex dark:bg-[#1F1F1F] items-center w-full p-6 bg-background z-50">
            <Logo />
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-end gap-x-2 text-muted-foreground">
                <Button variant="ghost" size="sm">Privacy Policy</Button>
                <Button variant="ghost" size="sm">Terms & Condition</Button>
            </div>
        </div>
    )
}