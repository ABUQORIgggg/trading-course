import React, { useState } from "react"
import { Home, BookOpen, Users, MessageCircle, Send, Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Courses", href: "#CourseTypes", icon: BookOpen },
    { name: "Brokers", href: "#BrokerCards", icon: Users },
    { name: "Contact", href: "#footer", icon: MessageCircle },
    { name: "Telegram", href: "https://t.me/Trade_InvestUz", icon: Send },
  ]

  const handleClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-b from-gray-900 to-black text-white bg-opacity-90 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          <a
            href="#home"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Trade Invest
          </a>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-blue-400 transition-colors duration-200 flex items-center space-x-1 group"
                onClick={(e) => handleClick(e, item.href)}
                target={item.name === "Telegram" ? "_blank" : undefined}
                rel={item.name === "Telegram" ? "noopener noreferrer" : undefined}
              >
                <item.icon className="w-5 h-5 group-hover:text-blue-400" />
                <span className="relative overflow-hidden">
                  <span className="inline-block transform transition-transform duration-200 group-hover:-translate-y-full">
                    {item.name}
                  </span>
                  <span className="absolute top-0 left-0 inline-block transform transition-transform duration-200 translate-y-full group-hover:translate-y-0 text-blue-400">
                    {item.name}
                  </span>
                </span>
              </a>
            ))}
          </div>
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                onClick={(e) => handleClick(e, item.href)}
                target={item.name === "Telegram" ? "_blank" : undefined}
                rel={item.name === "Telegram" ? "noopener noreferrer" : undefined}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
