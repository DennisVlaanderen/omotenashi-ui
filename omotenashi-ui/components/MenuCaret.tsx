import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from './context/GlobalMenuContext';

const MenuCaret = () => {

	const {menuOpen, setMenuOpen} = useGlobalContext()

	return (
		<>
			<button
				onClick={() => setMenuOpen(!menuOpen)}
				className={
					menuOpen
						? 'bg-sky-400 h-8 w-40 mx-auto bottom-6 fixed rounded-md transform transition-all duration-500 delay-150'
						: 'hover:bg-indigo-500 h-8 w-8 mx-auto bottom-6 rounded-3xl fixed transform transition-all duration-500'
				}
			>
				<FontAwesomeIcon
					icon={faAnglesRight}
					className={
						menuOpen
							? 'text-white text-lg left-14 relative transition-all transform rotate-180 duration-500 delay-150'
							: 'text-white text-lg left-0 relative transition-all transform duration-300'
					}
				/>
			</button>
		</>
	);
};

export default MenuCaret;
