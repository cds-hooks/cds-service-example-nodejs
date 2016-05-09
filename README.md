# cds-service-example-nodejs

[![Circle CI](https://circleci.com/gh/cds-hooks/cds-service-example-nodejs.svg?style=shield)](https://circleci.com/gh/cds-hooks/cds-service-example-nodejs)
[![devDependency Status](https://david-dm.org/cds-hooks/cds-service-example-nodejs.svg)](https://david-dm.org/cds-hooks/cds-service-example-nodejs)

Simple nodejs server that acts as a set of CDS services

## Usage
This card service can be deployed with docker. By default, the Dockerfile exposes port 9000. Creating the docker container can be done by:

```bash
$ docker build -t <your-name>/cds-service-example-nodejs .
Successfully built <container-id>

$ docker run -p 9000:9000 -d --rm <your-name>/cds-service-example-nodejs
```

## Adding a fixture
A fixture for the cds-service-example-nodejs project is implemented as a javascript module that exports two properties: `definition` and `payload`.

The `definition` property describes the service as it would be exposed through the `/.well-known/cds-services` endpoint. The schema for the service definition is available at the [CDS Hooks Discovery documentation page](http://cds-hooks.github.io/docs/#discovery).

The `payload` property is the payload that will be returned from the `/cds-services/fixture` endpoint. The schema for the payload is available at the [CDS Hooks Service Response documentation page](http://cds-hooks.github.io/docs/#cds-service-response). You can also use the [cds-validator](https://github.com/cds-hooks/cds-validator) project to ensure the schema payload is valid.

Prior to submitting a pull request for the fixture, please make sure that `npm test` passes the jshint.

Skeleton:

```js
'use strict';

module.exports = {
  definition: {},
  payload: {}
}
```

## Notes
Thank you to [Josh Mandel](https://github.com/jmandel) and [Kevin Shekleton](https://github.com/kpshek) for the cds-hooks project, a JSON-based mechanism for EMR systems to provide decision support tools from within a clinician's workflow.

## License
(MIT License)
Copyright (c) 2016 [Matt Berther](https://matt.berther.io)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
