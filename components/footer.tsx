import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Code } from "lucide-react"
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-36 h-20">
                  {/* <div className="absolute inset-0 bg-blue-600 rounded-md rotate-45 transform origin-center"></div> */}
                  {/* <Code className="absolute inset-0 w-5 h-5 m-auto text-white" /> */}
                    <Image 
                      src="n10c.png" 
                      alt="Your Image" 
                      layout="fill" 
                      objectFit="contain" 
                      className="absolute inset-0"
                     />
                </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Empowering the next generation of web creators with cutting-edge tools and solutions for building the
              future of the web.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/20 hover:text-blue-400">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/20 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/20 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/20 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                  Website Builder
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                  AI Design Assistant
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                  Code Optimizer
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                  Collaboration Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">nyx@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">+194 722 451 812</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Panadura</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NIX Tools. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-blue-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

