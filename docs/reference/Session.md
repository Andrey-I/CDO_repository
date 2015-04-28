## Session


### new Session()
Manages authentication and session ID information for a service.

Use:  OE mobile developer instantiates a session and calls addCatalog() to load
      information for one or more services defined in a catalog file.
      
      Developer instantiates JDSOs as needed.
      Usually all of the JSDOs will use the same session, but if a client-side
      service needs resources from more than one REST app, there would need to be more
      than one session

## Methods

<a name="_openRequest"></a>
### _openRequest
(intended for progress.data library use only)
calls open() for an xhr -- the assumption is that this is an xhr for a JSDO, and we need to add
some session management information for the request, such as user credentials and a session ID if
there is one


<a name="doFormLogin"></a>
### doFormLogin
This function handles logging in to a service that uses form-based authentication. It's separate
from the main login function because it's long. One of the things it does is examine the
response from an initial attempt to get the login target without credentials (done in the main 
login() function) to determine whether the user has already been authenticated. Although a 
current OE Mobile Web application (as of 5/30/2013) will return an error if authentication 
failed on a form login, previous versions and non-OE servers return a 
redirect to a login page and the user agent (browser or native wrapper) 
usually then fetches the redirect location and returns it along with a 
200 Success status, when in fcat it was an authentication failure. Hence 
the need to analyze the response to try to figure out what we get back.


<a name="logout"></a>
### logout
logout


<a name="addCatalog"></a>
### addCatalog
addCatalog


<a name="ping"></a>
### ping
ping -- determine whether the Mobile Web Application that the Session object represents
 is available, which includes determining whether its associated AppServer is running
 Also determine whether the Mobile services managed by this Session object are available
 (which means simply that they're known to the Mobile Web Application) 
 (Implementation note: be sure that this Session object's "connected" 
 property retains its current value until the end of this function, where
 it gets updated, if necessary, after calling _isOnlineStateChange
 
 Signatures :



| Param | Description |
| --- | --- |
| arg | There are 2 signatures --    -  no argument -- do an async ping of the Session's Mobile Web application. The only effect                     of the ping will be firing an offline or an online event, if appropriate                     The ping function itself will return false to the caller    -  object argument -- the object's properties provide the input args. They are all           optional (if for some reason the caller passes an object that has no properties, it's          the same as passing no argument at all). The properties may be:            async -- tells whether to execute the ping asynchronously (which is the default)            onCompleteFn -- if async, this will be called when response returns            doNotFireEvent -- used internally, controls whether the ping method causes an offline                 or online event to be fired if there has been a change (the default is that it                 does, but our Session._checkServiceResponse() sets this to true so that it can                 control the firing of the event)            offlineReason -- if present, and if the ping code discovers that teh server is offline,                 the ping code will set this with its best guess as to the reason the server is offline |

<a name="_isOnlineStateChange"></a>
### _isOnlineStateChange
given a value of true or false for being online for the Mobile Web Application
managed by this Session object, determine whether that changes the current 
state of being offline or online.
Returns true if the input state is a change from the current state

Signature :



| Param | Description |
| --- | --- |
| isOnline | Required. True to determine whether online is a state change, false to                  determine whether offline constitutes a state change. Boolean. |

<a name="_checkServiceResponse"></a>
### _checkServiceResponse
given information about the response from a request made to a service,
do the following:

determine whether the online status of the Session has changed, and 
set the Session's Connected property accordingly
if the Session's online status has changed, fire the appropriate event

Signature :



| Param | Description |
| --- | --- |
| xhr | Required. The xhr that was used to make the request. Object |
| success | Required. True if caller regards the request as having succeeded. Boolean |
| request | Required. The JSDO request object created for making the request. Object. |

<a name="_processPingResult"></a>
### _processPingResult
Decide whether, on the basis of information returned by a ping request, the 
Mobile Web Application managed by this Session object is online, where online 
means that the ping response was a 200 and, IF the body of the response contains
JSON with an AppServerStatus property, that AppServerStatus Status property has 
a pingStatus property set to true
    i.e., the body has an AppServerStatus.PingStatus set to true
(if the body doesn't contain JSON with an AppServerStatus, we use just the HTTP 
response status code to decide) 
Return true if the response meets these conditions, false if it doesn't


<a name="_sendPing"></a>
### _sendPing
args: pingURI
      async
      onCompleteFn     used only if async is true

 (deliberately not catching thrown error)


<a name="_autoping"></a>
### _autoping
autoping -- callback


<a name="_setXHRCredentials"></a>
### _setXHRCredentials
_setXHRCredentials  (intended for progress.data library use only)
 set credentials as needed, both via the xhr's open method and setting the
 Authorization header directly


<a name="_addCCIDtoURL"></a>
### _addCCIDtoURL
_addCCIDtoURL  (intended for progress.data library use only)
 Add the Client Context ID being used by a session on an OE REST application, if we have
 previously stored one from a response from the server


<a name="_addTimeStampToURL"></a>
### _addTimeStampToURL
_addTimeStampToURL (intended for progress.data library use only)
Add a time stamp to the a URL to prevent caching of the request.
Set progress.data.Session._useTimeStamp = false to turn off.


<a name="_saveClientContextId"></a>
### _saveClientContextId
_saveClientContextId  (intended for progress.data library use only)
 If the CCID hasn't been set for the session yet, check the xhr for it and store it.
 (If it has been set, assume that the existing one is correct and do nothing. We could
  enhance this function by checking to see whether the new one matches the existing one.
 Not sure what to do if that's the case -- overwrite the old one? ignore the new one?
  Should at least log a warning or error


<a name="_prependAppURL"></a>
### _prependAppURL
_prependAppURL
Prepends the URL of the Web application (the 1st parameter passed to login, stored in this.serviceURI)
to whatever string is passed in. If the string passed in is an absolute URL, this function does
nothing except return a copy. This function ensures that the resulting URL has the correct number
of slashes between the web app url and the string passed in (currently that means that if what's
passed in has no initial slash, the function adds one)


<a name="handleJSONLoginResponse"></a>
### handleJSONLoginResponse
sets the statusFromjson property in the params object to indicate 
the status of a response from an OE Mobile Web application that has
to do with authentication (the response to a login request, or a
response to a request for a resource where there was an error having
to do with authentication
