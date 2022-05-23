import { Patient } from '../Models/patient';

describe('Patient', () => {
  it('should create an instance', () => {
    expect(new Patient()).toBeTruthy();
  });
});
