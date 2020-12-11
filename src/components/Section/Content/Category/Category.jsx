const Category = (props) => {
    return (
        <div>
            <img src= {props.src}
                width='180' height='220' />
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default Category;