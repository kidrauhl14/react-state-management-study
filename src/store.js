import {configureStore} from "@reduxjs/toolkit";

// counter.js에서 export default한 counterSlice.reducer
import counterReducer from "./redux/counter";

// reducer가 포함된 객체를 configureStore에 전달하면, redux store가 만들어진다.
// redux store
export const store = configureStore({
    reducer: {
        // add counterReducer
        counter: counterReducer // 이제 counter에 대해 increment/decrement 사용 가능!
    },
})

// 이제 react에 적용하기 위해, index.js로 이동!
