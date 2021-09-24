const H1 = (props) => {
    const { children, style, classNames } = props
    return (
        <h1 style={style} className={classNames}>{ children }</h1>
    )
}

export default H1;