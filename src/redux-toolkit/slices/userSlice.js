import { createSlice, nanoid } from "@reduxjs/toolkit";

const userList = [
  {
    id: 1,
    name: "Khes Adderley",
    email: "khesadderley@gmail.com",
    number: 1234567890,
  },
  {
    id: 2,
    name: "Frances Curry",
    email: "francescurry@gmail.com",
    number: 234456567,
  },
];

const initialState = {
  users: userList,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // addUser: (state, action) => {
    //   const user = {
    //     id: nanoid(),
    //     text: action.payload,
    //   };
    //   state.users.push(user);
    // },
  },
});

export default userSlice.reducer;
