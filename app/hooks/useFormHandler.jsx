import { useEffect, useState } from "react"

const useFormHandler = (initialFormData, submitUrl, requiredFields) => {

  const [formData, setFormData] = useState(initialFormData)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  useEffect(() => {
    setBtnDisabled(requiredFields.some(field => !formData[field]))
  }, [formData, requiredFields])

  const handleSubmit = async (e) => {
    e.preventDefault

    const res = await fetch(submitUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      setSuccess(true);
      setError(false);
      setFormData(initialFormData);
      setTimeout(() => setSuccess(false), 7000);
    } else {
      setError(true);
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    btnDisabled,
    error,
    success,
  }
}

export default useFormHandler
