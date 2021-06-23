import { Money } from './app/models/MoneyTypes';

// typescript playground
type Guid = string;
interface DummyType {
  id?: Guid;
  name: string;
  email: string;
  price: number;
  someProp: never;
  go: (length: number) => void;
  address: {
    city: string;
  }
}
function calculateVat(money: Money, vat: number){}
// PARTIAL<T>
// konfiguracje (nadpisujemy tylko te lementy konfiguracji które chcemy)
// update/patch w CRUDzie np PATCH /dummyTypes/1223324234 w body { name: "newName" }
type MyPartialDummyType = Partial<DummyType>

type RequiredDummyType = Required<DummyType>

type ReadonlyDummyType = Readonly<DummyType>

type OnlyPersonalDataFromDummyType = Pick<DummyType, 'name' | 'email'>
type OnlyPersonalDataFromDummyType1 = Omit<DummyType, 'name' | 'email'>

type OnlyStringObj = {
  [k: string]: string
}

type keysOfDummyType = DummyType[keyof DummyType];

type OptionalDummyType = {
  [key in keyof DummyType]?: DummyType[key]
}
