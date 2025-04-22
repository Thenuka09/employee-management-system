import AddEmplpyee from "../components/AddEmployee";
import NavBar from "../components/NavBar";

export default function AddEmployee(){

    return(
        <div className=" bg-[#F2F2F2] mb-[40px]">
            <NavBar/>

            <div className="pl-[305px]">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="mt-[40px] text-[#189AB4] text-[18px] font-popins font-bold">ADMIN SECTION</h1>
                    <h2 className="text-[#05445E] text-[25px] font-bold font-popins">ADD NEW EMPLOYEE</h2>
                </div>

                <AddEmplpyee/>
            </div>
        </div>
    )

}