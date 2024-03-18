import { from } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';

export class ExampleOperators {
    static testFilterOperator() {
        const observable$ = from([1, 4, -20, 8, 64, 9]);

        observable$
            .pipe(
                filter((number) => number % 2 === 0),
                map((number) => number ** 2)
            )
            .subscribe((number) => console.log(number));

        const observable2$ = from(['jeremy', 'nicolle']);

        observable2$.pipe(map((name) => name.toUpperCase())).subscribe((name) => console.log(name));

        const observable3$ = from([
            {
                email: 'jeremysandoval@gmail.com',
                id: 1,
                nombre: 'Jeremy',
            },
            {
                email: 'nicolle@gmail.com',
                id: 2,
                nombre: 'Nicolle',
            },
        ]);

        observable3$.pipe(
            pluck('email'),
            map((email) => email.toUpperCase())
        ).subscribe(
            email => console.log(email)
        )
    }
}
