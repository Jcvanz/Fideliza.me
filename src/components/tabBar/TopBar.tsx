import DropdownMenuComponent from '../shadcnComponents/DropdownMenu';
import './styles.css'

function TopBar() {

    return (
        <>
            <div className="menuTop-container">
                <div className='menuTop-content'>
                    <a href='../../../index.html' className='menuTop-title'>Dashboard</a>
                    <DropdownMenuComponent/>
                </div>
            </div>
        </>
    )
}
  
export default TopBar;