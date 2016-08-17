import $ from 'jquery'

const viewListing = (listingData)=>{
	const URL = 'http://localhost:3000/api/v1/listing/{id}'
	var request = $.ajax({
  		url: URL,
  		type:"GET",
  		data: JSON.stringify({listing: listingData}),
  		contentType: "application/json; charset=utf-8",
  		dataType:"json"
  })

	return {
		type: 'ADD_LISTING',
		payload: request
	}

}

export default viewListing
