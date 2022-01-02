
const SET_NAME = "section/SET_NAME"
const SET_AGE = "section/SET_AGE"
const INCREMENT_SCORES = "section/INCREMENT_SCORES"




export const setName = (name) => (
    {
        type:SET_NAME,
        payload:name
    }
)

export const setAge = (age) => (
    {
        type:SET_AGE,
        payload:age
    }
)

export const incrementScores = (scores) => (
    {
        type:INCREMENT_SCORES,
        payload:scores
    }
)

const initialState = {
    name: "",
    age:0,
    scores:0,
}

const reducer = immer.produce((state, action) => {
    switch (action.type) {
        
        case SET_NAME:
            state.name=action.payload;
            break;

        case SET_AGE:
            state.age=action.payload;
            break;

        case INCREMENT_SCORES:
            state.scores = state.scores+action.payload;
            break;
    }
  }, initialState);

export default reducer;