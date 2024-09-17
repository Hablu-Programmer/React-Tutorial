import { useState } from "react";

function Form(){
    const [formdata, setFormData] =  useState({
        name:"",
        email:""
    });

    const [SubmittedData, SetSubmitData] = useState({
        name:"",
        email:""
    }); 

    const handleChange = (e)=> {
        const {name, value} =  e.target;
        setFormData((predata)=>({
            ...predata,
            [name]:value
        }))

    }

    const HandleSubmit = (event)=> {
        event.preventDefault();
        SetSubmitData(formdata)
    }


    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="w-full p-10 max-w-md bg-white rounded-lg shadow-sm">
                    <h1 className="text-2xl font-bold text-gray-800 text-center">Login Form</h1>

                    <form>
                        <div>
                            <label className="block text-sm text-gray-600">Name:</label>
                            <input onChange={handleChange} type="text" placeholder="Enter Your Name" className="mt-1 block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm" name="name" value={formdata.name} />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600 ">Email:</label>
                            <input onChange={handleChange} type="text" placeholder="Enter Your Email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" name="email" value={formdata.email} />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600 ">Password:</label>
                            <input type="password" placeholder="Enter Your password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
                        </div>

                        <button onClick={HandleSubmit} type="submit" className="w-full bg-indigo-600 text-white p-2 mt-2 rounded-md">Login</button>
                    </form>

                    <div>
                        <h2 className="text-center mt-5 font-semibold">User Information</h2>
                        <p className="text-gray-800">Name: {SubmittedData.name}</p>
                        <p className="text-gray-800">Email:{SubmittedData.email} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form; 