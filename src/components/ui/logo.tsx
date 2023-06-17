import Image from '@/components/ui/image'
import AnchorLink from '@/components/ui/links/anchor-link'
import routes from '@/config/routes'
import { useSettings } from '@/data/settings'
import { siteSettings } from '@/data/static/site-settings'
import { useIsDarkMode } from '@/lib/hooks/use-is-dark-mode'
import { useIsMounted } from '@/lib/hooks/use-is-mounted'

export default function Logo({
  className = 'w-40',
  ...props
}: React.AnchorHTMLAttributes<{}>) {
  const isMounted = useIsMounted()
  const { isDarkMode } = useIsDarkMode()
  const { lightLogo, darkLogo } = siteSettings
  const { settings }: any = useSettings()

  return (
    <AnchorLink href={`/${routes.home}`} className="logo-link" {...props}>
      <div
        className="logo-img"
        style={{
          width: siteSettings?.width,
          height: siteSettings?.height,
          position: 'relative'
        }}
      >
        {isMounted && isDarkMode && (
          <Image
            src={settings?.dark_logo?.original ?? darkLogo}
            loading="eager"
            width={185}
            height={104}
            alt={settings?.siteTitle ?? 'Dark Logo'}
          />
        )}
        {isMounted && !isDarkMode && (
          <Image
            src={settings?.logo?.original ?? lightLogo}
            loading="eager"
            width={185}
            height={104}
            alt={settings?.siteTitle ?? 'Light Logo'}
          />
        )}
      </div>
    </AnchorLink>
  )
}
