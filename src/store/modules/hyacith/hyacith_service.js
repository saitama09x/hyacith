import model from '../../api/api_model.js'
import ArangoDB from '../../api/api_model2.js'

const mutation = {
	token(state, token){
		state.token = token
	},
	homeContent(state, content){
		state.homeContent = content
	},
	homeCarousel(state, content){
		state.carousel = content
	}
}


const actions = {
	getDb({commit}){
		 return ArangoDB.init().then((token) => {
		 	commit('token', token)
		 });
	},
	initHomeContent({ dispatch, commit }){
		return dispatch('getDb').then((res) => {
			ArangoDB.getCursor("return document('home_template/sliderContent')", (res) => {
				if(res){

					commit('homeContent', res.value)
				}
			})

			ArangoDB.getCursor("return document('home_template/carousel')", (res) => {
				if(res){
					commit('homeCarousel', res.value)
				}
			})

		})
	},
	getHomeContent({commit, state}){
		var query = {
			query : 'return document("home_template/sliderContent")'
		}

		model.getCursor(query, function(res){
			if(res){
				commit('homeContent', res[0].value)
			}
		})

	},

	getHomeCarousel({ commit, state }){
		var query = {
			query : 'return document("home_template/carousel")'
		}

		model.getCursor(query, function(res){
			if(res){
				commit('homeCarousel', res[0].value)
			}
		})
	}

}

export default {
  actions,
  mutation
}
