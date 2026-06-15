import ListItem from './ListItem';
import './Quiz03.css';

function Quiz03() {

    let numberArr = ['하나','둘','셋','넷','다섯'];

    return (
        <div className="App">
            {
                numberArr.map((number,index)=>{
                    return (
                        <ListItem num={number} key={index}/>
                    )
                })
            }
        </div>
    );
}

export default Quiz03;