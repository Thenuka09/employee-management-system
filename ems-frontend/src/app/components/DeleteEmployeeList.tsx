"use client"

import { useEffect, useState } from "react";
import DeleteEmployee from "./DeleteEmployee";

type EmployeeType = {
    id: number;
    name: string;
    email: string;
    mobile: string;
    address: string;
    dob: string;
    designation: string;
    department: string;
    join_date: string;
  };

export default function DeleteEmployeeList(){

    const USER_API_URL: string = "http://localhost:8080/api/v1/employees";

    const [employees, setEmployee] = useState<EmployeeType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async ()=>{
            setLoading(true);

            try {
                const response = await fetch(USER_API_URL, {
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json",
                    },
                });
                const employee = await response.json();
                setEmployee(employee); 
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [])

    const deleteEmployee = (e: React.MouseEvent<HTMLElement>, id: number) => {
        e.preventDefault();
        fetch(USER_API_URL + "/" +id, {
            method: "DELETE",
        }).then(()=>{
            if(employees){
                setEmployee((prevElement)=>{
                    return prevElement.filter((employee)=> employee.id !== id);
                });
            }
        });
    };
    

    return (
        <div className="container mx-auto my-7">
            <div className="flex shadow  ml-[10px] mr-[10px]">
                <table className="min-w-full text-[14px] font-popins ">
                    <thead className="bg-[#75E6DA]">
                        <tr>
                            <th className="font-semibold text-left px-[7px] py-[9px] tracking-wider text-gray-600">Name</th>
                            <th className="font-semibold text-left px-[7px] py-[9px] tracking-wider text-gray-600">Email</th>
                            <th className="font-semibold text-left px-[7px] py-[9px] tracking-wider text-gray-600">Mobile</th>
                            <th className="font-semibold text-left px-[7px] py-[9px] tracking-wider text-gray-600">Address</th>
                            <th className="font-semibold text-left px-[7px] py-[9px] tracking-wider text-gray-600">DOB</th>
                            <th className="font-semibold text-left px-[7px] py-[9px] tracking-wider text-gray-600">Designation</th>
                            <th className="font-semibold text-left px-[7px] py-[9px] tracking-wider text-gray-600">Department</th>
                            <th className="font-semibold text-left px-[7px] py-[9px] tracking-wider text-gray-600">Join Date</th>
                            <th className="font-semibold text-left px-[7px] py-[9px] tracking-wider text-gray-600">Delete</th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody>
                            {employees?.map((employee)=>(
                                <DeleteEmployee employee ={employee} key={employee.id} deleteEmployee={deleteEmployee}/>
                            ))}
                            
                        </tbody>
                    )}
                    
                </table>
            </div>
        </div>
    )
}