export let state = {
    carData: [],
    index: "",
    nn:"",
    ofs: "",
    listindex: '0'
}

export let mutations = {
    addcartData(state,data) {
        // 变更状态
        state.carData = data

    },
    addIndex (state, obj) {
        state.index = obj.index;
        state.nn = obj.n;
    },
    ADD_OFS (state, index) {
        state.nn = index
    },
    ADD_LISTN (state, list) {
        state.listindex = list
    }
}

export let getters = {
    getCart: state=>{
        return state.carData
    }
}

export let actions = {
    addData(context,data) {
        context.commit('addcartData',data)
    },
    addIndex (context,indexs) {
        context.commit("addIndex", indexs)
    },
    addOfs (context,index) {
        context.commit("ADD_OFS", index)
    },
    listn (context, listindex) {
        context.commit("ADD_LISTN",listindex)
    }
}
