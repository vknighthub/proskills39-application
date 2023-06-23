import Image from '@/components/ui/image'
import AnchorLink from '@/components/ui/links/anchor-link'
import routes from '@/config/routes'
import { useSettings } from '@/data/settings'
import { siteSettings } from '@/data/static/site-settings'
import { useIsDarkMode } from '@/lib/hooks/use-is-dark-mode'
import { useIsMounted } from '@/lib/hooks/use-is-mounted'
import { useEffect, useState } from 'react'

export default function Logo({
  className = 'w-40',
  ...props
}: React.AnchorHTMLAttributes<{}>) {
  const isMounted = useIsMounted()

  const { lightLogo, darkLogo } = siteSettings
  const { settings,refetch }: any = useSettings()

  const [load, setLoad] = useState(settings?.dark_logo?.original)

  let isDarkMode: any
  if (typeof window !== 'undefined') {
    isDarkMode = localStorage.getItem('mood');
  }
  console.log(isDarkMode)
  useEffect(() => {
    refetch()
    if (isDarkMode === 'dark-mood') {
      setLoad(settings?.dark_logo?.original)
    } else {
      setLoad(settings?.logo?.original)
    }

  }, [isDarkMode,refetch,settings])



  return (
    <>

      <AnchorLink href={`/${routes.home}`} className="logo-link" {...props}>
        <div
          className="logo-img"
          style={{
            width: siteSettings?.width,
            height: siteSettings?.height,
            position: 'relative'
          }}
        >
          {(
            <Image
              src={load ?? lightLogo}
              loading="eager"
              width={3083}
              height={2573}
              alt={settings?.siteTitle ?? 'Dark Logo'}
            />
          )}

        </div>
      </AnchorLink>

    </>
  )
}
