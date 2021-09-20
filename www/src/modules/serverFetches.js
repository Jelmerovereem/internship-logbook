const post = async ({url, body}) => {
	const response = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}${url}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	})
    
	return response.json();
}

const get = async ({url}) => {
	const response = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}${url}`)
	return response.json()
}

const deleteReq = async ({url, body}) => {
	const response = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}${url}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	})

	return response.json()
}



export { get, post, deleteReq };