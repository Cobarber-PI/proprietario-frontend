import { defineStore } from 'pinia'
import { ref } from 'vue'
import BarbeariaService from '@/services/barbearia'

export const useBarbeariaStore = defineStore('barbearia', () => {
    const state = {
        barbearias: ref([]),
        currentBarbearia: ref(null),
        checked: ref(false),
        meta: ref({}),
        search: ref(''),
    }

    async function fetchAll(page = 1, perPage = 999) {
        const response = await BarbeariaService.fetchAll(page, perPage)
        state.barbearias.value = response.data.data
        state.meta.value = response.data.meta
        state.checked.value = true
        return response
    }

    async function fetchById(id) {
        const response = await BarbeariaService.fetchById(id)
        state.currentBarbearia.value = response.data
        return response
    }

    async function create(data) {
        const response = await BarbeariaService.create(data)
        await fetchAll()
        return response
    }

    async function update(data) {
        const response = await BarbeariaService.update(data)
        await fetchAll()
        return response
    }

    async function remove(id) {
        const response = await BarbeariaService.delete(id)
        await fetchAll()
        return response
    }

    return {
        state,
        fetchAll,
        fetchById,
        create,
        update,
        remove,
    }
})

