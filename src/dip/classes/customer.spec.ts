import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstNAme, lastName and cpf', () => {
    const sut = createIndividualCustomer('Davi', 'Celso', '111.111');
    expect(sut).toHaveProperty('firstName', 'Davi');
    expect(sut).toHaveProperty('lastName', 'Celso');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods o get name and idn', () => {
    const sut = createIndividualCustomer('Davi', 'Celso', '111.111');
    expect(sut.getName()).toBe('Davi Celso');
    expect(sut.getIDN()).toBe('111.111');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name, cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '111.555.55');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '111.555.55');
  });

  it('should have methods o get name and idn', () => {
    const sut = createEnterpriseCustomer('Udemy', '111.555.55');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('111.555.55');
  });
});
