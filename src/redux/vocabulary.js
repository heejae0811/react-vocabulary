import {createSlice} from '@reduxjs/toolkit'
import * as database from '../database/vocabulary'

export const vocabularySlice = createSlice({
    name: 'vocabulary',

    initialState: {
        vocabulary: database.vocabulary,
        selectedVocabulary: null
    },

    reducers: {
        handleSelectVocabulary: (state, action) => {
            let selectedArray = state.vocabulary.filter(list => list.category === action.payload)
            state.selectedVocabulary = selectedArray.sort(() => Math.random() - 0.5)
        },
        handleCreateVocabulary: (state, action) => {
            state.vocabulary.unshift(action.payload)
        },
        handleDeleteVocabulary: (state, action) => {
            state.vocabulary = state.vocabulary.filter(list => list.english !== action.payload)
        }
    }
})

export const {handleSelectVocabulary, handleCreateVocabulary, handleDeleteVocabulary} = vocabularySlice.actions
export default vocabularySlice.reducer