import { Database, aql } from "arangojs";


const db = new Database();

function ArangoDB(){
	
	var db;

	this.init = async function(){

		 db = new Database({
		  url: "http://localhost:8529"
		});

		 db.useDatabase("testdb");
		 return await db.login("testuser", "admin123")
			
	}

	this.getCursor = async function(query, resolve){
		try{
			const cursor = await db.query({
			  query: query,
			  bindVars: {}
			});
		    const result = await cursor.next();
		    resolve(result)
		}catch(err){
			resolve(err)
		}
	}

}


export default new ArangoDB