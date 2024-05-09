import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

export default function Home() {
    const [data, setData] = useState([]);
    
    useEffect(async () => {
        let result = await fetch('http://127.0.0.1:8000/api/');
        result = await result.json();
        setData(result);
    }, []);

    return (
        <>
            <header className="py-5" style={{ backgroundColor: '#000000' }}>
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">BYTE HAZARD</h1>
                        <p>E-Commerce PC Parts</p>
                    </div>
                </div>
            </header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {data.map((item, index) => (
                            <div className="col mb-5" key={index}>
                                <div className="card h-100">
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{item.name}</h5>
                                            ₱ {item.price}
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <Link className="btn btn-outline-dark mt-auto" to={"/product/"+item.id}>View</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}