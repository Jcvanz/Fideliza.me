import './styles.css'
import SelectAccount from '../shadcnComponents/SelectAccount';
import AccordionComponent from '../shadcnComponents/Accordion';

function LeftBar() {

    return (
        <>
            <div className="menuLeft-container">
                <div className='btn-content'>
                    <SelectAccount btnClassName='w-[160px] justify-start'/>
                </div>
                <div className='side-menu'>
                    <AccordionComponent/>
                </div>
            </div>
        </>
    )
}
  
export default LeftBar;