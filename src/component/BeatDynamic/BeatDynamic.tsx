interface IInput {
    width?: number,
    height?: number,
    color?: string
}
const BeatDynamic = (prop: IInput) => {

    let { width, color, height } = prop;


    color = color ? color : "lightblue"
    width = width ? width : 128
    height = height ? height : 128
    return (
        <div className="BeatDynamic" style={{ width: `${width}px`, height: `${height}px` }}>
            <div className="circle"><div className="animate d1" style={{ background: color }}></div></div>
            <div className="circle"><div className="animate d2" style={{ background: color }}></div></div>
            <div className="circle"><div className="animate d3" style={{ background: color }}></div></div>
            <div className="circle"><div className="animate d4" style={{ background: color }}></div></div>
        </div>
    )
}





export default BeatDynamic;