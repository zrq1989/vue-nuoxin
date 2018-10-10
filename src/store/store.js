export let state = {
    carData: [],
    index: ""
}

export let mutations = {
    addcartData(state,data) {
        // 变更状态
        state.carData = data
        console.log(state.carData)
    },
    addIndex (state, index) {
        state.index = index
    }
}

export let getters = {

}

export let actions = {
    addData(context,data) {
        context.commit('addcartData',data)
    },
    addIndex (context,indexs) {
        context.commit("addIndex", indexs)
    }
}
