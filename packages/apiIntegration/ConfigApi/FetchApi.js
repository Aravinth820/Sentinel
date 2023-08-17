import { ConfigKeys } from "./ConfigKeys";
import { AmplifyConfig } from "./AmplifyConfig";


export const FetchApiCall = async (url, apiConfigName, method, input, masterCall) => {
    let masterApiConfig = AmplifyConfig.getConfig(ConfigKeys.MASTER_API);
    let localHost = "http://localhost:8080"
    const configNameArr = [
        { value: jobApiConfig, api: "jobApi", serviceCode: "js" },
        { value: excelUploadApiConfig, api: "excelUploadApi", serviceCode: "fc" },
        { value: cgateApiConfig, api: "cgateApi", serviceCode: "xls" },
        { value: userEntitlementsApiConfig, api: "userApi", serviceCode: "ue" },
        { value: masterApiConfig, api: "masterApi", serviceCode: "ms" },
        { value: fileConversionApiConfig, api: "fileConversionApi", serviceCode: "fc" },
        { value: flatFileApiConfig, api: "flatFileApi", serviceCode: "fa" },
        { value: dutyApiConfig, api: "dutyApi", serviceCode: "da" },
        { value: itemServiceConfig, api: "itemApi", serviceCode: "Ji" },
        { value: localHost, api: "localHost", serviceCode: "localHost" }
    ]
    const configName = configNameArr.filter((config) => {
        return config.api === apiConfigName
    })

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("service", configName[0]?.serviceCode)

    let jwtAccessToken = await AuthToken()  
    myHeaders.append("Authorization", jwtAccessToken);
    let requestOptions
    let inputDetails = { ...input, customsBrokerCode: 'FLYJAC' }
    requestOptions = {
        method: method,
        headers: myHeaders,
        body: JSON.stringify(inputDetails),
        redirect: 'follow',
    };
    
    let response = await fetch(`${apiConfigName === "localHost" ? configName[0]?.value : configName[0]?.value["aws_http_Endpoint"]}${url}`, requestOptions)
    return response
}