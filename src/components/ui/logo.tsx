import Image from '@/components/ui/image'
import AnchorLink from '@/components/ui/links/anchor-link'
import routes from '@/config/routes'
import { useSettings } from '@/data/settings'
import { siteSettings } from '@/data/static/site-settings'
import { useEffect, useState } from 'react'

type Props = {
  isDark: boolean
}
export default function Logo({
  isDark
}: Props) {

  const { lightLogo, darkLogo } = siteSettings
  const { settings, refetch }: any = useSettings()

  const [load, setLoad] = useState(darkLogo)

  useEffect(() => {
    refetch()
    if (isDark) {
      setLoad(settings?.dark_logo?.original)
    } else {
      setLoad(settings?.logo?.original)
    }

  }, [isDark, refetch])

  return (
    <>

      <AnchorLink href={`/${routes.home}`} className="logo-link" >
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
