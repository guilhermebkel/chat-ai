'use client'

import { useChat } from "ai/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

export type ChatProps = {}

export function Chat (props: ChatProps) {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		api: "api/chat"
	})

	return (
		<Card className="w-[440px]">
			<CardHeader>
				<CardTitle>
					Chat AI
				</CardTitle>
				<CardDescription>
					Made with Vercel AI SDK + OpenAI.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[600px] w-full pr-4">
					{messages.map(message => {
						const isHumanMessage = message.role === "user"

						return (
							<div key={message.id} className={`flex ${isHumanMessage && "flex-row-reverse"} text-slate-600 text-sm mb-4`}>
								{isHumanMessage ? (
									<Avatar>
										<AvatarImage src="https://github.com/guilhermebkel.png" />
										<AvatarFallback>Mota</AvatarFallback>
									</Avatar>
								) : (
									<Avatar>
										<AvatarImage src="https://static.guilherr.me/image/logo/logo-2-white.png" />
										<AvatarFallback>Bot</AvatarFallback>
									</Avatar>
								)}
								
								<p className="leading-relaxed mt-2 ml-2 mr-2">
									{message.content}
								</p>
							</div>
						)
					})}
				</ScrollArea>
			</CardContent>
			<CardFooter>
				<form className="w-full flex gap-2" onSubmit={handleSubmit} >
					<Input placeholder="What is NodeJS?" value={input} onChange={handleInputChange} />
					<Button type="submit">Send</Button>
				</form>
			</CardFooter>
		</Card>
	)
}