import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from "./redux"
import store from './redux/store';
// import {useSelector, useDispatch} from "react-redux"

function UserContainer(props) {
    console.log("user pops", props)
    const userData = props.userData
    useEffect(() => {
        props.fetchUsers()
    }, []) // empty array => so that action is dispatched at once, on did mount
    return (
        <div>
            <h2>Users</h2>
            {userData.loader ? "Loading" :
                userData.errorMsg ? userData.errorMsg :
                    (
                        props.userData.users && <div>
                            <h2>Listtt</h2>
                            <div>{props.userData.users.map(user => {
                                <p>{user.name}</p>
                            })
                            }
                            </div>
                        </div>
                    )
            }
            {/* {props.userData.users && <div>
                            <h2>List</h2>
                           <div>{props.userData.users[0].name
                            }
                            </div>
                        </div>} */}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
        users: state.user.users,
        // errorMsg: state.user.errorMsg,
        // loader: state.user.loader
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);