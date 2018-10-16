import { animate,
state,
style,
transition,
trigger } from '@angular/animations';

export function routerTransition(){
    return slideToLeft();
}

export function routerTransitionRight(){
    return slideToRight();
}

export function routerTransitionDown(){
    return slideToBottom();
}

export function slideToLeft(){
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
    transition(':enter', [
        style({ transform: 'translateX(100%)'}),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0%)'}),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)'}))
    ])
    ]);
}

    export function slideToRight(){
        return trigger('routerTransitionRight', [
            state('void', style({})),
            state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateX(-100%)'}),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(-100%)'}),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)'}))
        ])
        ]);
    }

    export function slideToBottom(){
        return trigger('routerTransitionDown', [
            state('void', style({})),
            state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateY(-80%)'}),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)'}),
            animate('0.5s ease-in-out', style({ transform: 'translateY(100%)'}))
        ])
        ]);
    }