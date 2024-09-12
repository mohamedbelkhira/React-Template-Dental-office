import PropTypes from 'prop-types';
// material-ui
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import NavItem from './NavItem';
import { useGetMenuMaster } from 'api/menu';
import { Collapse } from '@mui/material';
import { useState } from 'react';

export default function NavGroup({ item }) {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  // State to track the open/close status of collapsible items
  const [open, setOpen] = useState({});

  // Toggle collapse function
  const handleToggle = (id) => {
    setOpen((prevOpen) => ({ ...prevOpen, [id]: !prevOpen[id] }));
  };

  const navCollapse = item.children?.map((menuItem) => {
    switch (menuItem.type) {
      case 'collapse':
        return (
          <div key={menuItem.id}>
            {/* Handle collapsible item */}
            <NavItem item={menuItem} level={1} onClick={() => handleToggle(menuItem.id)} isCollapsible isOpen={open[menuItem.id]} />
            {/* Render the children with Collapse component */}
            <Collapse in={open[menuItem.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menuItem.children?.map((child) => (
                  <NavItem key={child.id} item={child} level={2} />
                ))}
              </List>
            </Collapse>
          </div>
        );
      case 'item':
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Fix - Group Collapse or Items
          </Typography>
        );
    }
  });

  return (
    <List
      subheader={
        item.title &&
        drawerOpen && (
          <Box sx={{ pl: 3, mb: 1.5 }}>
            <Typography variant="subtitle2" color="textSecondary">
              {item.title}
            </Typography>
            {/* only available in paid version */}
          </Box>
        )
      }
      sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
    >
      {navCollapse}
    </List>
  );
}

NavGroup.propTypes = { item: PropTypes.object };
