import Air from '../assests/images/Air.svg'
import Sea from '../assests/images/Sea.svg'
import Land from '../assests/images/Land.svg'
import Home from '../assests/images/homeicons.svg'
import WareHouse from '../assests/images/WareHouse.svg'
import Exbond from '../assests/images/Exbond.svg'
export const BasicDetails = [
    {
       // name:"Mot",
        label:"Mode of Transport",
        type:"selectCard",
        optionName:'mot',
        selected:false,
        Inputs:[{label:"Air" , value:"Air", selected:true, image:Air},{label:"Sea" , value:"Sea", selected:false, image:Sea},{label:"Land" , value:"Land", selected:false, image: Land}]
    },
    {
        //name:"Mot",
       optionName:'beType',
        label:"BE Type",
        type:"selectCard",
        selected:false,
        Inputs:[{label:"Home Consumption" , value:"Home Consumption", selected:true, image:Home},{label:"Warehouse" , value:"Warehouse", selected:false, image:WareHouse},{label:"Exbond" , value:"Exbond",selected:false, image:Exbond}]

    },
    {
      //  name:"Mot",
        label:"Importer Details",
        type:"textField",
        placeholder:"Enter Name"
       

    },
    {
        label:"Select CB Branch",
        optionName:'FLYJAC',
        type:"dropdown",
        placeholder:"Select Branch"
    },
    {
        label:"Port of Loading",
        optionName:'portOfLoading',
        type:"dropdown",
        placeholder:"Select Port"
    },
    {
        label:"Custom House Code",
        optionName:'CustomsHouseCode',
        type:"dropdown",
        placeholder:"Select Custom House Code",

    },
    {
        label:"Assigned To",
        type:"chipText",
    },
    {
        label:"Reference No",
        type:"dropdown",
        placeholder:"Enter Reference No."
        

    }
]