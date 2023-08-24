export const getIndexedMasterData = async () => {
    let DBName = "UnifoIndexedDB"
    let request = window.indexedDB.open(DBName)
    let db, dbExists = true;
    return new Promise((resolve, reject) => {
        //if the IDB exists return the keys else returns an empty array
        request.onupgradeneeded = (e) => {
            if (request.result.version === 1) {
                dbExists = false;
                window.indexedDB.deleteDatabase(DBName);
                resolve([])
            }
        }
        request.onsuccess = () => {
            if (dbExists) {
                // alert("DB  exist")
                db = request.result;
                let tx = db.transaction('MasterData', "readonly")
                let dataObjectStore = tx.objectStore('MasterData')
                let getAllRequest = dataObjectStore.getAll();
                getAllRequest.onsuccess = function () {
                    // console.log(getAllRequest.result)
                    let obj = {}
                    for (let imd of getAllRequest.result) {
                        let [fileEtagIDB, fileNameIDB] = imd.key.split("$$##")
                        let [filename, extention] = fileNameIDB.split(".")
                        obj[filename] = imd.value
                    }
                    // console.log(obj)
                    resolve(obj)
                }
            }
            request.result.close()
        }
    })
}

