// import { baseApi } from '@utilities/axios'

export default () => ({
  metaModule: true,
  name: 'app',

  metaStates: {
    mode: 'app-3d',
    showModal: false
  },

  metaMutations: {
    SET_MODE: (state, { payload }) => {
      state.mode = payload
    },

    SET_SHOW_MODAL: (state, { payload }) => {
      state.showModal = payload
    }
  },

  metaGetters: {

  },

  metaActions: {

  }
})