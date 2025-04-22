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
};

export default function Employee({ employee }: EmployeeProps){
    return (
        <tr className="bg-white border-b border-[#F2F2F2] hover:bg-[#f8f8f8]" key={employee.id}>
            <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.name}</td>
            <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.email}</td>
            <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.mobile}</td>
            <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.address}</td>
            <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.dob}</td>
            <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.designation}</td>
            <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.department}</td>
            <td className="font-medium text-left px-[7px] py-[9px] tracking-wider ">{employee.join_date}</td>
        </tr>
    )
}