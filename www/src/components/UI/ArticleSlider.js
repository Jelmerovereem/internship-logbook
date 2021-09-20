const wrapperStyle = {
    flex: 1,
    display: "flex",
    overflowX: "auto",
    width: "700px",
    margin: "200px auto 0"
}

const containerStyle = {
    display: "flex",
}

const ArticleSlider = (props) => {
    const {children} = props;

    return (
        <div style={wrapperStyle}>
            <div style={containerStyle}>
                {children}
            </div>
        </div>
    )
}

export default ArticleSlider;