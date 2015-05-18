
module.exports = {
	csv : {
		filename : 'us-500.csv',
		fieldOrder : [
			'FirstName',
			'LastName',
			'CompanyName',
			'Address',
			'City',
			'County',
			'State',
			'ZipCode',
			'Phone',
			'PhoneAlt',
			'Email',
			'Web'
		]
	},
	model : {
	    namespace: "csvbridge",
	    entityTypes: {
	        "LeadType" : {
	            "_id"  : { "type": "Edm.String", key: true },
	            "FirstName" : { "type": "Edm.String" },
	            "LastName" : { "type": "Edm.String" },
	            "CompanyName" : { "type": "Edm.String" },
	            "Address" : { "type": "Edm.String" },
	            "City" : { "type": "Edm.String" },
	            "County" : { "type": "Edm.String" },
	            "State" : { "type": "Edm.String" },
	            "ZipCode" : { "type": "Edm.String" },
	            "Phone" : { "type": "Edm.String" },
	            "PhoneAlt" : { "type": "Edm.String" },
	            "Email" : { "type": "Edm.String" },
	            "Web" : { "type": "Edm.String" }
	        }
	    },
	    entitySets: {
	        "leads": {
	            entityType: "csvbridge.LeadType"
	        }
	    }
	}	
}