import Logo from '@/components/ui/logo'
import { useMe } from '@/data/user'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import ActionHeader from './header/ActionHeader'
import ButtonHeader from './header/ButtonHeader'
import MobileHeader from './header/MobileHeader'
import MobileSearchTrigger from './header/MobileSearchTrigger'
import ProfileDropdown from './header/ProfileDropdown'
import SearchBox from './header/SearchBox'
import { useTranslation } from 'next-i18next'

const Header = () => {
  const [searchToggle, setSearchToggle] = useState(false)
  const { data: session } = useSession()
  const { t } = useTranslation('common')
  const { me, isAuthorized } = useMe()

  return (
    <header className="site-header">
      <div className="topbar padding-top-bottom border-bottom">
        <div className="topbar-wrapper container">
          <MobileHeader />
          <Logo />
          <SearchBox />
          <ButtonHeader name={t('dRep')} link="dRep" />
          {isAuthorized ? (
            <ProfileDropdown profile={session ? session : me} />
          ) : (
            <>
              <ButtonHeader name={t('text-login')} link="login" />
              <ActionHeader />
            </>
          )}
        </div>
      </div>
      <MobileSearchTrigger
        active={searchToggle}
        close={() => setSearchToggle(false)}
      />
    </header>
  )
}
export default Header
