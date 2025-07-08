import dataSet from '../../test-data/dataSet01.json' with { type: 'json' };
import runE2ETest from '../flows/end2end-ecommerce-flow.js';

const testList = [runE2ETest]; // Add more if needed

describe('Sequential Test Execution Handler', () => {
    for (let i = 0; i < testList.length; i++) {
        const flow = testList[i];
        flow(dataSet, i);
    }
});
