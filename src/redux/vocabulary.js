import {createSlice} from '@reduxjs/toolkit'
import * as database from '../database/vocabulary'

export const vocabularySlice = createSlice({
  name: 'vocabulary',

  initialState: {
    vocabulary: database.vocabulary,
    selectedVocabulary: null
  },

  reducers: {
    handleSelectedVocabulary: (state, action) => {
      state.selectedVocabulary = state.vocabulary.filter(vocabulary => vocabulary.category === action.payload)
    },
    handleCreateVocabulary: (state, action) => {

    },
    handleQuizAnswer: (state, action) => {

    }
  }
})

export const {handleSelectedVocabulary, handleCreateVocabulary} = vocabularySlice.actions
export default vocabularySlice.reducer