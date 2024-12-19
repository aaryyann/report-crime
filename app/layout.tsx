import type { Metadata } from "next";
import {Inter} from 'next/font/google'
import "./globals.css";
import Navbar from "@/Components/Navbar";
import {Providers} from "./providers"


// import Navbar
// import Provider

const inter = Inter({subsets : ['latin']})

export const metadata: Metadata = {
  title :'JusticeCall - Speak up anonymously, make a difference',
  description: 'Provide crime information to law enforcement with complete confidentiality' 
}

export default function RootLayot({
  children , 
}: {children : React.ReactNode}){
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className="relative min-h-screen bg-black selection:bg-sky-500/20">
        <div className="fixed inset-0 -z-10 min-h-screen">
          <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]"></div>
          <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]"></div>
        </div>
        <Navbar />
          <main className="pt-16">
            <Providers>
              {children}
            </Providers>
          </main>
        </div>
      </body>
    </html>
  )
}