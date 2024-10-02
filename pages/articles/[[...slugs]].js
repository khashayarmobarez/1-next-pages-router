import { useRouter } from 'next/router';

// the second braket on the files name is for when the slugs are empty and its only for exp: /articles (works instead of index.js)
// /articles/khashayar-mobarez/1394/train/4/what-is-react
const Articles = () => {

    const router = useRouter()
    const slugs = router.query.slugs || []

    if(slugs.length > 1) {
        return <h2>testing slugs {slugs[0]} - {slugs[1]} and {slugs[2]}</h2>
    }

    return (
        <h1>
            articles
        </h1>
    );
};

export default Articles;