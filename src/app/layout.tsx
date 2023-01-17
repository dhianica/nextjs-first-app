'use client'

import '../../styles/globals.scss'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  const toogleStyles = () => {
    document.querySelector("#burger")?.classList.toggle("is-active");
    document.querySelector("#navbarmenu")?.classList.toggle("is-active");
  }

  return (
    <html lang="en">
      <body>
        <div>
          <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <Link href='/'>
                  <a className="navbar-item">
                    <Image
                      src="/vercel.svg"
                      alt="Vercel Logo"
                      width={100}
                      height={24}
                      priority
                    />
                  </a>
                </Link>
                <Link href='/'>
                  <a
                    id="burger"
                    onClick={(e) => toogleStyles()}
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarmenu"
                  >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </Link>
              </div>
              <div id="navbarmenu" className="navbar-menu">
                <div className="navbar-start">
                  <Link href="/">
                    <a className="navbar-item">Home</a>
                  </Link>
                  <Link href="/company">
                    <a className="navbar-item">Company</a>
                  </Link>
                </div>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <a
                        onClick={() => alert("You clicked the button!")}
                        className="button is-primary"
                      >
                        Click
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
        {children}
      </body>
    </html>
  )
}
