"use client"
import { useState, useEffect } from "react"
import useFormHandler from "@/app/hooks/useFormHandler"
import DsgvoCheckbox from "./DsgvoCheckbox"

const MessageForm = () => {
  const [isClient, setIsClient] = useState(false)

  const { formData, handleChange, handleSubmit, btnDisabled, error, success } =
  useFormHandler(
    {
      name: '',
      email: '',
      phone: '',
      message: '',
      msgdsgvo: false,
    },
    "/api/send-message"
  )
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const { name, email, phone, message, msgdsgvo } = formData

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 text-ss-p-med">
        <div className="w-full lg:flex lg:justify-between">
          <div className="w-full lg:w-[46%]">
            <label htmlFor="name" className="inline-block w-full py-0.5 px-2 rounded-t text-ss-p-smbold text-ss-bordeaux bg-ss-champagne">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full rounded-b p-2 disabled:bg-slate-400 disabled:opacity-30 border border-ss-champagne"
              required
              disabled={success}
              placeholder="(erforderlich)"
            />
          </div>
          <div className="w-full lg:w-[46%] mt-4 lg:mt-0">
            <label htmlFor="phone" className="inline-block w-full py-0.5 px-2 rounded-t text-ss-p-smbold text-ss-bordeaux bg-ss-champagne">
              Telefonnummer:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              className="w-full rounded-b p-2 disabled:bg-slate-400 disabled:opacity-30 border border-ss-champagne"
              disabled={success}
              placeholder="(optional)"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="email" className="inline-block w-full py-0.5 px-2 rounded-t text-ss-p-smbold text-ss-bordeaux bg-ss-champagne">
            E-Mail-Adresse:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full rounded-b p-2 disabled:bg-slate-400 disabled:opacity-30 border border-ss-champagne"
            required
            disabled={success}
            placeholder="(erforderlich)"
          />
        </div>
        <div className="w-full">
          <label htmlFor="message" className="inline-block w-full py-0.5 px-2 rounded-t text-ss-p-smbold text-ss-bordeaux bg-ss-champagne">
            Deine Nachricht:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            className="w-full rounded-b p-2 disabled:bg-slate-400 disabled:opacity-30 border border-ss-champagne"
            rows={4}
            required
            disabled={success}
            placeholder="(erforderlich)"
          ></textarea>
        </div>
        <div className="w-full">
          <DsgvoCheckbox
            name="msgdsgvo"
            dsgvo={msgdsgvo}
            handleChange={handleChange}
            textColor="text-ss-eggshell"
          />
        </div>

        {error && (
          <div className="flex bg-ss-error text-white rounded p-4 font-bold">
            <span className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </span>
            <span>Leider ist etwas schief gelaufen.</span>
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={btnDisabled}
            className="bg-ss-green hover:bg-ss-green-mute block rounded min-w-52 w-fit py-1.5 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex justify-between text-ss-p-smbold text-ss-black">
              <span>
                Senden
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </form>

      {success && (
        <div className="flex flex-col items-center bg-ss-success text-white rounded p-4 mt-6 font-bold">
          <span className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </span>
          <span className="text-center">Nachricht wurde verschickt.<br/> Ich werde mich umgehend bei Dir melden.</span>
        </div>
      )}

    </>
  )
}
export default MessageForm
