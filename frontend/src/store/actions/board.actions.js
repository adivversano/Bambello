import { toyService } from '../../services/toy.service.js'

export function loadToys(filterBy = {
    keyword: '',
    ctg: '',
    type: '',
    sortBy: ''
}) {
    return async dispatch => {
        try {
            const toys = await toyService.query(filterBy)
            dispatch({ type: 'SET_TOYS', toys })

        } catch (err) {
            console.log('ToysActions: err in loadToys', err)
        }
    }
}

export function onSaveToy(toy) {
    return async dispatch => {
        try {
            const savedToy = await toyService.save(toy)
            console.log('TOY IN ACTION',savedToy)
            dispatch({ type: toy._id ? 'UPDATE_TOY' : 'ADD_TOY', toy: savedToy })
        } catch (err) {
            console.log(`ToysActions: err in ${toy._id ? 'update toy' : 'add toy'}${err}`)
        }
    }
}

export function onRemoveToy(toyId) {
    return async dispatch => {
        try {
            await toyService.remove(toyId)
            dispatch({ type: 'REMOVE_TOY', toyId })
        } catch (err) {
            console.log('ToysActions: err in removeToy', err)
        }
    }
}







