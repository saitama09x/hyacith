import model from '../../api/api_model.js'

const mutation = {

	homeContent(state, content){
		state.homeContent = content
	},
	homeCarousel(state, content){
		state.carousel = content
	}
}


const actions = {

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
