import { useState } from 'react';
import { GlobalMenuContext } from './context/GlobalMenuContext';
import NavBar from './NavBar';

interface DashboardProps {
	children?: React.ReactNode;
}

const Dashboard = (props: DashboardProps) => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<GlobalMenuContext.Provider value={{ menuOpen, setMenuOpen }}>
			<div
				className={
					menuOpen
						? 'h-screen grid grid-cols-[13rem_1fr] transition-all duration-300'
						: 'h-screen grid grid-cols-[5rem_1fr] transition-all duration-300 delay-150'
				}
			>
				<NavBar/>
				{props.children}
			</div>
		</GlobalMenuContext.Provider>
	);
};

export default Dashboard;
