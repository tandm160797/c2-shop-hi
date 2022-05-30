import LocalStorage from '$constants/LocalStorage'
import themes from '$constants/themes'
import localStoragePlus from '$utils/localStoragePlus'
import PropTypes from 'prop-types'
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'

const initialSettings = {
	compact: true,
	theme: themes.light,
	roundedCorners: true,
	responsiveFontSizes: true
}

const appSettingsStorage = localStoragePlus.createStorage(LocalStorage.AppSettings.key)

const restoreSettings = () => {
	let settings = null

	try {
		const appSettingsStorageData = appSettingsStorage.getItem(LocalStorage.AppSettings.settings)

		if (appSettingsStorageData) {
			settings = appSettingsStorageData
		} else {
			settings = {
				compact: true,
				responsiveFontSizes: true,
				roundedCorners: true,
				theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? themes.dark : themes.light
			}
		}
	} catch (error) {
		console.error(error)
	}

	return settings
}

const storeSettings = settings => {
	appSettingsStorage.setItem(LocalStorage.AppSettings.settings, settings)
}

const SettingsContext = createContext({
	settings: initialSettings,
	saveSettings: () => {}
})

export const SettingsProvider = ({ children }) => {
	const [settings, setSettings] = useState(initialSettings)

	const saveSettings = useCallback(updatedSettings => {
		setSettings(updatedSettings)
		storeSettings(updatedSettings)
	}, [])

	const value = useMemo(() => ({ settings, saveSettings }), [settings, saveSettings])

	useEffect(() => {
		const restoredSettings = restoreSettings()

		if (restoredSettings) {
			setSettings(restoredSettings)
		}
	}, [])

	return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

SettingsProvider.propTypes = {
	children: PropTypes.node
}

SettingsProvider.defaultProps = {
	children: null
}

export default SettingsContext
