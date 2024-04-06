import MenuBarComponent from '../shadcnComponents/MenuBar';
import { DatePicker } from '../shadcnComponents/PickerData';
import SelectAccount from '../shadcnComponents/SelectAccount';
import './styles.css';

interface MenuBarProps {
    handleOnFocus: (menuId: number) => void;
}

const MenuDashboard: React.FC<MenuBarProps> = ({handleOnFocus}) => {

    return (
        <>
            <div className='menu-container'>
                <div className="main-menu">
                    <div className='select-content'>
                        <SelectAccount btnClassName='w-[200px] justify-end'/>
                    </div>
                    <DatePicker className='datepicker'/>
                </div>
                <div className='second-menu'>
                    <MenuBarComponent
                        menuOnFocus={handleOnFocus}
                    />
                </div>
            </div>
        </>
    )
}

export default MenuDashboard;