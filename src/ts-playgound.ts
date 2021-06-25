import { Money } from './app/models/MoneyTypes';

// typescript playground
type Guid = string;
interface DummyType {
  id: string;
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
// za pomocą keyof mozemy wyciagnąć wszystkie dostepne typy w obiekcie. warto zauważyc ze nie bierze on pod uwage typu never
type typesOfDummyType = DummyType[keyof DummyType];



// tak zrobimy Partial - w indexed type jako klucz dajemy każdy z kluczy obiektu i ustawiamy jako opcjonalny
type OptionalDummyType = {
  [key in keyof DummyType]?: DummyType[key]
}

// możemy również tworzyć typy warunkowe
type ConditionalDummyType = { [key in keyof DummyType]: DummyType[key] extends number ? number : never }

//spróbujmy robic z tego typ generyczny

type OnlySelectedPropTypes1<BaseType, SelectedPropTypes> = {
   [key in keyof BaseType]: BaseType[key] extends SelectedPropTypes ? SelectedPropTypes : never
}

type OnlyNumbersAreNotNever1 = OnlySelectedPropTypes1<DummyType, number>

//a teraz zróbmy trick. umieścimy nazwy kluczy w typach
type OnlySelectedPropTypes<BaseType, SelectedPropTypes> = {
  [key in keyof BaseType]: BaseType[key] extends SelectedPropTypes ? key : never
}

type OnlyNumbersAreNotNever = OnlySelectedPropTypes<DummyType, number>;
type OnlyNumberPropNames = OnlyNumbersAreNotNever[keyof OnlyNumbersAreNotNever];
type ObjectWithOnlyNumberProps = Pick<DummyType, OnlyNumberPropNames>
