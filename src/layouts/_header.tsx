import Logo from '@/components/ui/logo';
import { useMe } from '@/data/user';
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

  const { me, isAuthorized } = useMe();

  return (
    <header className="site-header">

      <div className="topbar padding-top-bottom border-bottom">
        <div className="topbar-wrapper container">
          <MobileHeader />
          <Logo />
          <SearchBox />

          <ButtonHeader name="dRep" link='/dRep' />
          {(session || isAuthorized) ?
            <>
              <ButtonHeader name="Order" link='/order' />
              {<ProfileDropdown profile={session ? session : me} />}
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
