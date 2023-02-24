import {createSlice} from '@reduxjs/toolkit'
import * as database from '../database/vocabulary'

export const vocabularySlice = createSlice({
  name: 'vocabulary',

  initialState: {
    vocabulary: database.vocabulary,
    selectedVocabulary: null,
    quizList: null,
    answerList: null
  },

  reducers: {
    handleSelectVocabulary: (state, action) => {
      let selectedArray = state.vocabulary.filter(list => list.category === action.payload)

      let englishVocabulary = selectedArray.map(list => list.english)
      let koreanVocabulary = selectedArray.map(list => list.korean)
      let quizList = [...englishVocabulary, ...koreanVocabulary].sort(() => Math.random() - 0.5)
      // let answerList = quizList

      state.selectedVocabulary = selectedArray.sort(() => Math.random() - 0.5)
      state.quizList = quizList

      console.log(quizList)
    },
    handleCreateVocabulary: (state, action) => {
      state.vocabulary.push(action.payload)
    },
    handleDeleteVocabulary: (state, action) => {
      state.vocabulary = state.vocabulary.filter(list => list.english !== action.payload)
    }
  }
})

export const {handleSelectVocabulary, handleCreateVocabulary, handleDeleteVocabulary} = vocabularySlice.actions
export default vocabularySlice.reducer