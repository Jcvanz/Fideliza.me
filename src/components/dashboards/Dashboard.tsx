import { useState } from 'react';
import './styles.css';
import MenuDashboard from './menu';
import Overview from './dashboardsScreens/Overview';

function Dashboard() {

    const [menuOnFocus, setMenuOnFocus] = useState(1);

    const handleOnFocus = (menuId: number) => {
        setMenuOnFocus(menuId);
    };

    return (
        <>
            <div className='dashboard-container'>
                <MenuDashboard 
                    handleOnFocus={handleOnFocus}
                />
                {menuOnFocus === 1 &&
                    <Overview/>
                }
            </div>
            
        </>
    )
}

export default Dashboard;