"use client"

import Image from "next/image"
import profile from "../../../public/img/profile.png"
import { useRouter, usePathname } from "next/navigation";
// import path from "path";

export default function NavBar(){

    const router = useRouter()
    const pathName = usePathname();

    //which button clicked 
    const getActiveButton = (): string=>{

        if(pathName === "/"){
            return "view"
        }if(pathName === "/add-employee") {
            return "add";
        }if(pathName === "/edit-employee"){
            return "edit";
        }if(pathName === "/delete-employee"){
            return "delete";
        }
        return ""
    }

    const activeButton = getActiveButton();
    
    const buttonClass = (name: string) => `w-[230px] h-[38px] rounded-full font-bold font-popins text-[15px] transition-all 
        ${activeButton === name? "bg-[#75E6DA] font-popins text-black": "bg-[#189AB4] text-white hover:text-black hover:bg-[#75E6DA] hover:cursor-pointer"}`;

    return (
        <div className="bg-[#05445E] h-screen w-[305px] fixed float-left rounded-tr-[100px] shadow-2xl">
            <div className="flex flex-col justify-center items-center align-middle h-screen">
                <div className="flex justify-center items-center flex-col">
                    <Image src={profile} alt="admin profile picture" width={120} height={120}
                    className=""></Image>
                    <h2 className="text-[15px] text-[#75E6DA] mt-[9px] font-popins">charanat@visionexdigital.com.au</h2>
                    <p className="text-[12px] text-white mb-[33px] text-center font-popins">Admin at VXD</p>
                </div> 

                <div className="flex flex-col space-y-[15px]">
                    <button type="button" className={buttonClass("view")} onClick={()=> router.push("/")}>View Employee</button>
                    <button type="button" className={buttonClass("add")} onClick={()=> router.push("/add-employee")}>Add Employee</button>
                    <button type="button" className={buttonClass("edit")} onClick={()=>router.push("/edit-employee")}>Edit Employee</button>
                    <button type="button" className={buttonClass("delete")} onClick={()=> router.push("/delete-employee")}>Delete Employee</button>
                </div>
            </div>

            <div className="flex items-end mt-[-54px]">
                <button className="cursor-pointer font-popins w-[305px] bg-[#AC203D] h-[54] rounded-tl-[100px] text-[15px] text-white font-bold hover:bg-[#ac203cd5] hover:text-[16px]">Logout</button>
            </div>
            
        </div>
    )
}