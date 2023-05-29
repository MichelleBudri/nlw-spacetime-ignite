import { Copyright } from "@/components/Copyright"
import { EmptyMemories } from "@/components/EmptyMemories"
import { Hero } from "@/components/Hero"
import { SignIn } from "@/components/SignIn"

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full"/>
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <SignIn />
        <Hero />
        <Copyright/>
      </div>
      
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
      
    </main>
  )
}
