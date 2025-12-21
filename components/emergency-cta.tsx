"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EmergencyCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! How can I assist you with your emergency care needs?" },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: "user", text: inputValue }])
      setInputValue("")
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Thank you for your message. For emergency assistance, please call 99000 89601 immediately.",
          },
        ])
      }, 1000)
    }
  }

  return (
    <>
      {/* <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full gradient-bg text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        >
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.div>
        </motion.button>
      </motion.div> */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-white rounded-xl shadow-2xl border border-border overflow-hidden flex flex-col h-[500px]">
              {/* Header */}
              <div className="gradient-bg text-white p-4 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Emergency Care Support</h3>
                    <p className="text-sm text-white/90 flex items-center gap-1 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Available 24/7
                    </p>
                  </div>
                  <a href="tel:9900089601" className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                    <Phone className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-muted/20 to-muted/5">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: msg.type === "user" ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${
                        msg.type === "user"
                          ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white"
                          : "bg-white border border-border text-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-white flex-shrink-0">
                <div className="flex gap-2 mb-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 border-border focus-visible:ring-2 focus-visible:ring-primary"
                  />
                  <Button
                    onClick={handleSend}
                    size="icon"
                    className="gradient-bg text-white hover:opacity-90 flex-shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">
                    Emergency?{" "}
                    <a href="tel:9900089601" className="font-bold text-primary hover:underline">
                      Call 99000 89601
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
