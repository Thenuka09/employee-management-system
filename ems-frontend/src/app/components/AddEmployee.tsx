"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddEmplpyee(){

    const USER_API_URL: string = "http://localhost:8080/api/v1/employees";

    const router = useRouter();

    const [employee, setEmployee] = useState({
        "id": 0,
        "name": "",
        "email": "",
        "mobile": "",
        "address": "",
        "dob": "",
        "designation": "",
        "department": "",
        "join_date": "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
      };

    const saveEmployee = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        // Simple validation: check if any field is empty
        const isEmpty = Object.values(employee).some(value => value === "");
        if (isEmpty) {
            alert("Please fill in all the fields before submitting.");
            return; // prevent the redirect
        }
    
        try {
            const response = await fetch(USER_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(employee),
            });
    
            if (!response.ok) {
                throw new Error("There is an error while saving the employee.");
            }
    
            await response.json();
            alert("Added Sucess..!")
            router.push("/"); // redirect to homepage if all good
        } catch (error) {
            console.error("Error saving employee:", error);
        }
    };    

    return (
        <div className="bg-white mt-[20px] pt-[10px] pb-[10px] ml-[150px] mr-[150px] rounded-2xl px-[20px] py-[20px] shadow-xl">
            <div className="space-y-[5px] mt-[10px]">
                <div className="flex flex-col items-start">
                    <label htmlFor="" className="text-[15px] mb-[5px] font-semibold">Name:</label>
                    <input type="text" value={employee.name} onChange={(e)=> handleChange(e)} name="name" placeholder="employee name" className="w-full py-[5px] pl-[5px] border border-[#dddddd] text-gray-700 rounded-[5px] mb-[5px]" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-[15px] mb-[5px] font-semibold">Email:</label>
                    <input type="text" value={employee.email} onChange={(e)=> handleChange(e)} name="email" placeholder="employee email" className="w-full py-[5px] pl-[5px] border border-[#dddddd] text-gray-700 rounded-[5px] mb-[5px]"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-[15px] mb-[5px] font-semibold">Mobile:</label>
                    <input type="text" value={employee.mobile} onChange={(e)=> handleChange(e)} name="mobile" placeholder="employee mobile" className="w-full py-[5px] pl-[5px] border border-[#dddddd] text-gray-700 rounded-[5px] mb-[5px]"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-[15px] mb-[5px] font-semibold">Address:</label>
                    <input type="text" value={employee.address} onChange={(e)=> handleChange(e)} name="address" placeholder="employee address" className="w-full py-[5px] pl-[5px] border border-[#dddddd] text-gray-700 rounded-[5px] mb-[5px]"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-[15px] mb-[5px] font-semibold">Date of Birth:</label>
                    <input type="date" value={employee.dob} onChange={(e)=> handleChange(e)} name="dob" placeholder="yyyy/mm/dd" className="w-full py-[5px] pl-[5px] border border-[#dddddd] text-gray-700 rounded-[5px] mb-[5px]"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-[15px] mb-[5px] font-semibold">Desigation:</label>
                    <input type="text" value={employee.designation} onChange={(e)=> handleChange(e)} name="designation" placeholder="employee designation" className="w-full py-[5px] pl-[5px] border border-[#dddddd] text-gray-700 rounded-[5px] mb-[5px]"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-[15px] mb-[5px] font-semibold">Department:</label>
                    <input type="text" value={employee.department} onChange={(e)=> handleChange(e)} name="department" placeholder="department of the employee" className="w-full py-[5px] pl-[5px] border border-[#dddddd] text-gray-700 rounded-[5px] mb-[5px]"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-[15px] mb-[5px] font-semibold">Join Data:</label>
                    <input type="date" value={employee.join_date} onChange={(e)=> handleChange(e)} name="join_date" placeholder="yyyy/mm/dd" className="w-full py-[5px] pl-[5px] border border-[#dddddd] text-gray-700 rounded-[5px] mb-[5px]"/>
                </div>
                <div className="mt-[10px] mb-[10px]">
                    <button onClick={saveEmployee} className="bg-[#05445E] w-full text-white py-[9px] font-semibold rounded-xl cursor-pointer hover:bg-[#05435ef5] hover:text-[17px]">+ Add Employee</button>
                </div>
            </div>
        </div>
    )
}