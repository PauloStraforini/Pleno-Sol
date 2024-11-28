import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignUpPage() {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center">
      <div className="w-full max-w-md rounded-lg shadow-lg p-8">
        {/* Sign Up Form */}
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Login do usuario</h1>
            
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Input className="w-full" placeholder="Pauladas" />
                <button className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <div className="relative">
                <Input className="w-full" placeholder="Stalonne" />
                <button className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative">
              <Input className="w-full" type="email" placeholder="Pauladas.Stall.com.br" />
              <button className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="relative">
              <Input className="w-full" type="password" placeholder="••••••••" />
              <button className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <Button className="w-full bg-green-700 hover:bg-green-500">Entrar</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

