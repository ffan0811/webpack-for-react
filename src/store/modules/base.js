const initialState = {
    test: false
}

const base = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST_REDUCER':
            console.log("test");
        default:
            return state;
    }
};

export default base;
