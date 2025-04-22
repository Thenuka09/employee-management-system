import NavBar from "../components/NavBar";
import UpdateEmployeeList from "../components/UpdateEmployeeList";

export default function EditEmployee(){
    return(

        <div className="h-screen bg-[#F2F2F2]">
            <NavBar/>

            <div className="pl-[305px]">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="mt-[40px] text-[#189AB4] text-[18px] font-popins font-bold">ADMIN SECTION</h1>
                    <h2 className="text-[#05445E] text-[25px] font-bold font-popins">EDIT EMPLOYEE</h2>
                </div>

                <UpdateEmployeeList/>
            </div>
        </div>
    )
}