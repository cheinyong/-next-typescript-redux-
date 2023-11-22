'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'
import {selectAuth, useSelector} from "@/lib/redux";

export const Nav = () => {
  const pathname = usePathname()

    const auth = useSelector(selectAuth);
    let login = auth.token;
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
                      {
                          !login &&  <li className="nav-item active">
                              <Link
                                  className={'nav-link'}
                                  href="/login"
                              >
                                  Login
                              </Link>
                          </li>
                      }

                      <li className="nav-item">
                          <Link
                              className={'nav-link'}
                              href="/movie"
                          >
                              Movies
                          </Link>
                      </li>

                      {
                          login &&  <li className="nav-item active">
                              <Link
                                  className={'nav-link'}
                                  href="/logout"
                              >
                                  Logout
                              </Link>
                          </li>
                      }
                  </ul>
              </div>
          </div>
      </nav>


  )
}
