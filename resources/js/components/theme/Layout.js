import NavBar from './NavBar'
import TopHeader from './TopHeader'

export default function Layout({children}) {
    return (
        <div>
            <TopHeader />
                <div className="container-fluid row">
                    <div className="col-3">
                        <NavBar />
                    </div>

                    <div className="col-9">
                    {children}

                    </div>
                </div>

        </div>
    )
}
