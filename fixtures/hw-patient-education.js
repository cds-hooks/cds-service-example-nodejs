'use strict';

module.exports = {
  definition: {
    id: 'hw-patient-education',
    name: 'Patient Education',
    hook: 'patient-view',
    description: 'Patient Education from the Healthwise Knowledgebase',
    prefetch: {
         patient: 'Patient/{{Patient.id}}',
         conditions: 'Condition?patient={{Patient.id}}'
    }
  },
  payload: {
    cards: [{
      summary: 'Patient Education',
      detail: 'The following patient education resources were found.\n\n### Conditions\n###### Amnesia(2005-05-22)\n* [Confusion, Memory Loss, and Altered Alertness](https://www.healthwise.net/hworg/Content/StdDocument.aspx?DOCHWID=confu&f=br549)\n###### Alzheimer\'s disease(2008-08-08)\n* [Alzheimer\'s Disease](https://www.healthwise.net/hworg/Content/StdDocument.aspx?DOCHWID=hw136623&f=br549),\n* [Dementia](https://www.healthwise.net/hworg/Content/StdDocument.aspx?DOCHWID=uf4984&f=br549),\n* [Alzheimer\'s Disease: Should I Take Medicines?](https://www.healthwise.net/hworg/Content/StdDocument.aspx?DOCHWID=ty7566&f=br549)\n###### Needs influenza immunization(2008-08-08)',
      source: {
        label: 'Healthwise',
        url: 'http://www.healthwise.org'
      },
      indicator: 'info'
    }]
  }
};
