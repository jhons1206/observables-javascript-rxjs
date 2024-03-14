import { ExampleCreate } from './1-observable-create';

const observable$ = ExampleCreate.createObservableWithNumbers();

const observable2$ = ExampleCreate.createObservableWithPasteles();

observable$.subscribe(
    (data) => console.log(data),
    (error) => console.error(error),
    () => {
        console.log('Observable números sent "completed"');
    }
);

observable2$.subscribe(
    (pastel) => console.log(pastel),
    (error) => console.error(error),
    () => {
        console.log('Los pasteles se terminaron!');
    }
);
