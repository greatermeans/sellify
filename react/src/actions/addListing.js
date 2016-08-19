import $ from 'jquery'

const addListing = (listingData, image)=>{
	const URL = 'http://localhost:3000/api/v1/listings'
	var listing = JSON.stringify(listingData)
	image.append("listing", listing)

	var request = $.ajax({
  		url: URL,
  		type:"POST",
			contentType: false,
  		data: image,  
  		dataType:"json",
			processData: false
  })

	return {
		type: 'ADD_LISTING',
		payload: request
	}

}

export default addListing
