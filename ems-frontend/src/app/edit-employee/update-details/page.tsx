import EditOneEmployee from "@/app/components/EditOneEmployee";
import NavBar from "@/app/components/NavBar";

export default function UpdateDetails(){
    return (

        <div>
            <NavBar/>

            <div className="pl-[305px]">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="mt-[40px] text-[#189AB4] text-[18px] font-popins font-bold">ADMIN SECTION</h1>
                    <h2 className="text-[#05445E] text-[25px] font-bold font-popins">EDIT EMPLOYEE</h2>
                </div>

                <EditOneEmployee/>
            </div>
            
        </div>

    )
}