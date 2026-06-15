import { useState } from 'react';
import './Quiz04.css';

function Quiz04() {
    let title = 'React Study';

    let newsTitle = [ '오늘의뉴스', '어제의뉴스', '내일의 뉴스' ];
    let [ likeList, setLikeList ] = useState([ 0, 0, 0 ]);

    return (
        <div>
            <div className="black-nav">
                <h3>Blog Header</h3>
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>
            {
                newsTitle.map((news,index)=>{
                    return (
                        <div className='post-list' key={index}>
                            <h4>{news} <span onClick={() => {
                                let temp = [ ...likeList ];
                                temp[ index ]++;
                                setLikeList(temp);
                            }}>♥</span> {likeList[ index ]}</h4>
                            <p>내용 무</p>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default Quiz04;