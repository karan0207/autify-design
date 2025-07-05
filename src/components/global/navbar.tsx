import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import CustomAlert from './custom-alert'

const Navbar = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [showEnterpriseAlert, setShowEnterpriseAlert] = useState(false)
  
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-6 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Au</p>
        <Image
          src="/lightlogo.png"
          width={24}
          height={15}
          alt="Autify"
          className="shadow-sm w-auto h-auto"
        />
        <p className="text-3xl font-bold">tify</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block text-md">
        <ul className="flex items-center gap-4 list-none">
          <li className='hover:text-[#a18cd1] text-lg'>
            <Link href="/">Products</Link>
          </li>
          <li className='hover:text-[#a18cd1] text-lg'>
            <Link href="#pricing">Pricing</Link>
          </li>
          {/* <li>
            <Link href="#">Clients</Link>
          </li> */}
          {/* <li>
            <Link href="#">Resources</Link>
          </li> */}
          <li className='hover:text-[#a18cd1] text-lg'>
            <Link href="#" onClick={() => {
              setShowAlert(true)
            }}>Documentation</Link>
          </li>
          <li className='hover:text-[#a18cd1] text-lg'>
            <Link href="#" onClick={() => {
              setShowEnterpriseAlert(true)
            }}>Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-md font-medium text-white backdrop-blur-3xl ">
            
              <button  className="bg-transparent border-none text-white cursor-pointer">
                Coming Soon!
              </button>
          
          </span>
        </Link>
       
        <MenuIcon className="md:hidden" />
      </aside>
      
      <CustomAlert 
        isOpen={showAlert}
        onClose={() => setShowAlert(false)}
        title="Coming Soon!"
        message="Documentation is currently under development. We're working hard to bring you comprehensive guides and tutorials. Stay tuned for updates!"
      />
      
      <CustomAlert 
        isOpen={showEnterpriseAlert}
        onClose={() => setShowEnterpriseAlert(false)}
        title="Enterprise Features Coming Soon!"
        message="Enterprise-grade features are currently under development. We're building advanced solutions for large organizations with enhanced security, scalability, and support. Stay tuned!"
      />
    </header>
  )
}

export default Navbar