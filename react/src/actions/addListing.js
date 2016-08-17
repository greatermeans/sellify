import $ from 'jquery'
import {browserHistory} from 'react-router'

const addListing = (listingData)=>{
	const URL = 'http://localhost:3000/api/v1/listings'
	var request = $.ajax({
  		url: URL,
  		type:"POST",
  		data: JSON.stringify({listing: listingData}),
  		contentType: "application/json; charset=utf-8",
  		dataType:"json"
  })

	return {
		type: 'ADD_LISTING',
		payload: request
	}

}

export default addListing
