// Static Members

// class WebDeveloper extends Developer {
//     static jobDescription: string = 'Build Cool Things!';

//     static logFavoriteProtocol() {
//         console.log('HTTPS, of course!');
//     }

//     logJobDescription(): void {
//         console.log(WebDeveloper.jobDescription); // no need to use this keyword
//     }
// }

// WebDeveloper.logFavoriteProtocol();

// except static key word seems all same, 

// Constructors

class Developer {
    constructor() {
        console.group('sth sth sth');
    }
}


class WebDeveloper extends Developer {
    readonly favoriteEditor: string;

    constructor(editor: string) {
        super(); // Calling super is how you call the parent classes constructor from a child class
        this.favoriteEditor = editor;
    }
}
// if your class extends some other class and your class has a constructor you required a call SUPER()!!
