"use client";
import React, { useState } from 'react';

const CalculaorPg: React.FC = () => {
    const [Firstnumber,setFnumber,] = useState("");
    const [Secondnumber, setSecnumber] = useState("");
    const [Total, setTotal] = useState<number | null>(null);

    const Add =() => {
        if(Firstnumber !== "" || Secondnumber !== ""){
            setTotal(Number(Firstnumber) + Number(Secondnumber));
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br p-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg border border-gray-200 text-center">
                <h6 className="display-6">Adding Two Numbers</h6>
                <div className="card card-body">
                    <div className={'row'}>
                        <div className={'col-12 row'}>
                            <label htmlFor="Firstnumber" className={'form-label col-6'}>First number:</label>
                            <input className={'input-group-text col-6'} type="number" value={Firstnumber} onChange={(e) =>
                                setFnumber(e.target.value || '')}/>
                        </div>
                        <div className={'mt-3 col-12 row'}>
                            <label htmlFor="Secondnumber" className={'form-label col-6'}>Second Number:</label>
                            <input  className={'input-group-text col-6'} type="number" value={Secondnumber} onChange={(e) =>
                                setSecnumber(e.target.value || '')}  />
                            <div style={{textAlign: 'right'}}>
                                <button style={{maxWidth: '200px'}} onClick={Add} className={'btn btn-sm btn-success mt-3 text-right'}> Add Two Numbers

                                </button>
                                <p className={'mt-3 text-xl font-bold text-gray-800'}> Total: {Total !== null ? Total : ''}</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default CalculaorPg