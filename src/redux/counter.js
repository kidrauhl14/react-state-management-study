// createSlice에서는 액션이 디스패치되었을 때의 동작을
// 'switch'가 아닌 'object'형태로 정의할 수 있다.

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

//createSlice로 slice를 만들면, slice에 reducer, actions가 생성되어 외부에서 사용할 수 있게 된다.
export const counterSlice = createSlice({
    // name은 각 action에 대한 prefix
    name: "counter",
    // 초기값
    initialState,
    reducers : {
        increment: (state) => {
            state.value += 1;
        },
         decrement: (state) => {
            state.value -= 1;
         },
    },
});

// dispatch할 때 액션을 전달해 상태를 어떻게 변화시킬지를 결정
export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
