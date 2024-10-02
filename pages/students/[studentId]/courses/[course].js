import { useRouter } from "next/router";

const CourseDetails = () => {
    
    const router = useRouter()
    const { studentId, course } = router.query
    console.log(router)

    return (
        <div>
            CourseDetails for {studentId} and course {course}
        </div>
    );
};

export default CourseDetails;