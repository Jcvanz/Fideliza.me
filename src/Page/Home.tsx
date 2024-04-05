import BottomBar from "@/components/tabBar/BottomBar"
import Dashboard from "../components/dashboards/Dashboard"
import LeftBar from "../components/tabBar/LeftBar"
import TopBar from "../components/tabBar/TopBar"

function Home() {
    return (
        <>
            <div className="rootContainer">
                <LeftBar/>
                <div className="rootContent">
                    <TopBar/>
                    <div className="dashboard-content">
                        <Dashboard/>
                        <BottomBar/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home