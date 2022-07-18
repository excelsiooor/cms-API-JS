import {Link} from "react-router-dom";

function Admin() {
    return(
        <div className='admin'>
            <Link to='/admin/all'>All Movie</Link>
            <Link to='/admin/create'>CreateNew</Link>
        </div>
    )
}

export default Admin;