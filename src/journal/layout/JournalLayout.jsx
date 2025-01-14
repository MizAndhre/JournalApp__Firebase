/* eslint-disable react/prop-types */

import { Box, Toolbar } from '@mui/material';
import { Navbar, Sidebar } from '../components';

const drawerWidth = 250;

export const JournalLayout = ({ children }) => {
	return (
		<>
			<Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__fast">
				{/* navbar drawerWidth */}
				<Navbar drawerWidth={drawerWidth} />
				{/* sidebar  drawerWidth */}
				<Sidebar drawerWidth={drawerWidth} />

				<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
					{/* Toolbar */}
					<Toolbar />

					{children}
				</Box>
			</Box>
		</>
	);
};
