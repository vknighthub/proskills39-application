import Logo from '@/components/ui/logo'
import { isMobileDevice } from '@/utils/isMobileDevice'
import { useEffect, useState } from 'react'
import { niceSelect, notificationList, svgLoadder } from './../utils/util'
import Footer from './_footer'
import Header from './_header'

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

  const mobile = isMobileDevice();

  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [render])


  return (
    <>
      {render &&
        <div className="main">
          {!mobile ?
            <>
              <Header />
              {children}
              <Footer />
            </>
            :
            <>
              <header className="site-header">
                <div className="topbar padding-top-bottom border-bottom">
                  <div className="topbar-wrapper container">
                    <Logo isDark={true} />
                  </div>
                </div>
              </header >
              <div className="primary-content-area background-phone"></div>
            </>
          }
        </div>
      }
    </>
  )
}
