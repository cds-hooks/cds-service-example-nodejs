# cds-card-service

[![devDependency Status](https://david-dm.org/cds-hooks/cds-card-service.svg)](https://david-dm.org/cds-hooks/cds-card-service#info=devDependencies)

Simple nodejs server that acts as a set of CDS services

## Usage
This card service can be deployed with docker. By default, the Dockerfile exposes port 9000. Creating the docker container can be done by:

```bash
$ docker build -t <your-name>/cds-card-service .
Successfully built <container-id>

$ docker run -p 9000:9000 -d --rm <your-name>/cds-card-service
```

## Notes
Thank you to [Josh Mandel](https://github.com/jmandel) and [Kevin Shekleton](https://github.com/kpshek) for the cds-hooks project, a JSON-based mechanism for EMR systems to provide decision support tools from within a clinician's workflow.

## License

(MIT License)
Copyright (c) 2016 [Matt Berther](https://matt.berther.io)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
