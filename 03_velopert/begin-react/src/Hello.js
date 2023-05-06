function Hello({color, name, isSpecial}) {
    return (
        <div style={{ color }}> 

            {/* 조건부 렌더링 */}
            {isSpecial ? <b> * </b> : null}
            
            안녕하세요 {name} 
        </div>
    ) 
}

/* 
defaultProps로 기본값 설정
컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면 컴포넌트에 defaultProps 라는 값을 설정하면 됩니다. (1장 5.props를 통해 컴포넌트에게 값 전달하기)
*/

Hello.defaultProps = {
    name: '이름 없음'
}

export default Hello;