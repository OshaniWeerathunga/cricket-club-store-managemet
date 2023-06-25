import { alertTitleClasses } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const AddItems = () => {

    //ridirect to home page
    const navigate = useNavigate();

    const [inpval, setINP] = useState({
        pname: "",
        sqty: "",
        eqty: "",
        pdesc: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();

        const { pname, sqty, eqty, pdesc } = inpval;

        const res = await fetch("http://localhost:8003/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                pname, sqty, eqty, pdesc 
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("please fill all fields");

        }
        else if(res.status === 420) {
            alert("product is already exist in the list")
        }
        else if(res.status === 200) {
            console.log("data added");
            alert("data added");
            navigate("/items");

        }
        else{
            alert("error");
        }
    }

    return (
        <div className='d-flex flex-column align-items-center pt-4'>
            <h2>Add New Items</h2>
            <form className="row g-3 w-50">
                

                    <div className="col-12">
                        <label for="productName" className="form-label">Product Name</label>
                        <input type="text" value={inpval.pname} onChange={setdata} name="pname" className="form-control" id="productName"  />
                    </div>
                    <div className="col-12">
                        <label for="startQty" className="form-label">Starting Qty</label>
                        <input type="number" value={inpval.sqty} onChange={setdata} name="sqty" className="form-control" id="startQty" />
                    </div>
                    <div className="col-12">
                        <label for="endQty" className="form-label">Ending Qty</label>
                        <input type="number" value={inpval.eqty} onChange={setdata} name="eqty" className="form-control" id="endQty" />
                    </div>
                    <div className="col-12">
                        <label for="description" className="form-label">Description</label>
                        <textarea value={inpval.pdesc} onChange={setdata} name="pdesc" className="form-control" id="description" />
                    </div>
                    <div className="col-12">
                        <button type="submit" onClick={addinpdata} className="btn btn-primary">Add Item</button>
                    </div>
            </form>
        </div>
    )
}

export default AddItems
