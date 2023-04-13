import Logo from '@/components/ui/logo'
import { useMe } from '@/data/user'
import SwitchLanguage from '@/layouts/header/SwitchLanguage'
import { useSession } from 'next-auth/react'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import ButtonHeader from './header/ButtonHeader'
import MobileHeader from './header/MobileHeader'
import MobileSearchTrigger from './header/MobileSearchTrigger'
import ProfileDropdown from './header/ProfileDropdown'
import SearchBox from './header/SearchBox'
import NotificationsButton from './header/NotificationsButton'

const Header = () => {
  const { t } = useTranslation('common')
  const [searchToggle, setSearchToggle] = useState(false)
  const { data: session } = useSession()
  const { me, isAuthorized } = useMe()
  return (
    <header className="site-header">
      <div className="topbar padding-top-bottom border-bottom">
        <div className="topbar-wrapper container">
          <MobileHeader />
          <Logo />
          <SearchBox />
          <SwitchLanguage />
          <div className="user-activity-buttons">
            <NotificationsButton />
          </div>
          <ButtonHeader name={t('dRep')} link="dRep" />
          <ProfileDropdown
            profile={session ? session : me}
            isAuthorized={isAuthorized}
          />
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
