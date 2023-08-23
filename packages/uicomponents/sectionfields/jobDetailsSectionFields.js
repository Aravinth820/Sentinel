const JobDetailSectionFields = [
  {
    id: "jobNo",
    fieldName: "Job No.",
    checked: false,
    fieldHeaders: [
      {
        name: "Job No.",width:'45%'
      },
      { type: "separator", name: "", width: "5%" },
      {
        name: "Job Date",width:'45%'
      },
    ],

    input: [
      {
        id: "jobNo",
        labelName: "Job No.",
        type: "textField",
        width: "45%",
        placeholder: "Job No.",
      },
      { type: "separator", name: "", width: "5%" },
      {
        id: "jobCreationDate",
        labelName: "Job Date",
        type: "textField",
        name: "jobDate",
        width: "45%",
        placeholder: "Job Date",
        
      },
    ],
  },

  {
    id: "beNo",
    fieldName: "BE No.",
    checked: false,
    fieldHeaders: [
      {
        name: "BE No.",width:'45%'
      },
      {  type: "separator", name: "", width: "5%" },
      {
        name: "BE Date",width:'45%'
      },
    ],
    input: [
      {
        id: "beNo",
        labelName: "beNo",
        type: "textField",
        width: "45%",
        placeholder: "BE No.",
      },
      {  type: "separator", name: "", width: "5%" },
      {
        id: "beDate",
        labelName: "beDate",
        type: "textField",
        width: "45%",
        placeholder: "BE Date",
      },
    ],
  },
  {
    fieldName: "Created by",
    id: "createdBy",
    checked: false,
    fieldHeaders: [
      {
        name: "Created By",width:'45%'
      },
      {  type: "separator", name: "", width: "5%" },
      {
        name: "Date",width:'45%'
      },
    ],
    input: [
      {
        id: "createdBy",
        labelName: "Created By",
        type: "dropDown",
        add: true,
        width: "45%",
        placeholder: "Created By",
      },
      { type: "separator", name: "", width: "5%" },
      {
        id: "createDateTime",
        labelName: "Date",
        type: "textField",
        placeholder: "Date",
        width: "45%",
      },
    ],
  },
  {
    fieldName: "Last Updated by",
    id: "updatedBy",

    checked: false,
    fieldHeaders: [
      {
        name: "Last Updated By",width:'45%'
      },
      {  type: "separator", name: "", width: "5%" },
      {
        name: "Date",width:'45%'
      },
    ],
    input: [
      {
        id: "updatedBy",
        labelName: "Updated By",
        type: "dropDown",
        name: "updatedBy",
        placeholder: "Updated By",
        width: "45%",
      },
      { type: "separator", name: "", width: "5%" },
      {
        id: "date",
        labelName: "date",
        type: "textField",
        name: "date",
        placeholder: "Date",
        width: "45%",
      },
    ],
  },
  {
    fieldName: "Assinged To",
    id: "assingedTo",
    fieldHeaders: [
      {
        name: "Assinged To",width:'100%'
      },
    ],

    checked: false,
    input: [
      {
        id: "assingedTo",
        labelName: "Assinged To",
        type: "multiChipText",
        name: "assingedTo",
        width: "100%",
        placeholder: "Assinged To",
      },
    ],
  },
  {
    fieldName: "Job Type",
    id: "jobType",
    fieldHeaders: [
      {
        name: "Job Type",width:'100%'
      },
    ],
    checked: false,
    
    input: [
      {
        id: "jobType",
        labelName: "Job Type",
        type: "dropDown",
        name: "jobType",
        width: "100%",
        placeholder: "Job Type",
      },
    ],
  },

  {
    fieldName: "MOT",
    id: "modeOfTransport",
    fieldHeaders: [
      {
        name: "MOT",width:'100%'
      },
    ],

    checked: false,
    input: [
      {
        id: "modeOfTransport",
        labelName: "MOT",
        type: "dropDown",
        name: "mot",
        width: "100%",
        placeholder: "MOT",
      },
    ],
  },
  {
    fieldName: "BE Type",
    id: "beType",
    fieldHeaders: [
      {
        name: "BE Type",width:'100%'
      },
    ],
    checked: false,
    input: [
      {
        id: "beType",
        labelName: "BE Type",
        type: "dropDown",
        name: "beType",
        width: "100%",
        placeholder: "BE Type",
      },
    ],
  },
  {
    fieldName: "Custom House Code",
    id: "customsHouseCode",
    checked: false,
    fieldHeaders: [
      {
        name: "Custom House Code",width:'100%'
      },
    ],

   
    input: [
      {
        id: "customsHouseCode",
        labelName: "Custom House Code",
        type: "dropDown",
        width: "100%",
        placeholder: "Custom House Code",
      },
    ],
  },
  {
    fieldName: "Warehouse BE No",
    id: "warehouseBeNo",
    checked: false,
    fieldHeaders: [
      {
        name: "Warehouse BE No.",width:'45%'
      },
      {  type: "separator", name: "", width: "5%" },
      {
        name: "WareHouse BE Date",width:'45%'
      },
    ],

   
    input: [
      {
        id: "warehouseBeNo",
        labelName: "Warehouse BE No.",
        type: "textField",
        width: "45%",
        placeholder: "Warehouse BE No.",
      },
      {  type: "separator", name: "", width: "5%" },
      {
        id: "warehouseBeDate",
        labelName: "Select WareHouse BE Date",
        type: "textField",
        width: "45%",
        placeholder: "Select WareHouse BE Date",
      },
    ],
  },
  {
    fieldName: "Warehouse Code",
    id: "warehouseCode",
    checked: false,
    fieldHeaders: [
      {
        name: "Warehouse Code",width:'100%'
      },
     
    ],

    input: [
      {
        id: "warehouseCode",
        labelName: "Warehouse Code",
        type: "dropDown",
        name: "warehouseCode",
        width: "100%",
        placeholder: "Warehouse Code",
      },
    ],
  },
  {
    fieldName: "Customer Site ID",
    id: "customerSiteId",
    checked: false,
    fieldHeaders: [
      {
        name: "Customer Site ID",width:'100%'
      },
     
    ],
    
    input: [
      {
        id: "customerSiteId",
        labelName: "Customer Site ID",
        type: "dropDown",
        width: "100%",
        placeholder: "Customer Site ID",
      },
    ],
  },
  {
    fieldName: "Packages Reloaded",
    id: "noOfPackagesReleased",
    checked: false,
    fieldHeaders: [
      {
        name: "Packages Reloaded",width:'45%'
      },
      { type: "separator", name: "", width: "5%" },
      {
        name: "Code",width:'45%'
      },
    ],

   
    input: [
      {
        id: "noOfPackagesReleased",
        labelName: "Packages Reloaded",
        type: "textField",
        name: "packagesReloaded",
        width: "45%",
        placeholder: "Packages Reloaded",
      },
      {  type: "separator", name: "", width: "5%" },
      {
        id: "packageCode",
        labelName: "Code",
        type: "textField",
        width: "45%",
        placeholder: "Code",
      },
    ],
  },
  {
    fieldName: "Gross Weight",
    id: "grossWeight",

    checked: false,
    fieldHeaders: [
      {
        name: "Gross Weight",width:'45%'
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        name: "UOM",width:'45%'
      },
    ],
    input: [
      {
        id: "grossWeight",
        labelName: "grossWeight",
        type: "textField",
        width: "45%",
        placeholder: "Gross Weight",
      },
      {  type: "separator", name: "", width: "5%" },
      {
        id: "uom",
        labelName: "Code",
        type: "textField",
        width: "45%",
        placeholder: "Code",
      },
    ],
  },
  {
    fieldName: "CB Details",
    id: "cbDetails",
    checked: false,

   
    fieldHeaders: [
      {
        name: "CB Details",width:'100%'
      },
     
    ],
    input: [
      {
        id: "cbName",
        labelName: "Select CB Name",
        type: "textField",
        width: "45%",
        placeholder: "Select CB Name",
      },
      { type: "separator", name: "", width: "5%" },
      {
        id: "cbCode",
        labelName: "Select CB Code",
        type: "textField",
        name: "customerCode",
        width: "45%",
        placeholder: "Select CB Code",
      },
      {
        id: "cbAddressLine",
        labelName: "Address 1",
        type: "textField",
        width: "100%",
        placeholder: "Select CB Address",
      },

      {
        id: "cbCity",
        labelName: "state",
        type: "dropDown",
        width: "45%",
        placeholder: "Select CB City",
      },
      { type: "separator", name: "", width: "5%" },
      {
        id: "cbPincode",
        labelName: "Pincode",
        type: "textField",
        name: "pincode",
        width: "45%",
        placeholder: "Select PinCode",
      },
      {
        id: "cbState",
        labelName: "Select State",
        type: "dropDown",
        width: "45%",
        placeholder: "Select State ",
      },
      {  type: "separator", name: "", width: "5%" },
      {
        id: "cbCountry",
        labelName: "Select Country",
        type: "dropDown",
        width: "45%",
        placeholder: "Select Country",
      },
      {
        id: "cbCode",
        labelName: 'Select CB code',
        type: "textField",
        name: "uniqueId",
        width: "45%",
        placeholder: "Select CB code",
      },
      {
        id: "CodeNumber",
        type: "separator",
        name: "",
        width: "5%",
      },
      {
        id: "cbBranch",
        labelName: "Select CB Branch",
        type: "textField",
        width: "45%",
        placeholder: "Select CB Branch",
      },
    ],
  },
  {
    fieldName: "Importer Details",

    checked: false,
    fieldHeaders: [
      {
        name: "Importer Details",width:'100%'
      },
     
    ],

    id: "importerDetails",
    input: [
      {
        id: "importerIec",
        labelName: "Importer IEC",
        type: "masterTextField",
        width: "45%",
        placeholder: "Select Importer IEC",
      },
      { type: "separator", name: "", width: "5%" },
      {
        id: "importerId",
        labelName: "Select Importer Id",
        type: "textField",
        width: "45%",
        placeholder: "Select Importer Id",
      },
      {
        id: "importerName",
        labelName: "Select Importer Name",
        type: "dropDown",
        width: "45%",
        placeholder: "Select Importer Name",
      },
      {  type: "separator", name: "", width: "5%" },
      {
        id: "importerBranch",
        labelName: "Select Importer Branch",
        type: "textField",
        width: "45%",
        placeholder: "Select Importer Branch",
      },
      {
        id: "importerPanNo",
        labelName: "Select Importer PAN No.",
        type: "dropDown",
        width: "100%",
        placeholder: "Select Importer PAN No.",
      },
      {
        id: "importType",
        labelName: "Select Importer Typety",
        type: "dropDown",
        width: "45%",
        placeholder: "Select Importer Type",
      },
      { type: "separator", name: "", width: "5%" },
      {
        id: "adCode",
        labelName: "Select Ad Code",
        type: "textField",
        width: "45%",
        placeholder: "Select Ad Code",
      },
      {
        id: "importerAddressLine1",
        labelName: "Address 1",
        type: "textField",
        name: "customerAddress1",
        width: "100%",
        placeholder: "Address1",
      },
      {
        id: "importerAddressLine2",
        labelName: "Address 1",
        type: "textField",
        name: "customerAddress1",
        width: "100%",
        placeholder: "Address2",
      },
      {
        id: "importerCity",
        labelName: "Select Importer City",
        type: "dropDown",
        width: "45%",
        placeholder: "Select Importer City",
      },
      {  type: "separator", name: "", width: "5%" },
      {
        id: "importerPincode",
        labelName: "Select Pincode",
        type: "textField",
        name: "pincode",
        width: "45%",
        placeholder: "Select Pincode",
      },
      {
        id: "importerState",
        labelName: "Select Importer State",
        type: "dropDown",
        width: "45%",
        placeholder: "Select Importer State",
      },
      { type: "separator", name: "", width: "5%" },
      {
        id: "importerCountry",
        labelName: "Select Country",
        type: "dropDown",
        width: "45%",
        placeholder: "Select Country",
      },
    ],
  },
  {
    fieldName: "Transaction Ref No.",
    id: "transactionRefNo",
    checked: false,
    fieldHeaders: [
      {
        name: "Transaction Ref No.",width:'100%'
      },
     
    ],


    input: [
      {
        id: "transactionRefNo",
        labelName: "Transaction Ref No.",
        type: "textField",
        width: "100%",
        placeholder: "Transaction Ref No.",
      },
    ],
  },
  {
    fieldName: "Customer Ref No.",
    id: "customerRefNo",
    fieldHeaders: [
      {
        name: "Customer Ref No.",width:'100%'
      },
     
    ],

    checked: false,
    input: [
      {
        id: "customerRefNo",
        labelName: "Customer Ref No.",
        type: "textField",
        width: "100%",
        placeholder: "Customer Ref No.",
      },
    ],
  },
  {
    fieldName: "Port Of Loading",
    id: "portOfOrigin",
    fieldHeaders: [
      {
        name: "Port Of Loading",width:'100%'
      },
     
    ],

    checked: false,
    input: [
      {
        id: "portOfOrigin",
        labelName: "Select Port Of Origin",
        type: "dropDown",
        width: "100%",
        placeholder: "Select Port Of Origin",
      },
    ],
  },
  {
    fieldName: "Port of Destination",
    id: "portOfShipment",
    fieldHeaders: [
      {
        name: "Port Of Destination",width:'100%'
      },
     
    ],

    checked: false,
    input: [
      {
        id: "portOfShipment",
        labelName: "Port of Destination",
        type: "dropDown",
        width: "100%",
        placeholder: "Port of Destination",
      },
    ],
  },
  {
    fieldName: "Country of Origin",
    id: "countryOfOrigin",
    fieldHeaders: [
      {
        name: "Country of Origin",width:'100%'
      },
     
    ],

    checked: false,
    input: [
      {
        id: "countryOfOrigin",
        labelName: "Country of Origin",
        type: "dropDown",
        width: "100%",
        placeholder: "Country of Origin",
      },
    ],
  },
  {
    fieldName: "Country of Consignment",
    id: "countryOfConsignment",
    fieldHeaders: [
      {
        name: "Country of Consignment",width:'100%'
      },
     
    ],

    checked: false,
    input: [
      {
        id: "countryOfConsignment",
        labelName: "Country of Consignment",
        type: "dropDown",
        width: "100%",
        placeholder: "Country of Consignment",
      },
    ],
  },

  {
    fieldName: "UCR No.",
    id: "ucrNo",
    fieldHeaders: [
      {
        name: "UCR No.",width:'45%'
      },
      { type: "separator", name: "", width: "5%" },
      {
        name: "UCR Type",width:'45%'
      },
    ],

    checked: false,
    input: [
      {
        id: "ucrNo",
        labelName: "UCR No.",
        type: "textField",
        width: "45%",
        placeholder: "UCR No.",
      },
      { type: "separator", name: "", width: "5%" },
      {
        id: "ucrType",
        labelName: "UCR Type",
        type: "textField",
        width: "45%",
        placeholder: "UCR Type",
      },
    ],
  },
  {
    fieldName: "Prior BE",
    id: "priorBe",
    fieldHeaders: [
      {
        name: "Prior BE",width:'100%'
      },
     
    ],

    checked: false,
    input: [
      {
        id: "priorBe",
        labelName: "Prior BE",
        type: "textField",
        width: "100%",
        placeholder: "Prior BE",
      },
    ],
  },
  {
    fieldName: "Kacha BE",
    id: "kachchabe",

    checked: false,
    fieldHeaders: [
      {
        name: "Kacha BE",width:'100%'
      },
     
    ],
    
    input: [
      {
        id: "kachchabe",
        labelName: "Kacha BE",
        type: "toggle",
        width: "100%",
        placeholder: "Kacha BE",
      },
    ],
  },
  {
    fieldName: "Hss Transaction",
    id: "hssTransaction",

    checked: false,
    fieldHeaders: [
      {
        name: "Hss Transaction",width:'45%'
      },
      { type: "separator", name: "", width: "5%" },
      {
        name: "Charges",width:'45%'
      },
    ],
    input: [
      {
        id: "hssTransaction",
        labelName: "Value",
        type: "textField",
        width: "45%",
        placeholder: "Value",
      },
      { type: "separator", name: "", width: "5%" },

      {
        id: "additionalChargesHSS",
        labelName: "Value",
        type: "textField",
        width: "45%",
        placeholder: "Value",
      },
    ],
  },
  {
    fieldName: "Green Channel",
    id: "greenChannel",
    fieldHeaders: [
      {
        name: "Green Channel",width:'100%'
      },
      
    ],

    checked: false,
    input: [
      {
        id: "greenChannel",
        labelName: "Green Channel",
        type: "toggle",
        width: "100%",
        placeholder: "Green Channel",
      },
    ],
  },
  {
    fieldName: "Section 48",
    id: "section48",

    checked: false,
    fieldHeaders: [
      {
        name: "Section 48",width:'100%'
      },
      
    ],
    input: [
      {
        id: "section48",
        labelName: "Section 48",
        type: "toggle",
        name: "section48",
        width: "100%",
        placeholder: "Section 48",
      },
    ],
  },
  {
    fieldName: "First Check",
    id: "firstCheckRequested",

    checked: false,
    fieldHeaders: [
      {
        name: "First Check",width:'100%'
      },
      
    ],
    input: [
      {
        id: "firstCheckRequested",
        labelName: "First Check Requested",
        type: "toggle",
        width: "100%",
        placeholder: "First Check Requested",
      },

      {
        id: "firstCheckReason",
        labelName: "Reason",
        type: "textField",
        name: "firstCheckReason",
        width: "100%",
        placeholder: "Reason",
      },
    ],
  },
  {
    fieldName: "Miscellaneous Load",
    id: "miscellaneousLoad",

    checked: false,
    fieldHeaders: [
      {
        name: "Miscellaneous Load",width:'100%'
      },
      
    ],
    input: [
      {
        id: "Miscellaneous Load",
        labelName: "Miscellaneous Load",
        type: "textField",
        width: "100%",
        placeholder: "Miscellaneous Load",
      },
    ],
  },
  {
    fieldName: "Payment Method Code",
    id: "paymentMethodCode",
    fieldHeaders: [
      {
        name: "Payment Method Code",width:'100%'
      },
      
    ],

    checked: false,
    input: [
      {
        id: "paymentMethodCode",
        labelName: "paymentMethodCode",
        type: "textField",
        name: "paymentMethodCode",
        width: "100%",
        placeholder: "Payment Method Code",
      },
    ],
  },
  {
    fieldName: "Total Assesable Value",
    id: "totalAssessableValue",

    checked: false,
    fieldHeaders: [
      {
        name: "Total Assesable Value",width:'100%'
      },
      
    ],
    input: [
      {
        id: "totalAssessableValue",
        labelName: "Total Assesable Value",
        type: "textField",
        width: "100%",
        placeholder: "Total Assesable Value",
      },
    ],
  },
  {
    fieldName: "Total Duty",
    id: "totalDuty",

    checked: false,
    fieldHeaders: [
      {
        name: "Total Duty",width:'100%'
      },
      
    ],
    input: [
      {
        id: "totalDuty",
        labelName: "Total Duty",
        type: "textField",
        name: "Total Duty",
        width: "100%",
        placeholder: "Total Duty",
      },
    ],
  },
];

export default JobDetailSectionFields;
