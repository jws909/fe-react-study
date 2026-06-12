import Box from "./Box";


function Props01(){
    
    let arr = ['아침', '점심', '저녁'];
    let detail = ['졸리다', '배부르다', '피곤하다'];

    return (
        <div>
            {/* <Box text={arr[0]} detail={detail[0]}/>
            <Box text={arr[1]} detail={detail[1]}/>
            <Box text={arr[2]} detail={detail[2]}/> */}
            {
                arr.map((item, index)=>{
                    return (
                        <Box text={item} detail={detail[index]}/>
                    )
                })
            }

            {
                //       아침   0       점심    1       저녁    2
                arr.map((item, index)=>{
                    return(
                        
                        <div style={{backgroundColor:'gray'}}>
                            <h1>{item}</h1>
                            <p>{detail[index]}</p>
                        </div>
                        
                    )
                })
            }
        </div>
    );
}

export default Props01;