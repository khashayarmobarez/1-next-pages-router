import Link from "next/link";

const users = [
    {id:1, name:'khashayar', age: 25},
    {id:2, name:'ali', age: 30},
    {id:3, name:'reza', age: 35},
];

const index = () => {
    return (
        <div style={{display: 'flex' , flexDirection: 'column'}}>
            <h1>Users List</h1>
            {
                users.map((userData) => <Link href={`/users/${userData.id}`} key={userData.id} >{userData.name} - {userData.age}</Link>)
            }
        </div>
    );
};

export default index;