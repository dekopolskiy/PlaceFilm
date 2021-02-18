import { connect } from "react-redux";
import Collections from "./Collections";



const mapStateToProps = (state) => {
    return {
        collections: state.collectionRDC.collections
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const CollectionsContainer = connect(mapStateToProps, mapDispatchToProps)(Collections)


export default CollectionsContainer;