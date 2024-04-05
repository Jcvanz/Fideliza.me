import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import React, { useState } from "react";

interface MenuBarProps {
    menuOnFocus: (menuId: number) => void;
}

const MenuBarComponent: React.FC<MenuBarProps> = ({ menuOnFocus }) => {

    const [onFocus, setOnFocus] = useState(1);

    const handleFocus = (buttonId: number) => {
        setOnFocus(buttonId);
        menuOnFocus(buttonId)
    };

    return(
        <>
            <Menubar className="bg-[#97979737] border-none min-w-[300px] max-[900px]:hidden">
                <MenubarMenu>
                    <MenubarTrigger 
                        onFocus={() => handleFocus(1)}
                        className={`${onFocus === 1 ? 'whitespace-nowrap text-ellipsis overflow-hidden bg-[#000000] text-[#ffffff] hover:text-[#e0e0e0dd] drop-shadow-[0_1px_5px_rgba(0,0,0,0.25)]' : 'bg-[#a7a4a411] text-[#0e0e0e92] hover:text-[#424242b5] hover:bg-[#ffffff13]'}`}    
                    >
                        Visão geral
                    </MenubarTrigger>
                    <MenubarTrigger 
                        onClick={() => handleFocus(2)}
                        className={`${onFocus === 2 ? 'whitespace-nowrap text-ellipsis overflow-hidden bg-[#000000] text-[#ffffff] hover:text-[#e0e0e0dd] drop-shadow-[0_1px_5px_rgba(0,0,0,0.25)]' : 'bg-[#a7a4a411] text-[#0e0e0e92] hover:text-[#424242b5] hover:bg-[#ffffff13]'}`}
                    >
                        Estatísticas
                    </MenubarTrigger>
                    <MenubarTrigger 
                        onFocus={() => handleFocus(3)}
                        className={`${onFocus === 3 ? 'whitespace-nowrap text-ellipsis overflow-hidden bg-[#000000] text-[#ffffff] hover:text-[#e0e0e0dd] drop-shadow-[0_1px_5px_rgba(0,0,0,0.25)]' : 'bg-[#a7a4a411] text-[#0e0e0e92] hover:text-[#424242b5] hover:bg-[#ffffff13]'}`}
                    >
                        Relatórios
                    </MenubarTrigger>
                    <MenubarTrigger 
                        onFocus={() => handleFocus(4)}
                        className={`${onFocus === 4 ? 'whitespace-nowrap text-ellipsis overflow-hidden bg-[#000000] text-[#ffffff] hover:text-[#e0e0e0dd] drop-shadow-[0_1px_5px_rgba(0,0,0,0.25)]' : 'bg-[#a7a4a411] text-[#0e0e0e92] hover:text-[#424242b5] hover:bg-[#ffffff13]'}`}
                    >
                        Notificações
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </>
    )
}

export default MenuBarComponent;

// <MenubarContent>
//     <MenubarItem>
//         New Tab <MenubarShortcut>⌘T</MenubarShortcut>
//     </MenubarItem>
//     <MenubarItem>New Window</MenubarItem>
//     <MenubarSeparator />
//     <MenubarItem>Share</MenubarItem>
//     <MenubarSeparator />
//     <MenubarItem>Print</MenubarItem>
// </MenubarContent>