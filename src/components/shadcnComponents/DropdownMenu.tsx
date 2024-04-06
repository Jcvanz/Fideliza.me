import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AvatarComponent from "./Avatar";
import { CgProfile } from "react-icons/cg";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

function DropdownMenuComponent() {

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full outline-offset-0"><AvatarComponent/></DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px] mr-2">
                    <div className="flex flex-col py-3 pl-2 pr-4">
                        <text className="text-[14px] whitespace-nowrap text-ellipsis overflow-hidden font-bold">Julio Cesar Cioato Vanz</text>
                        <text className="text-[12px] text-inherit whitespace-nowrap text-ellipsis overflow-hidden">teste123@gmail.com</text>
                    </div>
                    <DropdownMenuSeparator />
                    <div className="flex items-center pl-2 hover:bg-[#cecece50] hover:rounded-[5px]">
                        <CgProfile size={15}/>
                        <DropdownMenuItem className="font-medium cursor-pointer">Profile</DropdownMenuItem>
                    </div>
                    <div className="flex items-center pl-2 hover:bg-[#cecece50] hover:rounded-[5px]">
                        <RiMoneyDollarCircleLine size={15}/>
                        <DropdownMenuItem className="font-medium cursor-pointer">Billing</DropdownMenuItem>
                    </div>
                    <div className="flex items-center pl-2 hover:bg-[#cecece50] hover:rounded-[5px]">
                        <MdOutlineSettings size={15}/>
                        <DropdownMenuItem className="font-medium cursor-pointer">Settings</DropdownMenuItem>
                    </div>
                    <div className="flex items-center pl-2 hover:bg-[#cecece50] hover:rounded-[5px]">
                        <AiOutlineTeam size={15}/>
                        <DropdownMenuItem className="font-medium cursor-pointer">New Team</DropdownMenuItem>
                    </div>
                    <DropdownMenuSeparator />
                    <div className="flex items-center pl-2 hover:bg-[#cecece50] hover:rounded-[5px]">
                        <TbLogout size={15}/>
                        <DropdownMenuItem className="font-medium cursor-pointer">Log out</DropdownMenuItem>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
  
export default DropdownMenuComponent;