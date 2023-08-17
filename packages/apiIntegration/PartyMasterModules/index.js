import {ConfigKeys, AmplifyConfig} from "@project/cgate-app-service";


export const PartyMasterModules = {


    fetchPartyMasterModule: async (data) => {
        let reqHeaders = new Headers();
        let ESConfig = AmplifyConfig.getConfig(ConfigKeys.ES_PARTY_API)
        reqHeaders.append("Authorization", ESConfig.es_api_auth_token);
        reqHeaders.append("Content-Type", "application/json");
        let raw
        // search query in partyMaster
        raw = JSON.stringify({
            "track_total_hits": true,
            "query": {
                "bool": {
                    "should": [
                        {
                            "match": {
                                "partyName": {
                                    "query": data.partyName ? data.partyName : "",
                                    "minimum_should_match": "100%"
                                }
                            }
                        }
                    ]
                }
            }
        });


        let requestOptions = {
            method: 'GET',
            headers: reqHeaders,
            body: raw,
            redirect: 'follow'
        };
        const url = ESConfig.party_es
        const response = await fetch(url, requestOptions)
        const result = await response.json();
        return result  
    }

}
