/* eslint-disable react/prop-types */

import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { SidebarItem } from './';

export const Sidebar = ({ drawerWidth = 250 }) => {
	const { displayName } = useSelector((state) => state.auth);
	const { notes } = useSelector((state) => state.journal);

	return (
		<>
			<Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
				<Drawer
					variant="permanent" //temporary
					open={true}
					sx={{
						display: { xs: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}>
					<Toolbar>
						<Typography variant="h6" noWrap component="div">
							{displayName}
						</Typography>
					</Toolbar>
					<Divider />

					<List>
						{notes.map((note) => (
							<SidebarItem key={note.id} note={note} />
						))}
					</List>
				</Drawer>
			</Box>
		</>
	);
};
