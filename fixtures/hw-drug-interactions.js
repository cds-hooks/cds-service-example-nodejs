'use strict';

module.exports = {
  definition: {
    id: 'hw-drug-interactions',
    name: 'Drug Interactions',
    hook: 'medication-prescribe',
    description: 'Drug interaction information from the Healthwise Drug Interaction Checker',
    prefetch: {
         patient: 'Patient/{{Patient.id}}',
         medications: 'MedicationOrder?patient={{Patient.id}}&status=active'
    }
  },
  payload: {
    cards: [{
      summary: 'Drug Interactions',
      detail: 'The following drug interactions were found.\n### Interactions\n###### ACE INHIBITORS; ARBS/POTASSIUM PREPARATIONS (moderate)\nlisinopril (bulk) and Potassium & Magnesium Aspartat oral may interact based on the potential interaction between ACE INHIBITORS; ARBS and POTASSIUM PREPARATIONS.\n\n',
      source: {
        label: 'Healthwise',
        url: 'http://www.healthwise.org'
      },
      indicator: 'info'
    }]
  }
};
