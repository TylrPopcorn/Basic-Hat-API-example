const initialState = {
    Assets: [
        {
            name: "LOADING CONTENT",
            id: "000001",
        },
    ],
}


export const REDUCER = (state = initialState, action) => {
    // console.log(action, "ACITONSS")
    switch (action.type) {
        case "FETCH_SUCCESS":
            return ({
                ...state,
                Assets: action.payload,
            })

            defualt:
            return state;
    }

    return initialState
}