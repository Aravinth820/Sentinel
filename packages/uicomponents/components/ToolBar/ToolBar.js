import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Divider, List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '../../inputs/Button/Button';
import SearchTextBox from '../../inputs/SearchTextBox'
import { Popover } from '@mui/material';
import Chips from '../../inputs/Chip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAndSort from '../FilterAndSort.js/FilterandSort'
import FilterList from '../../assests/images/filter_list.svg'
import ArrowDown from '../../assests/images/arrow_dropdown.svg'
import ArrowUp from '../../assests/images/arrowup_dropdown.svg'
import ClearIcon from '@mui/icons-material/Clear';

const useStyles = makeStyles((theme) => ({
    appBar: {
        '&.MuiAppBar-root': {
            backgroundColor: '#ffffff !important',
            height: '48px !important',
            boxShadow: 'none',
            border: '1px solid #EFF0F1'
        },
    },
    toolbar: {
        '&.MuiToolbar-root': {
            minHeight: "48px !important",
            paddingLeft: '24px',
            paddingRight: '24px',
            display: 'flex',
            alignItems: 'center',
        },
    },
    Divider: {
        '&.MuiDivider-root': {
            border: "1px solid #EFF0F1",
            height: "16px",
            marginLeft: "6px",
            marginRight: "6px",
            marginTop: '7px',
        }
    },
    Divider1: {
        '&.MuiDivider-root': {
            border: "1px solid #EFF0F1",
            height: "15px",
            marginLeft: "16px",
            marginRight: "6px",
            marginTop: '15px',
        }
    },
    Divider2: {
        '&.MuiDivider-root': {
            border: "1px solid #EFF0F1",
            height: "16px",
            marginLeft: "6px",
            marginRight: "6px",
            marginTop: '4px',
        }
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
    },
    center1: {
        gap: '8px',
        display: 'flex',
        alignItems: 'center',
    },
    ButtonStyle: {
        fontFamily: 'Inter !important',
        fontStyle: 'normal !important',
        fontWeight: "600 !important",
        fontSize: '12px !important',
        lineHeight: '16px !important',
        color: '#050E25 !important',
        textTransform: 'none !important',
    },
    IconSize: {
        '&.MuiSvgIcon-root': {
            height: '16px',
            width: '16px',
        },
    },
    divContainer: {
        border: '1px solid #EFF0F1',
        borderRadius: '4px',
        gap: '4px',
        padding: '2px 4px 2px 4px !important',
        display: 'flex !important'
    },
    IconBtn: {
        '& .MuiIconButton-root': {
            padding: '0px !important',
        }
    },
    TextIconBox: {
        gap: '6px',
        display: 'flex',
        alignItems: 'center',
    },
    ButtonGroup: {
        gap: '10px',
        display: 'flex !important',
    },
    ButtonAuditGrp: {
        display: 'flex !important',
        marginLeft: '10px',
        gap: '10px',
    },
    DisabledStyle: {
        fontFamily: 'Inter !important',
        fontStyle: 'normal !important',
        fontWeight: "400 !important",
        fontSize: '12px !important',
        lineHeight: '16px !important',
        color: '#050E25 !important',
        textTransform: 'none !important',
        color: '#626776',
        pointerEvents: 'none',
    },
    popover: {
        // width:'100%',
        display: 'flex',
        marginTop: '8px',
        justifyContent: 'space-between',
        //border: '2px solid green',
        minWidth: '100% !important',
        left: '0px !important'
    },
    popoverContainer: {
        width: '100%',
        //minHeight:'232px'
    },
    filterContainer: {
        display: 'flex'
    },

    box1: {
        width: '183px',
        padding: '16px 0px 16px 0px',
        borderRight: '1px solid #EFF0F1'
    },

    gridItem: {
        padding: '16px 0px 16px 24px',
        alignItems: 'center',
        fontFamily: 'Inter',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '16px',
        maxWidth: '183px',
        color: '#626776',
        cursor: 'pointer'
    },
    box2: {
        display: 'flex',
        //border: '2px solid red',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '28px 0px 24px 32px',
        width: '100%'
    },
    nestedBox: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexGrow: 'wrap',
        width: 'fit-content !important'
    },
    nestedItem: {
        fontFamily: 'Inter !important',
        fontSize: '12px !important',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '16px !important',
        minWidth: '100px !important',

    },
    arrowStyle: {
        color: '#626776 !important',
        width: '12px',
        height: '12px',
        flexShrink: 0
    },
    bottomContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderTop: '1px solid #EFF0F1',
        padding: '16px 16px 16px 24px',
        //height: '46px',
        width: '100%',
        flexGrow: 1,
        gap: 8
    },
    filtersApplied: {
        fontFamily: 'Inter !important',
        fontSize: '12px !important',
        fontStyle: 'normal !important',
        fontWeight: '600 !important',
        lineHeight: '16px !important',
        color: '#9497A1 !important',
        paddingRight: '16px'
    },
    selectedItem: {
        backgroundColor: '#F6F9FF',
        color: '#050E25'
    }

}));

const filterData1 = [
    {
        label: 'Job Details',
        filterLevels: [
            {
                label: 'Importer',
                id: 'Importer',
                subFilterValues: [
                    {
                        label: 'Search By Importer',
                        id: 'Search By Importer',
                        boxPosition: 'translateX(-20%)',
                        ArrowPosition: '130px',
                    },

                ]
            },
            {
                label: 'Shipper',
                id: 'Shipper',
                subFilterValues: [
                    {
                        label: 'Search By Shipper',
                        id: 'Search By Shipper'
                    },

                ]
            },
            {
                label: 'BE Date',
                id: 'BE Date',
                filterType: 'Date&Time',
            },
            {
                label: 'Job Created On',
                id: 'JOb Created On',
                filterType: 'Date&Time'
            },
            {
                label: 'MOT',
                id: 'MOT',
                subFilterValues: [
                    {
                        label: 'Search By Mot',
                        id: 'Search By MOT'
                    },

                ]
            },
            {
                label: 'CB Details',
                id: 'CB Details',
                subFilterValues: [
                    {
                        label: 'Search By CB Details',
                        id: 'CB Details'
                    },

                ]
            },
            {
                label: 'Bond No',
                id: 'Bond No',
                subFilterValues: [
                    {
                        label: 'Search By Bond No',
                        id: 'Bond No'
                    },

                ]
            },

        ]
    },
    {
        label: 'Shipment Details',
        filterLevels: [
            {
                label: 'Port Of Origin',
                id: 'Port Of Origin',
                subFilterValues: [
                    {
                        label: 'Search By Port Of Origin',
                        id: 'Search By Port Of Origin'
                    },

                ]
            },
            {
                label: 'Port Of Shipment',
                id: 'Port Of Shipment',
                subFilterValues: [
                    {
                        label: 'Search By Port Of Shipment',
                        id: 'Search By Port Of Shipment'
                    },

                ]
            },


        ]
    },
    {
        label: 'IGM Details',
        filterLevels: [
            {
                label: 'IGM No',
                id: 'IGM No',
                subFilterValues: [
                    {
                        label: 'Search By IGM No',
                        id: 'Search By IGM No'
                    },

                ]
            },
            {
                label: 'MAWB No',
                id: 'MAWB No',
                subFilterValues: [
                    {
                        label: 'Search By MAWB No',
                        id: 'Search By MAWB No'
                    },

                ]
            },
        ]
    },

]
const filterData2 = [
    {
        label: 'Shipment Details',
        filterLevels: [
            {
                label: 'Importer',
                subFilterValues: [
                    {
                        label: 'Search By Importer',
                        id: 'Search By Importer'
                    },

                ]
            },
            {
                label: 'Shipper',
                subFilterValues: [
                    {
                        label: 'Search By Shipper',
                        id: 'Search By Shipper'
                    },

                ]
            },
            {
                label: 'BE Date',
                id: 'BE Date',
                filterType: 'Date&Time',
            },
            {
                label: 'Job Created On',
                subFilterValues: [
                    {
                        label: 'Search By Job Created On',
                        id: 'Job Created On'
                    },

                ]
            },
            {
                label: 'MOT',
                subFilterValues: [
                    {
                        label: 'Search By Mot',
                        id: 'Search By MOT'
                    },

                ]
            },
            {
                label: 'CB Details',
                subFilterValues: [
                    {
                        label: 'Search By CB Details',
                        id: 'CB Details'
                    },

                ]
            },
            {
                label: 'Bond No',
                subFilterValues: [
                    {
                        label: 'Search By Bond No',
                        id: 'Bond No'
                    },

                ]
            },

        ]
    },
    {
        label: 'IGM Details',
        filterLevels: [
            {
                label: 'Port Of Origin',
                subFilterValues: [
                    {
                        label: 'Search By Port Of Origin',
                        id: 'Search By Port Of Origin'
                    },

                ]
            },
            {
                label: 'Port Of Shipment',
                subFilterValues: [
                    {
                        label: 'Search By Port Of Shipment',
                        id: 'Search By Port Of Shipment'
                    },

                ]
            },


        ]
    },
    {
        label: 'Job Details',
        filterLevels: [
            {
                label: 'IGM No',
                subFilterValues: [
                    {
                        label: 'Search By IGM No',
                        id: 'Search By IGM No'
                    },

                ]
            },
            {
                label: 'MAWB No',
                subFilterValues: [
                    {
                        label: 'Search By MAWB No',
                        id: 'Search By MAWB No'
                    },

                ]
            },
        ]
    },

]
const filterData3 = [
    {
        label: 'Job Details',
        filterLevels: [
            {
                label: 'Importer',
                subFilterValues: [
                    {
                        label: 'Search By Importer',
                        id: 'Search By Importer'
                    },

                ]
            },
            {
                label: 'Shipper',
                subFilterValues: [
                    {
                        label: 'Search By Shipper',
                        id: 'Search By Shipper'
                    },

                ]
            },
            {
                label: 'BE Date',
                id: 'BE Date',
                filterType: 'Date&Time',
            },
            {
                label: 'Job Created On',
                subFilterValues: [
                    {
                        label: 'Search By Job Created On',
                        id: 'Job Created On'
                    },

                ]
            },
            {
                label: 'MOT',
                subFilterValues: [
                    {
                        label: 'Search By Mot',
                        id: 'Search By MOT'
                    },

                ]
            },
            {
                label: 'CB Details',
                subFilterValues: [
                    {
                        label: 'Search By CB Details',
                        id: 'CB Details'
                    },

                ]
            },
            {
                label: 'Bond No',
                subFilterValues: [
                    {
                        label: 'Search By Bond No',
                        id: 'Bond No'
                    },

                ]
            },

        ]
    },
    {
        label: 'Shipment Details',
        filterLevels: [
            {
                label: 'Port Of Origin',
                subFilterValues: [
                    {
                        label: 'Search By Port Of Origin',
                        id: 'Search By Port Of Origin'
                    },

                ]
            },
            {
                label: 'Port Of Shipment',
                subFilterValues: [
                    {
                        label: 'Search By Port Of Shipment',
                        id: 'Search By Port Of Shipment'
                    },

                ]
            },


        ]
    },
    {
        label: 'IGM Details',
        filterLevels: [
            {
                label: 'IGM No',
                subFilterValues: [
                    {
                        label: 'Search By IGM No',
                        id: 'Search By IGM No'
                    },

                ]
            },
            {
                label: 'MAWB No',
                subFilterValues: [
                    {
                        label: 'Search By MAWB No',
                        id: 'Search By MAWB No'
                    },

                ]
            },
        ]
    },

]

const myArray = [
    { id: 1, label: 'Schneider Electric India', checked: false, fieldName: 'Schneider Electric India' },
    { id: 2, label: 'TaTa Motors', checked: false, fieldName: 'TaTa Motors' },
    { id: 3, label: 'V-GUARD INDUSTRIES LIMITED', checked: false, fieldName: 'V-GUARD INDUSTRIES LIMITED' },
    { id: 4, label: 'BERRY N BLOSSOM THE PVT LTD', checked: false, fieldName: 'BERRY N BLOSSOM THE PVT LTD' },
    { id: 5, label: 'Auther', checked: false, fieldName: 'Auther' },
    { id: 6, label: 'Nippon', checked: false, fieldName: 'Nippon' },
    { id: 7, label: 'TVS Motors', checked: false, fieldName: 'TVS Motors' },
    { id: 8, label: 'Hyundai India', checked: false, fieldName: 'Hyundai India' },
    { id: 9, label: 'BERRY N BLOSSOM THE PASTRY LAND PVT LTD', checked: false, fieldName: 'BERRY N BLOSSOM THE PASTRY LAND PVT LTD' },
    { id: 10, label: 'Toyota', checked: false, fieldName: 'Toyota' },
   
];



const ToolBarReusable = ({ data, buttonComponent, buttonComponent1, searchBox, auditIcons, auditValues, handleIconClick }) => {
    const { icons, disabledIcons, dividerIndices, group, scenario, selectionIcon, isTextDisabled, isButtonGrp, filter } = data

    console.log('buttoncomponent', buttonComponent);
    console.log('buttoncomponent11', buttonComponent1);
    const classes = useStyles();
    const iconClick = () => {
        handleIconClick()
    }
    const renderIcons = () => {
        return icons.map((Icon, index) => {
            const isDisabled = disabledIcons && disabledIcons.includes(index);
            return (
                <React.Fragment key={index}>
                    <IconButton disabled={isDisabled}>
                        <Icon className={classes.IconSize} onClick={iconClick} />
                    </IconButton>
                    {dividerIndices.includes(index + 1) && index !== icons.length - 1 && <Divider orientation="vertical" flexItem className={classes.Divider} />}
                </React.Fragment>
            );
        });
    };

    const renderAuditIcons = () => {
        return auditIcons.map((icon, index) => {
            const IconComponent = icon.component;
            return (
                <Box className={classes.divContainer} key={index}>
                    <IconButton style={{ padding: '0px', color: icon.color }}>
                        <IconComponent className={classes.IconSize} />
                    </IconButton>
                    <span className={classes.ButtonStyle}>{auditValues[index]}</span>
                </Box>
            );
        });
    };

    const renderText = () => {
        let text = '';
        switch (scenario) {
            case 'selectedItems':
                text = `Selected ${data.dynamicNumber[0]} Items from ${data.dynamicNumber[1]} Invoice`;
                break;
            case 'selectedItemsMultiple':
                text = `Selected ${data.dynamicNumber} Items`;
                break;
            case 'totalJobs':
                text = `Total Jobs: ${data.dynamicNumber}`;
                break;
            default:
                text = '';
        }
        return text;
    };






    return (
        <AppBar position="static" color="default" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.TextIconBox}>
                    {selectionIcon && (
                        <IconButton className={classes.IconButton}>
                            {React.createElement(selectionIcon, { className: classes.IconSize })}
                        </IconButton>
                    )}
                    <Typography className={isTextDisabled ? classes.DisabledStyle : classes.ButtonStyle}>{renderText()}</Typography>
                    {filter && (<FilterDropDown />)}
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                <Box className={classes.center}>
                    {renderIcons()}
                </Box>
                <Divider orientation="vertical" flexItem className={classes.Divider1} />
                {searchBox ? (
                    <Box className={classes.center1} style={{ marginLeft: '11px' }}>
                        {<SearchTextBox {...searchBox} />}
                        {isButtonGrp ? (
                            <Divider orientation="vertical" flexItem className={classes.Divider} />
                        ) : null}
                    </Box>
                ) : null}

                <Box className={classes.ButtonAuditGrp} >
                    {group ? (
                        <Box className={classes.center1}>
                            <Typography className={classes.ButtonStyle}>Audit</Typography>
                            <div className={classes.center1}>
                                {renderAuditIcons()}
                            </div>
                        </Box>
                    ) : null}
                    {isButtonGrp ? (
                        <Box className={classes.ButtonGroup} display="flex">
                            <Divider orientation="vertical" flexItem className={classes.Divider2} />
                            <Button {...buttonComponent} />
                            <Divider orientation="vertical" flexItem className={classes.Divider2} />
                            <Button {...buttonComponent1} />
                        </Box>
                    ) : (<Box className={classes.ButtonGroup} display="flex">
                        <Button {...buttonComponent} classProperties='primaryButtonNormal' />
                    </Box>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default ToolBarReusable



export const FilterDropDown = () => {
    const classes = useStyles()
    const [filterItemDetails, setFilterItemDetails] = React.useState(filterData1)
    const [listData, setListData] = React.useState(myArray)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedItem, setSelectedItem] = React.useState('Job Details')
    const [appliedFilters, setAppliedFilters] = React.useState([])
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const handleFilterItemClick = (selectedItem) => {
        if (selectedItem === 'Invoice Details') {
            setFilterItemDetails(filterData2)
        }
        else if (selectedItem === 'Item Details') {
            setFilterItemDetails(filterData3)
        }
        else {
            setFilterItemDetails(filterData1)
        }
        setSelectedItem(selectedItem)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleData = (checkedIds, payload) => {
        setAppliedFilters((prevState) => [...prevState, ...payload.selected])
        const filterFields = listData.map(field => {
            const checked = checkedIds.includes(field.id)
            return { ...field, checked }
        })
        setListData(filterFields)
        console.log(checkedIds, payload)
    }

    const handleChipDelete = (id) => {
        const canceledFields = listData.map(field => {
            const checked = field.id === id ? field.checked = false : field.checked
            return { ...field, checked }
        })
        setListData(canceledFields)

        setAppliedFilters((prevChips) => prevChips.filter((c) => c.id !== id))
        console.log(id)
        
    }

    const handleClearAll = () => {
        setListData(myArray)
        setAppliedFilters([])
    }   
   
    const handleSearchInput = () => {}
    let filterCount = `(${appliedFilters.length})`
    console.log(appliedFilters)
    return (<div>
        <Button text={`Filter${appliedFilters.length > 0 ? filterCount : ''}`} classProperties='tertiaryButtonNormal' endIcon={true} startIcon={true} onClick={handleClick} leftIcon={FilterList} rightIcon={open ? ArrowUp : ArrowDown} />
        <Popover
            // id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            classes={{ paper: classes.popover }}
            sx={{
                '& .MuiPaper-elevation8': {
                    boxShadow: '0px 12px 17px 0px #EFF3FA',
                },
            }}
        >
            <Box className={classes.popoverContainer}>
                <Box className={classes.filterContainer}>
                    <Box className={classes.box1}>
                        <Box className={`${classes.gridItem} ${selectedItem === 'Job Details' ? classes.selectedItem : ''} `} onClick={() => handleFilterItemClick(event.target.textContent)}>Job Details</Box>
                        <Box className={`${classes.gridItem} ${selectedItem === 'Invoice Details' ? classes.selectedItem : ''} `} onClick={() => handleFilterItemClick(event.target.textContent)}>Invoice Details</Box>
                        <Box className={`${classes.gridItem} ${selectedItem === 'Item Details' ? classes.selectedItem : ''} `} onClick={() => handleFilterItemClick(event.target.textContent)}>Item Details</Box>
                    </Box>
                    <List className={classes.box2}>
                        {filterItemDetails.map(each =>
                            <ListItem className={classes.nestedBox}>
                                <Typography className={classes.nestedItem}>{each.label}</Typography>
                                {each.filterLevels.map(each => (
                                    <FilterAndSort
                                        data={each}
                                        //id={each.subFilterValues.id}
                                        listData={listData}
                                        icon={<Chips label={each.label} icon={<KeyboardArrowDownIcon className={classes.arrowStyle} />} />}
                                        filterType={each.filterType}
                                        handleData={handleData}
                                        boxPosition={'translateX(10%)'}
                                        // ArrowPosition={'40px'} 
                                        fieldName={'Toolbar'}
                                    />
                                ))}
                            </ListItem>
                        )}
                    </List>
                </Box>
                <Box className={classes.bottomContainer}>
                    <Typography className={classes.filtersApplied}>{appliedFilters.length} Filters Applied</Typography>
                    {appliedFilters.map(each =>
                        <Chips
                            label={each.value}
                            id={each.id}
                            icon={<ClearIcon className={classes.arrowStyle} />}
                            styles={{
                                color: '#050E25',
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontFamily: 'Inter',
                                background: '#EFF0F1'
                            }}
                            handleChipDelete={handleChipDelete}
                        />
                    )}
                    <Button text='Clear All' classProperties='tertiaryButtonNormal' onClick={handleClearAll} />
                </Box>
            </Box>
        </Popover>
    </div>)
}