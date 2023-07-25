import Image from '@/components/ui/image'
import { useSettings } from '@/data/settings'
import { siteSettings } from '@/data/static/site-settings'
import Link from 'next/link'
import { useState } from 'react'


export default function Logo() {

  const { lightLogo, darkLogo } = siteSettings
  const { settings, refetch }: any = useSettings()

  const [load, setLoad] = useState(lightLogo)

  return (
    <>

      <Link href={`/`} className="logo-link" >
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
      </Link>

    </>
  )
}
