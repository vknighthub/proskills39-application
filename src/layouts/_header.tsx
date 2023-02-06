import Logo from '@/components/ui/logo';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import ActionHeader from './header/ActionHeader';
import ButtonHeader from './header/ButtonHeader';
import MobileHeader from './header/MobileHeader';
import MobileSearchTrigger from './header/MobileSearchTrigger';
import ProfileDropdown from './header/ProfileDropdown';
import SearchBox from './header/SearchBox';

export default function Header() {
  const [searchToggle, setSearchToggle] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="site-header">
      
      <div className="topbar padding-top-bottom border-bottom">
        <div className="topbar-wrapper container">
          <MobileHeader />
          <Logo />
          <SearchBox />



          {session ?
            <>
              <ButtonHeader name="Order" link='/login' />
              <ButtonHeader name="dRep" link='/dRep' />
              <ProfileDropdown user={session?.user} />
            </>
            :
            <>
              <ButtonHeader name="Login" link='/login' />
              <ActionHeader />
            </>
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
