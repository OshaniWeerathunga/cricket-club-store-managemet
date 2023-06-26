import React from 'react'
import { Link } from 'react-router-dom'
import lusail from '../assets/lusail.jpg'
import thumama from '../assets/thumama.jpg'


function CommonPage() {
  
    return (
        <div>


            <div className='mt-4 px-5 pt-3'>
                <h3>Cricket Grounds</h3>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>
                                <div class="card">
                                    <img src={lusail} class="card-img-top" alt="lusail" height={250} />
                                    <div class="card-body">
                                        <h5 class="card-title">Lusail Ground</h5>
                                        <p class="card-text">This is Lusail ground.</p>
                                        <Link to='/items' class="btn btn-primary">View Items</Link>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="card">
                                    <img src={thumama} class="card-img-top" alt="thumama" height={250}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Thumama Ground</h5>
                                            <p class="card-text">This is Thumama Ground.</p>
                                            <Link to='/items' class="btn btn-primary">View Items</Link>
                                        </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default CommonPage
