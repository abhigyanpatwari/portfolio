'use client'
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Toggle } from "@/components/ui/toggle"
import { User, Settings, Mail, Bell } from "lucide-react"

export function VerticalNavbar() {
    const [selectedIcon, setSelectedIcon] = React.useState<string>('person');

    const icons = [
        { name: 'person', icon: User },
        { name: 'mail', icon: Mail },
        { name: 'bell', icon: Bell },
        { name: 'settings', icon: Settings },
    ];

    return (
        <nav className="flex flex-col items-center w-20 h-screen bg-black rounded-3xl">
            <div className="p-8 mb-8">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-6">
                {icons.map(({ name, icon: Icon }) => (
                    <Toggle
                        key={name}
                        variant="outline"
                        size="lg"
                        pressed={selectedIcon === name}
                        onPressedChange={(pressed) => setSelectedIcon(pressed ? name : selectedIcon)}
                        className={`w-12 h-12 rounded-full p-0 data-[state=on]:bg-white data-[state=on]:text-black hover:bg-gray-800 hover:text-white flex items-center justify-center`}
                    >
                        <Icon className="h-6 w-6" />
                    </Toggle>
                ))}
            </div>
        </nav>
    )
}