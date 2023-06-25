import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';


const Home = () => {

    const [getProductdata, setProductdata] = useState([]);
    console.log(getProductdata);

    const getdata = async (e) => {

        const res = await fetch("http://localhost:8003/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setProductdata(data);
            console.log("get data");


        }
    }


    useEffect(() => {
        getdata();
    }, [])


    //product delete
    const deleteProduct = async (id) => {

        console.log(id);

        const res2 = await fetch(`/deleteProduct/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            //setDLTdata(deletedata)
            getdata();
        }

    }



    return (
        <div className='mt-5'>
            <div className='container'>

                <div className='add_btn mt-2 mb-2'>
                    <NavLink to="/addnew" className='btn btn-primary'>Add Items</NavLink>
                
                    <form className="d-flex mt-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> 

                </div>


                <table className="table mt-4">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Starting</th>
                            <th scope="col">Ending</th>
                            <th scope="col">Description</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            getProductdata.map((element, id) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{element.pname}</td>
                                            <td>{element.sqty}</td>
                                            <td>{element.eqty}</td>
                                            <td>{element.pdesc}</td>
                                            <td className='d-flex justify-content-between'>
                                                <NavLink to={`/view/${element._id}`}><button className='btn btn-success'><RemoveRedEyeIcon /></button></NavLink>
                                                <NavLink to={`/edit/${element._id}`}><button className='btn btn-primary'><EditIcon /></button></NavLink>
                                                <button className='btn btn-danger' onClick={() => deleteProduct(element._id)}><DeleteIcon /></button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }


                    </tbody>

                </table>


            </div>
        </div>
    )
}

export default Home;