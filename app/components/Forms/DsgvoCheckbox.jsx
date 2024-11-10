const DsgvoCheckbox = ({ name, textColor, dsgvo, handleChange }) => {
  return (
    <div className="flex align-top cursor-pointer md:mx-3">
      <div className="mr-4">
        <input
            id={name}
            type="checkbox"
            name={name}
            required
            checked={dsgvo}
            onChange={handleChange}
            className= {`${dsgvo ? 'checkbox-icon' : ''}
              w-5 h-5 mt-[2px]
              appearance-none bg-white
              border-2 border-ss-peach rounded focus:ring-ss-bordeaux focus:ring-2
              checked:bg-ss-bordeaux checked:border-ss-peach
            `}
          />
      </div>
      <label htmlFor={name} className="w-fit md:w-[90%]">
        <p className={`text-xs italic ${textColor}`}>
          Ich erkläre mich einverstanden, dass meine oben angegebenen personenbezogenen Daten genutzt werden zur Korrespondenz von Anfragen. Die Pflichtangaben dienen der Zuordnung und der Beantwortung Deines Anliegen. 
          Dies entspricht unserem berechtigten Interesse (Art. 6 Abs. 1 lit f DSGVO).
        </p>
      </label>
    </div>
  )
}
export default DsgvoCheckbox
