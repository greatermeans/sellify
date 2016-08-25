import $ from 'jquery'

const viewListing = (listingData)=>{
<<<<<<< HEAD:react/src/actions/viewListing.js
=======
	const URL = 'http://localhost:3000/api/v1/listing/{id}'
	const request = $.ajax({
  		url: URL,
  		type:"GET",
  		data: JSON.stringify({listing: listingData}),
  		contentType: "application/json; charset=utf-8",
  		dataType:"json"
  })
	
>>>>>>> 7b8802f65b974590dc2cd8efbadec2d8e9f36372:react/src/actions2/viewListing.js
	return {
		type: 'VIEW_LISTING',
		payload: listingData
	}
}

export default viewListing
