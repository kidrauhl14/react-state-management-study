/*사실 여기는 toolkit에 새로 생긴 기능은 아니라서 별로 설명할 것은 없는 것 같다.

useSelector는 redux store의 특정 값을 후킹해오는 함수이고,

dispatch는 리덕스 스토어에 액션을 전달하기 위한 함수이다.
제대로 동작하는지 검사하기 위해 Counter컴포넌트를 만들었고,
얘를 App.js에도 포함시켜 테스트해볼 것이다. */

import { useDispatch, useSelector } from "react-redux";
import {decrement, increment} from "../redux/counter";

const Counter = () => {
    // useSelector를 통해 redux store에서 특정 값을 관리할 수 있다.
    const count = useSelector((state) => state.counter.value);

    // dispatch에 action을 전달하면, 해당 동작이 실행된다.
    const dispatch = useDispatch();

    // increment(1증가) 동작
    const handleIncrement = () => dispatch(increment());

    // decrement(1감소) 동작
    const handleDecrement = () => dispatch(decrement());

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}></button>
            <button onClick={handleDecrement}></button>
        </div>
    );
}

export default Counter;