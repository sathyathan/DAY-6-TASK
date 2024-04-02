/*a.class Movie
{
    constructor(title,studio,rating)
    {
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
}
const obj=new Movie("casino royale","eon productions","PG13");
console.log(obj.title,obj.studio,obj.rating,);*/

//b.
/*class Movie
{
    constructor(title,studio,rating="PG")
    {
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
}
const obj=new Movie("casino royale","eon productions","7.2");
const obj1=new Movie("vikram","eon production")
console.log(obj1.title,obj1.studio,obj1.rating);*/

//c.

class Movie
{
    constructor(title,studio,rating="PG")
    {
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
      static getPG(movies)
  {
        return movies.filter(Movie=>Movie.rating==="PG")
  }}
 const object =new Movie("leo","7 star","7.2");
 const movies=
       [new Movie("casino royale","eon productions","9"),
       new Movie("vikram","eon production"),
       new Movie("leo","rayalo"),
       new Movie("I","eon","7"),
       new Movie("casino","eon")];  
       const pgMovies=Movie.getPG(movies) ;
       console.log(pgMovies) ;     
    
          

//d.
/*class Movie
{
    constructor(title,studio,rating)
    {
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
}
const obj=new Movie("casino royale","eon productions","PG13");
console.log(obj.title,obj.studio,obj.rating,);*/

//TASK 2(CIRCLE)
/*class Circle
{
    constructor(radius,color)
        {
            this.radius=radius;
            this.color=color;
        }
        get Radius()
        {
            return this.radius;
        }
        set Radius(n)
        {
            this.radius=n;
        }
        get Color()
        {
            return this.color;
        }
        set Color(c)
        {
            this.color=c;
        }
        get tostring()
       {
        return `"circle[radius=${this.radius},color=${this.color}]"`
       }
       get area()
       {
       return Math.PI*Math.pow(this.radius,2);

       }
       get circumference()
       {
        return 2*Math.PI(this.radius);
       }

    }
const obj=new Circle(1.0,"red");
console.log(obj.radius);
console.log(obj.color);
console.log(obj.tostring);
console.log(obj.area);
console.log(obj.circumference);*/

//TASK 3 person details
/*
class Person
{
    constructor(name,age,gender,materialstatus,contact,email)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.materialstatus=materialstatus;
        this.contact=contact;
        this.email=email;
    }
}
const obj = new Person("sathya","28","female","married","9786361262","sathyathangavel7@gmail.com");
const obj1 = new Person("dhanvika","3","female","unmarried","7010784735","karthikprabhu@gmail.com");
console.log(obj1.age,obj1.contact,obj1.gender);
*/

//TASK 4 Uber price
/*class Uberprice
{
    constructor (kilometer,price)
    {
        this.kilometer=kilometer;
        this.price=price;
    }
    set Kilometer(m)
        {
            this.kilometer=m;
        }
        get Price()
        {
            return this.price;
        }
    
    }
    const obj=new Uberprice("100","5");
    console.log(obj.kilometer*obj.price);*/
    






