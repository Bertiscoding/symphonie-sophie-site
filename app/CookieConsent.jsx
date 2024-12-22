"use client"
import { useState } from "react"
import { useCookies } from "./context/CookieContext"
import Image from "next/image"
import Link from "next/link"
import Checkbox from "./components/Checkbox"

const CoockieConsent = () => {
  const { 
    isConsentGiven,
    cookieConsent,
    setCookieConsent,
    acceptAllCookies,
    acceptSelectCookies,
  } = useCookies()

  // const [showSettings, setShowSettings] = useState(false)
  const [showSettings, setShowSettings] = useState(true)

  const handleOpenSettingsClick = () => (setShowSettings(!showSettings))

  const handleChange = (e) => {
    const { name, checked } = e.target
    setCookieConsent(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const settingsContainer = () => {
    return (
        <div className="flex flex-col items-center w-full lg:w-3/4">
          <h2 className="text-ss-h2">Set the settings</h2>
          <div className="flex flex-col">
            <div>
              <Checkbox
                name="cksessential"
                labelText="Technisch notwendige Cookies"
                textColor="text-ss-black"
                accepted={false}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Checkbox
                name="cksanalytics"
                labelText="Analytische Cookies"
                textColor="text-ss-black"
                accepted={false}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full lg:w-3/4 flex justify-end">
            <div
              onClick={acceptSelectCookies}
              className="bg-white hover:bg-ss-green-mute flex justify-center text-ss-p-smbold text-ss-green rounded border border-ss-green w-fit min-w-40 py-1.5 px-4 mr-10"
            >
              Einstellungen speichern
            </div>
            <div
              onClick={acceptAllCookies}
              className="bg-ss-green hover:bg-ss-green-mute flex justify-center text-ss-p-smbold text-ss-black rounded  border border-ss-green w-fit min-w-40 py-1.5 px-4"
            >
              Alle akzeptieren
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {!isConsentGiven && (
        <div className="relative">
          <div className="bg-ss-black-mute/50 fixed w-full h-full top-0 left-0 z-[90]">
            <div className="absolute top-0 left-0 w-[100vw] py-10 px-20 bg-ss-seashell z-[100]">
              <div className="flex flex-col items-center">
                <div className="mb-10">
                  <Image src="/images/cookie-icon.svg" alt="" height={50} width={50} />
                </div>
                <p className="w-full lg:w-3/4 mb-10 text-sm">
                  Diese Website verwendet Cookies, um Ihre Nutzererfahrung zu verbessern und unsere Dienste zu optimieren. <br/>
                  Sie können Ihre Einstellungen anpassen oder der Nutzung aller Cookies zustimmen. <br/>
                  Weitere Informationen finden Sie in unserer <Link href="/datenschutz" className="ss-inline-link">Datenschutzerklärung</Link>.
                </p>
              </div>
              { showSettings
              ? settingsContainer()
              : (
                  <div className="flex justify-center">
                    <div className="w-full lg:w-3/4 flex justify-end">
                      <div
                        onClick={handleOpenSettingsClick}
                        className="bg-white hover:bg-ss-green-mute hover:cursor-pointer flex justify-center text-ss-p-smbold text-ss-green rounded border border-ss-green w-fit min-w-40 py-1.5 px-4 mr-10"
                      >
                        Einstellungen anpassen
                      </div>
                      <div
                        onClick={acceptAllCookies}
                        className="bg-ss-green hover:bg-ss-green-mute hover:cursor-pointer flex justify-center text-ss-p-smbold text-ss-black rounded  border border-ss-green w-fit min-w-40 py-1.5 px-4"
                      >
                        Akzeptieren
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default CoockieConsent
