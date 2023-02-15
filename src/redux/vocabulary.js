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

    },
    handleCreateVocabulary: (state, action) => {

    }
  }
})

export const {handleSelectedVocabulary, handleCreateVocabulary} = vocabularySlice.actions
export default vocabularySlice.reducer