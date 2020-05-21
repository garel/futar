export const state = () => ({
    list: []
})

export const mutations = {
    add(state, data) {
        let item = {
            name: data.name,
            description: data.description,
            payment: data.payment
        }
        state.list.push(item)
    },
    remove(state,index){
        state.list.splice(index,1)
    }
}
