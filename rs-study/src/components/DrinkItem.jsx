

function DrinkItem({DrinkItem}) {
    return (
        <div style={{'border':'1px solid black'}}>
            <p>이름 : {DrinkItem.name}</p>
            <p>종류 : {DrinkItem.type}</p>
        </div>
    );
}

export default DrinkItem;