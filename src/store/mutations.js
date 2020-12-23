const mutations = {
    IS_COLLAPSE(state, bool) {
        state.isCollapse = bool;
    },
    GET_LANGUAGE(state, lang) {
        state.lang =  lang
    },
    SET_BREAD(state, breadList)  {
        state.breadList = breadList
    }  
}

export default mutations