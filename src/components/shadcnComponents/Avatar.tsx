import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "../ui/avatar";

function AvatarComponent() {

    return (
        <>
            <Avatar className="rounded-full outline-offset-0 border-[0.5px] border-black">
                <AvatarImage className="outline-none" src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </>
    )
}
  
export default AvatarComponent;