import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface NavBarItemProps {
	isOpen: boolean;
}

const NavBarItem = (props: NavBarItemProps) => {
	return (
		<Link href={'/user'}>
			<a className="flex flex-auto items-center justify-left w-full space-x-3 transition-all transform">
				<FontAwesomeIcon icon={faUser} />
				<p
					className={
						props.isOpen
							? 'opacity-100 navbar-item-in'
							: 'opacity-0 navbar-item-out'
					}
				>
					User Management
				</p>
			</a>
		</Link>
	);
};

export default NavBarItem;
