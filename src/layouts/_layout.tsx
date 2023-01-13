import { useEffect } from 'react'
import { niceSelect, notificationList, svgLoadder } from './../utils/util'
import Footer from './_footer'
import Header from './_header'
import NavLayout from './_nav'

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  useEffect(() => {
    const Waves = require('node-waves')
    notificationList()
    setTimeout(() => {
      Waves.init()
      Waves.attach('.btn-dark', ['waves-button', 'waves-float', 'waves-light'])
      Waves.attach('.btn', ['waves-button', 'waves-float', 'waves-light'])
      Waves.attach('.slide-button .btn', [
        'waves-button',
        'waves-float',
        'waves-light',
      ])
      niceSelect()
      svgLoadder()
    }, 1000)
  }, [])

  return (
    <>
      <div className="main">
        <Header />
        <NavLayout />
        {children}
        <Footer />
      </div>
    </>
  )
}
