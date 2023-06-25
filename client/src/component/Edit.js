import React, { useState, useEffect } from 'react'
import { NavLink , useParams, useNavigate} from 'react-router-dom'

const Edit = () => {
    
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

    //get all data from db and set values
    const { id } = useParams("");

    const getdata = async () => {

        const res = await fetch(`/getdata/${id}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");
        }

    }

    useEffect(() => {
        getdata();
    }, [])


    //product update
    const updateProduct = async(e) =>{
        e.preventDefault();

        const {pname, sqty, eqty, pdesc} = inpval;

        const res = await fetch(`/update/${id}`,{
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                pname,sqty,eqty,pdesc
            })
        });

        const data2 = await res.json();
        console.log(data2);

        if (res.status === 422 || !data2) {
            console.log("error ");
            alert("please fill all fields");

        }
        else if(res.status === 200) {
            console.log("data updated");
            alert("data updated");
            navigate("/items");

        }
        else{
            alert("error");
        }
    }

    return (
        <div className='d-flex flex-column align-items-center pt-4'>

            <h2>Details of Item</h2>
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
                        <button type="submit" onClick={updateProduct}  className="btn btn-primary">Update Item</button>
                    </div>
            </form>
        </div>
    )
}

export default Edit
