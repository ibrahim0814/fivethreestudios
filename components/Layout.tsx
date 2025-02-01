import Head from "next/head"
import type React from "react"
import { NavBar } from "./ui/nav-bar"

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({
  children,
  title = "AI Workflow Agency",
  description = "Streamline Your Business Workflows Using AI",
}: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="flex-grow">{children}</main>
    </div>
  )
}
