import './index.less';

class HelloWorld {
    private _text: string;

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    public init(): void {
        const el = document.createElement('div');
        el.innerHTML = this.text;
        document.querySelector('body').appendChild(el);
    }
}

const helloWorld = new HelloWorld();

helloWorld.text = 'Hello world!';
helloWorld.init();
