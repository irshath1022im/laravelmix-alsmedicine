import React from 'react'
import { ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminLayout = ({children}) =>{

    return (
        <div className="container-fluid row">
                    <div className="col col-md-3">
                        <ListGroup>
                            <ListGroup.Item>Home</ListGroup.Item>
                            <ListGroup.Item>Category</ListGroup.Item>
                            <Link to="/adminItem">
                                <ListGroup.Item>Items</ListGroup.Item>
                            </Link>
                            <ListGroup.Item>Receiving</ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className="col col-md-9">
                        {children}
                    </div>
        </div>

    )
}


export default AdminLayout;
