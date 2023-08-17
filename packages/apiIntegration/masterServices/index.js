export const masterServices = {


  getPartyMaster:async(input)=>{
    try{
      let partyName = input.name
      let reqHeaders = new Headers();
      reqHeaders.append("Authorization","Basic dW5pZm8tZGV2OlVuaWZvQDIwMjE=")
      reqHeaders.append("Content-Type", "application/json");
      let raw = JSON.stringify({ "track_total_hits": true, "query": { "bool": { "should": [{ "match": { "partyName": { "query": partyName==="Name" ? input.value : "", "minimum_should_match": "100%" } } } , { "query_string": { "fields": ["partyCode"], "query": partyName==="IEC" ? input.value : "" } } , { "match": { "branch": { "query": partyName==="Branch SI.No." ? input.value : "" } } }] } } });
  //    raw = JSON.stringify({ "track_total_hits": true, "query": { "bool": { "should": [{ "match": { "partyName": { "query": data.partyName ? data.partyName : "", "minimum_should_match": "100%" } } }, { "query_string": { "fields": ["partyCode"], "query": data.partyCode ? data.partyCode : "" } }, { "match": { "bankAdCode": { "query": data.bankAdCode ? data.bankAdCode : "" } } }, { "match": { "branch": { "query": data.branch ? data.branch : "" } } }, { "match": { "nickName": { "query": data.nickName ? data.nickName : "" } } }, { "match": { "addressLine1": { "query": data.addressLine1 ? data.addressLine1 : "" } } }, { "match": { "addressLine2": { "query": data.addressLine2 ? data.addressLine2 : "" } } }] } } });
      let requestOptions = {
        method: 'POST',
        headers: reqHeaders,
        body: raw,
        redirect: 'follow'
      };
      let master = await fetch("https://search-es-master-api-domain-fwsfojllwtrzutukp557vywlxq.ap-south-1.es.amazonaws.com/flyjac-party-master-index/_search?size=100",requestOptions)
        let masterFile = await master.text()
        let masterupdateFile = await JSON.parse(masterFile)
        let partyNames = []
        masterupdateFile?.hits?.hits.map((item , index)=>{
            let items = {
              id:index,
              checked:false,
              fieldName:item._source.partyName,
              label:item._source.partyName
            }
            partyNames.push(items)
        })
        return partyNames
    }
    catch(err){
      console.log("Error in creating PartyMasterData",err)
    }
  },
}