import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { useIsoLayoutEffect } from '@carpenjk/hooks'

const ScrollLock = ({ scrollNode, reserveScrollBarGap }) => {
  const options = {
    reserveScrollBarGap
  }
  function clear () {
    clearAllBodyScrollLocks()
  }
  useIsoLayoutEffect(() => {
    disableBodyScroll(scrollNode, options)
    return clear
  }, [])
  return null
}

export default ScrollLock
