import { Observable } from 'rxjs';

export class ExampleCreate {
    static createObservableWithNumbers() {
        // Un observable es un flujo de eventos en el tiempo
        const observable$ = Observable.create((observer) => {
            // observer.next(1); // Evento 1
            // observer.next(2); // Evento 2
            // observer.next(3); // Evento 3
            // observer.complete(); // Evento 4

            let number = 1;
            setInterval(() => {
                try {
                    observer.next(number);
                    number = number + 1;

                    if (number > 5) {
                        throw new Error();
                    }
                } catch (e) {
                    observer.complete();
                }
            }, 1000);
        });

        return observable$;
    }

    static createObservableWithPasteles() {
        const pastelero$ = Observable.create((observer) => {
            observer.next('Pastel de chocolate');
            observer.next('Pastel de vainilla');
            observer.next('Pastel de manzana');
            observer.next('Chocoton');
            observer.complete();
        });

        return pastelero$;
    }
}
