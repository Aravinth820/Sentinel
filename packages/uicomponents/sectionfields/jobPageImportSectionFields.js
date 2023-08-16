const importColumns = [
    {
      row: [
        {
          id: "srNo",
          numeric: true,
          minWidth: 80,
          isSortable: true,
          default: true,
          label: "S.No",
        }, 
        {
          id: "jobNo",
          numeric: false,
          minWidth: 90,
          isSortable: false,
          default: true,
          display: false,
          label: "Job No",
          sticky: true,
          flexGrow: 1,
        },
        {
          id: "createDateTime",
          numeric: false,
          minWidth: 90,
          isSortable: true,
          default: true,
          display: false,
          label: "Job Date & Time",
          filter: true,
          flexGrow: 1,
          filterType:'Date&Time',
          ArrowPosition:'301px'
        },
        {
          id: "transactionRefNo",
          numeric: false,
          minWidth: 90,
          isSortable: false,
          default: true,
          display: true,
          label: "Reference No.",
          flexGrow: 1,
        },
        {
          id: "importerName",
          numeric: false,
          minWidth: 90,
          isSortable: false,
          default: true,
          display: true,
          label: "Importer",
          filter: true,
          flexGrow: 1,
          subFilterValues: [
            {
              parentfield: "Importer",
              label: "Name",
              width: 296,
              value: "customerName",
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Importer",
              label: "Branch SI.No.",
              value: "customerBranch",
              width: 139,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Importer",
              label: "ID",
              width: 139,
              value: "customerId",
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Importer",
              label: "IEC",
              value: "customerIec",
              width: 139,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Importer",
              label: "AD Code",
              value: "customerAdCode",
              filterType: "textField",
              level: "job",
              width: 139,
            },
          ],
        },
        {
          id: "supplierName",
          numeric: false,
          minWidth: 90,
          isSortable: false,
          default: true,
          display: true,
          label: "Supplier",
          filter: true,
          flexGrow: 1,
          subFilterValues:[
            {
              parentfield: "Shipper",
              label: "Name",
              value: "supplierName",
              width: 296,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "Branch SI.No.",
              value: "supplierBranch",
              width: 139,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "ID",
              value: "supplierId",
              filterType: "textField",
              width: 139,
              level: "job",
            },
          ],
        },
        {
          id: "cbBranchCode",
          numeric: false,
          minWidth: 90,
          isSortable: false,
          default: true,
          display: true,
          label: "CB Branch",
          filter: true,
          flexGrow: 1,
          subFilterValues:[
            {
              parentfield: "Shipper",
              label: "Name",
              value: "supplierName",
              width: 296,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "Branch SI.No.",
              value: "supplierBranch",
              width: 139,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "ID",
              value: "supplierId",
              filterType: "textField",
              width: 139,
              level: "job",
            },
          ],
        },
        {
          id: "jobStatus",
          numeric: false,
          minWidth: 90,
          isSortable: true,
          default: true,
          display: true,
          label: "Status",
          filter: true,
          flexGrow: 1,
          subFilterValues:[
            {
              parentfield: "Shipper",
              label: "Name",
              value: "supplierName",
              width: 296,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "Branch SI.No.",
              value: "supplierBranch",
              width: 139,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "ID",
              value: "supplierId",
              filterType: "textField",
              width: 139,
              level: "job",
            },
          ],
        },
        {
          id: "assignedTo",
          numeric: false,
          minWidth: 90,
          isSortable: true,
          default: true,
          display: true,
          label: "Assigned To",
          filter: true,
          boxPosition:'translateX(-82%)',
          ArrowPosition:'301px',
          flexGrow: 1,
          subFilterValues:[
            {
              parentfield: "Shipper",
              label: "Name",
              value: "supplierName",
              width: 296,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "Branch SI.No.",
              value: "supplierBranch",
              width: 139,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "ID",
              value: "supplierId",
              filterType: "textField",
              width: 139,
              level: "job",
            },
          ],
        },
      ],
    },
    {
      row: [
        {
          id: "23456789",
          numeric: true,
          minWidth: 80,
          isSortable: true,
          default: true,
          label: "",
        },
        {
          id: "FromAddress",
          numeric: false,
          minWidth: 180,
          isSortable: false,
          default: true,
          display: false,
          label: "From Address",
          sticky: true,
          flexGrow: 2,
        },
        {
          id: "ToAddress",
          display: true,
          isSortable: false,
          default: true,
          minWidth: 90,
          label: "To Address",
          flexGrow: 1,
          left: "4px",
        }, //left:'0.6%'
        {
          id: "emailSubjectLine",
          numeric: false,
          minWidth: 270,
          isSortable: false,
          default: true,
          display: true,
          label: "EmailSubjectLine",
          flexGrow: 3,
          left: "-3px",
        }, //left:'-0.4%'
        {
          id: "processedBy",
          numeric: false,
          minWidth: 90,
          isSortable: true,
          default: true,
          display: true,
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
          display: true,
          isSortable: false,
          default: true,  
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
          id: "",
          display: true,
          isSortable: false,
          default: true,
          minWidth: 80,
          label: "",
        },
        {
          id: "updateDateTime",
          display: true,
          isSortable: false,
          default: true,
          minWidth: 90,
          label: "Updated Date& Time",
          flexGrow: 1,
        },
        {
          id: "portOfOrigin",
          display: true,
          isSortable: false,
          default: true,
          minWidth: 90,
          label: "Port Of Loading",
          flexGrow: 1,
          filter: true,
          subFilterValues:[
            {
              parentfield: "Shipper",
              label: "Name",
              value: "supplierName",
              width: 296,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "Branch SI.No.",
              value: "supplierBranch",
              width: 139,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "ID",
              value: "supplierId",
              filterType: "textField",
              width: 139,
              level: "job",
            },
          ],
        },
        {
          id: "customsHouseCode",
          numeric: false,
          minWidth: 90,
          isSortable: false,
          default: true,
          display: true,
          label: "Customs House Code",
          flexGrow: 1,
          filter: true,
          subFilterValues:[
            {
              parentfield: "Shipper",
              label: "Name",
              value: "supplierName",
              width: 296,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "Branch SI.No.",
              value: "supplierBranch",
              width: 139,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "ID",
              value: "supplierId",
              filterType: "textField",
              width: 139,
              level: "job",
            },
          ],

        },
        {
          id: "beNo",
          numeric: false,
          minWidth: 90,
          isSortable: false,
          default: true,
          display: true,
          label: "BE Number",
          flexGrow: 1,
          filter: true,
          subFilterValues:[
            {
              parentfield: "Shipper",
              label: "Name",
              value: "supplierName",
              width: 296,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "Branch SI.No.",
              value: "supplierBranch",
              width: 139,
              filterType: "textField",
              level: "job",
            },
            {
              parentfield: "Shipper",
              label: "ID",
              value: "supplierId",
              filterType: "textField",
              width: 139,
              level: "job",
            },
          ],  
          
        },
        {
          id: "beDate",
          numeric: false,
          minWidth: 90,
          isSortable: false,
          default: true,
          display: true,
          label: "BE Date",
          flexGrow: 1,
          filter: true,
          filterType:'Date&Time'
        },
        {
          id: "jobInvFobValue",
          numeric: false,
          minWidth: 90,
          isSortable: true,
          default: true,
          display: true,
          label: "BE Type",
          flexGrow: 1,
        },
        {
          id: "totalAssessableValue",
          numeric: false,
          minWidth: 90,
          isSortable: true,
          default: true,
          display: true,
          label: "Assesable Value",
          flexGrow: 1,
        },
        {
          id: "totalDuty",
          display: true,
          isSortable: false,
          default: true,
          minWidth: 90,
          label: "Duty Payable",
          flexGrow: 1,
        },
      ],
    },
  ];

export default importColumns

