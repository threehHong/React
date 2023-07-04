// 액션 생성
const INCREASE = "COUNTER/INCREASE"
const DECREASE = "COUNTER/DECREASE"

// 액션 생성 함수
export const increaseNum = () => {
    return { type: INCREASE };
};

export const decreaseNum = () => {
    return { type: DECREASE };
};

export default function counterReducer(state=0, action) {
    switch(action.type) {
        case INCREASE: return state + 1;
        case DECREASE: return state - 1;
        default: return state;
    }
}