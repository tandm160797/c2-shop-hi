import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { languageReducer } from './slices/languageSlice'

const reducer = combineReducers({
	language: languageReducer
})

const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})

export const persistor = persistStore(store)
export default store
