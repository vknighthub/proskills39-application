import Logo from '@/components/ui/logo';
import { useState } from 'react';
import ButtonHeader from './header/ButtonHeader';
import MobileHeader from './header/MobileHeader';
import MobileSearchTrigger from './header/MobileSearchTrigger';
import ProfileDropdown from './header/ProfileDropdown';
import SearchBox from './header/SearchBox';
import ActionHeader from './header/ActionHeader';

export default function Header() {
  const [searchToggle, setSearchToggle] = useState(false);
  const isAuthen = false;

  return (
    <header className="site-header">
      <div className="topbar padding-top-bottom border-bottom">
        <div className="topbar-wrapper container">
          <MobileHeader />
          <Logo />
          <SearchBox />
          <ButtonHeader name="Order" link='/login' />
          <ButtonHeader name="dRep" link='/login' />

          {isAuthen ?
            <ProfileDropdown />
            :
            <ActionHeader />
          }
        </div>
      </div>
      <MobileSearchTrigger
        active={searchToggle}
        close={() => setSearchToggle(false)}
      />
    </header>
  )
}
