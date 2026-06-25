import { defineStore } from 'pinia'

export const resetPsStore = defineStore('reset', () => {
  const verifyIdentidyData = ref([])
  const verifyIdentidyFn = (data) => {
    console.log(data)
    verifyIdentidyData.value = data
  }
  return { verifyIdentidyFn, verifyIdentidyData }
})
