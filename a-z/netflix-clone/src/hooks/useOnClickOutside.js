import { useEffect } from 'react'

export default function useOnClickOutside(ref, handler) {
  useEffect(
        () => {

            const listener = (event) => {
                /* console.log(ref.current); */
                
                // 모달 내부 클릭시에는 닫히지 않게하는 코드
                if(!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };

            document.addEventListener("mousedown", listener)
            document.addEventListener("touochstart", listener)
            
            return () => {
                document.addEventListener("mousedown", listener)
                document.addEventListener("touochstart", listener)
            };

        }, 
        [ref, handler]
   );
}
