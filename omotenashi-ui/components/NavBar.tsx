import { useGlobalContext } from './context/GlobalMenuContext';
import MenuCaret from './MenuCaret';
import NavBarItem from './NavBarItem';

const NavBar = () => {
	const { menuOpen } = useGlobalContext();

	return (
		<>
			{/* background wrapper */}
			<div className="h-full w-full bg-gradient-to-t from-[#29323c] to-[#313942]">
				<div
					className={
						menuOpen
							? 'px-6 flex align-middle pt-8 text-clip'
							: 'px-6 pt-8 flex align-middle text-clip'
					}
				>
					<div className="text-white text-base h-6 overflow-hidden w-full">
						<NavBarItem isOpen={menuOpen} />
					</div>
					<MenuCaret />
				</div>
			</div>
		</>
	);
};

export default NavBar;
