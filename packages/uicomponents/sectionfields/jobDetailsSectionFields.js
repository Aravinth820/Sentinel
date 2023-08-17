const JobDetailSectionFields = [
  {
    id: "jobNo",
    fieldName: "Job No.",
    checked: false,
    fieldHeaders: [
      {
        name: "Job No.",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        name: "Job Date",
      },
    ],

    input: [
      {
        labelName: "Job No.",
        type: "textField",
        name: "partCode",
        width: "45%",
        placeholder: "Job No.",
        id: "jobNo",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        labelName: "Job Date",
        type: "textField",
        name: "jobDate",
        width: "45%",
        placeholder: "Job Date",
        id: "jobCreationDate",
      },
    ],
  },

  {
    id: "beNo",
    fieldName: "BE No.",
    checked: false,
    fieldHeaders: [
      {
        name: "BE No.",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        name: "BE Date",
      },
    ],
    input: [
      {
        id: "beNo",
        labelName: "beNo",
        type: "textField",
        name: "description",
        width: "45%",
        placeholder: "BE No.",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "beDate",
        labelName: "beDate",
        type: "textField",
        name: "beDate",
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
        name: "Created By",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        name: "Date",
      },
    ],
    input: [
      {
        labelName: "createdBy",
        type: "dropDown",
        name: "createdBy",
        add: true,
        width: "45%",
        placeholder: "Created By",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "createDateTime",
        labelName: "date",
        type: "textField",
        name: "date",
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
        name: "Last Updated By",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        name: "Date",
      },
    ],
    input: [
      {
        id: "updatedBy",
        labelName: "updatedBy",
        type: "dropDown",
        name: "updatedBy",
        placeholder: "Updated By",
        width: "45%",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
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
        name: "Assinged To",
      },
    ],

    checked: false,
    input: [
      {
        id: "assingedTo",
        labelName: "assingedTo",
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
        name: "Job Type",
      },
    ],
    checked: false,
    
    input: [
      {
        id: "jobType",
        labelName: "jobType",
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
        name: "MOT",
      },
    ],

    checked: false,
    input: [
      {
        id: "modeOfTransport",
        labelName: "mot",
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
        name: "BE Type",
      },
    ],
    checked: false,
    input: [
      {
        id: "beType",
        labelName: "beType",
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
    fieldHeaders: [
      {
        name: "Custom House Code",
      },
    ],

    checked: false,
    input: [
      {
        id: "customsHouseCode",
        labelName: "customHouseCode",
        type: "dropDown",
        name: "customHouseCode",
        width: "100%",
        placeholder: "Custom House Code",
      },
    ],
  },
  {
    fieldName: "Warehouse BE No",
    id: "warehouseBeNo",
    fieldHeaders: [
      {
        name: "Warehouse BE No.",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        name: "WareHouse BE Date",
      },
    ],

    checked: false,
    input: [
      {
        id: "warehouseBeNo",
        labelName: "warehouseBeNo",
        type: "textField",
        name: "warehouseBeNo",
        width: "45%",
        placeholder: "Warehouse BE No.",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "warehouseBeDate",
        labelName: "jobDate",
        type: "textField",
        name: "jobDate",
        width: "45%",
        placeholder: "Select WareHouse BE Date",
      },
    ],
  },
  {
    fieldName: "Warehouse Code",
    id: "warehouseCode",
    fieldHeaders: [
      {
        name: "Warehouse Code",
      },
     
    ],
    checked: false,
    input: [
      {
        id: "warehouseCode",
        labelName: "warehouseCode",
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
    fieldHeaders: [
      {
        name: "Customer Site ID",
      },
     
    ],
    checked: false,
    input: [
      {
        id: "customerSiteId",
        labelName: "customerSiteId",
        type: "dropDown",
        name: "customerSiteId",
        width: "100%",
        placeholder: "Customer Site ID",
      },
    ],
  },
  {
    fieldName: "Packages Reloaded",
    id: "noOfPackagesReleased",
    fieldHeaders: [
      {
        name: "Packages Reloaded",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        name: "code",
      },
    ],

    checked: false,
    input: [
      {
        id: "noOfPackagesReleased",
        labelName: "packagesReloaded",
        type: "textField",
        name: "packagesReloaded",
        width: "45%",
        placeholder: "Packages Reloaded",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "packageCode",
        labelName: "code",
        type: "textField",
        name: "code",
        width: "45%",
        placeholder: "code",
      },
    ],
  },
  {
    fieldName: "Gross Weight",
    id: "grossWeight",

    checked: false,
    fieldHeaders: [
      {
        name: "Gross Weight",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        name: "UOM",
      },
    ],
    input: [
      {
        id: "grossWeight",
        labelName: "grossWeight",
        type: "textField",
        name: "grossWeight",
        width: "45%",
        placeholder: "Gross Weight",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "uom",
        labelName: "code",
        type: "textField",
        name: "code",
        width: "45%",
        placeholder: "code",
      },
    ],
  },
  {
    fieldName: "CB Details",

    checked: false,

    id: "cbDetails",
    fieldHeaders: [
      {
        name: "CB Details",
      },
     
    ],
    input: [
      {
        id: "cbName",
        labelName: "broker",
        type: "textField",
        name: "brokerName",
        width: "45%",
        placeholder: "Select CB Name",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "cbCode",
        labelName: "customerCode",
        type: "textField",
        name: "customerCode",
        width: "45%",
        placeholder: "Select CB Code",
      },
      {
        id: "cbAddressLine",
        labelName: "Address 1",
        type: "textField",
        name: "customerAddress1",
        width: "100%",
        placeholder: "Select CB Address",
      },

      {
        id: "cbCity",
        labelName: "state",
        type: "dropDown",
        name: "state",
        width: "45%",
        placeholder: "Select CB City",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "cbPincode",
        labelName: "pincode",
        type: "textField",
        name: "pincode",
        width: "45%",
        placeholder: "Select PinCode",
      },
      {
        id: "cbState",
        labelName: "stateCode",
        type: "dropDown",
        name: "stateCode",
        width: "45%",
        placeholder: "Select State ",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "cbCountry",
        labelName: "country",
        type: "dropDown",
        name: "country",
        width: "45%",
        placeholder: "Select Country",
      },
      {
        id: "cbCode",
        labelName: "uniqueId",
        type: "textField",
        name: "uniqueId",
        width: "45%",
        placeholder: "Select CB code",
      },
      {
        id: "CodeNumber",
        labelName: "CodeNumber",
        type: "separator",
        name: "",
        width: "5%",
      },
      {
        id: "cbBranch",
        labelName: "companyName",
        type: "textField",
        name: "companyName",
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
        name: "Importer Details",
      },
     
    ],

    id: "importerDetails",
    input: [
      {
        id: "importerIec",
        labelName: "broker",
        type: "textField",
        name: "brokerName",
        width: "45%",
        placeholder: "Select Importer IEC",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "importerId",
        labelName: "customerCode",
        type: "textField",
        name: "customerCode",
        width: "45%",
        placeholder: "Select Importer Id",
      },
      {
        id: "importerName",
        labelName: "City",
        type: "dropDown",
        name: "state",
        width: "45%",
        placeholder: "Select Importer Name",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "importerBranch",
        labelName: "pincode",
        type: "textField",
        name: "pincode",
        width: "45%",
        placeholder: "Select Importer Branch",
      },
      {
        id: "importerPanNo",
        labelName: "City",
        type: "dropDown",
        name: "state",
        width: "100%",
        placeholder: "Select Importer PAN No.",
      },
      {
        id: "importType",
        labelName: "City",
        type: "dropDown",
        name: "state",
        width: "45%",
        placeholder: "Select Importer Type",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "adCode",
        labelName: "pincode",
        type: "textField",
        name: "pincode",
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
        labelName: "City",
        type: "dropDown",
        name: "state",
        width: "45%",
        placeholder: "Select Importer City",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "importerPincode",
        labelName: "pincode",
        type: "textField",
        name: "pincode",
        width: "45%",
        placeholder: "Select Pincode",
      },
      {
        id: "importerState",
        labelName: "stateCode",
        type: "dropDown",
        name: "stateCode",
        width: "45%",
        placeholder: "Select Importer State",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "importerCountry",
        labelName: "country",
        type: "dropDown",
        name: "country",
        width: "45%",
        placeholder: "Select Country",
      },
    ],
  },
  {
    fieldName: "Transaction Ref No.",
    id: "transactionRefNo",
    fieldHeaders: [
      {
        name: "Transaction Ref No.",
      },
     
    ],

    checked: false,
    input: [
      {
        id: "transactionRefNo",
        labelName: "transactionRefNo",
        type: "textField",
        name: "transactionRefNo",
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
        name: "Customer Ref No.",
      },
     
    ],

    checked: false,
    input: [
      {
        id: "customerRefNo",
        labelName: "customerRefNo",
        type: "textField",
        name: "customerRefNo",
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
        name: "Port Of Loading",
      },
     
    ],

    checked: false,
    input: [
      {
        id: "portOfOrigin",
        labelName: "portOfLoading",
        type: "dropDown",
        name: "portOfLoading",
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
        name: "Port Of Destination",
      },
     
    ],

    checked: false,
    input: [
      {
        id: "portOfShipment",
        labelName: "portOfDestination",
        type: "dropDown",
        name: "portOfDestination",
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
        name: "Country of Origin",
      },
     
    ],

    checked: false,
    input: [
      {
        id: "countryOfOrigin",
        labelName: "countryOfOrigin",
        type: "dropDown",
        name: "countryOfOrigin",
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
        name: "Country of Consignment",
      },
     
    ],

    checked: false,
    input: [
      {
        id: "countryOfConsignment",
        labelName: "Country of Consignment",
        type: "dropDown",
        name: "countryOfConsignment",
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
        name: "UCR No.",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        name: "UCR Type",
      },
    ],

    checked: false,
    input: [
      {
        id: "ucrNo",
        labelName: "UCR No.",
        type: "textField",
        name: "ucrNo",
        width: "45%",
        placeholder: "UCR No.",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        id: "ucrType",
        labelName: "UCR Type",
        type: "textField",
        name: "ucrType",
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
        name: "Prior BE",
      },
     
    ],

    checked: false,
    input: [
      {
        id: "priorBe",
        labelName: "priorBe",
        type: "textField",
        name: "priorBe",
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
        name: "Kacha BE",
      },
     
    ],
    
    input: [
      {
        id: "kachchabe",
        labelName: "Kacha BE",
        type: "toggle",
        name: "kachaBe",
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
        name: "Hss Transaction",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
      {
        name: "Charges",
      },
    ],
    input: [
      {
        id: "hssTransaction",
        labelName: "hssTransaction",
        type: "textField",
        name: "hssTransaction",
        width: "45%",
        placeholder: "Value",
      },
      { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },

      {
        id: "additionalChargesHSS",
        labelName: "charges",
        type: "textField",
        name: "charges",
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
        name: "Green Channel",
      },
      
    ],

    checked: false,
    input: [
      {
        id: "greenChannel",
        labelName: "Green Channel",
        type: "toggle",
        name: "greenChannel",
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
        name: "Section 48",
      },
      
    ],
    input: [
      {
        id: "section48",
        labelName: "Green Channel",
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
        name: "First Check",
      },
      
    ],
    input: [
      {
        id: "firstCheckRequested",
        labelName: "firstCheckRequested",
        type: "toggle",
        name: "firstCheckRequested",
        width: "100%",
        placeholder: "First Check Requested",
      },

      {
        id: "firstCheckReason",
        labelName: "firstCheckReason",
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
        name: "Miscellaneous Load",
      },
      
    ],
    input: [
      {
        id: "Miscellaneous Load",
        labelName: "Miscellaneous Load",
        type: "textField",
        name: "Miscellaneous Load",
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
        name: "Payment Method Code",
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
        name: "Total Assesable Value",
      },
      
    ],
    input: [
      {
        id: "totalAssessableValue",
        labelName: "totalAssessableValue",
        type: "textField",
        name: "totalAssessableValue",
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
        name: "Total Duty",
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
