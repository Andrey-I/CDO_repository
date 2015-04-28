## Observable

### new Observable()
Utility class that allows subscribing and unsubscribing from named events.

## Methods

<a name="_filterObservers"></a>
### _filterObservers
Remove the given function from the array of observers


<a name="validateSubscribe"></a>
### validateSubscribe
validate the arguments passed to the subscribe function


<a name="subscribe"></a>
### subscribe
bind the specified function so it receives callbacks when the
specified event name is called. Event name is not case sensitive.
An optional scope can be provided so that the function is executed
in the given scope.  If no scope is given, then the function will be
called without scope.

If the same function is registered for the same event a second time with
the same scope the original subscription is removed and replaced with the new function
to be called in the new scope.

This method has two signatures.

Signature 1:



| Param | Description |
| --- | --- |
| evt | The name of the event to bind a handler to. String. Not case sensitive. |
| fn | The function callback for the event . Function. |
| scope | The scope the function is to be run in. Object. Optional. Signature 2: |
| evt | The name of the event to bind a handler to. String. Not case sensitive |
| operation | The name of the operation to bind to. String. Case sensitive. |
| fn | The function callback for the event . Function. |
| scope | The scope the function is to be run in. Object. Optional. |

<a name="unsubscribe"></a>
### unsubscribe
remove the specified function so it no longer receives events from
the given name. event name is not case sensitive.

This method has two signaturues.
Signature 1:



| Param | Description |
| --- | --- |
| evt | Required. The name of the event for which to unbind the given function. String. |
| fn | Required. The function to remove from the named event. Function. |
| scope | Optional. The function scope in which to remove the listener. Object. Signature 2: |
| evt | Required. The name of the event for which to unbind the given function. String. Not case sensitive |
| operation | Required.  The name of the operation to receive events. String. Case Sensitive |
| fn | Required. The function to remove from the named event. Function. |
| scope | Optional. The function scope in which to remove the listener. Object. |

<a name="trigger"></a>
### trigger
trigger an event of the given name, and pass the specified data to
the subscribers of the event. Event name is not case sensitive.
A variable numbers of arguments can be passed as arguments to the event handler.

This method has two signatures
Signature 1:



| Param | Description |
| --- | --- |
| evt | The name of the event to fire.  String.  Not case sensitive. |
| operation | The name of the operation. String.  Case sensitive |
| args | Optional.  A variable number of arguments to pass to the event handlers. Signature 2: |
| evt | The name of the event to fire. String.  Not case sensitive |
| args | Optional.  A variable number of arguments to pass to the event handlers. |

<a name="unsubscribeAll"></a>
### unsubscribeAll
unbind all listeners from the given event. If the
evt is undefined, then all listeners for all events are unbound
evnt name is not case sensitive



| Param | Description |
| --- | --- |
| evt | Optional. The name of the event to unbind.  If not passed, then all events are unbound |

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
