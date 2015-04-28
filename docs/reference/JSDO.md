## JSDO


### new JSDO(resNameOrParmObj:, serviceName)
Returns a JSDO for the specified resource.


| Param | Description |
| --- | --- |
| resNameOrParmObj: | the resource name or an object that contains the initial values for the JSDO                          (if this is an object, it should include the name property with the resource name |
| serviceName | : name of service (ignored if 1st param is an object containing the initial values) |

## Methods

<a name="_httpRequest"></a>
### _httpRequest
Performs an HTTP request using the specified parameters.  This is 
used to perform remote calls for the JSDO for operations defined.


<a name="find"></a>
### find
Finds a record in the JSDO memory using the specified function to determine the record.


<a name="fill"></a>
### fill
Loads data from the HTTP resource.


<a name="_clearData"></a>
### _clearData
Clears all data (including any pending changes) for each buffer in JSDO


<a name="_execGenericOperation"></a>
### _execGenericOperation
Executes a CRUD operation using the built-in API.


<a name="saveChanges"></a>
### saveChanges
Saves changes in the JSDO. Save any outstanding changes for CREATES, UPDATE, and DELETEs


<a name="_syncTableRef"></a>
### _syncTableRef
Synchronizes changes for a TableRef



| Param | Description |
| --- | --- |
| operation | HTTP operation to be performed |
| tableRef | Handle to the TableRef |
| batch | Optional. batch information associated with the sync operation.  If not specified a new one will be created.  Used for saving datasets. |

<a name="_useBeforeImage"></a>
### _useBeforeImage
Returns true if the specified operation type was specified in the catalog as useBeforeImage,
else it returns false.


<a name="_syncDataSetForCUD"></a>
### _syncDataSetForCUD
Synchronizes changes for a DataSet. This is called when we send over one row at at time
to Create, Update and Delete methods.
It handles row with or without before-image data.


<a name="_syncSingleTable"></a>
### _syncSingleTable
Synchronizes changes for a single table


<a name="_syncDataSetForSubmit"></a>
### _syncDataSetForSubmit
Synchronizes changes for a DataSet, sending over the entire change-set to saveChanges() on server
Sends over before-image and after-image data.


<a name="_createChangeSet"></a>
### _createChangeSet
Private method that creates a jsonObject with before and after image data for all 
records in change-set (creates, updates and deletes)

Params: dataSetName is required.     
        alwaysCreateTable is required. If true, always create table array (even if no data/changes)
        request is optional


<a name="_createDataAndChangeSet"></a>
### _createDataAndChangeSet
Private method that creates a jsonObject with data and also before image data 
 for all records in change-set (creates, updates and deletes)

Params: dataSetName is required. 
It returns jsonObject that can be used as input to addRecords()


<a name="addRecords"></a>
### addRecords
Reads a JSON object into the JSDO memory.


<a name="_copyRecord"></a>
### _copyRecord
Copies the fields of the source record to the target record.
Preserves the _id of the target record.


<a name="_deleteProdsProperties"></a>
### _deleteProdsProperties
Deletes the "prods:" properties when no longer needed, typically when doing acceptChanges, rejectChanges, or _applyChanges.
These properties are used to transfer before-image info between client JSDO and AppServer.

Also, it optionally clears out the errorString field depending upon value of clearErrorString. To be consistent with the handling of 
the ABL's Buffer ERROR-STRING attribute, the errorString field should be cleared out when doing acceptChanges() or rejectChanges().


<a name="_mergeUpdateRecord"></a>
### _mergeUpdateRecord
Replace existing record data and index entry with new record data.


<a name="_setErrorString"></a>
### _setErrorString
update existing record data with specified error string


<a name="_arrayFromDataObject"></a>
### _arrayFromDataObject
Returns the array with the data from the specified dataObject.


<a name="_isBatchSuccess"></a>
### _isBatchSuccess
determine if a batch of XHR requests has completed in which all requests are successful


<a name="_isBatchComplete"></a>
### _isBatchComplete
determine if all XHR requests from the batch of saves have completed (not necessarily to success)


<a name="acceptChanges"></a>
### acceptChanges
Accepts changes for all table references in the JSDO.


<a name="rejectChanges"></a>
### rejectChanges
Rejects changes for the table references in the JSDO.


<a name="getChanges"></a>
### getChanges
Returns an array with changes for all table references in the JSDO.


<a name="_applyChanges"></a>
### _applyChanges
Private method to apply changes for all table references in the JSDO.
If _errorString has been set for a row, rejectRowChanges() is called. 
If it has not been set, acceptRowChanges() is called.


<a name="acceptRowChanges"></a>
### acceptRowChanges
Accepts row changes for the working record using the JSDO reference.


<a name="rejectRowChanges"></a>
### rejectRowChanges
Reject row changes for the working record using the JSDO reference.


<a name="saveLocal"></a>
### saveLocal
Saves JSDO memory (and optionally pending changes) to local storage.

saveLocal()
saveLocal(name)
saveLocal(dataMode)
saveLocal(name, dataMode)


<a name="readLocal"></a>
### readLocal
Reads localStorage (based upon name) into JSDO memory (localStorage may or may not have pending changes).

readLocal()
readLocal(name)


<a name="addLocalRecords"></a>
### addLocalRecords
Reads localStorage (based upon name) into JSDO memory (localStorage may or may not have pending changes).

addLocalRecords(addMode)
addLocalRecords(addMode, keyFields)
addLocalRecords(name, addMode)
addLocalRecords(name, addMode, keyFields)


<a name="_containsPrimaryKeys"></a>
### _containsPrimaryKeys
This method returns True if each buffer in the jsdo contains a primary key.


<a name="_hasMatchingSchema"></a>
### _hasMatchingSchema
Compares JSDO's dataset/table names with those in specified storage object.
Returns true if they match (or if storageObject is null or empty), else false.


<a name="deleteLocal"></a>
### deleteLocal
Clears the data saved to local storage.

deleteLocal()
deleteLocal(name)


