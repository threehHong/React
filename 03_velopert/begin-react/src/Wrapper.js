/* 
props.children
컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐,
props.children을 조회하면 된다.
(1장 5.props를 통해 컴포넌트에게 값 전달하기)
*/

function Wrapper(props) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Wrapper;