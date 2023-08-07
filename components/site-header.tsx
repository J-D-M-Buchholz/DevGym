"use client"
import Link from "next/link"
import { useState } from "react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAuth } from './AuthContext';
// Elias
import { useSession, signOut } from "next-auth/react"

export function SiteHeader() {

  const { isLoggedIn, logout } = useAuth();

  const {data: session} = useSession()

  // Elias
  const handleLogout = () => {
    if(session && session.user){
      signOut()
      } else {
        logout()
      }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {isLoggedIn ? (
              <button
                // onClick={logout}
                onClick={handleLogout}
                className={buttonVariants({ variant: 'outline' })}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href={siteConfig.links.signin}
                  rel="noreferrer"
                  className={buttonVariants({ variant: 'outline' })}
                >
                  Login
                </Link>
                <Link
                  rel="noreferrer"
                  href={siteConfig.links.signup}
                  className={buttonVariants({ variant: 'outline' })}
                >
                  Register
                </Link>
              </>
            )}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
