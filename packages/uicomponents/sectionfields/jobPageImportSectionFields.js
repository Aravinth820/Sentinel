const importColumns = [
  {
    row: [
      {
        id: "srNo",
        minWidth: 80,
       label: "S.No",
      }, 
      {
        id: "jobNo",
         minWidth: 90,
       
        label: "Job No",
        flexGrow: 1,
      },
      {
        id: "createDateTime",
        minWidth: 90,
       label: "Job Date & Time",
        filter: true,
        flexGrow: 1,
        filterType:'Date&Time',
        ArrowPosition:'301px'
      },
      {
        id: "transactionRefNo",
        minWidth: 90,
        label: "Reference No.",
        flexGrow: 1,
      },
      {
        id: "importerName",
       minWidth: 90,
        label: "Importer",
        filter: true,
        flexGrow: 1,
        subFilterValues: [
          {
            parentfield: "Importer",
            placeholder:'Search by Name',
            label: "Name",
            id: 'Name',
            width: 296,
            value: "customerName",
            filterType: "textField",
            level: "job",
          },
          {
            parentfield: "Importer",
            placeholder:'Search by ID',
            label: "ID",
            id:'ID',
            width: 139,
            value: "customerId",
            filterType: "textField",
            level: "job",
          },
          {
            parentfield: "Importer",
            placeholder:'Search by IEC',
            id:'IEC',
            label: "IEC",
            value: "customerIec",
            width: 139,
            filterType: "textField",
            level: "job",
          },
          {
            parentfield: "Importer",
            placeholder:'Search by AD Code',
            id:'AD Code',
            label: "AD Code",
            value: "customerAdCode",
            filterType: "textField",
            level: "job",
            width: 296,
          },
        ],
      },
      {
        id: "supplierName",
        minWidth: 90,
       label: "Supplier",
        filter: true,
        flexGrow: 1,
        subFilterValues:[
          {
            parentfield: "Supplier",
            label: "Name",
            value: "supplierName",
            placeholder:'Search by Name',
            id:'Name',
            width: 296,
            filterType: "textField",
            level: "job",
          },
       
          {
            parentfield: "Supplier",
            id:'ID',
            label: "ID",
            value: "supplierId",
            filterType: "textField",
            placeholder:'Search by ID',
            width: 296,
            level: "job",
          },
        ],
      },
      {
        id: "cbBranchCode",
        minWidth: 90,
       label: "CB Branch",
        filter: true,
        flexGrow: 1,
        subFilterValues:[
          {
            parentfield: "CB branch",
            label: "Br.No",
            id:'Br.No',
            value: "supplierName",
            width:139,
            filterType: "textField",
            placeholder:'Search by Br.No',
            level: "job",
          },
          {
            parentfield: "CB Branch",
            label: "Location",
            id:'Location',
            value: "supplierBranch",
            placeholder:'Search by Location',
            width: 139,
            filterType: "textField",
            level: "job",
          },
         
        ],
      },
      {
        id: "jobStatus",
        minWidth: 90,
       label: "Status",
        boxPosition:'translateX(-32%)',
        ArrowPosition:'120px',
        filter: true,
        flexGrow: 1,
        subFilterValues:[
          {
            parentfield: "Shipper",
            id:'Status',
            label: "Status",
            value: "supplierName",
            width: 296,
            placeholder:'Search by Status',
            filterType: "textField",
            level: "job",
          },
         
        ],
      },
      {
        id: "assignedTo",
         minWidth: 90,
         label: "Assigned To",
        filter: true,
        boxPosition:'translateX(-82%)',
        ArrowPosition:'301px',
        flexGrow: 1,
        subFilterValues:[
          {
            parentfield: "Shipper",
            placeholder:'Search by Assigned To',
            label: "Name",
            id:'Name',
            value: "supplierName",
            width: 296,
            filterType: "textField",
            level: "job",
          },
          
        ],
      },
    ],
  },
  {
    row: [
      {
        id: "emptyTableCeLL",
       minWidth: 80,
      label: "",
      },
      {
        id: "FromAddress",
       minWidth: 180,
       label: "From Address",
        flexGrow: 2,
      },
      {
        id: "ToAddress",
       minWidth: 90,
        label: "To Address",
        flexGrow: 1,
        left: "4px",
      }, 
      {
        id: "emailSubjectLine",
       minWidth: 270,
       label: "EmailSubjectLine",
        flexGrow: 3,
        left: "-3px",
      },
      {
        id: "processedBy",
       minWidth: 90,
       label: "Created By",
        filterType:'Date&Time',
        boxPosition:'translateX(-85%)',
        ArrowPosition:'395px',
        flexGrow: 1,
        left: "11px",
        filter: true,
      },
      {
        id: "updatedBy",
        minWidth: 90,
        label: "Updated By",
        flexGrow: 1,
        left: "5px",
        filter: true,
        filterType:'Date&Time',
        boxPosition:'translateX(-85%)',
        ArrowPosition:'395px',
      },
    ],
  },
  {
    row: [
      {
        id: "EmptyTableCell",
        minWidth: 80,
        label: "",
      },
      {
        id: "updateDateTime",
       minWidth: 90,
        label: "Updated Date& Time",
        flexGrow: 1,
      },
      {
        id: "portOfOrigin",
        minWidth: 90,
        label: "Port Of Loading",
        flexGrow: 1,
        filter: true,
        subFilterValues:[
          {
            parentfield: "Shipper",
            label: "Port Of Loading",
            placeholder:'Search by Port Of Loading',
            value: "supplierName",
            width: 296,
            id:'Name',
            filterType: "textField",
            level: "job",
          },
      
          
        ],
      },
      {
        id: "customsHouseCode",
       minWidth: 90,
       label: "Customs House Code",
        flexGrow: 1,
        filter: true,
        subFilterValues:[
          {
            parentfield: "Shipper",
            label: "Custom House Code",
            placeholder:'Search by Custome House Code',
            value: "supplierName",
            width: 296,
            filterType: "textField",
            level: "job",
            id:'Name'
          },
        
        ],

      },
      {
        id: "beNo",
         minWidth: 90,
        label: "BE Number",
        flexGrow: 1,
        filter: true,
        subFilterValues:[
          {
            parentfield: "Shipper",
            label: "Name",
            id:'Name',
            value: "supplierName",
            width: 296,
            placeholder:'Search by Name',
            filterType: "textField",
            level: "job",
          },
         
        ],  
        
      },
      {
        id: "beDate",
        minWidth: 90,
        label: "BE Date",
        flexGrow: 1,
        filter: true,
        filterType:'Date&Time'
      },
      {
        id: "jobInvFobValue",
       minWidth: 90,
       label: "BE Type",
        flexGrow: 1,
      },
      {
        id: "totalAssessableValue",
       minWidth: 90,
       label: "Assesable Value",
        flexGrow: 1,
      },
      {
        id: "totalDuty",
       minWidth: 90,
        label: "Duty Payable",
        flexGrow: 1,
      },
    ],
  },
];

export default importColumns