import axios from 'axios'


const instance = axios.create({
  baseURL: 'http://localhost:8529/_db/testdb/',
  timeout: 1000,
  headers: {
        'Content-type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcmFuZ29kYiIsInNlcnZlcl9pZCI6ImZvbyJ9.sFvwWDA-AO7E43KSNScDe-WjHuCCM2snH-HMtFSbreQ'
  }
});


const getCursor = (query, resolve, error) => {

	instance.post('_api/cursor', query).then(function (response) {
		if(response.status == 201){
			var result = response.data.result
			if(result.length > 0){
				resolve(result)
				return	
			}
			resolve(false)
		}
   	}).catch(function (error) {
    	error(error);
  	})

}

const model = {
	getCursor
}

export default model