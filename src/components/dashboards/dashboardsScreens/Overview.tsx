import { useState } from 'react';
import CardsData from './CardsData';
import './styles.css';
import { MdOutlineAttachMoney } from "react-icons/md";
import { LiaCreditCard } from "react-icons/lia";
import { BiGroup } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import RecentSales from './RecenteSales';
import GraphicOverview from './GraphicOverview';

function Overview() {
    //Array simulando os dados dos cards
    const [datas, setDatas] = useState([
        {
            "Receita total": 5000.34,
            "last-month-revenue": 2509.90,
            "Inscrições": 2600,
            "last-month-subs": 1340,
            "Vendas": 12903,
            "last-month-sales": 5090,
            "Ativos": 590,
            "last-month-actvive": 250
        }
    ])

    // Array simulando as vendas
    const salesData = [
        { id: 1, name: 'John Doe', email: 'teste123@gmail.com', value: 100 },
        { id: 2, name: 'Julio Doe', email: 'teste1234@gmail.com', value: 150 },
        { id: 3, name: 'João Doe', email: 'teste1235@gmail.com', value: 150 },
        { id: 4, name: 'Pedro Doe', email: 'teste1236@gmail.com', value: 150 },
        { id: 5, name: 'Pedro Doe', email: 'teste1236@gmail.com', value: 150 },
    ];

    const data = datas[0];

    let resultReceita = data["Receita total"] + data["last-month-revenue"];

    const refreshReceita = () => {
        const lastMonth = data["last-month-revenue"];
        const revenueTotal = data["Receita total"];

        let percentual = 0;
 
        if(revenueTotal > lastMonth) {
            percentual = ((revenueTotal - lastMonth) / lastMonth) * 100;
            const result = `+${percentual.toFixed(1)}`;
            return result;
        } else if (revenueTotal < lastMonth) {
            percentual = ((lastMonth - revenueTotal) / lastMonth) * 100;
            const result = `-${percentual.toFixed(1)}`;
            return result;
        } else {
            percentual = 0;
            const result = `${percentual.toFixed(1)}`;
            return result;
        }  
    }

    const refreshSubs = () => {
        const lastMonth = data["last-month-subs"];
        const subsTotal = data["Inscrições"];
        
        let change = '';
        let percentual = 0;
 
        if(subsTotal > lastMonth) {
            percentual = ((subsTotal - lastMonth) / lastMonth) * 100;
            change = '+';
        } else if (subsTotal < lastMonth) {
            percentual = ((lastMonth - subsTotal) / lastMonth) * 100;
            change = '-';
        } else {
            percentual = 0;
            change = ''
        }

        return { percentualSubs: percentual.toFixed(1), changeSubs: change };
    }

    const resultSubs = refreshSubs();

    const refreshSales = () => {
        const lastMonth = data["last-month-sales"];
        const salesTotal = data["Vendas"];
        
        let change = '';
        let percentual = 0;
 
        if(salesTotal > lastMonth) {
            percentual = ((salesTotal - lastMonth) / lastMonth) * 100;
            change = '+';
        } else if (salesTotal < lastMonth) {
            percentual = ((lastMonth - salesTotal) / lastMonth) * 100;
            change = '-';
        } else {
            percentual = 0;
            change = ''
        }

        return { percentualSales: percentual.toFixed(1), changeSales: change };
    }

    const resultSales = refreshSales();

    const refreshActive = () => {
        const lastMonth = data["last-month-actvive"];
        const activeTotal = data["Ativos"];
        
        let change = '';
        let percentual = 0;
 
        if(activeTotal > lastMonth) {
            percentual = ((activeTotal - lastMonth) / lastMonth) * 100;
            change = '+';
        } else if (activeTotal < lastMonth) {
            percentual = ((lastMonth - activeTotal) / lastMonth) * 100;
            change = '-';
        } else {
            percentual = 0;
            change = ''
        }

        return { percentualActive: percentual.toFixed(1), changeActive: change };
    }

    const resultActives = refreshActive();

    return(
        <>
            <div className='overview-content'>
                <div className='cards-content'>
                    <CardsData
                        cardTitle='Receita total'
                        cardSubTitle={`${refreshReceita()}% from last month`}
                        valueInformation={`$${resultReceita.toFixed(2)}`}
                        icon={<MdOutlineAttachMoney size={20}/>}
                    />
                    <CardsData
                        cardTitle="Inscrições"
                        cardSubTitle={`${resultSubs.changeSubs + resultSubs.percentualSubs}% from last month`}
                        valueInformation={`${resultSubs.changeSubs + data["Inscrições"]}`}
                        icon={<BiGroup size={20}/>}
                    />
                    <CardsData
                        cardTitle="Vendas"
                        cardSubTitle={`${resultSales.changeSales + resultSales.percentualSales}% from last month`}
                        valueInformation={`${resultSales.changeSales + data["Vendas"]}`}
                        icon={<LiaCreditCard size={20}/>}
                    />
                    <CardsData
                        cardTitle="Ativo"
                        cardSubTitle={`${resultActives.changeActive + resultActives.percentualActive}% since last hour`}
                        valueInformation={`${resultActives.changeActive}${data["Ativos"]}`}
                        icon={<SlGraph size={20}/>}
                    />
                </div>
                <div className='overview-container'>
                    <GraphicOverview/>
                    <RecentSales sales={salesData}/>
                </div>
            </div>
        </>
    )
}

export default Overview;