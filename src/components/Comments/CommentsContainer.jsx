import { connect } from "react-redux"
import Comments from "./Comments"




const mapStateToProps = (state) => {
    return {
        pageDialogs : state.pageDialogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const CommentsContainer = connect(mapStateToProps)(Comments);


export default CommentsContainer;