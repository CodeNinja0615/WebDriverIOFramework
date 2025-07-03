// test/specs/execution-handler.spec.js
import dataSet from '../../test-data/dataSet01.json' with { type: 'json' };
import runE2ETest from '../flows/end2end-ecommerce-flow.js';

const testList = [runE2ETest]; // Add more if needed

describe('Sequential Test Execution Handler', () => {
    testList.forEach((flow, index) => {
        flow(dataSet, index);
    });
});
