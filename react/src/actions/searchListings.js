const searchListings = (listingData)=>{
    return {
        type: 'SEARCH',
        payload: listingData
    }

}

export default searchListings
