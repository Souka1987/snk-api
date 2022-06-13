import * as React from 'react';
// import { Card, CardContent } from '@mui/material';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOnOutlined';
// import MailIcon from '@mui/icons-material/MailOutline';
// import LocalOfferIcon from '@mui/icons-material/LocalOfferOutlined';
// import { FilterList, FilterListItem, FilterLiveSearch } from 'react-admin';
// import {
//     endOfYesterday,
//     startOfWeek,
//     subWeeks,
//     startOfMonth,
//     subMonths,
// } from 'date-fns';

// import categories from '../categories/data';

// const Aside = () => (
//     <Card
//         sx={{
//             display: {
//                 xs: 'none',
//                 md: 'block',
//             },
//             order: -1,
//             flex: '0 0 15em',
//             mr: 2,
//             mt: 8,
//             alignSelf: 'flex-start',
//         }}
//     >
//         <CardContent sx={{ pt: 1 }}>
//             <FilterLiveSearch />

//             {/* <FilterList
//                 label="resources.countries.filters.last_visited"
//                 icon={<AccessTimeIcon />}
//             >
//                 <FilterListItem
//                     label="resources.countries.filters.today"
//                     value={{
//                         last_seen_gte: endOfYesterday().toISOString(),
//                         last_seen_lte: undefined,
//                     }}
//                 />
//                 <FilterListItem
//                     label="resources.countries.filters.this_week"
//                     value={{
//                         last_seen_gte: startOfWeek(new Date()).toISOString(),
//                         last_seen_lte: undefined,
//                     }}
//                 />
//                 <FilterListItem
//                     label="resources.countries.filters.last_week"
//                     value={{
//                         last_seen_gte: subWeeks(
//                             startOfWeek(new Date()),
//                             1
//                         ).toISOString(),
//                         last_seen_lte: startOfWeek(new Date()).toISOString(),
//                     }}
//                 />
//                 <FilterListItem
//                     label="resources.countries.filters.this_month"
//                     value={{
//                         last_seen_gte: startOfMonth(new Date()).toISOString(),
//                         last_seen_lte: undefined,
//                     }}
//                 />
//                 <FilterListItem
//                     label="resources.countries.filters.last_month"
//                     value={{
//                         last_seen_gte: subMonths(
//                             startOfMonth(new Date()),
//                             1
//                         ).toISOString(),
//                         last_seen_lte: startOfMonth(new Date()).toISOString(),
//                     }}
//                 />
//                 <FilterListItem
//                     label="resources.countries.filters.earlier"
//                     value={{
//                         last_seen_gte: undefined,
//                         last_seen_lte: subMonths(
//                             startOfMonth(new Date()),
//                             1
//                         ).toISOString(),
//                     }}
//                 />
//             </FilterList> */}

//             {/* <FilterList
//                 label="resources.countries.filters.has_ordered"
//                 icon={<MonetizationOnIcon />}
//             >
//                 <FilterListItem
//                     label="ra.boolean.true"
//                     value={{
//                         nb_commands_gte: 1,
//                         nb_commands_lte: undefined,
//                     }}
//                 />
//                 <FilterListItem
//                     label="ra.boolean.false"
//                     value={{
//                         nb_commands_gte: undefined,
//                         nb_commands_lte: 0,
//                     }}
//                 />
//             </FilterList> */}
// {/* 
//             <FilterList
//                 label="resources.countries.filters.has_newsletter"
//                 icon={<MailIcon />}
//             >
//                 <FilterListItem
//                     label="ra.boolean.true"
//                     value={{ has_newsletter: true }}
//                 />
//                 <FilterListItem
//                     label="ra.boolean.false"
//                     value={{ has_newsletter: false }}
//                 />
//             </FilterList> */}

//             <FilterList
//                 label="resources.countries.filters.tag"
//                 icon={<LocalOfferIcon />}
//             >
//                 {categories.map(category => (
//                     <FilterListItem
//                         label={category.name}
//                         key={category.id}
//                         value={{ groups: category.id }}
//                     />
//                 ))}
//             </FilterList>
//         </CardContent>
//     </Card>
// );

// export default Aside;
