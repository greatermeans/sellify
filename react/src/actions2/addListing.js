import $ from 'jquery'

const addListing = (listingData, fd)=>{
	const URL = 'http://localhost:3000/api/v1/listings'
	var listing = JSON.stringify(listingData)
	fd.append("listing", listing)

	var request = $.ajax({
  		url: URL,
  		type:"POST",
			contentType: false,
<<<<<<< HEAD:react/src/actions/addListing.js
  		data: image,  
=======
  		data: fd,  //{listing: listing, image: image},
>>>>>>> 7b8802f65b974590dc2cd8efbadec2d8e9f36372:react/src/actions2/addListing.js
  		dataType:"json",
			processData: false
  })

	return {
		type: 'ADD_LISTING',
		payload: request
	}

}

export default addListing
