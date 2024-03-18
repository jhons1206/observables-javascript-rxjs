import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

export class ExampleSubjects {

    static testSubject() {
        const subject$ = new Subject();

        let observer1$ = subject$.subscribe((data) => console.log('Observer 1', data));

        subject$.next(1);
        subject$.next(2);

        let observer2$ = subject$.subscribe(
            (data) => console.log('---> Observer 2', data),
            (error) => console.error(error),
            () => console.log('Observer 2 completed')
        );

        subject$.next(3);
        observer2$.unsubscribe();
        subject$.next(4);
        subject$.complete();
    }

    static testBehaviorSubject() {
        const subject$ = new BehaviorSubject();

        let observer1$ = subject$.subscribe((data) => console.log('Observer 1 receives: ', data));

        subject$.next(1);
        subject$.next(2);

        let observer2$ = subject$.subscribe(
            (data) => console.log('---> Observer 2 receives: ', data),
            (error) => console.error(error),
            () => console.log('Observer 2 completed')
        );

        subject$.next(3);
        observer2$.unsubscribe();
        subject$.next(4);
        subject$.complete();
    }

    static testReplaySubject() {
        const subject$ = new ReplaySubject(3);

        let observer1$ = subject$.subscribe((data) => console.log('Observer 1 receives: ', data));

        subject$.next(-3);
        subject$.next(-2);
        subject$.next(-1);

        subject$.next(0);
        subject$.next(1);
        subject$.next(2);

        let observer2$ = subject$.subscribe(
            (data) => console.log('---> Observer 2 receives: ', data),
            (error) => console.error(error),
            () => console.log('Observer 2 completed')
        );

        subject$.next(3);
        observer2$.unsubscribe();
        subject$.next(4);
        subject$.complete();
    }
}
