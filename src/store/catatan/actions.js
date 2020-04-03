/*
export function someAction (context) {
}
*/

const createCatatan = ({ commit, state }, payload) => {
  if (state.catatan === 0) {
    commit("createCatatan", payload);
  } else {
    commit("addCatatan", payload);
  }
};

const updateCatatan = ({ commit }, payload) => {
  commit("updateCatatan", payload);
};

const deleteCatatan = ({ commit }, index) => {
  commit("deleteCatatan", index);
};

export { createCatatan, updateCatatan, deleteCatatan };
