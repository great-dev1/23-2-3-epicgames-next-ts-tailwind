import { useContext } from 'react'
import SiteContext from '@context/siteContext'

export const useSite = () => useContext(SiteContext)