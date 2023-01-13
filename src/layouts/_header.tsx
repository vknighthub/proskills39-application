import Logo from '@/components/ui/logo';
import React from 'react'
import MobileHeader from './header/MobileHeader';

export default function Header() {
  return (
    <header className="site-header">
      <div className="topbar padding-top-bottom border-bottom">
        <div className="topbar-wrapper container">
          <MobileHeader />
          <Logo />
        </div>
      </div>
    </header>
  )
}
