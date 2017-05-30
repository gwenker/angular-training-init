export class Task {
    id: number;
    name: string;
    selected: boolean;

    constructor(name: string, selected?: boolean) {
        this.name = name;
        this.selected = selected;
    }
}