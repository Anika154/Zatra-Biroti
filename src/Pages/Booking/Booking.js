import React from 'react';

const Booking = (props) => {
    const { _id, email, status, userData, packageDetail } = props.booking;


    const handleDelete = () => {
        const deleted = window.confirm('Do you want to delete?');
        if (deleted) {
            fetch(`https://chilling-cheateau-69804.herokuapp.com/booking?id=${_id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        window.location.reload();
                    }
                })

        }

    }

    const handleUpdate = () => {
        fetch(`https://chilling-cheateau-69804.herokuapp.com/booking?id=${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approved successfully');
                    window.location.reload();
                }
            })

    }
    return (
        <div>
            <div className="card rounded shadow m-5 w-50 p-2 mx-auto">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-blue-900 text-center">{userData.name}</h2>
                    <h4 className="card-title text-xl text-gray-700">{userData.email}</h4>
                    <h4 className="card-title text-xl text-gray-700">{packageDetail.name}</h4>
                    <h4 className="card-title text-xl text-gray-700">{status}</h4>
                    <h4 className="card-title text-xl text-gray-700">{userData.phone}</h4>

                    {/* <Link to={'/service/' + props.service.id}> */}
                    <button onClick={handleDelete} className="btn rounded-pill opacity-75 bg-red-600 text-white">Delete</button>
                    <button onClick={handleUpdate} className="btn rounded-pill opacity-75 bg-yellow-600 text-white m-2">Approve</button>
                    {/* </Link> */}
                </div>
            </div>

        </div>
    );
};

export default Booking;