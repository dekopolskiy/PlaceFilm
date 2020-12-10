const Category = (props) => {
    return (
        <div>
            <img src= {props.src}
                width='290' height='200' />
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default Category;