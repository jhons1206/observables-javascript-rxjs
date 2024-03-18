// import { ExampleCreate } from './1-observable-create';

// const observable$ = ExampleCreate.createObservableWithNumbers();

// const observable2$ = ExampleCreate.createObservableWithPasteles();

// observable$.subscribe(
//     (data) => console.log(data),
//     (error) => console.error(error),
//     () => {
//         console.log('Observable números sent "completed"');
//     }
// );

// setTimeout(() => {
//     observable$.unsubscribe();
// }, 2000);

// observable2$.subscribe(
//     (pastel) => console.log(pastel),
//     (error) => console.error(error),
//     () => {
//         console.log('Los pasteles se terminaron!');
//     }
// );

// import { ExampleHotObservable } from './2-from-events';

// const observable$ = ExampleHotObservable.testHotObservable();

// observable$.subscribe((data) => console.log(data.screenX, data.screenY));

// import { ExampleSubjects } from './3-subjects';

// ExampleSubjects.testReplaySubject();

import { ExampleOperators } from './4-operators';

ExampleOperators.testFilterOperator();
