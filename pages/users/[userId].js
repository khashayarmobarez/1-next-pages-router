import { useRouter } from 'next/router'

const User = () => {

    // you can access alot of data using Router
    const router = useRouter()
    const { id } = router.query.userId

    return (
        <div>
            user {id}
        </div>
    );
};

export default User;