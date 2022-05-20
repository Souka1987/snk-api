import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LabelIcon from '@mui/icons-material/Label';

import {
    useTranslate,
    // DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

import countries from '../countries';
// import orders from '../orders';
// import invoices from '../invoices';
import planets from '../planets';
import categories from '../categories';
// import reviews from '../reviews';
import SubMenu from './SubMenu';
import PublicIcon from '@mui/icons-material/Public';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TagIcon from '@mui/icons-material/Tag';
import VisibilityIcon from '@mui/icons-material/Visibility';

type MenuName = 'menuPlanet' | 'menuCountries';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuPlanet: true,
        // menuSales: true,
        menuCountries: true,
    });
    const translate = useTranslate();
    const [open] = useSidebarState();

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            {/* <DashboardMenuItem /> */}
            {/* <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                name="pos.menu.sales"
                icon={<orders.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/commands"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.commands.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/invoices"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.invoices.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<invoices.icon />}
                    dense={dense}
                />
            </SubMenu> */}
            <SubMenu
                handleToggle={() => handleToggle('menuPlanet')}
                isOpen={state.menuPlanet}
                name="pos.menu.planets"
                icon={<AutoAwesomeIcon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/planets"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.planets.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<AutoAwesomeIcon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/categories"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.categories.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<TagIcon />}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCountries')}
                isOpen={state.menuCountries}
                name="pos.menu.countries"
                icon={<PublicIcon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/countries"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.countries.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<PublicIcon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/segments"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.segments.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<LabelIcon />}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                to="/reviews"
                state={{ _scrollToTop: true }}
                primaryText={translate(`resources.reviews.name`, {
                    smart_count: 2,
                })}
                leftIcon={<VisibilityIcon />}
                dense={dense}
            />
        </Box>
    );
};

export default Menu;
