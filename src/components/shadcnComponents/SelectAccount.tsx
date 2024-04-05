import { useState } from 'react';
import { 
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
} from '../ui/select';
import { Button } from '../ui/button';
import { IoTriangle } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

function SelectAccount() {
    
    const [accountSelected, setAccountSelected] = useState('*Nome logado*');
    const [data, setData] = useState([
        "Software", 
        "Julio sistemas",
        "WehSoft",
        "white Systems"
    ]);

    const handleSelectItem = (value: string) => {
        setAccountSelected(value);
    };

    return (
        <>
            <Select>
                <SelectTrigger className="w-[90%] hover:bg-[#f7f7f7] drop-shadow-[1px_2px_2px_rgba(0,0,0,0.25)] max-[550px]:w-[100%]">
                    <div className='flex gap-[10px] font-semibold whitespace-nowrap text-ellipsis overflow-hidden'>
                        <IoTriangle size={15}/>
                        <SelectValue placeholder={accountSelected}/>
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {data.map((item, index) => (
                            <SelectItem 
                                key={index} 
                                value={item} 
                                onClick={() => handleSelectItem(item)}
                                className='py-3 drop-shadow-[1px_2px_2px_rgba(0,0,0,0.25)]'
                            >
                                {item}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                    <div className='flex itens-center justify-center py-3'>
                        <Button className="w-[180px] justify-center drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)]">
                            <MdAdd size={15}/>
                            <text className='w-[80%] text-start pl-2'>
                                Cadastrar conta
                            </text>
                        </Button>
                    </div>
                </SelectContent>
            </Select>
        </>
    )
}
  
export default SelectAccount;