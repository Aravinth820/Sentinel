import React, { useContext } from 'react'
// import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { AuthContext } from './AuthContext'
import { navigate } from 'gatsby'
import SignInRoute from '../../../../../uicomponents/components/SignIn/signIn';
import { Auth } from 'aws-amplify';
import AWS from "aws-sdk";
import { ConfigKeys}  from '../../../../../apiIntegration/ConfigApi/ConfigKeys';
import { AmplifyConfig } from '../../../../../apiIntegration/ConfigApi/AmplifyConfig';



const AmplifySignIn = (props) => {
    const { from } = props;
    const [loginErrorMessage, setLoginErrorMessage] = React.useState("")
    const [loginError, setLoginError] = React.useState(false)
    const [idbCompleted, setIdbCompleted] = React.useState(false)
    const auth = useContext(AuthContext)
    const [isReset, setIsReset] = React.useState(false)
    const [isUser, setIsUser] = React.useState("")
    // const [isInvalidPassword, setIsInvalidPassword]=React.useState(false) 
    const [sendErrorMessage, setSendErrorMessage] = React.useState("")
    const [isSnackBar, setIsSnackBar] = React.useState(false)
    const [isPasswordMatch, setIsPasswordMatch] = React.useState(false)
    const [forgotPassword, setForgotPassword] = React.useState(false);
    const [isOtpAuth, setIsOtpAuth] = React.useState(false);
    const [userName, setUserName] = React.useState("");
    const [isValidOtp, setIsValidOtp] = React.useState(false);

    async function signIn(username, password) {
        try {
            // console.log("username, password",username, password)
            async function createNewIndexedDB() {
                // console.log("inside s3BucketReadData")
                let dataFromS3 = []
                let partyIdsFromS3 = []
                //signing into aws
                const jobApiConfig = AmplifyConfig.getConfig(ConfigKeys.JOB_API)
                const AuthConfig = AmplifyConfig.getConfig(ConfigKeys.AUTH)
                AWS.config.region = AuthConfig.aws_project_region
                // console.log("inside s3BucketReadData 1")
                let AuthenticatedUser = await Auth.currentAuthenticatedUser()
                // console.log("inside s3BucketReadData 2")
                let getSession = await AuthenticatedUser.getSession(function (err, result) {
                    const cognitoUserPoolLogin = `cognito-idp.${AuthConfig.aws_project_region}.amazonaws.com/${AuthConfig.aws_user_pools_id}`
                    let logins = {}
                    logins[cognitoUserPoolLogin] = result.getIdToken().getJwtToken()
                    AWS.config.credentials = new AWS.CognitoIdentityCredentials(
                        {
                            IdentityPoolId: AuthConfig.aws_cognito_identity_pool_id,
                            Logins: logins,
                        },
                        {
                            //1 minute
                            httpOptions: {
                                timeout: 60000,
                            },
                        }
                    )
                })
                // console.log("inside s3BucketReadData 2")
                //accessing the bucket
                const s3 = new AWS.S3({
                    params: {
                        Bucket: jobApiConfig.aws_user_files_s3_bucket,
                    }
                })
                const partyIdS3 = new AWS.S3({
                    partyParams: {
                        Bucket: jobApiConfig.ecc_party_ids_s3_bucket,
                    }
                })
                //finding the files in that aws bucket
                const response = await s3.listObjects({
                    Bucket: jobApiConfig.aws_user_files_s3_bucket
                }).promise()

                const partyIdResponse = await partyIdS3.listObjects({
                    Bucket: jobApiConfig.ecc_party_ids_s3_bucket
                }).promise()

                let awsListFiles = response.Contents
                let awsPartyIds = partyIdResponse.Contents
                // console.log(awsListFiles, "stage 1")
                // console.log("stage 1")
                //function to get the keys in the IDB
                let getIDBKeys = () => {
                    let DBName = "UnifoIndexedDB"
                    let request = indexedDB.open(DBName)
                    let db, dbExists = true;
                    return new Promise((resolve, reject) => {
                        //if the IDB exists return the keys else returns an empty array
                        request.onupgradeneeded = function (e) {
                            if (request.result.version === 1) {
                                dbExists = false;
                                window.indexedDB.deleteDatabase(DBName);
                                resolve([])
                            }
                        };
                        request.onsuccess = (e) => {
                            if (dbExists) {
                                // alert("DB  exist")
                                db = request.result;
                                if ((db.objectStoreNames.contains("MasterData")) && (db.objectStoreNames.contains("PartyIds"))) {
                                    let tx = db.transaction('MasterData', "readonly")
                                    let dataObjectStore = tx.objectStore('MasterData')
                                    let getAllKeysRequest = dataObjectStore.getAllKeys();
                                    getAllKeysRequest.onsuccess = function () {
                                        // console.log(getAllKeysRequest.result)
                                        resolve(getAllKeysRequest.result)
                                    }
                                }
                                else {
                                    let request = indexedDB.open(DBName)
                                    let db;
                                    request.onsuccess = function (event) {
                                        db = event.target.result;
                                        if (!request.result.objectStoreNames.contains('PartyIds')) {
                                            indexedDB.deleteDatabase('UnifoIndexedDB');
                                        }
                                    };
                                    // resolve([])
                                }
                                if (db.objectStoreNames.contains("PartyIds")) {
                                    let partyTx = db.transaction('PartyIds', "readonly")
                                    let partyObjectStore = partyTx.objectStore('PartyIds')
                                    let getAllPartyKeysRequest = partyObjectStore.getAllKeys();
                                    getAllPartyKeysRequest.onsuccess = function () {
                                        // console.log(getAllKeysRequest.result)
                                        resolve(getAllPartyKeysRequest.result)
                                    }
                                }
                                else {
                                    resolve([])
                                }
                            }
                            request.result.close()
                        }
                    })
                }
                let dbKeys = await getIDBKeys()
                //if there are files in aws and IDB is empty create a new IDB
                if (awsListFiles.length !== 0 && dbKeys.length === 0 && awsPartyIds.length !== 0) {
                    // alert("creating a new IDB")
                    const DBName = "UnifoIndexedDB";
                    //looping through awsListFiles and creating an array dataFromS3(dataFromS3 is in a format that can be pushed to IDB)
                    for (let file of awsListFiles) {
                        try {
                            const params = {
                                Bucket: jobApiConfig.aws_user_files_s3_bucket,
                                Key: file.Key
                            }
                            let response = await s3.getObject(params).promise();
                            let valueArray = await JSON.parse(response.Body.toString('utf-8'))
                            let etags3 = file.ETag.replaceAll('"', '')
                            let fullKey = etags3 + "$$##" + file.Key
                            dataFromS3.push({ key: fullKey, value: valueArray })
                        }
                        catch (e) {
                            throw new Error(`Could not retrieve file from S3: ${e.message}`)
                        }
                    }
                    for (let partyId of awsPartyIds) {
                        try {
                            const partyParams = {
                                Bucket: jobApiConfig.ecc_party_ids_s3_bucket,
                                Key: partyId.Key
                            }
                            let response = await partyIdS3.getObject(partyParams).promise();
                            let valueArray = await JSON.parse(response.Body.toString('utf-8'))
                            let etags3 = partyId.ETag.replaceAll('"', '')
                            let fullKey = etags3 + "$$##" + partyId.Key
                            partyIdsFromS3.push({ key: fullKey, value: valueArray })
                        }
                        catch (e) {
                            throw new Error(`Could not retrieve file from S3: ${e.message}`)
                        }
                    }
                    // console.log(dataFromS3, "stage 2")
                    // console.log("stage 2")
                    //Creating a new IDB
                    // let version = 1
                    let request = indexedDB.open(DBName)
                    let db, objectStore, partyObjectStore;
                    request.onupgradeneeded = function (event) {
                        db = request.result;
                        if (!request.result.objectStoreNames.contains('MasterData')) {
                            objectStore = db.createObjectStore("MasterData")
                            // console.log(request.result.objectStoreNames.contains('MasterData'), "stage 3 => Created a new object store")
                            // console.log("stage 3 => Created a new object store")
                        }
                        if (!request.result.objectStoreNames.contains('PartyIds')) {
                            partyObjectStore = db.createObjectStore("PartyIds")
                        }
                    }
                    request.onsuccess = function (e) {
                        db = request.result;
                        // console.log("request.onsuccess")
                        let tx = db.transaction("MasterData", "readwrite")
                        let partyTx = db.transaction("PartyIds", "readwrite")
                        // console.log("after tx")
                        // console.log(tx)

                        let dataObjectStore = tx.objectStore("MasterData")
                        let partyObjectStore = partyTx.objectStore("PartyIds")
                        // console.log(dataObjectStore)
                        dataFromS3.forEach((datum) => {
                            // console.log(`added in indexed DB `)
                            dataObjectStore.put(datum, datum.key);
                        })
                        partyIdsFromS3.forEach((partyId) => {
                            // console.log(`added in indexed DB `)
                            partyObjectStore.put(partyId, partyId.key);
                        })
                        // setIdbCompleted(true)
                        request.result.close()
                    }
                    request.onerror = e => {
                        console.log("error while opening IDB => creation of new IDB Sign In")
                    }
                }//if condition 
                // setIdbCompleted(true)
            }
            await Auth.signIn(username, password).then(async user => {
                //console.log(user,"userr")
                // let response = await createNewIndexedDB()
                // setIdbCompleted(response)

                if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                    setIsReset(true)
                    setIsUser(user)
                } else {
                    let tenantConfig = { customs_broker_code: user?.attributes["custom:CustomBrokerCode"] }
                    let customerTenantId = { tenantId: user?.attributes["custom:sentinel_Tenant_Id"] }
                    AmplifyConfig.addConfig(ConfigKeys.TENANT_CONFIG, tenantConfig)
                    AmplifyConfig.addConfig(ConfigKeys.TENANT_ID, customerTenantId)
                    // await getUserDetails(username)
                    await createNewIndexedDB()
                    navigate('/app/myJobs');
                }
            })
        } catch (error) {
            setLoginErrorMessage(error.message);
            setLoginError(true)
        }
    }
    if (idbCompleted) {
        // console.log("navigation stage 1")
        if (auth.isUserSignedIn) {
            // console.log("navigation stage 2")
            if (typeof from !== 'undefined') {
                if (from !== "/app/job/document" || from !== "/app/job") {
                    navigate(from)
                }
                else {
                    navigate('/app/myJobs')
                }
                // console.log("navigation stage 3")

            }
        }
    }

    // async function resetPassword(password, repeatPassword) {

    //     setSendErrorMessage("")

    //     try {
    //         await Auth.completeNewPassword(
    //             isUser,
    //             password
    //         )
    //     } catch (error) {
    //         console.log(error, "error")
    //         //  setIsInvalidPassword(true)

    //         setSendErrorMessage(error.message)
    //         setIsSnackBar(true)
    //     }
    // }

    // async function passwordMatch(password, repeatPassword, username, code) {
    //     if (isOtpAuth) {
    //         if (code === "") {
    //             setSendErrorMessage("Please Enter a Valid OTP")
    //             setIsSnackBar(true)
    //         }
    //         else {
    //             if (password === repeatPassword && password !== "") {
    //                 await verifyOtp(username, code, password)
    //             }
    //             else if (password !== repeatPassword) {
    //                 setSendErrorMessage("Password Mismatch")
    //                 setIsSnackBar(true)
    //             } else {
    //                 setSendErrorMessage("Don't leave password field empty")
    //                 setIsSnackBar(true)
    //             }
    //         }
    //     } else {
    //         if (password === repeatPassword && password !== "") {
    //             await resetPassword(password, repeatPassword)
    //             setIsPasswordMatch(true)
    //         }
    //         else if (password !== repeatPassword) {
    //             setSendErrorMessage("Password Mismatch")
    //             setIsSnackBar(true)
    //         } else {
    //             setSendErrorMessage("Don't leave password field empty")
    //             setIsSnackBar(true)
    //         }
    //     }
    // }

    // if (auth.isUserSignedIn && isReset !== true) {
    //     // Was user redirected to signIn?
    //     if (typeof from !== 'undefined') {
    //         navigate(from)
    //     }
    // }
    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }

    //     setLoginError(false);
    // };
    // const handleForgotPassword = () => {
    //     setForgotPassword(true)
    // }
    // async function otpAuth(username) {
    //     if (username === "") {
    //         return (setSendErrorMessage("Please enter a valid email"),
    //             setIsSnackBar(true))
    //     } else {
    //         try {
    //             await Auth.forgotPassword(username)
    //                 .then(data => {
    //                     setIsOtpAuth(true)
    //                 })
    //                 .catch(err => {
    //                     const code = err.code;
    //                     switch (code) {
    //                         case 'UserNotFoundException':
    //                             return (setSendErrorMessage("Please Enter a valid Username"),
    //                                 setIsSnackBar(true))
    //                         case 'InvalidParameterException':
    //                             return (setSendErrorMessage("Cannot reset password for the user as there is no verified email or phone_number"),
    //                                 setIsSnackBar(true))
    //                         case 'LimitExceededException':
    //                             return (setSendErrorMessage("Attempt limit exceeded: Please try again after some time"),
    //                                 setIsSnackBar(true))

    //                         default:
    //                             return (setSendErrorMessage("Unexcepted Error Caught"),
    //                                 setIsSnackBar(true))
    //                     }
    //                 }
    //                 )

    //             setUserName(username)
    //         }
    //         catch (error) {
    //             setSendErrorMessage(error.message)
    //             setIsSnackBar(true)

    //         }
    //     }
    // }
    // async function verifyOtp(username, code, newPassword) {
    //     setSendErrorMessage("")
    //     try {
    //         await Auth.forgotPasswordSubmit(username, code, newPassword)
    //             .then(data => {
    //                 setForgotPassword(false)
    //                 setIsOtpAuth(false)
    //                 navigate('/app/myJobs');

    //             })
    //     }
    //     catch (error) {
    //         const code = error.code;
    //         switch (code) {
    //             case "InvalidPasswordException":
    //                 return (setSendErrorMessage("Password Should Contain atleast one Uppercase,Lowercase,Number and Special character"),
    //                     setIsSnackBar(true))
    //             case "CodeMismatchException":
    //                 return (setSendErrorMessage("The OTP entered is incorrect. Please enter correct OTP"),
    //                     setIsSnackBar(true))
    //             default:
    //                 return (setSendErrorMessage("Unexcepted Error Caught"),
    //                     setIsSnackBar(true))
    //         }
    //     }
    //     if (!sendErrorMessage) {
    //         navigate('/signIn')
    //     }

    // }
    return (
        <div>
            {
                <SignInRoute signIn={signIn} loginErrorMessage={loginErrorMessage} loginError={loginError} />
            }
        </div>
    )
}

export default AmplifySignIn
