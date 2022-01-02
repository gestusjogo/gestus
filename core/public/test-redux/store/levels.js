const COMPLETE_LEVEL = "section/COMPLETE_LEVEL"

export const completeLevel = (level_id) => (
    {
        type:COMPLETE_LEVEL,
        payload:level_id
    }
)


const initialState = [
  {
    id: 1,
    name: 'Design',
    complete: true,
  },
  {
    id: 2,
    name: 'HTML',
    complete: false,
  },
  {
    id: 3,
    name: 'CSS',
    complete: false,
  },
  {
    id: 4,
    name: 'JavaScript',
    complete: false,
  },
];

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETE_LEVEL:
      const index = state.findIndex((x) => x.id === action.payload);
      if (!isNaN(index) && state[index]) state[index].complete = true;
      break;
  }
}, initialState);

export default reducer;
