// export const add = (num1, num2) => {
//     return num1 + num2;
// }

export class Animal {
    constructor(type, legs){
        this.legs=legs;
        this.type=type;
    }

    makeNoise(sound = 'loud sound'){
        console.log(sound);
    }
}