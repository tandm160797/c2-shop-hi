import { createSelector } from '@reduxjs/toolkit'

const selectStore = state => state.language

const selectLanguage = createSelector(selectStore, language => language.language)

const languageSelector = {
	selectLanguage
}

export default languageSelector
