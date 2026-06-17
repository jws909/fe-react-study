
function ColorBox(props) {
    return (
        <div className='box' style={{ backgroundColor: props.bgColor }}>
            <button onClick={() => {
                props.setFunc(props.list.filter((_, idx) => idx != props.index))
            }}>X</button>
        </div>
    );
}

export default ColorBox;