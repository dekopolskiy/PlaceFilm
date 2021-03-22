/*case 'FOLLOW-USER':
    followOrUnfollow(state, action.id, true)
case 'UNFOLLOW-USER':
    followOrUnfollow(state, action.id, false)

function followOrUnfollow(state, action.id, subscribe){
    return {
        ...state,
        items: [...state.items].map(i => {
            if(i.id === action.id) {
                return {
                    ...i,
                    followed: subscribe
                }
            }
            return i
        })
    }
}