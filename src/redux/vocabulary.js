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
      let selectedArray = state.vocabulary.filter(vocabulary => vocabulary.category === action.payload)
      state.selectedVocabulary = selectedArray.sort(() => Math.random() - 0.5)
    },
    handleCreateVocabulary: (state, action) => {
    }
  }
})

export const {handleSelectedVocabulary, handleCreateVocabulary} = vocabularySlice.actions
export default vocabularySlice.reducer