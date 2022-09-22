import React, { Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from 'app/providers/themeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('App', {}, [theme])}>
      <Navbar />
      <Suspense fallback="">
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
