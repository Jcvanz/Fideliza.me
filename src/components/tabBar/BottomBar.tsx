import './styles.css'
import SelectAccount from '../shadcnComponents/SelectAccount';
import AccordionComponent from '../shadcnComponents/Accordion';

function BottomBar() {

    return (
        <>
            <div className="menuBottom-container">
                <div className='btnBt-content'>
                    <AccordionComponent/>
                    <SelectAccount />
                </div>
            </div>
        </>
    )
}
  
export default BottomBar;