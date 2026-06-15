
function Modal(props){  // props {title, likeCount}
    return (
        <div className="modal" style={{backgroundColor:props.bgColor}}>
            <h3>{props.title} ♥ {props.likeCount}</h3>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
                // props.title = '긴급뉴스';
                let temp = [...props.news];
                temp[1] = '긴급뉴스';
                props.setNews(temp);
            }}>제목긴급변경</button>
        </div>
    );
}

export default Modal;