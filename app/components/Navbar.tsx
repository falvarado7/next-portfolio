'use client'
import ThemeSwitcher from "./ThemeSwitcher"
import NavLinks from "./NavLinks"

export default function Navbar() {

  return (
    <header>
      <nav className="flex sticky">    
        <ThemeSwitcher />
        <NavLinks />
      </nav>
    </header>
  )
}