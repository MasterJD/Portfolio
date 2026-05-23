import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Scanlines from './components/Scanlines'

export default function Layout() {
  return (
    <body className="bg-background-light dark:bg-background-dark font-display selection:bg-primary selection:text-white min-h-screen relative overflow-x-hidden transition-colors duration-300">
      <Scanlines />

      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <Navbar />
              <Outlet />
              <footer className="mt-auto border-t-4 border-black dark:border-white pt-10 pb-20 px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-black/40 dark:text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
                  &copy; 2026 MZ. ALL RIGHTS RESERVED.
                </div>
                <div className="flex gap-6">
                  <a
                    className="text-black dark:text-white hover:text-primary transition-colors font-bold uppercase text-xs"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
