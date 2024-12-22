"use client"
import { createContext, useContext, useEffect, useState, useMemo } from "react"
import CookieConsent from "../CookieConsent"

const CookieContext = createContext()

export const CookieProvider = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState({
    ESSENTIAL: true,
    ANALYTICS: false,
  })
  const [isBannerVisible, setIsBannerVisible] = useState(false)
  const [isConsentGiven, setIsConsentGiven] = useState(null)

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent')
    if(storedConsent !== null) {
      setCookieConsent(JSON.parse(storedConsent))
      setIsConsentGiven(true)
    } else {
      setIsBannerVisible(true)
    }
  }, [])

  useEffect(() => {
    if (cookieConsent.ESSENTIAL) {
      setCookieConsent({
        ...cookieConsent,
        ESSENTIAL: true,
      })
      localStorage.setItem('ESSENTIAL', JSON.stringify(true))
    }
    if (cookieConsent.ANALYTICS) {
      setCookieConsent({
        ...cookieConsent,
        ANALYTICS: true,
      })
      localStorage.setItem('ANALYTICS', JSON.stringify(true))
    }
  }, [cookieConsent])

  const acceptAllCookies = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(true))
    setCookieConsent({
      ...cookieConsent,
      ESSENTIAL: true,
      ANALYTICS: true,
    })
    setIsBannerVisible(false)
    isConsentGiven(true)
  }
  const acceptSelectCookies = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(false))
    setCookieConsent(false)
    setIsBannerVisible(false)
    isConsentGiven(true)
  }

  const providerValue = useMemo(() => ({
    isConsentGiven,
    cookieConsent,
    setCookieConsent,
    acceptAllCookies,
    acceptSelectCookies,
  }), [cookieConsent, isConsentGiven])

  return (
    <CookieContext.Provider value={{ providerValue }}>
      { children }
      { isBannerVisible && <CookieConsent /> }
    </CookieContext.Provider>
  )
}

export const useCookies = () => useContext(CookieContext)
