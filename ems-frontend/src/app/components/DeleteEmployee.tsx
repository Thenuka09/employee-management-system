type EmployeeProps = {
    employee: {
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
    deleteEmployee: (e: React.MouseEvent<HTMLAnchorElement>, id: number) => void;
};

export default function DeleteEmployee({ employee , deleteEmployee }: EmployeeProps){
    return (
            <tr className="bg-white border-b border-[#F2F2F2] hover:bg-[#f8f8f8] " key={employee.id}>
                <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.name}</td>
                <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.email}</td>
                <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.mobile}</td>
                <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.address}</td>
                <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.dob}</td>
                <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.designation}</td>
                <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.department}</td>
                <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.join_date}</td>
                <a onClick={(e) => deleteEmployee(e, employee.id)} className=" flex align-middle justify-center text-center font-semibold text-[12px] px-[10px] py-[9px] tracking-wider bg-red-800 text-white m-[4px] rounded-2xl hover:bg-red-900 cursor-pointer">Delete</a>
        </tr>
    )
}