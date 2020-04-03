/*
export function someMutation (state) {
}
*/

import Vue from "vue";

const createCatatan = (state, payload) => {
  state.catatan = payload;
};

const addCatatan = (state, payload) => {
  state.catatan.push(payload);
};

const updateCatatan = (state, payload) => {
  Object.assign(state.catatan[payload.index], payload.updates);
};

const deleteCatatan = (state, index) => {
  Vue.delete(state.catatan, index);
};

export { createCatatan, addCatatan, updateCatatan, deleteCatatan };
