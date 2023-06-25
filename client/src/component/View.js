import React, { useState, useEffect } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

const View = () => {

    
    const [getProductdata, setProductdata] = useState([]);
    console.log(getProductdata);

    const { id } = useParams("");

    const getdata = async () => {

        const res = await fetch(`/getdata/${id}`, {
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
            setProductdata(data)
            console.log("get data");
        }

    }

    useEffect(() => {
        getdata();
    }, [])


    


    return (
        <div className='d-flex flex-column align-items-center pt-4'>

            <h2>Details of Item</h2>
            <form className="row g-3 w-50">

                <div className="add_btn">
                    <NavLink to={`/edit/${getProductdata._id}`}><button className="btn btn-primary mx-2"><EditIcon /></button></NavLink>
                </div>

                <div className="col-12">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" name="pname" className="form-control" id="productName" value={getProductdata.pname} readonly='readonly' />
                </div>
                <div className="col-12">
                    <label htmlFor="startQty" className="form-label">Starting Qty</label>
                    <input type="number" name="sqty" className="form-control" id="startQty" value={getProductdata.sqty} readonly='readonly'/>
                </div>
                <div className="col-12">
                    <label htmlFor="endQty" className="form-label">Ending Qty</label>
                    <input type="number" name="eqty" className="form-control" id="endQty" value={getProductdata.eqty} readonly='readonly'/>
                </div>
                <div className="col-12">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea name="pdesc" className="form-control" id="description" value={getProductdata.pdesc} readonly='readonly'/>
                </div>

            </form>
        </div>
    )
}

export default View
