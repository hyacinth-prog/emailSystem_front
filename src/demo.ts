

function add({ one, two }: { one: number, two: number }): number {
  return one + two;
}

const three = add({ one: 1, two: 2 });

type Lady = { name: string, age: Number };

const xiaoJieJies: Lady[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];


// interface Girl {
//   name: string;
//   age: number;
//   bust: number;
//   waistline?: number;
//   [propname: string]: any;
//   say(): string;
// }

// const girl = {
//   name: "大脚",
//   age: 18,
//   bust: 94,
//   waistline: 21,
//   sex: "女",

//   say() {
//     return "欢迎光临 ，红浪漫洗浴！！";
//   },
// };


// interface Teacher extends Girl {
//   teach(): string;
// }

// const getResume1 = (girl: Teacher) => {
//   console.log(girl.name + "年龄是：" + girl.age);
//   console.log(girl.name + "胸围是：" + girl.bust);
//   girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
//   girl.sex && console.log(girl.name + "性别是：" + girl.sex);
// };


// const getResume = (girl: Girl) => {
//   console.log(girl.name + "年龄是：" + girl.age);
//   console.log(girl.name + "胸围是：" + girl.bust);
//   girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
// };





// class Person {
//     private name:string;
//     public sayHello(){
//         console.log(this.name + 'say Hello')  //此处不报错
//     }
// }
// //-------以下属于类的外部--------
// const person = new Person()
// person.name = 'jspang.com'    //此处报错
// person.sayHello()
// console.log(person.name)  //此处报错




class Person {
    public readonly name :string;
    constructor(name:string ){
        this.name = name;
    }
}

const person = new Person('jspang')
// person._name= '谢广坤'
console.log(person.name)



// class SelectGirl<T> {
//   constructor(private girls: T[]) {}
//   getGirl(index: number): T {
//     return this.girls[index];
//   }
// }

// const selectGirl = new SelectGirl(["大脚", "刘英", "晓红"]);
// const selectGirl = new SelectGirl < string > (["大脚", "刘英", "晓红"]) ;
// console.log(selectGirl.getGirl(1));

interface Girl {
  name: string;
}

class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirl = new SelectGirl([
  { name: "大脚" },
  { name: "刘英" },
  { name: "晓红" },
]);
console.log(selectGirl.getGirl(1));



const dataJson = {
  accessToken: "dsds",
  name:"ds"
}
if (dataJson) {
  console.log(dataJson?.accessToken)

console.log(dataJson?.name ?? "jhjkjhk")
}




