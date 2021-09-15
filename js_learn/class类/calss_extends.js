class Person{
  constructor(skin,language){
      this.skin=skin;
      this.language=language;
  }
  say(){
      console.log('I am a Person')
  }
}

class American extends Person{
  aboutMe(){
      console.log(this.skin+' '+this.language)
  }
}

class Chinese extends Person{
  constructor(skin,language,positon){
      //console.log(this);//在没有调用super之前输出this会报错
      super(skin,language);
      //super();//不给父类构造函数传参，父类的构造数的值为undefined
      console.log(this);
      this.positon=positon;
  }
  aboutMe(){
      console.log(this.x+' '+this.y+' '+this.positon);
  }
  chinesesay(){
      console.log('I am a Chinese')
  }
}

let american = new American('white','English');
let chinese =new Chinese('yellow','chinese','chongqing');
