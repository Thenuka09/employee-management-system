import { useRouter } from "next/navigation";

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
    editEmployee: (e: React.MouseEvent<HTMLAnchorElement>, id: number) => void;
};

export default function UpdateEmployee({ employee }: EmployeeProps){

    const router = useRouter();

    const editEmployee = (e: React.MouseEvent<HTMLElement>, id: number) => {
        e.preventDefault();
        router.push(`/edit-employee/update-details?id=${id}`);
    };

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
                <a onClick={(e) => editEmployee(e, employee.id)} className=" flex align-middle justify-center text-center font-semibold text-[12px] px-[10px] py-[9px] tracking-wider bg-green-800 text-white m-[4px] rounded-2xl hover:bg-green-900 cursor-pointer">Update</a>
        </tr>
    )
}