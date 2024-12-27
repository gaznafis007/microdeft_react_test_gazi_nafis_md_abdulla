import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2 className="text-6xl text-zinc-600 text-center p-12">Microdeft intern task</h2>
            <Outlet/>
        </div>
    );
};

export default Main;