import './styles.css';

interface CardsData {
    cardTitle: string;
    valueInformation: string,
    cardSubTitle: string,
    icon: any
}

function CardsData({ cardTitle, valueInformation, cardSubTitle, icon }: CardsData) {

    return(
        <>
            <div className='cardsData-content'>
                <div className='cards'>
                    <div className='title-content'>
                        <text className='text-title'>{cardTitle}</text>
                        <text>{icon}</text>
                    </div>
                    <div className='text-informations-content'>
                        <text className='text-balance'>{valueInformation}</text>
                        <text className='text-information'>{cardSubTitle}</text>
                    </div>
                </div>                
            </div>
        </>
    )
}

export default CardsData;