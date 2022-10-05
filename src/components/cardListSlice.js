import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk("cardList/getUser", async () => {
  return fetch("https://randomuser.me/api/").then((res) => res.json()).then((data)=> data.results[0]);
},[]);

const cardListSlice = createSlice({
  name: "cardList",
  initialState: {
    cards: [{
      cardNumber: "1234 1234 1234 1234",
      cardHolder: "",
      month: "11",
      year: "23",
      ccv: "123",
      vendor: "mastercard",
      active: true,
      id: 1
    },
  ],
  latestId: 1,
  status: ""
  },
  reducers: {
    addNewCard: (state, action) => {
      state.cards.push(action.payload)
      state.latestId += 1;

    },
    changeActive: (state, action) => {
      state.cards.map((card) => {if (card.id === action.payload){card.active = true;} else{card.active = false;} });
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload)
    }

  },
  extraReducers: {
    [getUsers.fulfilled]: (state,action) => {
      const { first,last } = action.payload.name;
      state.cards.forEach(card => {
        card.cardHolder = `${first.toUpperCase()} ${last.toUpperCase()}`;
      });
    },
    [getUsers.pending]: (state,action) =>{
      state.status = "Loading..."
    },
    [getUsers.rejected]: (state,action) => {
      state.status = "Failed"
    }
  }
})

export const { addNewCard, changeActive, deleteCard } = cardListSlice.actions;

export default cardListSlice.reducer;