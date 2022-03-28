import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { useScrollLock } from '../hooks/useScrollLock'
import { tools } from '../tools'

const APP_VERSION = process.env.COMMIT_SHA
  ? `${process.env.PKG_VERSION}-${process.env.COMMIT_SHA.slice(0, 6)}`
  : `${process.env.PKG_VERSION}-dev`
const COMMIT_LINK = process.env.COMMIT_SHA
  ? `https://github.com/zonemeen/react-file-preview/commit/${process.env.COMMIT_SHA}`
  : '#'

const footLinks = [
  {
    text: APP_VERSION,
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
        />
      </svg>
    ),
    href: COMMIT_LINK,
  },
]

export const Sidebar = () => {
  const router = useRouter()
  const [showSidebar, setShowSidebar] = useState(false)

  useScrollLock(showSidebar)
  return (
    <div className="md:block md:w-72 bg-gray-100 border-r md:fixed left-0 top-0 bottom-0 overflow-auto">
      <header className="px-5 h-12 fixed w-full left-0 top-0 items-center justify-between flex md:relative md:px-3 backdrop-blur-lg border-b">
        <div className="flex items-center h-full">
          <h1 className="text-xl font-medium">
            <Link href="/">
              <a className="flex space-x-2 items-center px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  className="w-6 h-6"
                >
                  <path
                    d="M704 475.815385c-2.461538-5.415385-7.876923-8.615385-13.538462-8.615385H541.538462l67.938461-226.953846c1.969231-6.892308-0.984615-14.030769-7.138461-17.476923a14.72 14.72 0 0 0-18.461539 3.446154L322.215385 532.184615a15.123692 15.123692 0 0 0-2.215385 16c2.461538 5.415385 7.876923 8.615385 13.538462 8.615385H482.461538L414.523077 783.753846c-1.969231 6.892308 0.984615 14.030769 7.138461 17.476923 2.215385 1.230769 4.676923 1.723077 7.138462 1.723077 4.184615 0 8.369231-1.723077 11.323077-5.169231l261.415385-306.215384c3.938462-4.184615 4.923077-10.584615 2.461538-15.753846z"
                    fill="#0071fd"
                    p-id="9479"
                  />
                  <path
                    d="M512 1022.030769C230.646154 1022.030769 1.969231 793.107692 1.969231 512 1.969231 230.892308 230.646154 1.969231 512 1.969231c281.353846 0 510.030769 228.923077 510.030769 510.030769 0 281.107692-228.676923 510.030769-510.030769 510.030769z m0-960.246154C263.876923 61.784615 61.784615 263.630769 61.784615 512S263.630769 962.215385 512 962.215385 962.215385 760.369231 962.215385 512 760.123077 61.784615 512 61.784615z"
                    fill="#0071fd"
                    p-id="9480"
                  />
                </svg>
                <span>Tooling Kit</span>
              </a>
            </Link>
          </h1>
        </div>
        <button
          type="button"
          role="menu"
          className="md:hidden block h-full"
          onClick={() => setShowSidebar((show) => !show)}
        >
          {showSidebar ? (
            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
              />
            </svg>
          ) : (
            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              />
            </svg>
          )}
        </button>
      </header>
      <div
        className={clsx(
          `fixed z-10 md:relative md:block backdrop-blur-lg top-12 bottom-0 left-0 w-full border-r md:top-0 md:border-r-0`,
          showSidebar ? `overflow-auto` : `hidden`
        )}
      >
        <div className="p-3">
          {tools.map((file) => (
            <div key={file.title}>
              <div className="py-1 text-zinc-500">{file.title}</div>
              {file.path.map((item) => {
                const isActive = router.asPath === item.link
                return (
                  <Link href={item.link} key={item.link}>
                    <a
                      className={clsx(
                        `px-4 py-1 rounded-lg flex`,
                        isActive && `bg-light-blue text-white`
                      )}
                    >
                      {item.name}
                    </a>
                  </Link>
                )
              })}
            </div>
          ))}
        </div>
        <div className="p-4 mt-5">
          <ul className="text-xs">
            {footLinks.map((link) => {
              return (
                <li className="text-zinc-400" key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="nofollow noopener"
                    className="hover:text-indigo-500 flex items-center space-x-1"
                  >
                    {link.icon}
                    <span>{link.text}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
