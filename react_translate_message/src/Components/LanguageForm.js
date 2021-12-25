import React from 'react'

function LanguageForm({optionLanguages, setLanguage}) {

    

    const handleLanguage = (e) => {

        setLanguage(e.target.value)

    }

    return (
        <div>
            <form action="">
                <fieldset>
                    <legend>My Homepage</legend>
                    <label for="language">Select a language</label>
                    <select onChange = { handleLanguage }>
                        <option value={ optionLanguages.german }>{ optionLanguages.german }</option>
                        <option value={ optionLanguages.english }>{ optionLanguages.english }</option>
                    </select>

                </fieldset>
            </form>
        </div>
    )
}

export default LanguageForm
