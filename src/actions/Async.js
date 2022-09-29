import axios from "axios"

//ASYNC ACTION CREATOR
export const ASYNC = () => {
    return (
        (dispatch) => {
            axios.get("https://catalog.roproxy.com/v1/search/items/details?Category=0&SortType=3")
                .then((response) => {
                    //ADD DATA FROM API TO REDUX STORE
                    dispatch({ type: "FETCH_SUCCESS", payload: response.data.data })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    )
}