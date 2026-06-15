
function ListItem({num}){
    return (
        <div className='textItem'>
            <p className='title'>제목 : {num}</p>
            <p>내용 : 내용{num}</p>
        </div>
    );
}

export default ListItem;