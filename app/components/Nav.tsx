'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'

export const Nav = () => {
  const pathname = usePathname()

  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <Link
                            className={'nav-link'}
                            href="/"
                          >
                            Home
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link
                              className={'nav-link'}
                              href="/movie"
                          >
                              Movies
                          </Link>
                      </li>

                  <li className="nav-item">
                          <Link
                            className={'nav-link'}
                            href="/verify"
                          >
                            Verify
                          </Link>
                  </li>
                  </ul>
              </div>
          </div>
      </nav>


  )
}
