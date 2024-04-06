import React, { useState } from 'react';
import { 
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem
} from '../ui/accordion';
import { GiNotebook  } from 'react-icons/gi';
import { GiChart } from "react-icons/gi";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

function AccordionComponent () {

    const [onFocus, setOnFocus] = useState(1);

    const handleFocus = (buttonId: number) => {
        setOnFocus(buttonId);
    };

    return (
        <>
            <Accordion type="multiple" className='w-[90%] hover:no-underline border-0 pt-2'>
                <AccordionItem value="item-1">
                    <AccordionTrigger 
                        onFocus={() => handleFocus(1)}
                        className={`hover:no-underline ${onFocus === 1 ? 'bg-[#000000] text-[#fff] hover:text-[#ffffffdd] drop-shadow-[1px_2px_2px_rgba(0,0,0,0.25)]' : 'bg-[#a7a4a411] text-[#000000] hover:text-[#181818b5] hover:bg-[#70707014]'} rounded-[6px] h-[40px] justify-between px-2`}
                    >
                        <div className='flex justify-start items-center gap-[10px]'>
                            <GiNotebook size={17}/>
                            <span className='whitespace-nowrap text-ellipsis overflow-hidden w-[80px]'>Cadastros</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='w-[100%] h-[30px] py-6 flex justify-center items-center'>
                        <a href='#' className='w-[90%] h-[40px] bg-[#d6d4d432] rounded-[6px] pt-3 px-3 font-medium flex flex-row justify-between'>
                            Clientes 
                            <IoIosArrowForward size={10}/>
                        </a>
                    </AccordionContent>
                    <AccordionContent className='w-[100%] h-[30px] py-6 flex justify-center items-center'>
                        <a href='#' className='w-[90%] h-[40px] bg-[#d6d4d432] rounded-[6px] pt-3 px-3 font-medium flex flex-row justify-between'>
                            Produtos 
                            <IoIosArrowForward size={10}/>
                        </a>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="multiple" className='w-[90%] hover:no-underline border-0 pt-2'>
                <AccordionItem value="item-1">
                    <AccordionTrigger 
                        onFocus={() => handleFocus(2)}
                        className={`hover:no-underline ${onFocus === 2 ? 'bg-[#000000] text-[#fff] hover:text-[#ffffffdd] drop-shadow-[1px_2px_2px_rgba(0,0,0,0.25)]' : 'bg-[#a7a4a411] text-[#000000] hover:text-[#181818b5] hover:bg-[#70707014]'} rounded-[6px] h-[40px] justify-between px-2`}
                    >
                        <div className='flex justify-start items-center gap-[10px]'>
                            <GiChart size={17}/>
                            <span className='whitespace-nowrap text-ellipsis overflow-hidden w-[80px]'>Marketing</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='w-[100%] h-[30px] py-6 flex justify-center items-center'>
                        <a href='#' className='w-[90%] h-[40px] bg-[#d6d4d432] rounded-[6px] pt-3 px-3 font-medium flex flex-row justify-between'>
                             Campanha
                            <IoIosArrowForward size={10}/>
                        </a>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="multiple" className='w-[90%] hover:no-underline border-0 pt-2'>
                <AccordionItem value="item-1">
                    <AccordionTrigger 
                        onFocus={() => handleFocus(3)} 
                        className={`hover:no-underline ${onFocus === 3 ? 'bg-[#000000] text-[#fff] hover:text-[#ffffffdd] drop-shadow-[1px_2px_2px_rgba(0,0,0,0.25)]' : 'bg-[#a7a4a411] text-[#000000] hover:text-[#181818b5] hover:bg-[#70707014]'} rounded-[6px] h-[40px] justify-between px-2`}
                    >
                        <div className='flex justify-start items-center gap-[10px] max-[1025px]:w-[120px] max-[900px]:w-[200px] whitespace-nowrap text-ellipsis overflow-hidden '>
                            <RiUserSettingsLine size={17}/>
                            <span className='w-[110px]'>Administrativo</span>
                        </div> 
                    </AccordionTrigger>
                    <AccordionContent className='w-[100%] h-[30px] py-6 flex justify-center items-center'>
                        <a href='#' className='w-[90%] h-[40px] bg-[#d6d4d432] rounded-[6px] pt-3 px-3 font-medium flex flex-row justify-between'>
                            Usuários 
                            <IoIosArrowForward size={10}/>
                        </a>
                    </AccordionContent>
                    <AccordionContent className='w-[100%] h-[30px] py-6 flex justify-center items-center'>
                        <a href='#' className='w-[90%] h-[40px] bg-[#d6d4d432] rounded-[6px] pt-3 px-3 font-medium flex flex-row justify-between'>
                            E-Commerce 
                            <IoIosArrowForward size={10}/>
                        </a>
                    </AccordionContent>
                    <AccordionContent className='w-[100%] h-[30px] py-6 flex justify-center items-center'>
                        <a href='#' className='w-[90%] h-[40px] bg-[#d6d4d432] rounded-[6px] pt-3 px-3 font-medium flex flex-row justify-between'>
                            Meta 
                            <IoIosArrowForward size={10}/>
                        </a>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}
  
export default AccordionComponent;