const data = [
    {name: "abc", email: "abc@gmail.com"},
    {name: "abc1", email: "abc1@gmail.com"},
    {name: "abc2", email: "abc2@gmail.com"},
    {name: "abc3", email: "abc3@gmail.com"}
];

const x = [1,2,3,4].map(e => e * 2);
console.log(x);

export default function ListComponent() {
    return (
        <div>
            {
                data.map((element) => {
                    const fullName = element.name + "a";
                     return <div>
                        <h3>{fullName}</h3>
                        <h3>{element.name}</h3>
                        <h3>{element.email}</h3>
                    </div>
                })
            }
        </div>
    )
}