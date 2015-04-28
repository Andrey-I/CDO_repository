## JSTableRef


### new JSTableRef()
JSTableRef class

##Methods

<a name="_clearData"></a>
### _clearData
Clears all data (including any pending changes) in buffer


<a name="_getRelatedData"></a>
### _getRelatedData
Returns records related to the specified jsrecord.
If jsrecord is not specified the parent working record is used.


<a name="find"></a>
### find
Finds a record in the JSDO memory using the specified function to determine the record.


<a name="foreach"></a>
### foreach
Loops through the records


<a name="addRecords"></a>
### addRecords
Reads a JSON object into the JSDO memory for the specified table reference.


<a name="acceptChanges"></a>
### acceptChanges
Accepts changes for the specified table reference.


<a name="rejectChanges"></a>
### rejectChanges
Rejects changes for the specified table reference.


<a name="_applyChanges"></a>
### _applyChanges
Private method to apply changes for the specified table reference.
If _errorString has been set for a row, row change is rejected. 
If it has not been set, acceptRowChanges() is called.


<a name="acceptRowChanges"></a>
### acceptRowChanges
Accepts row changes for the working record at the table reference level.


<a name="rejectRowChanges"></a>
### rejectRowChanges
Rejects row changes for the working record at the table reference level.


<a name="_hasNestedChild"></a>
### _hasNestedChild
This method returns true if this table has any child tables and at least one of those tables is nested.
Else if returns false.
