



export let getUsersThunk = (page) => (dispatch) => {
    this.props.onloadPage(true);
    getUsers(this.props.pageSize, page)
        .then(data => {
            this.props.setActors(data);
            this.props.onloadPage(false);
        })
}