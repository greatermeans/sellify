import $ from 'jquery'

const viewListing = (listingData)=>{
	return {
		type: 'VIEW_LISTING',
		payload: listingData
	}
}

export default viewListing
