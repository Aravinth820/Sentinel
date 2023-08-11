const JobDetailSectionFields = [
    {
      fieldName: "Job No.",
      id: "jobNo",
  
      checked:false,
      input: [
        {
          labelName: "Job No.",
          type: "textField",
          name: "partCode",
          width: "45%",
          placeholder:'Job No.'
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
            labelName: "Job Date",
            type: "textField",
            name: "jobDate",
            width: "45%",
            placeholder:'Job Date'
          },
      ],
    },
    
    {
      fieldName: "BE No.",
      id: "beNo",
  
      checked:false,
      input: [
        {
          labelName: "beNo",
          type: "textField",
          name: "description",
          width: "45%",
          placeholder:'BE No.'
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
            labelName: "beDate",
            type: "textField",
            name: "beDate",
            width: "45%",
            placeholder:'BE Date'
          },
      ],
    },
    {
      fieldName: "Created by",
      id: "hsn",
      checked:false,
  
      input: [
        {
          labelName: "createdBy",
          type: "dropDown",
          name: "createdBy",
          add: true,
          width: "100%",
          placeholder:'Created By'
        },
        // { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        // {
        //     labelName: "date",
        //     type: "textField",
        //     name: "date",
        //     width: "45%",
        //   },
      ],
    },
    {
      fieldName: "Last Updated by",
      id: "lastUpdatedBy",
  
      checked:false,
      input: [
        {
          labelName: "updatedBy",
          type: "dropDown",
          name: "updatedBy",
          placeholder:'Updated By',
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
            labelName: "date",
            type: "textField",
            name: "date",
            placeholder:'Date',
           width: "45%",
          },
      ],
    },
    {
      fieldName: "Assinged To",
      id: "assingedTo",
  
      checked:false,
      input: [
        {
          labelName: "assingedTo",
          type: "textField",
          name: "assingedTo",
          width: "100%",
          placeholder:'Assinged To'
        },
      
      ],
    },
    {
        fieldName: "Job Type",
        id: "jobType",
    
        checked:false,
        input: [
          {
            labelName: "jobType",
            type: "dropDown",
            name: "jobType",
            width: "100%",
            placeholder:'Job Type'
          },
        
        ],
      },
      
      {
        fieldName: "MOT",
        id: "mot",
    
        checked:false,
        input: [
          {
            labelName: "mot",
            type: "dropDown",
            name: "mot",
            width: "100%",
            placeholder:'MOT'
          },
        
        ],
      },
      {
        fieldName: "BE Type",
        id: "beType",
    
        checked:false,
        input: [
          {
            labelName: "beType",
            type: "dropDown",
            name: "beType",
            width: "100%",
            placeholder:'BE Type'
          },
        
        ],
      },
      {
        fieldName: "Custom House Code",
        id: "customHouseCode",
    
        checked:false,
        input: [
          {
            labelName: "customHouseCode",
            type: "dropDown",
            name: "customHouseCode",
            width: "100%",
            placeholder:'Custom House Code'
          },
        
        ],
      },
      {
        fieldName: "Warehouse BE No",
        id: "warehouseBeNo",
  
        checked:false,
        input: [
          {
            labelName: "warehouseBeNo",
            type: "textField",
            name: "warehouseBeNo",
            width: "45%",
            placeholder:'Warehouse BE No.'
          },
          { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
          {
              labelName: "jobDate",
              type: "textField",
              name: "jobDate",
              width: '45%',
              placeholder:'Job Date'
            },
        ],
      },
      {
        fieldName: "Warehouse Code",
        id: "warehouseCode",
    
        checked:false,
        input: [
          {
            labelName: "warehouseCode",
            type: "dropDown",
            name: "warehouseCode",
            width: "100%",
            placeholder:'Warehouse Code'
          },
        
        ],
      },
      {
        fieldName: "Customer Site ID",
        id: "customerSiteId",
    
        checked:false,
        input: [
          {
            labelName: "customerSiteId",
            type: "dropDown",
            name: "customerSiteId",
            width: "100%",
            placeholder:'Customer Site ID'
          },
        
        ],
      },
      {
        fieldName: "packages Reloaded",
        id: "packagesReloaded",
  
        checked:false,
        input: [
          {
            labelName: "packagesReloaded",
            type: "textField",
            name: "packagesReloaded",
            width: "100%",
            placeholder:'packages Reloaded'
          },
          {
              labelName: "code",
              type: "textField",
              name: "code",
              width: "100%",
              placeholder:'code'
            },
        ],
      },
      {
        fieldName: "Gross Weight",
        id: "grossWeight",
  
        checked:false,
        input: [
          {
            labelName: "grossWeight",
            type: "textField",
            name: "grossWeight",
            width: "45%",
            placeholder:'Gross Weight'
          },
          { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
          {
              labelName: "code",
              type: "textField",
              name: "code",
              width: "45%",
              placeholder:'code'
            },
        ],
      },
    {
      fieldName: "CB Details",
  
      checked:false,
  
      id: "cbDetails",
      input: [
        {
          labelName: "broker",
          type: "textField",
          name: "brokerName",
          width: "45%",
          placeholder:'Select Company Name'
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "customerCode",
          type: "textField",
          name: "customerCode",
          width: "45%",
          placeholder:'customerCode'
        },
        {
          labelName: "Address 1",
          type: "textField",
          name: "customerAddress1",
          width: "100%",
          placeholder:'Address'
        },
  
        {
          labelName: "state",
          type: "dropDown",
          name: "state",
          width: "45%",
          placeholder:'Select State'
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "pincode",
          type: "textField",
          name: "pincode",
          width: "45%",
          placeholder:'Pincode'
        },
        {
          labelName: "stateCode",
          type: "dropDown",
          name: "stateCode",
          width: "45%",
          placeholder:'Select State With Code'
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "country",
          type: "dropDown",
          name: "country",
          width: "45%",
          placeholder:'Select Country'
        },
        { labelName: "uniqueId", type: "textField", name: "uniqueId", width: "45%",placeholder:'Type Id' },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "companyName",
          type: "textField",
          name: "companyName",
          width: "100%",
          placeholder:'Select Company Name'
        },
  
     
  
     
      ],
    },
    {
      fieldName: "Importer Details",
  
      checked:false,
  
      id: "importerDetails",
      input: [
        {
          labelName: "broker",
          type: "textField",
          name: "brokerName",
          width: "45%",
          placeholder:'Select Company Name'
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "customerCode",
          type: "textField",
          name: "customerCode",
          width: "45%",
          placeholder:'customerCode'
        },
        {
          labelName: "Address 1",
          type: "textField",
          name: "customerAddress1",
          width: "100%",
          placeholder:'Address'
        },
        {
          labelName: "state",
          type: "dropDown",
          name: "state",
          width: "45%",
          placeholder:'Select State'
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "pincode",
          type: "textField",
          name: "pincode",
          width: "45%",
          placeholder:'Pincode'
        },
        {
          labelName: "stateCode",
          type: "dropDown",
          name: "stateCode",
          width: "45%",
          placeholder:'Select State With Code'
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "country",
          type: "dropDown",
          name: "country",
          width: "45%",
          placeholder:'Select Country'
        },
  
     
  
     
      ],
    },
    {
      fieldName: "Transaction Ref No.",
      id: "transactionRefNo",
  
      checked:false,
      input: [
        {
          labelName: "transactionRefNo",
          type: "textField",
          name: "transactionRefNo",
          width: "100%",
          placeholder:'Transaction Ref No.'
        },
  
      ],
    },
    {
      fieldName: "Customer Ref No.",
      id: "customerRefNo",
  
      checked:false,
      input: [
        {
          labelName: "customerRefNo",
          type: "textField",
          name: "customerRefNo",
          width: "100%",
          placeholder:'Customer Ref No.'
        },
  
      ],
    },
    {
      fieldName: "Port Of Loading",
      id: "portOfLoading",
  
      checked:false,
      input: [
        {
          labelName: "portOfLoading",
          type: "dropDown",
          name: "portOfLoading",
          width: "100%",
          placeholder:'Port Of Loading'
        },
  
      ],
    },
    {
      fieldName: "Port of Destination",
      id: "portOfDestination",
  
      checked:false,
      input: [
        {
          labelName: "portOfDestination",
          type: "dropDown",
          name: "portOfDestination",
          width: "100%",
          placeholder:'Port of Destination'
        },
  
      ],
    },
    {
      fieldName: "Country of Origin",
      id: "countryOfOrigin",
  
      checked:false,
      input: [
        {
          labelName: "countryOfOrigin",
          type: "dropDown",
          name: "countryOfOrigin",
          width: "100%",
          placeholder:'Country of Origin'
        },
  
      ],
    },
    {
      fieldName: "Country of Consignment",
      id: "countryOfConsignment",
  
      checked:false,
      input: [
        {
          labelName: "Country of Consignment",
          type: "dropDown",
          name: "countryOfConsignment",
          width: "100%",
          placeholder:'Country of Consignment'
        },
  
      ],
    },
    {
      fieldName: "Customer Ref No.",
      id: "customerRefNo",
  
      checked:false,
      input: [
        {
          labelName: "customerRefNo",
          type: "textField",
          name: "customerRefNo",
          width: "100%",
          placeholder:'Customer Ref No.'
        },
  
      ],
    },
    {
      fieldName: "UCR No.",
      id: "ucrNo",
  
      checked:false,
      input: [
        {
          labelName: "UCR No.",
          type: "textField",
          name: "ucrNo",
          width: "45%",
          placeholder:'UCR No.'
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "UCR Type",
          type: "textField",
          name: "ucrType",
          width: "45%",
          placeholder:'UCR Type'
        },
  
      ],
    },
    {
      fieldName: "Prior BE",
      id: "priorBe",
  
      checked:false,
      input: [
        {
          labelName: "priorBe",
          type: "textField",
          name: "priorBe",
          width: "100%",
          placeholder:'Prior BE'
        },
  
      ],
    },
    {
      fieldName: "Kacha BE",
      id: "kachaBe",
  
      checked:false,
      input: [
        {
          labelName: "Kacha BE",
          type: "textField",
          name: "kachaBe",
          width: "100%",
          placeholder:'Kacha BE'
        },
  
      ],
    },
    {
      fieldName: "Hss Transaction",
      id: "hssTransaction",
  
      checked:false,
      input: [
        {
          labelName: "hssTransaction",
          type: "textField",
          name: "hssTransaction",
          width: "45%",
          placeholder:'Value'
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
       
  
        {
          labelName: "charges",
          type: "textField",
          name: "charges",
          width: "45%",
          placeholder:'Value'
        },
  
      ],
    },
  
  
  ];
  
  export default JobDetailSectionFields;