import { useRef,forwardRef,useImperativeHandle } from "react"

const ResultModal=forwardRef(function ResultModal({reset,targetTime,remainingtime},ref){
    const dialog=useRef();
    const userLost=remainingtime<=0;
    const ftime=(remainingtime/1000).toFixed(2);
    const score=Math.round((1 - remainingtime/(targetTime*1000))*100);
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        }
    })

    return (<dialog ref={dialog} className="result-modal">
        {userLost && <h2>You Lost!</h2>}
        {!userLost && <h2>You score: {score}</h2>}
        <p>The target time is:<strong>{targetTime}seconds.</strong></p>
        <p>You stopped timer with <strong>{ftime}</strong> seconds left</p>
        <form action="dialog" onSubmit={reset}>
            <button>Close</button>
        </form>
    </dialog>);
})

export default ResultModal;