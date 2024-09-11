"use client"
import { useState } from "react"

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pref_date: '',
    message: '',
  })

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setTimeout(() => {
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 7000);
    
      }, 10000); 
      setError(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        wunschtermin: '',
        message: '',
      });
    } else {
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 text-ss-p-med">
        <div className="w-full md:flex md:justify-between">
          <div className="w-full md:w-[46%]">
            <label htmlFor="name" className="inline-block w-full py-0.5 px-2 rounded-t text-ss-p-smbold text-ss-bordeaux bg-ss-champagne">
              Vorname Nachname:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-b p-2 disabled:bg-slate-400 disabled:opacity-30 border border-ss-champagne"
              required
              disabled={success ? true : ""}
              placeholder="(erforderlich)"
            />
          </div>
          <div className="w-full md:w-[46%]">
            <label htmlFor="email" className="inline-block w-full py-0.5 px-2 rounded-t text-ss-p-smbold text-ss-bordeaux bg-ss-champagne">
              E-Mail-Adresse:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-b p-2 disabled:bg-slate-400 disabled:opacity-30 border border-ss-champagne"
              required
              disabled={success ? true : ""}
              placeholder="(erforderlich)"
            />
          </div>
        </div>

        <div className="w-full md:flex md:justify-between">
          <div className="w-full md:w-[46%]">
            <label htmlFor="phone" className="inline-block w-full py-0.5 px-2 rounded-t text-ss-p-smbold text-ss-bordeaux bg-ss-champagne">
              Telefonnummer:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-b p-2 disabled:bg-slate-400 disabled:opacity-30 border border-ss-champagne"
              disabled={success ? true : ""}
              placeholder="(optional)"
            />
          </div>
          <div className="w-full md:w-[46%]">
            <label htmlFor="wunschtermin" className="inline-block w-full py-0.5 px-2 rounded-t text-ss-p-smbold text-ss-bordeaux bg-ss-champagne">
              Mögliche Wunschtermine:
            </label>
            <input
              type="text"
              id="wunschtermin"
              name="wunschtermin"
              value={formData.wunschtermin}
              onChange={handleChange}
              className="w-full rounded-b p-2 disabled:bg-slate-400 disabled:opacity-30 border border-ss-champagne"
              disabled={success ? true : ""}
              placeholder="(optional)"
            />
        </div>
        </div>
        <div className="w-full">
          <label htmlFor="message" className="inline-block w-full py-0.5 px-2 rounded-t text-ss-p-smbold text-ss-bordeaux bg-ss-champagne">
            Deine Nachricht:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-b p-2 disabled:bg-slate-400 disabled:opacity-30 border border-ss-champagne"
            rows={4}
            required
            disabled={success ? true : ""}
            placeholder="(erforderlich)"
          ></textarea>
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
        <button type="submit" disabled={success ? true : undefined}
                className="bg-ss-green hover:bg-ss-green-mute block rounded min-w-52 w-fit py-1.5 px-4 disabled:opacity-50 disabled:cursor-not-allowed">
          <div className="flex justify-between text-ss-p-smbold text-ss-black">
            <span>
              Abschicken
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>
        </button>
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
export default AppointmentForm
