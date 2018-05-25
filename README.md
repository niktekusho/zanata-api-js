[![Build Status](https://travis-ci.org/niktekusho/zanata-api-js.svg?branch=master)](https://travis-ci.org/niktekusho/zanata-api-js)

# Zanata REST API library for Node.js

WIP. Right now only minimum required features implemented in the API.

# Implemented APIs

## Assumption

:warning: The package is written in TypeScript and is currently aimed towards use in TypeScript projects.
The package exports 2 main objects (could be subject to change in the future):
1.  `api`: contains all the implemented APIs in form of `async` functions
2.  `types`: contains the TypeScript `type`s that should be used when calling the implemented APIs

## Projects

Fetch from a running Zanata instance the list of all projects currently in the system. Includes "archived" projects.

### Usage

```ts
import { api, types } from "zanata-api-js";

...
// in an async function...
try {
	const projects: types.ZanataProject[] = await api.projects.get(serverUrl);
} catch(error) {
	// Properly handle error
}
```

## Project[GET]

Fetch the details of a single project given its ID. 

### Usage

```ts
import { api, types } from "zanata-api-js";

...
// in an async function...
try {
	const project: types.ZanataProject = await api.project.get(serverUrl, projectID);
} catch(error) {
	// Properly handle error
}
```

## Project Iteration/Version[GET]

Fetch the details of a specific iteration/version of the specified project. 

### Usage

```ts
import { api, types } from "zanata-api-js";

...
// in an async function...
try {
	const iteration: types.ZanataIteration = await api.iteration.get(serverUrl, projectID, iterationID);
} catch(error) {
	// Properly handle error
}
```

## Project Iteration/Version Documents[GET]

Fetch the list of documents existing in a specific iteration/version of the specified project. 

### Usage

```ts
import { api, types } from "zanata-api-js";

...
// in an async function...
try {
	const docs: types.ZanataDocument[] = await api.iteration.getDocuments(serverUrl, projectID, iterationID);
} catch(error) {
	// Properly handle error
}
```

## Project Iteration/Version Enabled locales[GET]

Fetch the list of locales enabled in a specific iteration/version of the specified project. 

### Usage

```ts
import { api, types } from "zanata-api-js";

...
// in an async function...
try {
	const locales: types.ZanataLocale[] = await api.iteration.getLocales(serverUrl, projectID, iterationID);
} catch(error) {
	// Properly handle error
}
```

## Document Details[GET]

Fetch the details of a specific document in a specific iteration/version of the specified project.
With this API you fetch also the source content of the document.

### Usage

```ts
import { api, types } from "zanata-api-js";

...

const reqObject: api.document.DocRequest = {
	projectID: "example",
	iterationID: "example",
	documentID: "example.properties"
};

// in an async function...
try {
	const doc: types.ZanataDocument = await api.document.get(serverUrl, reqObject);
} catch(error) {
	// Properly handle error
}
```

## Document Translation[GET]

Fetch the translations for the specific document in a specific iteration/version of the specified project in the specified language. 

### Usage

```ts
import { api, types } from "zanata-api-js";

...

const reqObject: api.document.DocRequest = {
	projectID: "example",
	iterationID: "example",
	documentID: "example.properties"
};

// in an async function...
try {
	const translationsResonse: types.ZanataTranslationResponse = await api.document.getDocumentTranslation(serverUrl, 		reqObject, language);
	const translations = translationsResonse.textFlowTargets;
} catch(error) {
	// Properly handle error
}
```


## Document Details[PUT]

Creates a document or updates the details of a document.
Since this API involves editing of resources you __must__ use the authentication header which I provide you (look below for the example).

### Usage

```ts
import { api, types } from "zanata-api-js";

...

const reqObject: api.document.DocRequest = {
	projectID: "example",
	iterationID: "example",
	documentID: "exampledoc"
};

const sampleZanataAuth: types.ZanataIni = {
    apiKey: "the api key Zanata provides you (Login in Zanata -> Settings -> Client -> Generate a new API Key)",
    url: "you could also leave this as blank string in this case",
    username: "self explanatory I think..."
};

const headers = api.auth.authHeader(sampleZanataAuth);

const newDocument: types.ZanataDocument = {
    contentType: "text/plain",
    lang: "it",
	name: "newdoc",
    revision: 1,
    type: "FILE"
};

// in an async function...
try {
	const response = await api.document.putSourceDocument(serverUrl, reqObject, newDocument, headers);
	// response body is empty
} catch(error) {
	// Properly handle error
}
```

## Document Translation[PUT]

Overwrite 

### Usage

```ts
import { api, types } from "zanata-api-js";

...

const reqObject: api.document.DocRequest = {
	projectID: "example",
	iterationID: "example",
	documentID: "example.properties"
};

// in an async function...
try {
	const translationsResonse: types.ZanataTranslationResponse = await api.document.getDocumentTranslation(serverUrl, 		reqObject, language);
	const translations = translationsResonse.textFlowTargets;
} catch(error) {
	// Properly handle error
}
```
