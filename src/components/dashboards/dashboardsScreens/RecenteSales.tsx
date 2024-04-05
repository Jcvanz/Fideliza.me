import AvatarComponent from '@/components/shadcnComponents/Avatar';
import './styles.css';

interface Sale {
    id: number;
    name: string;
    email: string;
    value: number;
}
  
interface Props {
    sales: Sale[];
}

function RecentSales({ sales }: Props) {
    // Cria um novo array, contendo apenas os 5 dados mais recentes
    const salesMax = 5;
    const recentSales = sales.slice(-salesMax);

    const totalSales = sales.length;

    return(
        <>
            <div className='sales-content'>
                <div className='sales-title-content'>
                    <text className='sales-title'>Vendas recentes</text>
                    <text className='sales-subtitle'>Você fez {totalSales} vendas este mês.</text>
                </div>
                {recentSales.map((sale) => (
                    <>
                    <div className='person-content'>
                        <div className='person-inf-content'>
                            <AvatarComponent/>
                            <div className='person-information'>
                                <text className='person-name'>{sale.name}</text>
                                <text className='person-email'>{sale.email}</text>
                            </div>
                        </div>
                        <div className='person-sale-content'>
                            <text className='person-sale'>+{sale.value}</text>
                        </div>
                    </div>
                    <div className='divider'></div>
                    </>
                ))}
            </div>
        </>
    )
}

export default RecentSales;