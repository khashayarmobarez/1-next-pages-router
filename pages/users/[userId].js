import { useRouter } from 'next/router'

const User = () => {

    // you can access alot of data using Router
    const router = useRouter()
    const { userId } = router.query

    console.log(router)

    return (
        <div>
            user {userId}
        </div>
    );
};

export default User;