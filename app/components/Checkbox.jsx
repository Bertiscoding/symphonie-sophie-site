const Checkbox = ({ name, labelText, labelTextClasses, accepted, handleChange, disabled, required }) => {
  return (
    <div className="flex align-top cursor-pointer md:mx-3">
      <div className="mr-4">
        <input
            id={name}
            type="checkbox"
            name={name}
            required={required}
            disabled={disabled}
            checked={accepted}
            onChange={handleChange}
            className= {`${accepted ? 'checkbox-icon' : ''}
              w-5 h-5 mt-[2px]
              appearance-none bg-white
              border-2 border-ss-peach rounded focus:ring-ss-bordeaux focus:ring-2
              checked:bg-ss-bordeaux checked:border-ss-peach
            `}
          />
      </div>
      <label htmlFor={name} className="w-fit md:w-[90%]">
        <p className={labelTextClasses}>{labelText}</p>
      </label>
    </div>
  )
}
export default Checkbox
