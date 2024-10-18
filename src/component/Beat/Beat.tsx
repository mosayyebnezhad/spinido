interface IInput {
    width?: number,
    height?: number,
    color?: string
}
const Beat = (prop: IInput) => {

    let { width, color, height } = prop;


    color = color ? color : "lightblue"
    width = width ? width : 128
    height = height ? height : 128
    return (
        <div className="Beat" style={{ width: `${width}px`, height: `${height}px` }}>
            <div className="circle"><div className="animate" style={{ background: color }}></div></div>
            <div className="circle"><div className="animate" style={{ background: color }}></div></div>
            <div className="circle"><div className="animate" style={{ background: color }}></div></div>
        </div>
    )
}





export default Beat;