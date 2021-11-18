import defaultSettings from '@/settings'

const title = defaultSettings.title || '苏垦'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
